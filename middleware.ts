import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { AUTH_TOKEN_NAME } from "./lib/cookies"

export function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/login" || path === "/register" || path === "/"

  // Get the token from cookies
  const token = request.cookies.get(AUTH_TOKEN_NAME)?.value

  // If the user is not authenticated and trying to access a protected route
  if (!isPublicPath && !token) {
    // Redirect to login page
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If the user is authenticated and trying to access login or register page
  if (isPublicPath && token && (path === "/login" || path === "/register")) {
    // Redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// Configure middleware to run on specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
}

