import PostForm from "@/app/components/PostForm";

export default function CreatePost() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Create a New Post</h1>
        <PostForm />
      </div>
    </div>
  );
}

