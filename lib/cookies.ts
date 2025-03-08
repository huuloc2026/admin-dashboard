// Cookie management utilities

import { KEYSTORE } from "@/app/utils/keyStoreSymbol"

// Set a cookie with the given name, value, and options
export function setCookie(
    name: string,
    value: string,
    options: {
      expires?: number // in days
      path?: string
      domain?: string
      secure?: boolean
      httpOnly?: boolean
      sameSite?: "strict" | "lax" | "none"
    } = {},
  ) {
    const {
      expires = 7, // Default to 7 days
      path = "/",
      domain,
      secure = process.env.NODE_ENV === "production",
      sameSite = "strict",
    } = options
  
    // Calculate expiration date
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + expires)
  
    // Build cookie string
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    cookieString += `; expires=${expirationDate.toUTCString()}`
    cookieString += `; path=${path}`
  
    if (domain) {
      cookieString += `; domain=${domain}`
    }
  
    if (secure) {
      cookieString += "; secure"
    }
  
    cookieString += `; samesite=${sameSite}`
  
    // Set the cookie
    document.cookie = cookieString
  }
  
  // Get a cookie by name
  export function getCookie(name: string): string | null {
    const nameEQ = encodeURIComponent(name) + "="
    const cookies = document.cookie.split(";")
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i]
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length)
      }
  
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length))
      }
    }
  
    return null
  }
  
  // Remove a cookie by name
  export function removeCookie(name: string, path = "/") {
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`
  }
  
  // Token-specific functions
  export const AUTH_TOKEN_NAME = KEYSTORE
  
  export function setAuthToken(token: string) {
    setCookie(AUTH_TOKEN_NAME, token, {
      expires: 7, // 7 days
      secure: true,
      sameSite: "strict",
    })
  }
  
  export function getAuthToken(): string | null {
    return getCookie(AUTH_TOKEN_NAME)
  }
  
  export function removeAuthToken() {
    removeCookie(AUTH_TOKEN_NAME)
  }
  
  