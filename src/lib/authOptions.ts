import GithubProvider from "next-auth/providers/github";
import { User } from "@/models/User";
import { connectDB } from "@/lib/mongoose";
export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID! ,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async signIn({user}: {user: any}){
            await connectDB();
            const existingUser = await User.findOne({email: user.email});
            if(!existingUser){
                await User.create({email: user.email, name: user.name, image: user.image});
            }
            return true;
        },
        async jwt( /* eslint-disable-line @typescript-eslint/no-explicit-any */ { token, user }: any) {
            if (user) {
              token.id = user.id;
            }
            return token;
        },
        async session( /* eslint-disable-line @typescript-eslint/no-explicit-any */ {session, token}: any){
            if(token?.id){
                session.user.id = token.id as string;
            } 
            return session;
        },
    },
    session: {
        strategy: "jwt" as const ,
    },
};
