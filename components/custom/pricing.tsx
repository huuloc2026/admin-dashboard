"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for small businesses just getting started.",
      features: ["5 Users", "Basic Analytics", "Standard Support", "1 Project"],
    },
    {
      title: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with more needs.",
      features: ["20 Users", "Advanced Analytics", "Priority Support", "5 Projects", "API Access"],
    },
    {
      title: "Enterprise",
      price: "$199",
      description: "For large organizations with complex requirements.",
      features: [
        "Unlimited Users",
        "Custom Analytics",
        "24/7 Support",
        "Unlimited Projects",
        "API Access",
        "Custom Integrations",
      ],
    },
  ];

  const router = useRouter();
  const handleSubmit = () => {
    router.push("/dashboard/subscription");
  };

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-lg bg-primary text-white px-4 py-1 text-sm font-medium"
            >
              Pricing
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter md:text-4xl"
            >
              Simple, transparent pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-[900px] text-muted-foreground md:text-xl"
            >
              Choose the plan that's right for your business.
            </motion.p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all"
            >
              <h3 className="text-lg font-bold">{plan.title}</h3>
              <div className="mt-4 flex items-baseline text-3xl font-bold text-primary">
                {plan.price}
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  /month
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button onClick={handleSubmit}  className="gap-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
