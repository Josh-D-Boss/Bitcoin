import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bitcoin, Globe, Shield, TrendingUp, Users, Zap } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2008",
      event: "Bitcoin Whitepaper Published",
      description: "Satoshi Nakamoto introduces the concept of peer-to-peer electronic cash",
    },
    {
      year: "2009",
      event: "Genesis Block Mined",
      description: "The first Bitcoin block is created, marking the birth of the network",
    },
    {
      year: "2010",
      event: "First Commercial Transaction",
      description: "10,000 BTC used to buy two pizzas, establishing real-world value",
    },
    {
      year: "2017",
      event: "Mainstream Adoption",
      description: "Bitcoin reaches $20,000 and gains widespread media attention",
    },
    {
      year: "2021",
      event: "Institutional Adoption",
      description: "Major corporations and countries begin adopting Bitcoin",
    },
    { year: "2024", event: "Global Recognition", description: "Bitcoin becomes a recognized store of value worldwide" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Built on the most secure blockchain technology with cryptographic proof and decentralized validation.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Accessible to anyone, anywhere in the world, without discrimination or geographical restrictions.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Powered by a global community of developers, miners, and users who believe in financial freedom.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously evolving with new technologies and improvements to serve the global economy better.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bitcoin-gradient text-white border-0">About Bitcoin</Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Revolutionizing Money for Everyone
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Bitcoin represents the first successful implementation of a peer-to-peer electronic cash system, enabling
              direct transactions without the need for trusted third parties.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-6">Who We Are</h2>
              <p className="text-xl text-muted-foreground">
                Bitcoin is not just a cryptocurrency—it's a revolutionary financial technology that has transformed how
                we think about money, value, and economic freedom.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">A Decentralized Digital Currency</h3>
                <p className="text-muted-foreground mb-6">
                  Bitcoin operates on a decentralized network of computers worldwide, ensuring that no single entity
                  controls the currency. This revolutionary approach to money eliminates the need for traditional
                  banking intermediaries and puts financial control back in the hands of individuals.
                </p>
                <p className="text-muted-foreground">
                  Built on blockchain technology, every Bitcoin transaction is recorded on a public ledger that is
                  transparent, immutable, and secured by cryptographic proof.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bitcoin-gradient rounded-full flex items-center justify-center animate-float">
                  <Bitcoin className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              To create an inclusive financial system that empowers individuals worldwide with direct control over their
              money, free from traditional banking limitations.
            </p>

            <Card className="glass text-left">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Fast Transactions</h4>
                    <p className="text-sm text-muted-foreground">
                      Send money anywhere in the world in minutes, not days
                    </p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Secure by Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Protected by advanced cryptography and network consensus
                    </p>
                  </div>
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Global Access</h4>
                    <p className="text-sm text-muted-foreground">Available to anyone with an internet connection</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-6">Bitcoin's Journey</h2>
              <p className="text-xl text-muted-foreground">
                From a revolutionary idea to a global financial phenomenon
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bitcoin-gradient rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 glass hover:scale-105 transition-transform">
                    <CardHeader>
                      <CardTitle className="text-xl">{milestone.event}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{milestone.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-6">Why Bitcoin Matters</h2>
              <p className="text-xl text-muted-foreground">
                The core principles that make Bitcoin a transformative technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="glass hover:scale-105 transition-all duration-300 group text-center">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">Global Impact</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Bitcoin's influence extends far beyond digital currency, reshaping how we think about financial
              sovereignty, economic inclusion, and monetary policy worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100M+</div>
                <div className="text-muted-foreground">Global Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$850B+</div>
                <div className="text-muted-foreground">Market Capitalization</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">195</div>
                <div className="text-muted-foreground">Countries with Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bitcoin className="h-6 w-6 text-primary" />
                <span className="text-lg font-heading font-bold">Bitcoin</span>
              </div>
              <p className="text-background/80">
                The world's leading cryptocurrency platform for secure digital transactions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Buy Bitcoin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sell Bitcoin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Wallet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Learn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Bitcoin Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
