"use client"

import { useState, useEffect, useCallback } from "react"
import { getProductById, updateProduct, deleteProduct, type Product } from "@/lib/api/products"
import { useToast } from "./use-toast"

export function useProduct(productId: string) {
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchProduct = useCallback(async () => {
    if (!productId) return

    setIsLoading(true)
    setError(null)

    try {
      const productData = await getProductById(productId)
      setProduct(productData)
    } catch (err) {
      console.error("Error fetching product:", err)
      setError("Failed to fetch product details. Please try again.")
      toast({
        title: "Error",
        description: "Failed to fetch product details. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [productId, toast])

  useEffect(() => {
    fetchProduct()
  }, [fetchProduct])

  const updateProductData = async (data: Partial<Product>) => {
    if (!productId) return null

    try {
      const updatedProduct = await updateProduct(productId, data)
      setProduct(updatedProduct)
      toast({
        title: "Success",
        description: "Product updated successfully.",
      })
      return updatedProduct
    } catch (err) {
      console.error("Error updating product:", err)
      toast({
        title: "Error",
        description: "Failed to update product. Please try again.",
        variant: "destructive",
      })
      return null
    }
  }

  const removeProduct = async () => {
    if (!productId) return false

    try {
      await deleteProduct(productId)
      toast({
        title: "Success",
        description: "Product deleted successfully.",
      })
      return true
    } catch (err) {
      console.error("Error deleting product:", err)
      toast({
        title: "Error",
        description: "Failed to delete product. Please try again.",
        variant: "destructive",
      })
      return false
    }
  }

  return {
    product,
    isLoading,
    error,
    updateProduct: updateProductData,
    deleteProduct: removeProduct,
    refetch: fetchProduct,
  }
}
