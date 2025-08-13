"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Star,
  MapPin,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award,
  Camera,
  Music,
  Utensils,
  Car,
  Palette,
  ChevronLeft,
  ChevronRight,
  Users,
  Calendar,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const { user } = useAuth()

  const featuredPackages = [
    {
      id: 1,
      title: "Complete Wedding Photography",
      description: "Professional photography coverage for your entire wedding day",
      price: "Starting from ETB 25,000",
      image: "/wedding-photo-premium.jpg",
      rating: 4.9,
      reviews: 127,
      category: "Photography",
      icon: Camera,
      features: ["8-hour coverage", "2 photographers", "500+ edited photos", "Online gallery"],
      badge: "Most Popular",
      discount: "20% OFF",
    },
    {
      id: 2,
      title: "Elegant Garden Venue",
      description: "Beautiful outdoor venue perfect for romantic ceremonies",
      price: "Starting from ETB 45,000",
      image: "/wedding-venue-garden.jpg",
      rating: 4.8,
      reviews: 89,
      category: "Venue",
      icon: MapPin,
      features: ["200 guest capacity", "Garden ceremony", "Reception hall", "Catering kitchen"],
      badge: "Premium",
      discount: "15% OFF",
    },
    {
      id: 3,
      title: "Gourmet Catering Experience",
      description: "Exquisite dining experience with traditional and international cuisine",
      price: "Starting from ETB 350/person",
      image: "/wedding-catering-gourmet.jpg",
      rating: 4.9,
      reviews: 156,
      category: "Catering",
      icon: Utensils,
      features: ["3-course meal", "Vegetarian options", "Professional service", "Custom menu"],
      badge: "Chef's Choice",
      discount: "10% OFF",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Almaz & Dawit",
      location: "Addis Ababa",
      text: "Memosheria made our wedding planning so much easier! We found amazing vendors and everything was perfectly coordinated.",
      rating: 5,
      image: "/couple-1.jpg",
      weddingDate: "June 2024",
    },
    {
      id: 2,
      name: "Sara & Michael",
      location: "Bahir Dar",
      text: "The platform helped us discover vendors we never would have found otherwise. Our wedding was absolutely perfect!",
      rating: 5,
      image: "/couple-2.jpg",
      weddingDate: "August 2024",
    },
    {
      id: 3,
      name: "Hanan & Yonas",
      location: "Hawassa",
      text: "From photography to catering, every vendor exceeded our expectations. Thank you Memosheria for making our day special!",
      rating: 5,
      image: "/couple-3.png",
      weddingDate: "September 2024",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Happy Couples", icon: Heart, color: "text-pink-500" },
    { number: "500+", label: "Verified Vendors", icon: Award, color: "text-gold-500" },
    { number: "50+", label: "Cities Covered", icon: MapPin, color: "text-blue-500" },
    { number: "99.9%", label: "Success Rate", icon: CheckCircle, color: "text-green-500" },
  ]

  const services = [
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture every precious moment with professional photographers and videographers",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Venues & Locations",
      description: "Find the perfect venue for your ceremony and reception",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Delicious cuisine and professional catering for your special day",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "DJs, live bands, and entertainment to keep your guests dancing",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Palette,
      title: "Decoration & Flowers",
      description: "Beautiful floral arrangements and decorations to set the mood",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Luxury transportation for the bride, groom, and wedding party",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
    },
  ]

  const features = [
    {
      icon: Calendar,
      title: "Smart Planning",
      description: "AI-powered timeline management and automated reminders",
      color: "from-gold-400 to-gold-600",
    },
    {
      icon: Users,
      title: "Verified Vendors",
      description: "Connect with 500+ verified wedding professionals",
      color: "from-bronze-400 to-bronze-600",
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Bank-level security with instant booking confirmation",
      color: "from-gold-500 to-bronze-500",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const toggleFavorite = (packageId: number) => {
    setFavorites((prev) => (prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId]))
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleBookNow = (packageId: number) => {
    if (!user) {
      window.location.href = `/login?redirect=/packages/${packageId}?action=book`
      return
    }
    window.location.href = `/packages/${packageId}?action=book`
  }

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gold-50 via-white to-bronze-50 pt-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/20 to-bronze-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-4 h-4 bg-gold-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-6 w-6 text-gold-400 opacity-70" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-3 h-3 bg-bronze-400 rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: "3s" }}>
          <Heart className="h-5 w-5 text-pink-400 opacity-60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Your Perfect</span>
                <br />
                <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-bronze-400 bg-clip-text text-transparent animate-gradient">
                  Wedding Journey
                </span>
                <br />
                <span className="text-gray-900">Starts Here</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your dream wedding into reality with Ethiopia's most trusted wedding platform. Connect with
                premium vendors, plan seamlessly, and create memories that last forever.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/register">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Start Planning Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
              <Link href="/packages">
                <Button
                  size="lg"
                  variant="outline"
                  className="group text-lg px-10 py-6 rounded-full border-2 border-gold-400 text-gold-600 hover:bg-gold-400 hover:text-white bg-white/80 backdrop-blur-sm shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <ArrowRight className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Browse Packages
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gold-200/50">
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/5 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Most Popular Packages
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Wedding Packages
              <br />
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Loved by Couples
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular wedding packages, carefully curated to make your special day perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    width={400}
                    height={280}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-gradient-to-r from-gold-500 to-bronze-500 text-white px-3 py-1 shadow-lg">
                      {pkg.badge}
                    </Badge>
                    <Badge className="bg-red-500 text-white px-3 py-1 shadow-lg animate-pulse">{pkg.discount}</Badge>
                  </div>

                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(pkg.id)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 rounded-full shadow-lg backdrop-blur-sm"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(pkg.id) ? "fill-red-500 text-red-500" : ""
                      } transition-colors`}
                    />
                  </Button>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <pkg.icon className="h-5 w-5 text-gold-600" />
                      <Badge variant="secondary" className="bg-gold-100 text-gold-700">
                        {pkg.category}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-sm text-gray-500">({pkg.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{pkg.description}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {pkg.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-2xl font-bold text-gold-600">{pkg.price}</div>
                      <Button
                        className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        onClick={() => handleBookNow(pkg.id)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/packages">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 rounded-full border-2 border-gold-300 hover:bg-gold-50 hover:border-gold-400 bg-transparent text-gold-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Complete Wedding Solutions
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                For Your Special Day
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From planning to execution, we provide all the tools and services to make your wedding perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Why Choose Memosheria
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Planning Made
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Simple & Secure
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform combines cutting-edge technology with personalized service to make your wedding planning
                journey smooth and enjoyable.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <Image
                  src="/elegant-outdoor-wedding.png"
                  alt="Wedding Planning Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gold-50 to-bronze-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Happy Couples
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Love Stories &
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real couples who found their perfect wedding through Memosheria
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="border-0 shadow-2xl bg-white">
                      <CardContent className="p-12 text-center">
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed italic font-medium">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex items-center justify-center space-x-6">
                          <div className="relative">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="rounded-full object-cover ring-4 ring-gold-200"
                            />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-gold-400 to-bronze-400 rounded-full flex items-center justify-center">
                              <Heart className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="text-xl font-bold text-gray-900">{testimonial.name}</div>
                            <div className="text-gray-600">{testimonial.location}</div>
                            <div className="text-sm text-gold-600 font-medium">{testimonial.weddingDate}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-xl hover:bg-gray-50 rounded-full w-12 h-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-xl hover:bg-gray-50 rounded-full w-12 h-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-gold-500 to-bronze-500 w-12"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/10 to-bronze-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              Join 10,000+ Happy Couples
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Plan Your
              <br />
              <span className="bg-gradient-to-r from-gold-400 to-bronze-400 bg-clip-text text-transparent">
                Dream Wedding?
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of couples who have planned their perfect day with Memosheria. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-6 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-bronze-500 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Memosheria</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making wedding dreams come true, one celebration at a time. Your perfect day starts here.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-700 transition-colors cursor-pointer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-700 transition-colors cursor-pointer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-gold-400">For Couples</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    href="/packages"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Browse Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Find Vendors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/inspiration"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Get Inspired
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Planning Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-gold-400">For Vendors</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    href="/vendor/register"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Join as Vendor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendor"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Vendor Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendor/pricing"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendor/resources"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-gold-400">Support</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Memosheria. All rights reserved. Made with ❤️ for couples in Ethiopia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
