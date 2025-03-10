"use client";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentForm } from "./PaymentForm";
import { stripePromise } from "@/lib/stripe";

export default function CheckoutPage() {
  const userId = "user_123";

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Attach Payment</h2>
        <Elements stripe={stripePromise}>
          <PaymentForm userId={userId} />
        </Elements>
      </div>
    </div>
  );
}