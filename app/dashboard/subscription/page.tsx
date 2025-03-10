"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/lib/api";
import { getCurrentUser } from "@/lib/auth-actions";

import { useAuthStore } from "@/lib/auth-store";
import { createStripeCustomer, createSubscription } from "@/lib/stripe-action";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

const pricingPlans = [
  {
    title: "Starter",
    price: 29,
    description: "Basic plan for small teams.",
    priceId: "price_1R19KhDxtgs8VFQid18pudlG",
  },
  {
    title: "Professional",
    price: 79,
    description: "Best for growing businesses.",
    priceId: "price_1R19LGDxtgs8VFQi70aWLpJg",
  },
  {
    title: "Enterprise",
    price: 199,
    description: "For large organizations.",
    priceId: "price_1R19LpDxtgs8VFQiO2HKGxfc",
  },
];

type StripeCustomer = {
  id: string;
  email: string;
  invoice_settings?: {
    default_payment_method?: string;
  };
};


export default function PricingPage() {
  const router = useRouter();

  const handleSubscribe = async (priceId: string) => {
    try {
      const data = await getCurrentUser();
  
      // 1. Check or get new Stripe customer
      const checkOrCreateNewStripe = await createStripeCustomer(data.id, data.email);
  
      // 2. Check user had default payment method ?
      const customerDetails = await api.get<StripeCustomer>(`/stripe/customer/${checkOrCreateNewStripe.customerId}`);
  
      if (!customerDetails.invoice_settings?.default_payment_method) {
        toast.warning("No payment method found. Redirecting to payment setup...");
        router.push("/payment");
        return;
      }
  
      // 3.If payment method -> Subscription
      const stripeSubscriptionId = await createSubscription(data.id, priceId);
      
      
    } catch (error: any) { 
      if (error.message.includes("Customer has no default payment method")) {
        toast.warning("You need to add a payment method before subscribing.");
        router.push("/payment");
      } else {
        toast.error("Subscription failed. Please try again later.");
      }
    }
  };
  

  return (
    <div className="w-full min-h-screen mx-auto p-6">
      <Card>
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold">Choose Your Plan</h1>
          <CardDescription>
            Find the perfect plan for your needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.priceId}
                className="p-6 border rounded-lg text-center shadow-md"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <p className="text-2xl font-bold mt-2">${plan.price}/month</p>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant={"ghost"}
                    onClick={() => handleSubscribe(plan.priceId)}
                    className="w-full  border "
                  >
                    Subscribe
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
