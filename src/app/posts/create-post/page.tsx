import PostForm from "@/app/components/PostForm";

export default function CreatePost() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Create a New Post</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share your thoughts, ideas, and experiences with the community.
              Your voice matters and contributes to meaningful discussions.
            </p>
          </div>
          <PostForm />
        </div>
      </div>
    </div>
  );
}

