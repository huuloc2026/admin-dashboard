import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { KEYSTORE } from "@/app/utils/keyStoreSymbol"

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

export async function GET(request: NextRequest) {
  try {
    // Simulate API call delay
    
    // const token = (await cookies())
    // console.log(token);

    // if (!token) {
    //   return NextResponse.json(null)
    // }

    // const user = "oke"

    // if (!user) {
    //   return NextResponse.json(null)
    // }

    // // Return user without password
    // const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(users[0])
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

