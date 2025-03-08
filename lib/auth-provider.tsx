"use client"

import type React from "react"

import { useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { useAuthStore } from "@/lib/auth-store"
import { getCurrentUser } from "@/lib/auth-actions"
import { getAuthToken } from "./cookies"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setLoading } = useAuthStore()

  useEffect(() => {
    async function loadUser() {
      try {
        // Check if we have a token in cookies
        const token = getAuthToken()

        if (token) {
          // If we have a token, try to get the current user
          const user = await getCurrentUser()
          setUser(user)
        } else {
          // No token, no user
          setUser(null)
        }
      } catch (error) {
        console.error("Failed to load user:", error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [setUser, setLoading])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

