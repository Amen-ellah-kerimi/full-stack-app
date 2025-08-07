"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch("/api/posts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setPosts(posts.filter(post => post._id !== id));
        alert("✅ Post deleted!");
      } else {
        alert("❌ Failed to delete post");
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
      alert("❌ Failed to delete post");
    }
  };

  useEffect(() => {
    if (session) {
      fetchPosts();
    }
  }, [session]);

  if (!session) {
    return (
      <div className="text-center py-8">
        <p>Please sign in to view posts.</p>
        <a href="/login" className="text-blue-500 hover:underline">
          Sign In
        </a>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 mb-4">No posts found.</p>
        <a
          href="/posts/create-post"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Your First Post
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post._id}
          className="border p-4 rounded shadow-sm bg-white"
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <button
              onClick={() => deletePost(post._id)}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              Delete
            </button>
          </div>
          <p className="text-gray-700 mb-2">{post.content}</p>
          <div className="text-sm text-gray-500">
            <p>By: {post.author}</p>
            <p>Created: {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
