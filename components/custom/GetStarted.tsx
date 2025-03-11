import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const GetStarted = () => {
  return (
   <>
  <section className="w-full py-12 md:py-24 lg:py-32 border-t ">
  <div className="container px-4 md:px-6">
    <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
      {/* Left Section */}
      <div className="space-y-4">
        <div className="inline-block rounded-lg px-3 py-1 text-sm  border-0">
          Ready to start?
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Start managing your business today
        </h2>
        <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join thousands of businesses already using our platform to grow and succeed.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link href="/register">
            <Button
              size="lg"
              className="gap-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="border-background ">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-4">
        <div className="grid gap-4">
          {[
            { title: "Easy Setup", desc: "Get started in minutes with our simple onboarding process." },
            { title: "Free Trial", desc: "Try all features free for 14 days, no credit card required." },
            { title: "Cancel Anytime", desc: "No long-term contracts. Cancel your subscription at any time." },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full ">
                <CheckCircle className="h-5 w-5 " />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium ">{item.title}</h3>
                <p className="text-sm ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default GetStarted