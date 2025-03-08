"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { createProduct } from "@/lib/api/products"
import { useToast } from "@/hooks/use-toast"
import { CategoryName, ProductCategory } from "@/app/dashboard/products/constants/product.constant"

interface CreateProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onProductCreated?: () => void
}

export function CreateProductDialog({ open, onOpenChange, onProductCreated }: CreateProductDialogProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [stock, setStock] = useState("")
  const [price, setPrice] = useState("")
  const [categoryId, setCategoryId] = useState(ProductCategory.ELECTRONICS)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await createProduct({
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        categoryId,
        status: "ACTIVE",
      })

      toast({
        title: "Product created",
        description: "The product has been added successfully.",
      })

      // Reset form fields
      setName("")
      setDescription("")
      setStock("")
      setPrice("")
      setCategoryId(ProductCategory.ELECTRONICS)

      // Close dialog and notify parent
      if (onProductCreated) {
        onProductCreated()
      }
    } catch (error) {
      console.error("Error creating product:", error)
      toast({
        title: "Error",
        description: "Failed to create product. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>Fill in the details to add a new product to the system.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Product Description</Label>
              <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stock">Stock</Label>
              <Input id="stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select value={categoryId} onValueChange={(value) => setCategoryId(value as ProductCategory)}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ProductCategory.CLOTHING}>{CategoryName.X001}</SelectItem>
                  <SelectItem value={ProductCategory.ELECTRONICS}>{CategoryName.X002}</SelectItem>
                  <SelectItem value={ProductCategory.BOOKS}>{CategoryName.X003}</SelectItem>
                  <SelectItem value={ProductCategory["HOME APPLIANCES"]}>{CategoryName.X004}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
