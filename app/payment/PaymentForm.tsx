"use client";

import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function PaymentForm({ userId }: { userId: string }) {
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements)
        if (!stripe || !elements) {
            return <p>Loading Stripe...</p>;
        }
        setLoading(true);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error("Payment Method Error:", error);
      setLoading(false);
      return;
    }

    const paymentMethodId = paymentMethod.id;

    try {
      // Send PaymentMethod ID to backend
      await api.post("/stripe/attach-payment-method", {
        userId,
        paymentMethodId,
      });
      toast("Payment method added successfully!");
      router.push('dashboard/subscription')
    } catch (error) {
      console.error("Error attaching payment method:", error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
                padding:"15px",
              color: "#ffffff",
              fontSize: "16px",
              "::placeholder": {
                color: "#b3b3b3",  
            },
            
            
            },
            invalid: {
              color: "#ff6b6b",
            },
          },
        }}
      />

      <Button className="m-10 justify-center items-center flex" type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Save Payment Method"}
      </Button>
    </form>
  );
}
