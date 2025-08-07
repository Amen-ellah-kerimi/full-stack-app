"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
            <p className="text-gray-600 mb-8">You're signed in and ready to create posts.</p>

            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => router.push("/posts")}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
              >
                View Posts
              </button>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Fullstack CRUD App</h1>
        <p className="text-gray-600 mb-8">Sign in to create and manage your posts</p>
        <button
          onClick={() => signIn("github")}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
