import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function requireAuth(req: Request){
    const session = await getServerSession(authOptions);

    if(!session) throw new Error("Unauthorized");
    return session;
}
    
