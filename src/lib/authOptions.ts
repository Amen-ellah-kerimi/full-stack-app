import GithubProvider from "next-auth/providers/github";
import { User } from "@/models/User";
import { connectDB } from "@/lib/mongoose";

// Validate required environment variables
const requiredEnvVars = {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  MONGODB_URI: process.env.MONGODB_URI,
};

// Check for missing environment variables
const missingVars = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  throw new Error(`❌ Missing required environment variables: ${missingVars.join(', ')}`);
}

export const authOptions = {
    debug: process.env.NODE_ENV === 'development' || process.env.NEXTAUTH_DEBUG === 'true',
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async signIn({user}: {user: any}){
            try {
                console.log('🔐 SignIn callback triggered for user:', user.email);
                await connectDB();
                const existingUser = await User.findOne({email: user.email});
                if(!existingUser){
                    console.log('👤 Creating new user:', user.email);
                    await User.create({email: user.email, name: user.name, image: user.image});
                } else {
                    console.log('👤 Existing user found:', user.email);
                }
                return true;
            } catch (error) {
                console.error('❌ SignIn callback error:', error);
                // Return false to deny sign in, or true to allow despite error
                return false;
            }
        },
        async jwt( /* eslint-disable-line @typescript-eslint/no-explicit-any */ { token, user }: any) {
            try {
                if (user) {
                    console.log('🔑 JWT callback - adding user ID to token');
                    token.id = user.id;
                }
                return token;
            } catch (error) {
                console.error('❌ JWT callback error:', error);
                return token;
            }
        },
        async session( /* eslint-disable-line @typescript-eslint/no-explicit-any */ {session, token}: any){
            try {
                if(token?.id){
                    session.user.id = token.id as string;
                }
                console.log('📋 Session callback - session created for:', session.user?.email);
                return session;
            } catch (error) {
                console.error('❌ Session callback error:', error);
                return session;
            }
        },
    },
    session: {
        strategy: "jwt" as const,
    },
    pages: {
        signIn: '/login',
        error: '/auth/error', // Error code passed in query string as ?error=
    },
};
