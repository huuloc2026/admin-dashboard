import { api } from "../api"
export enum Role_USER {
  ADMIN = "ADMIN",
  SELLER = "SELLER",
  CLIENT = "CLIENT"
}

export enum STATUS_USER {

} 
// Define user types
export interface User {
  id: string
  name: string
  email: string
  password:string
  role: Role_USER
  status: string
  createdAt: string
  updatedAt: string
}

// Response types
export interface UsersResponse {
  data: User[]
  total: number
  page: number
  limit: number
}

export interface UserResponse {
  user: User
}

// Fetch all users with pagination
export async function getUsers(page = 1, limit = 10, search?: string): Promise<UsersResponse> {
  // Build query parameters
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  })

  if (search) {
    params.append("search", search)
  }

  return api.get<UsersResponse>(`/users?${params.toString()}`)
}

// Fetch a single user by ID
export async function getUserById(userId: string): Promise<any> {
  const response = await api.get<UserResponse>(`/users/${userId}`)
  
  return response
}

// Create a new user
export async function createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
  
  const response = await api.post<UserResponse>("/users", userData)
  return response.user
}

// Update an existing user
export async function updateUser(userId: string, userData: Partial<User>): Promise<User> {
  const response = await api.put<UserResponse>(`/users/${userId}`, userData)
  return response.user
}

// Delete a user
export async function deleteUser(userId: string): Promise<void> {
  await api.delete(`/users/${userId}`)
}

