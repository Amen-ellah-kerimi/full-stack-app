import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { SessionStrategy } from "next-auth";
import { User } from "@/models/User";
import { connectDB } from "@/lib/mongoose";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({user, account, profile}){
            await connectDB();
            const existingUser = await User.findOne({email: user.email});
            if(!existingUser){
                await User.create({email: user.email, name: user.name, image: user.image});
            }
            return true;
        },

        async jwt({token, user}){
            if(user){
                token.id = user.id;
            }
            return token;
        },

        async session({session, token}){
            if(token?.id) session.user.id = token.id;
            return session;
        },
    },
    session: {
        strategy: "jwt" as SessionStrategy,
    },  
};

const handler = NextAuth(authOptions);

export { handler as GET , handler as POST };


