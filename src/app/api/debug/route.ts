import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Check environment variables (without exposing secrets)
        const envCheck = {
            NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
            NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'NOT_SET',
            GITHUB_CLIENT_ID: !!process.env.GITHUB_CLIENT_ID,
            GITHUB_CLIENT_SECRET: !!process.env.GITHUB_CLIENT_SECRET,
            MONGODB_URI: !!process.env.MONGODB_URI,
            NODE_ENV: process.env.NODE_ENV,
            VERCEL: !!process.env.VERCEL,
            VERCEL_URL: process.env.VERCEL_URL || 'NOT_SET',
        };

        // Check if we're in production and NEXTAUTH_URL is set correctly
        const isProduction = process.env.NODE_ENV === 'production';
        const hasCorrectUrl = process.env.NEXTAUTH_URL && 
                             process.env.NEXTAUTH_URL.startsWith('https://');

        const warnings = [];
        
        if (isProduction && !hasCorrectUrl) {
            warnings.push('NEXTAUTH_URL should be set to your production domain in production');
        }
        
        if (!process.env.NEXTAUTH_SECRET) {
            warnings.push('NEXTAUTH_SECRET is missing');
        }
        
        if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
            warnings.push('GitHub OAuth credentials are missing');
        }
        
        if (!process.env.MONGODB_URI) {
            warnings.push('MONGODB_URI is missing');
        }

        return NextResponse.json({
            status: 'ok',
            environment: envCheck,
            warnings: warnings.length > 0 ? warnings : null,
            timestamp: new Date().toISOString(),
        });
        
    } catch (error) {
        console.error('Debug API error:', error);
        return NextResponse.json({
            status: 'error',
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString(),
        }, { status: 500 });
    }
}
