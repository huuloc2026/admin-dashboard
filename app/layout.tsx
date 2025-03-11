import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"

import { AuthProvider } from "@/lib/auth-provider"
import { Toaster } from "sonner"
import ScrollToTopButton from "@/components/ui/ScrollToTop"
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "A full-stack admin dashboard with Next.js 15",
  icons: {
    icon: "/logo.svg",
  },
  creator: "Bui Huu Loc"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <AuthProvider>{children}</AuthProvider>
        <Toaster theme="dark" />
        <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

