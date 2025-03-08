
import { cookies } from "next/headers"

// Mock users database - in a real app, this would be in a database
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "admin@example.com",
    password: "password123",
    role: "Admin",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password123",
    role: "Editor",
  },
]

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const token = res.result.accessToken;
    return request
    alert(token);
    
    // // Find user with matching credentials
    // const user = users.find((u) => u.email === email && u.password === password)

    // if (!user) {
    //   return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    // }

    // // Set a cookie to simulate session
    // await cookies().set("auth-token", user.id, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   maxAge: 60 * 60 * 24 * 7, // 1 week
    //   path: "/",
    // })

    // // Return user without password
    // const { password: _, ...userWithoutPassword } = user

    return Response.json(token)
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}

