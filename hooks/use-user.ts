"use client"

import { useState, useEffect, useCallback } from "react"
import { getUserById, updateUser, deleteUser, type User } from "@/lib/api/users"
import { useToast } from "./use-toast"


export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchUser = useCallback(async () => {
    if (!userId) return

    setIsLoading(true)
    setError(null)

    try {
      const userData = await getUserById(userId)
    
      setUser(userData)
    } catch (err) {
      console.error("Error fetching user:", err)
      setError("Failed to fetch user details. Please try again.")
      toast({
        title: "Error",
        description: "Failed to fetch user details. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [userId, toast])

  // Fetch user when userId changes
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  // Update user
  const updateUserData = async (data: Partial<User>) => {
    if (!userId) return null

    try {
      const updatedUser = await updateUser(userId, data)
      setUser(updatedUser)
      toast({
        title: "Success",
        description: "User updated successfully.",
      })
      return updatedUser
    } catch (err) {
      console.error("Error updating user:", err)
      toast({
        title: "Error",
        description: "Failed to update user. Please try again.",
        variant: "destructive",
      })
      return null
    }
  }

  // Delete user
  const removeUser = async () => {
    if (!userId) return false

    try {
      await deleteUser(userId)
      toast({
        title: "Success",
        description: "User deleted successfully.",
      })
      return true
    } catch (err) {
      console.error("Error deleting user:", err)
      toast({
        title: "Error",
        description: "Failed to delete user. Please try again.",
        variant: "destructive",
      })
      return false
    }
  }

  return {
    user,
    isLoading,
    error,
    updateUser: updateUserData,
    deleteUser: removeUser,
    refetch: fetchUser,
  }
}

