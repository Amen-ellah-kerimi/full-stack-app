import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import type { Session } from "next-auth";


export async function requireAuth(): Promise<Session>{
    const session = await getServerSession(authOptions);

    if(!session) throw new Error("Unauthorized");
    return session as Session;
}
    
