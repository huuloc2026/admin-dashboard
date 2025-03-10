"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import React from "react";

export function PreviewDemo() {
  return (
    <BackgroundGradient className="relative w-full h-full flex justify-center items-center ">
      <div className="relative  max-w-full max-h-full overflow-hidden rounded-lg bg-muted ">
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ba0f2f116565007.6064721820193.gif"
          alt="Animated Preview"
          
          width={4000} 
          height={500} 
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </BackgroundGradient>
  );
}
