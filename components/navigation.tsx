"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bitcoin } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Bitcoin className="h-8 w-8 text-primary" />
            <span className="text-xl font-heading font-bold">Bitcoin</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </div>

          {/* Theme toggle + single button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" className="bitcoin-gradient">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
