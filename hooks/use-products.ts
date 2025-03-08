"use client"

import { useState, useEffect, useCallback } from "react"
import { getProducts, type Product } from "@/lib/api/products"
import { useToast } from "./use-toast"

interface UseProductsOptions {
  initialPage?: number
  initialLimit?: number
  initialSearch?: string
}

export function useProducts({ initialPage = 1, initialLimit = 10, initialSearch = "" }: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(initialPage)
  const [limit, setLimit] = useState(initialLimit)
  const [search, setSearch] = useState(initialSearch)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await getProducts(page, limit, search)
      
      setProducts(response.data)
      setTotal(response.total)
    } catch (err) {
      console.error("Error fetching products:", err)
      setError("Failed to fetch products. Please try again.")
      toast({
        title: "Error",
        description: "Failed to fetch products. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [page, limit, search, toast])

  // Fetch products when dependencies change
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

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
    products,
    total,
    page,
    limit,
    search,
    isLoading,
    error,
    handleSearch,
    handlePageChange,
    handleLimitChange,
    refetch: fetchProducts,
  }
}
