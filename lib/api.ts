import { getAuthToken } from "./cookies"



const API_BASE_URL = "http://localhost:8386/v1/api"

// Base fetch function that automatically includes auth token
export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`

  // Get token from cookie
  const token = getAuthToken()

  // Prepare headers
  const headers = new Headers(options.headers)

  // Set content type if not already set
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json")
  }

  // Add authorization header if token exists
  if (token) {
    headers.set("Authorization", `Bearer ${token}`)
  }

  // Make the request
  const response = await fetch(url, {
    ...options,
    headers,
    credentials: "include", // Include cookies in cross-origin requests
  })

  // Handle non-2xx responses
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    const error = new Error(errorData.message || `API error: ${response.status} ${response.statusText}`)

    // Add response details to the error
    ;(error as any).status = response.status
    ;(error as any).data = errorData

    throw error
  }

  // Parse JSON response
  if (response.headers.get("Content-Type")?.includes("application/json")) {
    return response.json()
  }

  // Return raw response for non-JSON content
  return response as any
}

// Convenience methods for common HTTP methods
export const api = {
  get: <T>(endpoint: string, options?: RequestInit) => 
    fetchApi<T>(endpoint, { ...options, method: 'GET' }),
    
  post: <T>(endpoint: string, data?: any, options?: RequestInit) => 
    fetchApi<T>(endpoint, { 
      ...options, 
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),
    
  put: <T>(endpoint: string, data?: any, options?: RequestInit) => 
    fetchApi<T>(endpoint, { 
      ...options, 
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),
    
  patch: <T>(endpoint: string, data?: any, options?: RequestInit) => 
    fetchApi<T>(endpoint, { 
      ...options, 
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    }),
    
  delete: <T>(endpoint: string, options?: RequestInit) => 
    fetchApi<T>(endpoint, { ...options, method: 'DELETE' }),
};

