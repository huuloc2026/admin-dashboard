"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";





export function BackgroundBeamsDemo() {
    const [email,setEmail] = useState("huuloc2026@gmail.com")
    const handleClick = () => {
        if (!email.trim()) {
          toast.error("Please enter your email!");
          return;
        }
        toast.success("Successfully sent request!");
      };
    
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you're sending order confirmations, password
          reset emails, or promotional campaigns, MailJet has got you covered.
        </p>
        <div className="w-full max-w-md mx-auto mt-4 space-y-4">
          <Input
            type="email"
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 placeholder:text-neutral-700"
          />
          <Button
            onClick={handleClick}

            size="lg"
            
            className="gap-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
          >
            Send <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
