"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Star,
  MapPin,
  Phone,
  Mail,
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])

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
    { number: "10,000+", label: "Happy Couples", icon: Heart },
    { number: "500+", label: "Verified Vendors", icon: Award },
    { number: "50+", label: "Cities Covered", icon: MapPin },
    { number: "99.9%", label: "Success Rate", icon: CheckCircle },
  ]

  const services = [
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture every precious moment with professional photographers and videographers",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Venues & Locations",
      description: "Find the perfect venue for your ceremony and reception",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Delicious cuisine and professional catering for your special day",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "DJs, live bands, and entertainment to keep your guests dancing",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Palette,
      title: "Decoration & Flowers",
      description: "Beautiful floral arrangements and decorations to set the mood",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Luxury transportation for the bride, groom, and wedding party",
      color: "from-gray-400 to-gray-600",
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

  return (
    <div className="min-h-screen">
      {/* Hero Section - No Search Bar */}
      <section className="relative bg-gradient-to-br from-gold-50 to-bronze-50 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-20 animate-sparkle">
          <Sparkles className="h-8 w-8 text-gold-400" />
        </div>
        <div className="absolute bottom-32 left-20 animate-sparkle" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-6 w-6 text-bronze-400" />
        </div>
        <div className="absolute top-1/2 left-10 animate-sparkle" style={{ animationDelay: "2s" }}>
          <Sparkles className="h-5 w-5 text-gold-500" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Dream Wedding
              <br />
              <span className="gradient-text">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with Ethiopia's finest wedding vendors and create unforgettable memories. From venues to
              photography, we've got everything you need for your perfect day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/packages">
                <Button size="lg" className="btn-luxury text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl">
                  Explore Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/vendors">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 rounded-full border-2 border-gold-300 hover:bg-gold-50 hover:border-gold-400 bg-transparent shadow-lg"
                >
                  Browse Vendors
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

      {/* Featured Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular wedding packages, carefully curated to make your special day perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className="card-luxury border-0 overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold-500 text-white">{pkg.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleFavorite(pkg.id)}
                      className="bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 rounded-full shadow-lg"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          favorites.includes(pkg.id) ? "fill-red-500 text-red-500" : ""
                        } transition-colors`}
                      />
                    </Button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <pkg.icon className="h-5 w-5 text-gold-600" />
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                        <span className="text-sm font-medium">{pkg.rating}</span>
                        <span className="text-sm text-gray-500">({pkg.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {pkg.features.slice(0, 2).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gold-100 text-gold-700">
                          {feature}
                        </Badge>
                      ))}
                      {pkg.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                          +{pkg.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-gold-600">{pkg.price}</div>
                      <div className="flex space-x-2">
                        <Link href={`/packages/${pkg.id}`}>
                          <Button size="sm" className="btn-luxury">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/packages">
              <Button size="lg" variant="outline" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-bronze-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for your perfect wedding day, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-luxury text-center group hover:scale-105 transition-all duration-300 border-0"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Couples <span className="gradient-text">Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real couples who found their perfect wedding through Memosheria
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <Card className="card-luxury border-0 mx-4">
                      <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                          ))}
                        </div>
                        <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex items-center justify-center space-x-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full object-cover"
                          />
                          <div className="text-left">
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.location}</div>
                            <div className="text-xs text-gold-600">{testimonial.weddingDate}</div>
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-50 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-50 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-gold-500" : "bg-gray-300"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of couples who have found their perfect wedding vendors through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 rounded-full bg-white text-gold-600 hover:bg-gray-100 shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-gold-600 bg-transparent shadow-lg"
              >
                Talk to Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-gray-400">+251 911 123456</p>
                <p className="text-gray-400">Mon-Fri 9AM-6PM EAT</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-gray-400">hello@memosheria.com</p>
                <p className="text-gray-400">We respond within 24 hours</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-400">Bole Road, Addis Ababa</p>
                <p className="text-gray-400">Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
