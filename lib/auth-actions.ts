"use client"

import type { User } from "@/lib/auth-store"
import { api } from "./api"
import { setAuthToken, removeAuthToken } from "./cookies"

// Type definitions for API responses
type LoginResponse = {
  user: User
  accessToken: string
}

type ResponseProfile = {
  id:string,
  name:string,
  email:string,
  role:string,
}

type RegisterResponse = {
  user: User
  accessToken: string
}

export async function login(email: string, password: string): Promise<User> {
  try {
    // Call login API
    const data = await api.post<LoginResponse>("/auth/login", { email, password })

    // Store token in cookie
    setAuthToken(data.accessToken)

    // Return user data
    return data.user
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

export async function register(name: string, email: string, password: string): Promise<User> {
  try {
    // Call register API
    const data = await api.post<RegisterResponse>("/auth/register", {
      name,
      email,
      password,
    })

    // Store token in cookie
    // setAuthToken(data.accessToken)

    // Return user data
    return data.user
  } catch (error) {
    console.error("Registration error:", error)
    throw error
  }
}

export async function logout(): Promise<void> {
  try {
    // Call logout API
    await api.post("/auth/logout")
  } catch (error) {
    console.error("Logout error:", error)
  } finally {
    // Always remove token from cookie
    removeAuthToken()
  }
}

export async function getCurrentUser(): Promise<any> {
  try {
    // Call current user API
    const user = await api.get<ResponseProfile>("/users/me")
    return user
  } catch (error) {
    // If unauthorized or other error, return null
    console.error("Get current user error:", error)
    return null
  }
}

