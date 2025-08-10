import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions"

export default async function PostsPage() {
  const session = await getServerSession(authOptions)
  console.log("Session:", session)

  return (
    <div>
      <h1>Posts Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

