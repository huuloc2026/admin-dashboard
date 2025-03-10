import { useRouter } from "next/navigation";
import { api } from "./api";

export type StripeType = {
  userId: string;
  priceId: string;
};

export type ResponseNewStripeCustomer = {
  customerId: string;
};

export async function createStripeCustomer(userId: string, email: string) {
  try {
    const response = await api.post<ResponseNewStripeCustomer>(
      "/stripe/create-customer",
      { userId, email }
    );
    return response; 
  } catch (error) {
    throw error;
  }
}

export async function CheckIsHasSub(userId: string, email: string) {
  
    const response = await api.post(
      "/stripe/check-sub",
      { userId}
    );
    return response; 
  
}

export async function createSubscription(userId: string, priceId: string) {
  
  try {
    const response = await api.post<{
      stripeSubscriptionId: string;
      clientSecret: string;
    }>("/stripe/create-subscription", { userId, priceId });
    return response;
  } catch (error:any) {
    
    throw error;
  }
}
