import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ThemeProvider as AppThemeProvider } from "@/contexts/theme-context"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/toaster"
import { IslamAIChat } from "@/components/islam-ai-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quran Player - Listen to the Holy Quran",
  description: "A beautiful Quran player with all 114 surahs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AppThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
            <IslamAIChat />
            <Toaster />
          </AppThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'