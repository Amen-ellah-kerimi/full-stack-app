# 🚀 Full Stack App

A modern full-stack web application built with Next.js 15, featuring user authentication, MongoDB database integration, and a responsive design.

## 🌐 Live Demo
**🔗 [Try it live on Vercel](https://full-stack-app-sooty.vercel.app/)**

> 🇫🇷 **Version française disponible** : [README.fr.md](README.fr.md)

## ✨ Features

- **🔐 Authentication**: Secure GitHub OAuth with NextAuth.js
- **📊 Database**: MongoDB integration with Mongoose ODM
- **🎨 Modern UI**: Responsive design with TailwindCSS 4
- **⚡ Performance**: Built with Next.js 15 and React 19
- **🛡️ Type Safety**: Full TypeScript support
- **🔧 Production Ready**: Optimized for Vercel deployment
- **📱 Mobile Friendly**: Responsive design that works on all devices

## 💻 Tech Stack

This full-stack application leverages modern technologies for scalability, security, and performance:

### 🎯 Core Framework
| Technology | Description |
|---|---|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) | Full-stack React framework with App Router and server components |
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) | Modern React 19 with hooks and concurrent features |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) | Type-safe development with comprehensive type checking |

### 🔐 Authentication & Security
| Technology | Description |
|---|---|
| ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white) | Complete authentication solution with OAuth providers |
| ![GitHub](https://img.shields.io/badge/GitHub_OAuth-181717?style=for-the-badge&logo=github&logoColor=white) | Secure GitHub OAuth integration for user authentication |

### 🗄️ Database & ORM
| Technology | Description |
|---|---|
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | NoSQL database for flexible data storage |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | Elegant MongoDB object modeling for Node.js |

### 🎨 Styling & UI
| Technology | Description |
|---|---|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | Utility-first CSS framework for rapid UI development |
| ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) | Modern CSS with custom properties and responsive design |

### 🛠️ Development Tools
| Technology | Description |
|---|---|
| ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) | Code linting for consistent code quality |
| ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white) | TypeScript-first schema validation |

### 🚀 Deployment & Hosting
| Technology | Description |
|---|---|
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Optimized deployment with serverless functions |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | Runtime environment for server-side functionality |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB database (Atlas or local)
- GitHub OAuth App ([Create one here](https://github.com/settings/applications/new))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amen-ellah-kerimi/full-stack-app.git
   cd full-stack-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your configuration:
   ```env
   # MongoDB Database
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/full-stack-app?retryWrites=true&w=majority

   # NextAuth.js Configuration
   NEXTAUTH_SECRET=your-nextauth-secret-here
   NEXTAUTH_URL=http://localhost:3000

   # GitHub OAuth Provider
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | ✅ Yes |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | ✅ Yes |
| `NEXTAUTH_URL` | App URL for NextAuth.js | ✅ Yes |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID | ✅ Yes |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret | ✅ Yes |

### GitHub OAuth Setup

1. **Create GitHub OAuth App**:
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Click "New OAuth App"
   - Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`

2. **Get Credentials**:
   - Copy Client ID and Client Secret
   - Add them to your `.env.local` file

### MongoDB Setup

1. **MongoDB Atlas** (Recommended):
   - Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Get connection string and add to `MONGODB_URI`

2. **Local MongoDB**:
   - Install MongoDB locally
   - Use connection string: `mongodb://localhost:27017/full-stack-app`

## 🚀 Deployment

### Production Validation

Before deploying, run the production validation script to ensure everything is configured correctly:

```bash
npm run validate:prod
```

This script checks:
- ✅ Required environment variables (MONGODB_URI, NEXTAUTH_SECRET, GitHub OAuth)
- ✅ All required files exist
- ✅ Dependencies are installed
- ✅ Project builds successfully
- ✅ Database connection works
- ✅ API routes are properly configured
- ✅ NextAuth configuration is complete

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
     - `NEXTAUTH_URL`: Your production URL (e.g., `https://your-app.vercel.app`)
     - `GITHUB_CLIENT_ID`: Your GitHub OAuth client ID
     - `GITHUB_CLIENT_SECRET`: Your GitHub OAuth client secret
   - Deploy!

3. **Update GitHub OAuth**
   - Update Authorization callback URL to: `https://your-app.vercel.app/api/auth/callback/github`

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `.next` folder
- **Railway**: Connect your GitHub repo and add environment variables
- **DigitalOcean**: Use App Platform with automatic GitHub integration

## 🛠️ Development

### Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/  # NextAuth.js API routes
│   │   └── debug/               # Debug API route
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── lib/
│   ├── authOptions.ts           # NextAuth.js configuration
│   ├── auth.ts                  # Authentication utilities
│   └── mongoose.ts              # MongoDB connection
├── models/
│   └── User.ts                  # User model
├── schemas/                     # Zod validation schemas
└── types/                       # TypeScript type definitions
```

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication**: NextAuth.js with GitHub OAuth
- **Database**: MongoDB with Mongoose ODM
- **Styling**: TailwindCSS 4
- **Language**: TypeScript
- **Validation**: Zod
- **Deployment**: Vercel-ready

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run validate:prod # Validate production readiness
```

## 🐛 Troubleshooting

### Common Issues

#### "MongooseError: Operation buffering timed out"
- **Solution**: Check your MongoDB connection string
- **Check**: Ensure your IP is whitelisted in MongoDB Atlas

#### "NextAuth.js: Missing secret"
- **Solution**: Add `NEXTAUTH_SECRET` to your environment variables
- **Generate**: Use `openssl rand -base64 32` to generate a secret

#### "GitHub OAuth Error"
- **Solution**: Verify your GitHub OAuth app configuration
- **Check**: Ensure callback URL matches your deployment URL

#### "Cannot connect to MongoDB"
- **Solution**: Verify your `MONGODB_URI` is correct
- **Check**: Test connection with MongoDB Compass or similar tool

## 🔒 Security & Performance

- **Environment Variables**: Never commit secrets to version control
- **MongoDB Connection**: Uses connection pooling for optimal performance
- **Authentication**: Secure JWT-based sessions with NextAuth.js
- **Type Safety**: Full TypeScript coverage for better code quality

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

**Built with ❤️ using Next.js 15, React 19, MongoDB, and NextAuth.js**
