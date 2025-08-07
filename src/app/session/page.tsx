import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

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

