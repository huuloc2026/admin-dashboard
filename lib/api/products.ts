import { api } from "../api"

// Define product types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imageUrl: string
  categoryId: string
  status:string
  createdAt: string
  updatedAt: string
}

// Response types
export interface ProductsResponse {
  data: Product[]
  total: number
  page: number
  limit: number
}

export interface ProductResponse {
  product: Product
}

// Fetch all products with pagination
export async function getProducts(page = 1, limit = 10, search?: string): Promise<ProductsResponse> {
  // Build query parameters
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  })

  if (search) {
    params.append("search", search)
  }

  return api.get<ProductsResponse>(`/products?${params.toString()}`)
}

// Fetch a single product by ID
export async function getProductById(productId: string): Promise<any> {
  const response = await api.get<ProductResponse>(`/products/${productId}`)
  return response
}

// Create a new product
export async function createProduct(productData: Partial<Product>): Promise<Product> {
  const response = await api.post<ProductResponse>("/products", productData)
  return response.product
}

// Update an existing product
export async function updateProduct(productId: string, productData: Partial<Product>): Promise<Product> {
  const response = await api.put<ProductResponse>(`/products/${productId}`, productData)
  return response.product
}

// Delete a product
export async function deleteProduct(productId: string): Promise<void> {
  await api.delete(`/products/${productId}`)
}
