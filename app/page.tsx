"use client"

import { Navigation } from "@/components/navigation" import { BitcoinPriceChart } from "@/components/bitcoin-price-chart" import { Button } from "@/components/ui/button" import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" import { Badge } from "@/components/ui/badge" import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" import { Shield, Globe, Zap, Users, TrendingUp, Lock, ArrowRight, Star, ChevronRight, Bitcoin } from "lucide-react"

export default function HomePage() { const stats = [ { label: "Market Cap", value: "$850B", icon: TrendingUp }, { label: "24h Volume", value: "$28.5B", icon: Globe }, { label: "Circulating Supply", value: "19.7M BTC", icon: Bitcoin }, { label: "Total Supply", value: "21M BTC", icon: Lock }, ]

const features = [ { icon: Shield, title: "Decentralized Security", description: "Protected by the world's most secure blockchain network with cryptographic proof.", }, { icon: Globe, title: "Global Access", description: "Send and receive Bitcoin anywhere in the world, 24/7, without intermediaries.", }, { icon: Zap, title: "Low Fees", description: "Minimal transaction costs compared to traditional banking and payment systems.", }, { icon: Users, title: "Community Driven", description: "Powered by a global community of developers, miners, and users worldwide.", }, ]

const steps = [ { step: "01", title: "Create Account", description: "Sign up with your email and verify your identity to get started.", }, { step: "02", title: "Buy Bitcoin", description: "Purchase Bitcoin using your preferred payment method securely.", }, { step: "03", title: "Secure Wallet", description: "Store your Bitcoin in our secure wallet or transfer to your own.", }, ]

const testimonials = [ { name: "Sarah Chen", role: "Crypto Investor", content: "The most professional Bitcoin platform I've used. Excellent security and user experience.", rating: 5, avatar: "/professional-woman-diverse.png", }, { name: "Michael Rodriguez", role: "Business Owner", content: "Bitcoin has revolutionized how I handle international payments. Fast and reliable.", rating: 5, avatar: "/confident-businessman.png", }, { name: "Emma Thompson", role: "Tech Entrepreneur", content: "The future of money is here. This platform makes Bitcoin accessible to everyone.", rating: 5, avatar: "/tech-woman.png", }, ]

const faqs = [ { question: "Is Bitcoin safe?", answer: "Bitcoin is secured by cryptographic proof and the world's most powerful distributed computing network. It's designed to be tamper-proof and transparent.", }, { question: "How do I buy Bitcoin?", answer: "Simply create an account, verify your identity, and use your preferred payment method to purchase Bitcoin. We support bank transfers, credit cards, and more.", }, { question: "Can Bitcoin be traced?", answer: "Bitcoin transactions are recorded on a public ledger called the blockchain. While transactions are transparent, personal identities are pseudonymous.", }, { question: "What are the fees?", answer: "Our platform charges competitive fees for buying, selling, and transferring Bitcoin. Network fees vary based on blockchain congestion.", }, ]

return ( <div className="min-h-screen w-full overflow-x-hidden"> <Navigation />

{/* Hero Section */}
  <section className="pt-24 pb-16 gradient-bg relative overflow-hidden">
    <div className="absolute inset-0 w-full h-full bg-[url('/abstract-digital-pattern.png')] bg-cover bg-center bg-no-repeat opacity-10"></div>
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bitcoin-gradient text-white border-0">The Future of Money</Badge>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">The Future of Money, Today.</h1>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join millions worldwide who trust Bitcoin for secure, decentralized digital transactions. Experience the
          freedom of peer-to-peer money.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bitcoin-gradient text-white border-0 hover:scale-105 transition-transform">
            Create Account <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-16 animate-float">
        <div className="w-32 h-32 mx-auto bitcoin-gradient rounded-full flex items-center justify-center">
          <Bitcoin className="h-16 w-16 text-white" />
        </div>
      </div>
    </div>
  </section>

  {/* Price Chart Section */}
  <section className="py-16 bg-background overflow-x-hidden">
    <div className="container mx-auto px-4">
      <div className="w-full max-w-full overflow-x-hidden">
        <BitcoinPriceChart />
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="py-16 bg-muted/30 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="glass text-center overflow-hidden">
            <CardContent className="pt-6 transform transition-transform md:hover:scale-105">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-16 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">Why Choose Bitcoin</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the advantages of the world's first and most trusted cryptocurrency
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="glass overflow-hidden">
            <CardHeader className="transform transition-transform md:hover:scale-105">
              <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* How It Works Section */}
  <section className="py-16 bg-muted/30 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">How It Works</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get started with Bitcoin in three simple steps
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center group overflow-hidden">
            <div className="w-16 h-16 mx-auto mb-6 bitcoin-gradient rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              {step.step}
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
            {index < steps.length - 1 && (
              <ChevronRight className="h-6 w-6 text-primary mx-auto mt-6 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="py-16 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">What Our Users Say</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of satisfied users who trust our platform
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="glass overflow-hidden">
            <CardContent className="pt-6 transform transition-transform md:hover:scale-105">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-16 bg-muted/30 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get answers to common questions about Bitcoin
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-16 gradient-bg overflow-hidden">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-heading font-bold text-white mb-4">Start Your Bitcoin Journey</h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Join the financial revolution. Create your account today and experience the future of money.
      </p>
      <Button size="lg" className="bitcoin-gradient text-white border-0 hover:scale-105 transition-transform">
        Create Account Now <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-foreground text-background py-12 overflow-hidden">
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
            <li><a href="#" className="hover:text-primary transition-colors">Buy Bitcoin</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sell Bitcoin</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Wallet</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-background/80">
            <li><a href="#" className="hover:text-primary transition-colors">Learn</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-background/80">
            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
        <p>&copy; 2024 Bitcoin Platform. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>

) }

            className="glass text-white border-white/20 hover:bg-white/10 bg-transparent"
          >
            Login
          </Button>
        </div>
      </div>
      <div className="mt-16 animate-float">
        <div className="w-32 h-32 mx-auto bitcoin-gradient rounded-full flex items-center justify-center">
          <Bitcoin className="h-16 w-16 text-white" />
        </div>
      </div>
    </div>
  </section>

  {/* Price Chart Section */}
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      {/* ❗ Guard against library-width overflows */}
      <div className="w-full max-w-full overflow-x-hidden">
        <BitcoinPriceChart />
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="py-16 bg-muted/30 overflow-x-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="glass text-center overflow-hidden">
            <CardContent className="pt-6 transform-gpu transition-transform md:hover:scale-105">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-16 bg-background overflow-x-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">Why Choose Bitcoin</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the advantages of the world's first and most trusted cryptocurrency
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="glass overflow-hidden">
            <CardHeader className="transform-gpu transition-transform md:hover:scale-105">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* How It Works Section */}
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">How It Works</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get started with Bitcoin in three simple steps
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 overflow-x-hidden">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bitcoin-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
              {step.step}
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
            {index < steps.length - 1 && (
              <ChevronRight className="h-6 w-6 text-primary mx-auto mt-6 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="py-16 bg-background overflow-x-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">What Our Users Say</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of satisfied users who trust our platform
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="glass overflow-hidden transform-gpu transition-transform md:hover:scale-105">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get answers to common questions about Bitcoin
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-16 gradient-bg overflow-x-hidden">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-heading font-bold text-white mb-4">Start Your Bitcoin Journey</h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Join the financial revolution. Create your account today and experience the future of money.
      </p>
      <Button size="lg" className="bitcoin-gradient text-white border-0 hover:scale-105 transition-transform">
        Create Account Now <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-foreground text-background py-12 overflow-x-hidden">
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
              <a href="/about" className="hover:text-primary transition-colors">
                About Us
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

) }

ats.map((stat, index) => (
              <Card key={index} className="glass text-center overflow-hidden">
                <CardContent className="pt-6 transform transition-transform hover:scale-105">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Why Choose Bitcoin</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of the world's first and most trusted cryptocurrency
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass overflow-hidden">
                <CardHeader className="transform transition-transform hover:scale-105">
                  <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with Bitcoin in three simple steps
            </p>      title: "Community Driven",
      description: "Powered by a global community of developers, miners, and users worldwide.",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Create Account",
      description: "Sign up with your email and verify your identity to get started.",
    },
    {
      step: "02",
      title: "Buy Bitcoin",
      description: "Purchase Bitcoin using your preferred payment method securely.",
    },
    {
      step: "03",
      title: "Secure Wallet",
      description: "Store your Bitcoin in our secure wallet or transfer to your own.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      content: "The most professional Bitcoin platform I've used. Excellent security and user experience.",
      rating: 5,
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "Michael Rodriguez",
      role: "Business Owner",
      content: "Bitcoin has revolutionized how I handle international payments. Fast and reliable.",
      rating: 5,
      avatar: "/confident-businessman.png",
    },
    {
      name: "Emma Thompson",
      role: "Tech Entrepreneur",
      content: "The future of money is here. This platform makes Bitcoin accessible to everyone.",
      rating: 5,
      avatar: "/tech-woman.png",
    },
  ]

  const faqs = [
    {
      question: "Is Bitcoin safe?",
      answer:
        "Bitcoin is secured by cryptographic proof and the world's most powerful distributed computing network. It's designed to be tamper-proof and transparent.",
    },
    {
      question: "How do I buy Bitcoin?",
      answer:
        "Simply create an account, verify your identity, and use your preferred payment method to purchase Bitcoin. We support bank transfers, credit cards, and more.",
    },
    {
      question: "Can Bitcoin be traced?",
      answer:
        "Bitcoin transactions are recorded on a public ledger called the blockchain. While transactions are transparent, personal identities are pseudonymous.",
    },
    {
      question: "What are the fees?",
      answer:
        "Our platform charges competitive fees for buying, selling, and transferring Bitcoin. Network fees vary based on blockchain congestion.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-digital-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bitcoin-gradient text-white border-0">The Future of Money</Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">The Future of Money, Today.</h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join millions worldwide who trust Bitcoin for secure, decentralized digital transactions. Experience the
              freedom of peer-to-peer money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bitcoin-gradient text-white border-0 hover:scale-105 transition-transform">
                Create Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass text-white border-white/20 hover:bg-white/10 bg-transparent"
              >
                Login
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-float">
            <div className="w-32 h-32 mx-auto bitcoin-gradient rounded-full flex items-center justify-center">
              <Bitcoin className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Price Chart Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <BitcoinPriceChart />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="glass text-center hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Why Choose Bitcoin</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of the world's first and most trusted cryptocurrency
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with Bitcoin in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bitcoin-gradient rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ChevronRight className="h-6 w-6 text-primary mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who trust our platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about Bitcoin
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Start Your Bitcoin Journey</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join the financial revolution. Create your account today and experience the future of money.
          </p>
          <Button size="lg" className="bitcoin-gradient text-white border-0 hover:scale-105 transition-transform">
            Create Account Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
                  <a href="/about" className="hover:text-primary transition-colors">
                    About Us
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
