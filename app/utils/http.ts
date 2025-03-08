export interface FetchOptions extends RequestInit {
    headers?: Record<string, string>;
    token?: string;
    timeout?: number; // Hỗ trợ timeout request
  }
  
  export class HttpError extends Error {
    status: number;
    payload: any;
  
    constructor(status: number, payload: any) {
      super(payload?.message || "HTTP Error");
      this.status = status;
      this.payload = payload;
    }
  }
  
  /**
   * Makes an HTTP request using the Fetch API with the provided parameters.
   *
   * @template T - The expected response type.
   * @param {string} url - The URL to which the request is sent.
   * @param {"GET" | "POST" | "PUT" | "PATCH" | "DELETE"} [method="GET"] - The HTTP method to use for the request.
   * @param {any} [body] - The body of the request, if applicable.
   * @param {FetchOptions} [options={}] - Additional fetch options including headers, token, and timeout.
   * @returns {Promise<T>} - A promise that resolves to the response data of type T.
   * @throws {HttpError} - Throws an error if the response is not ok.
   * @throws {Error} - Throws an error if the request times out or another error occurs.
   *
   * @example
   * ```typescript
   * interface User {
   *   id: number;
   *   name: string;
   * }
   *
   * const user: User = await httpClient<User>('/api/user', 'GET', null, {
   *   token: 'your-token-here',
   *   timeout: 5000,
   * });
   * console.log(user);
   * ```
   */
  export async function httpClient<T = any>(
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
    body?: any,
    options: FetchOptions = {}
  ): Promise<T> {
    const { token, headers, timeout = 10000, ...restOptions } = options; // Default timeout 10s
  
    const defaultHeaders: HeadersInit = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    };
  
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
  
    try {
      const response = await fetch(url, {
        method,
        headers: defaultHeaders,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
        ...restOptions,
      });
  
      clearTimeout(timeoutId);
  
      let responseData;
      try {
        responseData = await response.json();
      } catch (error) {
        responseData = null;
      }
  
      if (!response.ok) {
        throw new HttpError(
          response.status,
          responseData || { message: `HTTP Error: ${response.status}` }
        );
      }
  
      return responseData as T;
    } catch (error: any) {
      if (error.name === "AbortError") {
        throw new Error("Request timed out");
      }
      throw error;
    }
  }
  