import { NextResponse } from 'next/server';
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        console.log("API Session:", session);
        return NextResponse.json({session});
    } catch (err: unknown){
        if(err instanceof Error){
            return NextResponse.json({
                okk: false,
                error: err.message,
                stack: err.stack,
            }, {status: 500});
        }

        // Fallback
        return NextResponse.json({
            ok: false,
            error: "Unknown Error",
        }, { status: 500});

    }
}

