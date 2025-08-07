import { NextResponse } from 'next/server';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        console.log("API Session:", session);
        return NextResponse.json({session});
    } catch (err: any){
        return NextResponse.json({
            ok: false,
            error: err.message,
            stack: err.stack,
        }, { status: 500});
    }
}

