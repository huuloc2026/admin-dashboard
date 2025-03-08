import { type NextRequest, NextResponse } from "next/server"
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if user already exists
    if (users.some((u) => u.email === email)) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Create new user
    const newUser = {
      id: String(users.length + 1),
      name,
      email,
      password,
      role: "User",
    }

    // In a real app, we would save the user to a database
    // For this demo, we'll just simulate it
    users.push(newUser)

    // Set a cookie to simulate session
    cookies().set("auth-token", newUser.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

