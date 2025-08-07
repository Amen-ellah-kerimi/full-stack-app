import PostsList from "@/app/components/PostsList";

export const dynamic = "force-dynamic";

export default function PostsPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <a
          href="/posts/create-post"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Post
        </a>
      </div>
      <PostsList />
    </div>
  );
}

