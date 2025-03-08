import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { KEYSTORE } from "@/app/utils/keyStoreSymbol"

export async function POST() {
  try {
    // Clear the auth cookie
    await cookies().delete(KEYSTORE)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

