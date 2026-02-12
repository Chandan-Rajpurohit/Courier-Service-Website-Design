import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import AirnetHeader from "@/components/airnet-header"
import AirnetFooter from "@/components/airnet-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Airnet International - International Courier & Export Services | Sky Fly Group",
  description:
    "Airnet International - A division of Sky Fly Group providing premium international courier, freight forwarding, and complete export-import logistics solutions for 30+ years. Trusted by corporates, manufacturers, and businesses worldwide.",
  keywords:
    "international courier, export services, import services, freight forwarding, logistics, cargo, chemical shipping, hazardous materials, pharmaceutical exports, courier service, express delivery, Airnet International, Sky Fly Group, Sky Fly Logistics, global logistics, door to door delivery",
  openGraph: {
    title: "Airnet International - Premium International Courier & Logistics",
    description: "30 years of trusted international export-import and logistics excellence",
    type: "website",
  },
  icons: {
    icon: "/images/airnet-symbol.png",
    apple: "/images/airnet-symbol.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/airnet-symbol.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/airnet-symbol.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col bg-white">
            <AirnetHeader />
            <div className="flex-1">{children}</div>
            <AirnetFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
