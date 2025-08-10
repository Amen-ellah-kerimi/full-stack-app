import { connectDB } from "@/lib/mongoose";
import { Post } from "@/models/Post";
import { requireAuth } from "@/lib/auth";
import {postSchema} from "@/schemas/postSchema";

export async function GET(){
  await connectDB();
  await requireAuth();

  try {
    const posts = await Post.find();
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {"Content-Type": "application/json"}
    });


  } catch{
    return new Response(JSON.stringify({error: "Failed to fetch posts"}), {status: 500});
  }
}

export async function POST(req: Request) {
  await connectDB();
  const session = await requireAuth();
  const authorName = session.user.name ?? "Unknown Author";
  try {
    const body = await req.json();
    const parsed = postSchema.safeParse(body);
    if (!parsed.success){
      return new Response(JSON.stringify(parsed.error.format()), {status: 400});
    }
    const postData = {
      ...parsed.data,
      author: authorName,
    }
    const post = await Post.create(postData);
    return new Response(JSON.stringify(post), {
      status: 201,
      headers: {"Content-Type": "application/json"},
    });
  } catch{
    return new Response(JSON.stringify({error: "Failed to create post"}), {status:500});
  }
}

export async function DELETE(req: Request) {
  await connectDB();
  const session = await requireAuth();

  try {
    const url = new URL(req.url);
    const postId = url.searchParams.get("id");
    if (!postId) {
      return new Response(JSON.stringify({ error: "Post ID is required" }), { status: 400 });
    }

    // Check if the post belongs to the user before deleting
    const post = await Post.findById(postId);
    if (!post) {
      return new Response(JSON.stringify({ error: "Post not found" }), { status: 404 });
    }
    if (post.author !== session.user.name) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
    }

    await Post.findByIdAndDelete(postId);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to delete post" }), { status: 500 });
  }
}
