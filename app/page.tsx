import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BitcoinChart } from "@/components/bitcoin-chart"
import { Shield, Zap, BarChart3, DollarSign } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-bg">
        <div className="absolute inset-0 bg-bitcoin-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-bitcoin-glow"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Own the Future of <span className="text-bitcoin-gold">Money</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl">
                Experience the power of Bitcoin with military-grade security, lightning-fast transactions, and
                transparent pricing. Join the financial revolution today.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="shadow-bitcoin-glow-lg hover:shadow-bitcoin-glow text-lg px-8">
                  <Link href="/index.html">Get Started</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/golden-bitcoin-coin-with-realistic-metallic-shine-.png"
                  alt="Bitcoin Coin"
                  className="w-80 h-80 rounded-full shadow-bitcoin-glow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-bitcoin-glow animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Bitcoin Performance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track Bitcoin's price movements with our real-time trading chart
            </p>
          </div>
          <BitcoinChart />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for the future with cutting-edge technology and user-first design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Secure Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Military-grade encryption with multi-signature protection keeps your Bitcoin safe and secure.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Instant Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lightning-fast transactions that complete in seconds, not hours. Experience the speed of modern
                  finance.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Real-Time Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advanced analytics and portfolio tracking help you make informed decisions about your investments.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Low Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Transparent pricing with no hidden costs. Pay only what you see, when you see it.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Start Your Bitcoin Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for their Bitcoin needs. Get started in minutes with our
            simple onboarding process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-bitcoin-glow-lg hover:shadow-bitcoin-glow text-lg px-8">
              <Link href="#">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
