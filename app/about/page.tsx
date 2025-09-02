import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Eye, Bitcoin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-bitcoin-gradient">
        <div className="absolute inset-0 bg-bitcoin-glow"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-8 shadow-bitcoin-glow-lg">
              <Bitcoin className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              About Our Bitcoin Platform
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
              We're building the future of digital finance, making Bitcoin accessible, secure, and simple for everyone
              around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                To democratize access to Bitcoin and empower individuals to take control of their financial future. We
                believe that everyone deserves access to secure, transparent, and efficient financial tools.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                Our platform combines cutting-edge security with intuitive design, making Bitcoin accessible to both
                newcomers and experienced traders alike.
              </p>
            </div>
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Platform Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$10B+</div>
                  <div className="text-muted-foreground">Transaction Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Card className="border-border/50 lg:order-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Security First</h4>
                    <p className="text-muted-foreground text-sm">
                      Your assets are protected by industry-leading security measures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Transparency</h4>
                    <p className="text-muted-foreground text-sm">
                      Clear pricing and open communication in everything we do.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Innovation</h4>
                    <p className="text-muted-foreground text-sm">Continuously improving to serve you better.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Accessibility</h4>
                    <p className="text-muted-foreground text-sm">Making Bitcoin simple and accessible for everyone.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                We envision a world where Bitcoin is as easy to use as traditional payment methods, but with all the
                benefits of decentralized finance: security, transparency, and global accessibility.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                By 2030, we aim to be the leading platform that bridges the gap between traditional finance and the
                Bitcoin ecosystem, serving millions of users worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bitcoin Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why Bitcoin?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Bitcoin represents the future of money - decentralized, secure, and accessible to everyone, regardless of
              location or background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Decentralized</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No single point of failure. Bitcoin operates on a global network that no single entity controls.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Scarce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  With only 21 million Bitcoin ever to exist, it's designed to maintain value over time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Global</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Send and receive Bitcoin anywhere in the world, 24/7, without traditional banking limitations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bitcoin-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Join the Revolution?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your Bitcoin journey today with our secure, user-friendly platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-bitcoin-glow-lg hover:shadow-bitcoin-glow text-lg px-8">
              <Link href="#">Create Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-bitcoin-gold text-bitcoin-gold hover:bg-bitcoin-gold hover:text-primary-foreground text-lg px-8 bg-transparent"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
