"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div className="p-4">Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
        <p className="text-gray-600 mb-4">Email: {session.user?.email}</p>
        
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => router.push("/posts")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View All Posts
          </button>
          <button
            onClick={() => router.push("/posts/create-post")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create New Post
          </button>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
