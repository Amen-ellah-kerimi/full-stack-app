import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

async function handler(req, res) {
  try {
    return await NextAuth(req, res, authOptions);
  } catch (error) {
    console.error("NextAuth error:", error);
    throw error;
  }
}

export { handler as GET, handler as POST };
