import { connectDB } from "@/lib/mongoose";
import { Post } from "@/models/Post";
import { requireAuth } from "@/lib/auth";


export async function GET(req: Request) {
  await connectDB();
  await requireAuth(req); 
  const posts = await Post.find();
  return Response.json(posts);
}

export async function POST(req: Request) {
  await connectDB();
  await requireAuth(req); 
  const body = await req.json();
  const post = await Post.create(body);
  return Response.json(post);
}

export async function DELETE(req: Request) {
  await connectDB();
  await requireAuth(req); 
  const { id } = await req.json();
  await Post.findByIdAndDelete(id);
  return Response.json({ success: true });
}

