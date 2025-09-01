// app/layout.tsx  — REPLACE your existing file with this
import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Bitcoin - The Future of Money",
  description: "Professional Bitcoin platform for the digital economy",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-heading: ${workSans.variable};
}
        `}</style>
      </head>
      {/* NOTE: added overflow-x-hidden to body to block horizontal scroll globally */}
      <body className={`${inter.variable} ${workSans.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}  --font-heading: ${workSans.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${workSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
