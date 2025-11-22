import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AdMagic AI - AI-Powered Advertising Automation Platform",
  description: "Boost your advertising performance with AI-driven insights, automated optimization, and real-time analytics. Transform your Meta and Google Ads campaigns.",
  keywords: ["AI advertising", "ad optimization", "Meta ads", "Google ads", "ROAS", "advertising automation", "marketing platform"],
  authors: [{ name: "AdMagic AI" }],
  openGraph: {
    title: "AdMagic AI - AI-Powered Advertising Automation",
    description: "Boost your advertising performance with AI-driven insights and automated optimization.",
    type: "website",
    url: "https://admagic-ai.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AdMagic AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdMagic AI - AI-Powered Advertising Automation",
    description: "Transform your advertising campaigns with AI-driven automation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
