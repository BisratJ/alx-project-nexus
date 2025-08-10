"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/ui/logo"
import {
  Star,
  Users,
  Shield,
  Calendar,
  Camera,
  Heart,
  Search,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      icon: Calendar,
      title: "Smart Planning",
      description: "AI-powered timeline management and automated reminders for your perfect day",
      color: "from-gold-400 to-gold-600",
    },
    {
      icon: Users,
      title: "Verified Vendors",
      description: "Connect with 500+ verified wedding professionals with guaranteed quality",
      color: "from-bronze-400 to-bronze-600",
    },
    {
      icon: Camera,
      title: "Inspiration Hub",
      description: "Browse 10,000+ real wedding photos and trending ideas for inspiration",
      color: "from-gold-500 to-bronze-500",
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Bank-level security with instant booking confirmation and payment protection",
      color: "from-bronze-500 to-gold-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah & John Mitchell",
      text: "Memosheria transformed our wedding planning from stressful to magical. Every vendor was perfect!",
      rating: 5,
      image: "/couple-1.jpg",
      location: "New York, NY",
      weddingDate: "June 2024",
    },
    {
      name: "Emily & Michael Chen",
      text: "The platform made it so easy to compare vendors and manage our budget. Highly recommend!",
      rating: 5,
      image: "/couple-2.jpg",
      location: "Los Angeles, CA",
      weddingDate: "September 2024",
    },
    {
      name: "Lisa & David Rodriguez",
      text: "From booking to the big day, everything was seamless. Our dream wedding came true!",
      rating: 5,
      image: "/couple-3.jpg",
      location: "Miami, FL",
      weddingDate: "March 2024",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Happy Couples", icon: Heart },
    { number: "500+", label: "Verified Vendors", icon: Award },
    { number: "50+", label: "Cities Covered", icon: MapPin },
    { number: "99.9%", label: "Success Rate", icon: CheckCircle },
  ]

  const popularPackages = [
    {
      id: 1,
      title: "Complete Wedding Photography",
      vendor: "Elite Moments Studio",
      price: 2800,
      originalPrice: 3200,
      rating: 4.9,
      reviews: 156,
      image: "/wedding-photo-premium.jpg",
      badge: "Most Popular",
      features: ["8 hours coverage", "500+ photos", "Online gallery", "Print release"],
    },
    {
      id: 2,
      title: "Garden Paradise Venue",
      vendor: "Enchanted Gardens",
      price: 5500,
      originalPrice: 6000,
      rating: 4.8,
      reviews: 89,
      image: "/wedding-venue-garden.jpg",
      badge: "Premium",
      features: ["150 guests", "Bridal suite", "Catering kitchen", "Free parking"],
    },
    {
      id: 3,
      title: "Luxury Catering Package",
      vendor: "Gourmet Celebrations",
      price: 4200,
      originalPrice: 4800,
      rating: 4.9,
      reviews: 203,
      image: "/wedding-catering-gourmet.jpg",
      badge: "Chef's Choice",
      features: ["3-course meal", "Open bar", "Cake included", "Dietary options"],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-hero-pattern py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-50/80 to-bronze-50/80"></div>
        <div className="absolute top-10 left-10 animate-sparkle">
          <Sparkles className="h-6 w-6 text-gold-400" />
        </div>
        <div className="absolute top-32 right-20 animate-sparkle" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-4 w-4 text-bronze-400" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-sparkle" style={{ animationDelay: "2s" }}>
          <Sparkles className="h-5 w-5 text-gold-500" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Perfect Wedding
              <span className="gradient-text block">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Plan, book, and manage every detail of your dream wedding with our comprehensive platform. Connect with
              top vendors and create memories that last a lifetime.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search for photographers, venues, caterers..."
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gold-200 focus:border-gold-400 shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-luxury rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button size="lg" className="btn-luxury text-lg px-8 py-4 rounded-full">
                  Start Planning Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/packages">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 rounded-full border-2 border-gold-300 hover:bg-gold-50 hover:border-gold-400 bg-transparent"
                >
                  Browse Packages
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="h-8 w-8 text-gold-600 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Most Popular <span className="gradient-text">Wedding Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our top-rated wedding services, loved by thousands of couples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className="card-luxury overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1">{pkg.badge}</Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 hover:text-red-500"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1 font-medium">
                        {pkg.rating} ({pkg.reviews} reviews)
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Photography
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{pkg.vendor}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${pkg.price}</span>
                      <span className="text-lg text-gray-500 line-through">${pkg.originalPrice}</span>
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      Save ${pkg.originalPrice - pkg.price}
                    </Badge>
                  </div>
                  <div className="space-y-1 mb-4">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1 btn-luxury">Book Now</Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/packages">
              <Button size="lg" variant="outline" className="px-8 py-3 rounded-full bg-transparent">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-bronze-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Your <span className="gradient-text">Special Day</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From planning to execution, we provide all the tools and services to make your wedding perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-luxury text-center group hover:scale-105 transition-all duration-300 border-0"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by <span className="gradient-text">Happy Couples</span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from couples who found their perfect wedding</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-luxury border-0 p-8 text-center">
              <CardContent className="space-y-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-gold-200">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-sm text-gold-600">{testimonials[currentTestimonial].weddingDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-gold-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-bronze-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 animate-sparkle">
          <Sparkles className="h-8 w-8 text-white/50" />
        </div>
        <div className="absolute bottom-10 right-10 animate-sparkle" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-6 w-6 text-white/50" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of couples who have planned their perfect day with Memosheria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 rounded-full bg-white text-gold-600 hover:bg-gray-100"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-gold-600 bg-transparent"
              >
                Talk to Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <Logo variant="primary" size="lg" href="#" className="brightness-0 invert" />
              <p className="text-gray-400 leading-relaxed">
                Making wedding dreams come true, one celebration at a time. Your perfect day starts here.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold-400">For Couples</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/packages" className="hover:text-white transition-colors">
                    Browse Packages
                  </Link>
                </li>
                <li>
                  <Link href="/vendors" className="hover:text-white transition-colors">
                    Find Vendors
                  </Link>
                </li>
                <li>
                  <Link href="/inspiration" className="hover:text-white transition-colors">
                    Get Inspired
                  </Link>
                </li>
                <li>
                  <Link href="/planning-tools" className="hover:text-white transition-colors">
                    Planning Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold-400">For Vendors</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/vendor/register" className="hover:text-white transition-colors">
                    Join as Vendor
                  </Link>
                </li>
                <li>
                  <Link href="/vendor" className="hover:text-white transition-colors">
                    Vendor Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/pricing" className="hover:text-white transition-colors">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold-400">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Memosheria. All rights reserved. Made with ❤️ for couples worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
