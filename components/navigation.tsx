"use client"

import Link from "next/link" import { ThemeToggle } from "@/components/theme-toggle" import { Bitcoin, Menu } from "lucide-react" import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

export function Navigation() { return ( <nav className="fixed top-0 w-full z-50 glass border-b border-primary/20"> <div className="container mx-auto px-4 py-4"> <div className="flex items-center justify-between"> {/* Logo */} <Link href="/" className="flex items-center gap-2"> <Bitcoin className="h-8 w-8 text-primary" /> <span className="text-xl font-heading font-bold">Bitcoin</span> </Link>

{/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-foreground hover:text-primary transition-colors">
          About Us
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-lg glass border border-white/20 hover:bg-white/10 transition">
                <Menu className="h-6 w-6 text-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass rounded-xl p-2 w-40">
              <DropdownMenuItem asChild>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </div>
</nav>

) }

