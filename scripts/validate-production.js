#!/usr/bin/env node

/**
 * Production Validation Script for Full Stack App
 * Comprehensive validation of all production requirements
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Full Stack App - Production Validation Script\n');

let allPassed = true;
const results = [];

function addResult(category, test, passed, message) {
  results.push({ category, test, passed, message });
  if (!passed) allPassed = false;
}

// 1. Environment Variables Validation
function validateEnvironment() {
  console.log('📋 Validating environment variables...');
  
  // Load environment variables
  try {
    require('dotenv').config();
  } catch (error) {
    // dotenv is optional for this project
  }
  
  const requiredVars = [
    'MONGODB_URI',
    'NEXTAUTH_SECRET',
    'GITHUB_CLIENT_ID',
    'GITHUB_CLIENT_SECRET'
  ];
  
  const optionalVars = [
    'NEXTAUTH_URL',
    'NEXTAUTH_DEBUG',
    'NODE_ENV'
  ];
  
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    addResult('Environment', 'Required Variables', false, `Missing: ${missing.join(', ')}`);
  } else {
    addResult('Environment', 'Required Variables', true, 'All required variables present');
  }
  
  // Validate MongoDB URI format
  const mongoUri = process.env.MONGODB_URI;
  if (mongoUri && (mongoUri.startsWith('mongodb://') || mongoUri.startsWith('mongodb+srv://'))) {
    addResult('Environment', 'MongoDB URI Format', true, 'Valid format');
  } else if (mongoUri) {
    addResult('Environment', 'MongoDB URI Format', false, 'Invalid format - should start with mongodb:// or mongodb+srv://');
  }
  
  // Validate NEXTAUTH_URL format if provided
  const nextAuthUrl = process.env.NEXTAUTH_URL;
  if (nextAuthUrl) {
    try {
      new URL(nextAuthUrl);
      addResult('Environment', 'NextAuth URL Format', true, 'Valid URL format');
    } catch {
      addResult('Environment', 'NextAuth URL Format', false, 'Invalid URL format');
    }
  } else {
    addResult('Environment', 'NextAuth URL Format', true, 'Using default (localhost:3000)');
  }
  
  // Check optional variables
  const presentOptional = optionalVars.filter(varName => process.env[varName]);
  if (presentOptional.length > 0) {
    addResult('Environment', 'Optional Variables', true, `Present: ${presentOptional.join(', ')}`);
  } else {
    addResult('Environment', 'Optional Variables', true, 'Using default values');
  }
}

// 2. File Structure Validation
function validateFileStructure() {
  console.log('📁 Validating file structure...');
  
  const requiredFiles = [
    'src/app/layout.tsx',
    'src/app/page.tsx',
    'src/app/globals.css',
    'src/app/api/auth/[...nextauth]/route.ts',
    'src/app/api/posts/route.ts',
    'src/app/api/debug/route.ts',
    'src/lib/authOptions.ts',
    'src/lib/mongoose.ts',
    'src/models/User.ts',
    'src/models/Post.ts',
    'next.config.ts',
    'tsconfig.json'
  ];
  
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
  
  if (missingFiles.length > 0) {
    addResult('Files', 'Required Files', false, `Missing: ${missingFiles.join(', ')}`);
  } else {
    addResult('Files', 'Required Files', true, 'All required files present');
  }
}

// 3. Dependencies Validation
function validateDependencies() {
  console.log('📦 Validating dependencies...');
  
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  
  const requiredDeps = [
    'mongodb',
    'mongoose',
    'next',
    'next-auth',
    'react',
    'react-dom',
    'zod',
    'typescript'
  ];
  
  const missing = requiredDeps.filter(dep => !dependencies[dep]);
  
  if (missing.length > 0) {
    addResult('Dependencies', 'Required Packages', false, `Missing: ${missing.join(', ')}`);
  } else {
    addResult('Dependencies', 'Required Packages', true, 'All required packages installed');
  }
}

// 4. Build Validation
function validateBuild() {
  console.log('🏗️  Validating build...');
  
  try {
    // Clean previous build
    if (fs.existsSync('.next')) {
      fs.rmSync('.next', { recursive: true, force: true });
    }
    
    // Run build
    execSync('npm run build', { stdio: 'pipe', timeout: 300000 });
    
    if (fs.existsSync('.next')) {
      addResult('Build', 'Build Process', true, 'Build completed successfully');
    } else {
      addResult('Build', 'Build Process', false, 'Build directory not created');
    }
  } catch (error) {
    addResult('Build', 'Build Process', false, `Build failed: ${error.message}`);
  }
}

// 5. Database Connection Validation
async function validateDatabase() {
  console.log('🗄️  Validating database connection...');
  
  if (!process.env.MONGODB_URI) {
    addResult('Database', 'Connection', false, 'MongoDB URI not configured');
    return;
  }
  
  try {
    // Test MongoDB connection
    const mongoose = require('mongoose');
    
    // Set a short timeout for the connection test
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    
    addResult('Database', 'Connection', true, 'MongoDB connection successful');
    
    // Close the connection
    await mongoose.disconnect();
  } catch (error) {
    addResult('Database', 'Connection', false, `Connection failed: ${error.message}`);
  }
}

// 6. API Routes Validation
async function validateApiRoutes() {
  console.log('🌐 Validating API routes...');
  
  const apiRoutes = [
    'src/app/api/auth/[...nextauth]/route.ts',
    'src/app/api/posts/route.ts',
    'src/app/api/debug/route.ts',
    'src/app/api/test/route.ts'
  ];
  
  const missingRoutes = apiRoutes.filter(route => !fs.existsSync(route));
  
  if (missingRoutes.length > 0) {
    addResult('API', 'Route Files', false, `Missing: ${missingRoutes.join(', ')}`);
  } else {
    addResult('API', 'Route Files', true, 'All API route files present');
  }
  
  // Validate NextAuth configuration
  try {
    const authOptionsContent = fs.readFileSync('src/lib/authOptions.ts', 'utf8');
    if (authOptionsContent.includes('GithubProvider') && authOptionsContent.includes('GITHUB_CLIENT_ID')) {
      addResult('API', 'NextAuth Configuration', true, 'NextAuth properly configured with GitHub provider');
    } else {
      addResult('API', 'NextAuth Configuration', false, 'NextAuth configuration incomplete');
    }
  } catch (error) {
    addResult('API', 'NextAuth Configuration', false, `Failed to validate: ${error.message}`);
  }
}

// Print Results
function printResults() {
  console.log('\n📊 Validation Results:\n');
  
  const categories = [...new Set(results.map(r => r.category))];
  
  categories.forEach(category => {
    console.log(`${category}:`);
    const categoryResults = results.filter(r => r.category === category);
    
    categoryResults.forEach(result => {
      const icon = result.passed ? '✅' : '❌';
      console.log(`  ${icon} ${result.test}: ${result.message}`);
    });
    console.log('');
  });
  
  const passed = results.filter(r => r.passed).length;
  const total = results.length;
  
  console.log(`Summary: ${passed}/${total} checks passed\n`);
  
  if (allPassed) {
    console.log('🎉 All validation checks passed!');
    console.log('💡 Your Full Stack App is ready for production deployment');
  } else {
    console.log('❌ Some validation checks failed');
    console.log('💡 Please fix the issues above before deploying to production');
    process.exit(1);
  }
}

// Main validation function
async function runValidation() {
  console.log('Starting comprehensive production validation...\n');
  
  validateEnvironment();
  validateFileStructure();
  validateDependencies();
  validateBuild();
  await validateDatabase();
  await validateApiRoutes();
  
  printResults();
}

// Run validation
runValidation().catch(error => {
  console.error('Validation script failed:', error);
  process.exit(1);
});
