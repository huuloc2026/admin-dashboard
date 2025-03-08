"use client"

import { useState, useEffect, useCallback } from "react"
import { getUsers, type User } from "@/lib/api/users"
import { useToast } from "./use-toast"


interface UseUsersOptions {
  initialPage?: number
  initialLimit?: number
  initialSearch?: string
}

export function useUsers({ initialPage = 1, initialLimit = 10, initialSearch = "" }: UseUsersOptions = {}) {
  const [users, setUsers] = useState<User[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(initialPage)
  const [limit, setLimit] = useState(initialLimit)
  const [search, setSearch] = useState(initialSearch)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchUsers = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await getUsers(page, limit, search)
      
  
      setUsers(response.data)
      setTotal(response.total)
    } catch (err) {
      console.error("Error fetching users:", err)
      setError("Failed to fetch users. Please try again.")
      toast({
        title: "Error",
        description: "Failed to fetch users. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [page, limit, search, toast])

  // Fetch users when dependencies change
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  // Handle search
  const handleSearch = useCallback((searchTerm: string) => {
    setSearch(searchTerm)
    setPage(1) // Reset to first page when searching
  }, [])

  // Handle pagination
  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  // Handle limit change
  const handleLimitChange = useCallback((newLimit: number) => {
    setLimit(newLimit)
    setPage(1) // Reset to first page when changing limit
  }, [])

  return {
    users,
    total,
    page,
    limit,
    search,
    isLoading,
    error,
    handleSearch,
    handlePageChange,
    handleLimitChange,
    refetch: fetchUsers,
  }
}

