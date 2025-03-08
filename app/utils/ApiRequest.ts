import { httpClient } from "./http";


export class ApiRequest {
  private static instance: ApiRequest;
  private baseUrl: string;
  private token: string | null = null;

  private constructor() {
    this.baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8386/v1/api";
  }

  static getInstance(): ApiRequest {
    if (!ApiRequest.instance) {
      ApiRequest.instance = new ApiRequest();
    }
    return ApiRequest.instance;
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = null;
  }

  // 🛡️ AUTH API
  async login(email: string, password: string) {
    const result = await httpClient(`${this.baseUrl}/auth/login`, "POST", {
      email,
      password,
    });

    // const data = await result.json();

    // this.setToken(data.token); // Lưu vào instance

    return result;
  }

  async me() {
    const response = await fetch("/api/auth/me", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data.");
    }

    const data = await response.json();
    this.setToken(data.token);
    return data;
  }

  async profile(token: string) {
    return await httpClient(`${this.baseUrl}/auth/me`, "GET", null, {
      token,
    });
  }

  async register(email: string, password: string, name: string) {
    return httpClient(`${this.baseUrl}/auth/register`, "POST", {
      email,
      password,
      name,
    });
  }

  async logout() {
    return httpClient(`${this.baseUrl}/auth/logout`, "POST", null, {
      token: this.token!,
    });
  }

  // 👤 USER API
  async getUser(token: any) {
    return httpClient(
      `${this.baseUrl}/users?page=1&limit=5`,
      "GET",
      undefined,
      {
        token,
      }
    );
  }

  async createUser(data: any, token: any) {
    return httpClient(`${this.baseUrl}/auth/register`, "POST", data, { token });
  }

  //   async updateUser(
  //     userId: string,
  //     data: Partial<{ name: string; email: string }>
  //   ) {
  //     return httpClient(`${this.baseUrl}/user/${userId}`, "PUT", data, {
  //       token: this.token!,
  //     });
  //   }

  //   async deleteUser(userId: string) {
  //     return httpClient(`${this.baseUrl}/user/${userId}`, "DELETE", null, {
  //       token: this.token!,
  //     });
  //   }

  //   // 🛒 CRUD PRODUCT API
  async createProduct(data: any, token: any) {
    return await httpClient(`${this.baseUrl}/product`, "POST", data, {
      token,
    });
  }

  async getProducts(token: any) {
    return await httpClient(
      `${this.baseUrl}/product?page=1&limit=5`,
      "GET",
      undefined,
      {
        token,
      }
    );
  }

  //   async updateProduct(
  //     productId: string,
  //     data: Partial<{ name: string; price: number; stock: number }>
  //   ) {
  //     return httpClient(`${this.baseUrl}/products/${productId}`, "PUT", data, {
  //       token: this.token!,
  //     });
  //   }

  async deleteProduct(productId: string) {
    return httpClient(`${this.baseUrl}/products/${productId}`, "DELETE", null, {
      token: this.token!,
    });
  }
}

export default ApiRequest.getInstance();
