import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AvatarImage } from "@/components/ui/avatar";
import ButtonDashboard from "@/components/ui/buttondashboard";
import ColourfulText from "@/components/ui/colourful-text";
import { Lens } from "@/components/ui/lens";
import PricingSection from "@/components/custom/pricing";
import { TimelineDemo } from "../components/custom/TimelineOfCompany";

import { FlipWordsDemo } from "@/components/custom/FlipDemo";
import { FlipWords } from "@/components/ui/flip-words";

import { BackgroundBeamsDemo } from "@/components/custom/BackgroundDemo";
import { PreviewDemo } from "../components/custom/PreviewDemo";

export default function Home() {
  const words = ["Better", "Smart", "Scalable", "Modern", "Insightful"];
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <div className="h-[50px] w-[50px]">
            <img src="/logo.svg" alt="dashboard" />
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Register</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-cyan-400">
                      Build <FlipWords words={words} /> <br />
                    </div>
                    <span> Admin Dashboard </span>
                    <div>for Your Business</div>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your operations with our intuitive admin
                    dashboard. Manage users, track analytics, and grow your
                    business.
                  </p>
                </div>
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
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
       
           <PreviewDemo />
          
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools you need to manage your
                  business efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  title: "User Management",
                  description:
                    "Easily manage users, roles, and permissions with our intuitive interface.",
                },
                {
                  title: "Analytics Dashboard",
                  description:
                    "Track key metrics and visualize data to make informed business decisions.",
                },
                {
                  title: "Content Management",
                  description:
                    "Create, edit, and publish content with our powerful CMS tools.",
                },
                {
                  title: "Responsive Design",
                  description:
                    "Access your dashboard from any device with our fully responsive interface.",
                },
                {
                  title: "Secure Authentication",
                  description:
                    "Keep your data safe with our robust authentication system.",
                },
                {
                  title: "Customizable Interface",
                  description:
                    "Tailor the dashboard to your needs with customizable widgets and layouts.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 h-full rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <TimelineDemo />

        <PricingSection />
        {/* <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
              {[
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
              ].map((plan, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-bold">{plan.title}</h3>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    {plan.price}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full">Get Started</Button>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                  Ready to start?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start managing your business today
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses already using our platform to
                  grow and succeed.
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
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-zinc-700 hover:bg-zinc-800 text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Easy Setup</h3>
                      <p className="text-sm text-muted-foreground">
                        Get started in minutes with our simple onboarding
                        process.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Free Trial</h3>
                      <p className="text-sm text-muted-foreground">
                        Try all features free for 14 days, no credit card
                        required.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Cancel Anytime</h3>
                      <p className="text-sm text-muted-foreground">
                        No long-term contracts. Cancel your subscription at any
                        time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <BackgroundBeamsDemo />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Bui Huu Loc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="/" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
