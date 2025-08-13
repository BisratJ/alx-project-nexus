"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Star,
  MapPin,
  CheckCircle,
  Camera,
  Music,
  Utensils,
  Car,
  Flower,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
  Share2,
  MessageCircle,
  Award,
  Shield,
  Globe,
  Heart,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for vendors
const vendorsData = {
  "1": {
    id: "1",
    name: "Garden Paradise Weddings",
    category: "Wedding Venues",
    rating: 4.8,
    reviewCount: 127,
    location: "Addis Ababa, Ethiopia",
    experience: "8 years",
    completedWeddings: 150,
    responseTime: "Within 2 hours",
    verified: true,
    coverImage: "/vendor-cover-venue.jpg",
    avatar: "/vendor-venue.jpg",
    description:
      "Garden Paradise Weddings specializes in creating magical outdoor wedding experiences in the heart of Addis Ababa. Our beautiful garden venue combines natural beauty with elegant sophistication, providing the perfect backdrop for your special day.",
    services: [
      "Garden wedding ceremonies",
      "Reception hosting",
      "Event coordination",
      "Catering services",
      "Photography packages",
      "Floral arrangements",
    ],
    portfolio: [
      "/wedding-venue-garden.jpg",
      "/elegant-outdoor-wedding.png",
      "/wedding-venue-1.jpg",
      "/venue-1.jpg",
      "/venue-2.jpg",
      "/venue-3.jpg",
    ],
    packages: [
      {
        id: "1",
        name: "Elegant Garden Wedding",
        price: "150,000 ETB",
        description: "Complete garden wedding package with all amenities",
        image: "/wedding-venue-garden.jpg",
      },
      {
        id: "2",
        name: "Intimate Garden Ceremony",
        price: "85,000 ETB",
        description: "Perfect for smaller, intimate celebrations",
        image: "/elegant-outdoor-wedding.png",
      },
      {
        id: "3",
        name: "Luxury Garden Experience",
        price: "220,000 ETB",
        description: "Premium package with luxury amenities",
        image: "/wedding-venue-1.jpg",
      },
    ],
    contact: {
      phone: "+251 911 123456",
      email: "info@gardenparadise.com",
      website: "www.gardenparadise.com",
      address: "Bole Road, Addis Ababa, Ethiopia",
    },
    stats: {
      totalEvents: 150,
      repeatClients: 45,
      averageRating: 4.8,
      responseRate: 98,
    },
    reviews: [
      {
        id: "1",
        name: "Sarah & Michael",
        rating: 5,
        date: "2024-01-15",
        comment:
          "Absolutely perfect venue! The garden setting was magical and the team was incredibly professional. Our guests are still talking about how beautiful everything was.",
        avatar: "/couple-1.jpg",
        event: "Garden Wedding",
      },
      {
        id: "2",
        name: "Hanan & Ahmed",
        rating: 5,
        date: "2024-01-10",
        comment:
          "Everything exceeded our expectations. The coordination was flawless and the attention to detail was amazing. Highly recommend!",
        avatar: "/couple-2.jpg",
        event: "Reception",
      },
      {
        id: "3",
        name: "Meron & Daniel",
        rating: 4,
        date: "2024-01-05",
        comment:
          "Beautiful venue and great service. The only minor issue was the music volume, but overall it was a wonderful experience.",
        avatar: "/couple-3.png",
        event: "Wedding Ceremony",
      },
    ],
    faqs: [
      {
        question: "What is your cancellation policy?",
        answer:
          "We offer full refund for cancellations made 60 days before the event. Cancellations within 30-60 days receive 50% refund, and within 30 days are non-refundable.",
      },
      {
        question: "Do you provide catering services?",
        answer:
          "Yes, we have an in-house catering team that specializes in both traditional Ethiopian and international cuisine. We can also work with external caterers if preferred.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "We have a beautiful covered pavilion that can accommodate all guests comfortably. The ceremony can be moved indoors while maintaining the elegant atmosphere.",
      },
      {
        question: "Can we visit the venue before booking?",
        answer:
          "We encourage couples to visit and see our facilities. Please contact us to schedule a tour at your convenience.",
      },
    ],
    awards: [
      "Best Wedding Venue 2023 - Ethiopian Wedding Awards",
      "Excellence in Service 2022 - Hospitality Association",
      "Top Rated Venue 2021 - Wedding Wire Ethiopia",
    ],
  },
  "2": {
    id: "2",
    name: "Moments Photography Studio",
    category: "Photography",
    rating: 4.9,
    reviewCount: 89,
    location: "Addis Ababa, Ethiopia",
    experience: "12 years",
    completedWeddings: 300,
    responseTime: "Within 1 hour",
    verified: true,
    coverImage: "/vendor-cover-photo.jpg",
    avatar: "/vendor-photographer.jpg",
    description:
      "Moments Photography Studio captures the essence of your special day with artistic flair and professional expertise. Our award-winning photographers specialize in creating timeless, emotional images that tell your unique love story.",
    services: [
      "Wedding photography",
      "Engagement sessions",
      "Pre-wedding shoots",
      "Event photography",
      "Portrait sessions",
      "Photo editing & retouching",
    ],
    portfolio: [
      "/wedding-photo-premium.jpg",
      "/photographer.png",
      "/portfolio-1.jpg",
      "/portfolio-2.jpg",
      "/wedding-photo-1.jpg",
      "/couple-1.jpg",
    ],
    packages: [
      {
        id: "1",
        name: "Premium Photography Package",
        price: "45,000 ETB",
        description: "10 hours coverage with 2 photographers",
        image: "/wedding-photo-premium.jpg",
      },
      {
        id: "2",
        name: "Essential Photography",
        price: "25,000 ETB",
        description: "6 hours coverage with 1 photographer",
        image: "/portfolio-1.jpg",
      },
      {
        id: "3",
        name: "Luxury Photography Experience",
        price: "65,000 ETB",
        description: "Full day coverage with engagement session",
        image: "/portfolio-2.jpg",
      },
    ],
    contact: {
      phone: "+251 911 234567",
      email: "hello@momentsstudio.com",
      website: "www.momentsstudio.com",
      address: "Kazanchis, Addis Ababa, Ethiopia",
    },
    stats: {
      totalEvents: 300,
      repeatClients: 85,
      averageRating: 4.9,
      responseRate: 99,
    },
    reviews: [
      {
        id: "1",
        name: "Bethlehem & Yonas",
        rating: 5,
        date: "2024-01-20",
        comment:
          "The photos are absolutely stunning! They captured every emotion and moment perfectly. The engagement session was also amazing.",
        avatar: "/couple-1.jpg",
        event: "Wedding Photography",
      },
      {
        id: "2",
        name: "Rahel & Dawit",
        rating: 5,
        date: "2024-01-12",
        comment:
          "Professional, creative, and so easy to work with. The online gallery made sharing with family abroad so convenient.",
        avatar: "/couple-2.jpg",
        event: "Photography Package",
      },
    ],
    faqs: [
      {
        question: "How long until we receive our photos?",
        answer:
          "You'll receive a preview of 10 photos on the same day, and the full gallery of 500+ edited photos within 4-6 weeks.",
      },
      {
        question: "Do you provide raw/unedited photos?",
        answer:
          "We provide professionally edited photos only, as our editing is part of our artistic process. However, we can discuss specific requests.",
      },
      {
        question: "What if the weather is bad for outdoor photos?",
        answer:
          "We always have backup indoor locations and bring professional lighting equipment to ensure beautiful photos regardless of weather.",
      },
    ],
    awards: [
      "Wedding Photographer of the Year 2023",
      "Best Portrait Photography 2022",
      "Excellence in Wedding Photography 2021",
    ],
  },
  "3": {
    id: "3",
    name: "Royal Feast Catering",
    category: "Catering",
    rating: 4.7,
    reviewCount: 156,
    location: "Addis Ababa, Ethiopia",
    experience: "15 years",
    completedWeddings: 400,
    responseTime: "Within 3 hours",
    verified: true,
    coverImage: "/vendor-cover-catering.jpg",
    avatar: "/catering-1.jpg",
    description:
      "Royal Feast Catering brings exceptional culinary experiences to your special day. We specialize in traditional Ethiopian cuisine alongside international favorites, creating memorable dining experiences that celebrate your heritage.",
    services: [
      "Wedding catering",
      "Traditional Ethiopian cuisine",
      "International menu options",
      "Dietary accommodations",
      "Coffee ceremony",
      "Event staff services",
    ],
    portfolio: [
      "/wedding-catering-gourmet.jpg",
      "/catering-1.jpg",
      "/catering-2.jpg",
      "/catering-3.jpg",
      "/wedding-catering-1.jpg",
      "/cake-1.jpg",
    ],
    packages: [
      {
        id: "1",
        name: "Gourmet Catering Experience",
        price: "25,000 ETB",
        description: "Traditional & international menu for 150 guests",
        image: "/wedding-catering-gourmet.jpg",
      },
      {
        id: "2",
        name: "Essential Catering",
        price: "15,000 ETB",
        description: "Basic catering package for 100 guests",
        image: "/catering-1.jpg",
      },
      {
        id: "3",
        name: "Luxury Feast",
        price: "40,000 ETB",
        description: "Premium catering with chef service",
        image: "/catering-2.jpg",
      },
    ],
    contact: {
      phone: "+251 911 345678",
      email: "info@royalfeast.com",
      website: "www.royalfeast.com",
      address: "Megenagna, Addis Ababa, Ethiopia",
    },
    stats: {
      totalEvents: 400,
      repeatClients: 120,
      averageRating: 4.7,
      responseRate: 95,
    },
    reviews: [
      {
        id: "1",
        name: "Almaz & Tesfaye",
        rating: 5,
        date: "2024-01-18",
        comment:
          "The food was absolutely incredible! Our guests couldn't stop talking about the injera and the international dishes were perfect too.",
        avatar: "/couple-1.jpg",
        event: "Wedding Catering",
      },
      {
        id: "2",
        name: "Helen & Marcus",
        rating: 4,
        date: "2024-01-08",
        comment:
          "Great food and professional service. The coffee ceremony was a beautiful touch that our families loved.",
        avatar: "/couple-2.jpg",
        event: "Catering Service",
      },
    ],
    faqs: [
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and religious dietary requirements.",
      },
      {
        question: "Is the tasting session included?",
        answer: "Yes, we include one complimentary tasting session for the couple to finalize the menu selection.",
      },
      {
        question: "What happens to leftover food?",
        answer: "We provide proper packaging for leftovers that you can take home or distribute to family members.",
      },
    ],
    awards: ["Best Catering Service 2023", "Excellence in Traditional Cuisine 2022", "Top Wedding Caterer 2021"],
  },
}

export default function VendorProfilePage() {
  const params = useParams()
  const vendorId = params.id as string
  const vendorData = vendorsData[vendorId as keyof typeof vendorsData]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  })

  useEffect(() => {
    // Check if vendor is favorited (mock implementation)
    const favorites = JSON.parse(localStorage.getItem("vendorFavorites") || "[]")
    setIsFavorited(favorites.includes(vendorId))
  }, [vendorId])

  if (!vendorData) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Vendor Not Found</h1>
          <Link href="/vendors">
            <Button>Back to Vendors</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("vendorFavorites") || "[]")
    if (isFavorited) {
      const newFavorites = favorites.filter((id: string) => id !== vendorId)
      localStorage.setItem("vendorFavorites", JSON.stringify(newFavorites))
      setIsFavorited(false)
    } else {
      favorites.push(vendorId)
      localStorage.setItem("vendorFavorites", JSON.stringify(favorites))
      setIsFavorited(true)
    }
  }

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock contact submission
    alert("Message sent! The vendor will contact you within their response time.")
    setIsContactOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vendorData.portfolio.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vendorData.portfolio.length) % vendorData.portfolio.length)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Photography":
        return Camera
      case "Catering":
        return Utensils
      case "Music & Entertainment":
        return Music
      case "Transportation":
        return Car
      case "Floral Design":
        return Flower
      default:
        return MapPin
    }
  }

  const CategoryIcon = getCategoryIcon(vendorData.category)

  return (
    <div className="min-h-screen pt-20">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/vendors" className="flex items-center text-gray-600 hover:text-gold-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Vendors
          </Link>
        </div>
      </div>

      {/* Cover Image */}
      <section className="relative h-64 md:h-80 bg-black">
        <Image src={vendorData.coverImage || "/placeholder.svg"} alt={vendorData.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Vendor Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <div className="flex items-end space-x-6">
              <Avatar className="w-24 h-24 border-4 border-white">
                <AvatarImage src={vendorData.avatar || "/placeholder.svg"} alt={vendorData.name} />
                <AvatarFallback className="text-2xl">
                  {vendorData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">{vendorData.name}</h1>
                  {vendorData.verified && (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-lg">
                  <div className="flex items-center">
                    <CategoryIcon className="h-5 w-5 mr-2" />
                    {vendorData.category}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {vendorData.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    {vendorData.rating} ({vendorData.reviewCount} reviews)
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleFavorite}
                  className={`bg-white/20 border-white/30 hover:bg-white/30 ${isFavorited ? "text-red-400" : "text-white"}`}
                >
                  <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/20 border-white/30 hover:bg-white/30 text-white"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-gold-600">{vendorData.stats.totalEvents}</div>
                    <div className="text-sm text-gray-600">Events Completed</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-gold-600">{vendorData.experience}</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-gold-600">{vendorData.stats.responseRate}%</div>
                    <div className="text-sm text-gray-600">Response Rate</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-gold-600">{vendorData.responseTime}</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="packages">Packages</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {vendorData.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">{vendorData.description}</p>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Services Offered</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {vendorData.services.map((service, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {vendorData.awards && vendorData.awards.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Awards & Recognition</h4>
                          <div className="space-y-2">
                            {vendorData.awards.map((award, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Award className="h-4 w-4 text-gold-500 flex-shrink-0" />
                                <span className="text-gray-700">{award}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="portfolio" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Portfolio</CardTitle>
                      <CardDescription>View our recent work and projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Featured Image */}
                      <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={vendorData.portfolio[currentImageIndex] || "/placeholder.svg"}
                          alt="Portfolio image"
                          fill
                          className="object-cover"
                        />
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Thumbnail Grid */}
                      <div className="grid grid-cols-6 gap-2">
                        {vendorData.portfolio.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative h-16 rounded overflow-hidden ${
                              index === currentImageIndex ? "ring-2 ring-gold-500" : ""
                            }`}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Portfolio ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="packages" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Available Packages</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {vendorData.packages.map((pkg) => (
                        <Card key={pkg.id} className="group hover:shadow-lg transition-shadow">
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <Image
                              src={pkg.image || "/placeholder.svg"}
                              alt={pkg.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-bold text-lg text-gray-900">{pkg.name}</h4>
                                <p className="text-gray-600 text-sm">{pkg.description}</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-gold-600">{pkg.price}</span>
                                <Link href={`/packages/${pkg.id}`}>
                                  <Button size="sm" className="btn-luxury">
                                    View Details
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Customer Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{vendorData.rating}</span>
                        <span className="text-gray-600">({vendorData.reviewCount} reviews)</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {vendorData.reviews.map((review) => (
                        <Card key={review.id}>
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <Avatar>
                                <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                                <AvatarFallback>
                                  {review.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div>
                                    <h4 className="font-semibold">{review.name}</h4>
                                    <p className="text-sm text-gray-600">{review.event}</p>
                                  </div>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <div className="flex items-center mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="faq" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {vendorData.faqs.map((faq, index) => (
                          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                            <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="card-luxury border-0 sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                    <p className="text-gray-600">Response time: {vendorData.responseTime}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                      <DialogTrigger asChild>
                        <Button size="lg" className="w-full btn-luxury">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Contact {vendorData.name}</DialogTitle>
                          <DialogDescription>
                            Send a message and they'll get back to you within {vendorData.responseTime.toLowerCase()}.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleContact} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                value={contactData.name}
                                onChange={(e) => setContactData((prev) => ({ ...prev, name: e.target.value }))}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={contactData.email}
                                onChange={(e) => setContactData((prev) => ({ ...prev, email: e.target.value }))}
                                required
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                value={contactData.phone}
                                onChange={(e) => setContactData((prev) => ({ ...prev, phone: e.target.value }))}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="eventDate">Event Date</Label>
                              <Input
                                id="eventDate"
                                type="date"
                                value={contactData.eventDate}
                                onChange={(e) => setContactData((prev) => ({ ...prev, eventDate: e.target.value }))}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              value={contactData.message}
                              onChange={(e) => setContactData((prev) => ({ ...prev, message: e.target.value }))}
                              placeholder="Tell us about your event and requirements..."
                              rows={4}
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full btn-luxury">
                            Send Message
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="flex items-center bg-transparent">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center bg-transparent">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-600">
                    <p className="flex items-center justify-center mb-1">
                      <Shield className="h-4 w-4 mr-1" />
                      Verified vendor
                    </p>
                    <p>Professional service guaranteed</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">{vendorData.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">{vendorData.contact.email}</span>
                  </div>
                  {vendorData.contact.website && (
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-gray-400" />
                      <a
                        href={`https://${vendorData.contact.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-600 hover:text-gold-700 flex items-center"
                      >
                        {vendorData.contact.website}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  )}
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <span className="text-gray-700">{vendorData.contact.address}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Response Rate</span>
                      <span className="font-medium">{vendorData.stats.responseRate}%</span>
                    </div>
                    <Progress value={vendorData.stats.responseRate} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Customer Rating</span>
                      <span className="font-medium">{vendorData.stats.averageRating}/5.0</span>
                    </div>
                    <Progress value={vendorData.stats.averageRating * 20} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="text-center">
                      <div className="font-semibold text-lg text-gold-600">{vendorData.stats.repeatClients}</div>
                      <div className="text-xs text-gray-600">Repeat Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg text-gold-600">{vendorData.stats.totalEvents}</div>
                      <div className="text-xs text-gray-600">Total Events</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Category</span>
                    <Badge variant="secondary">{vendorData.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">{vendorData.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium">Addis Ababa</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Verified</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Vendors */}
      <section className="py-16 bg-gradient-to-br from-gold-50 to-bronze-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Similar Vendors</h2>
            <p className="text-xl text-gray-600">Other {vendorData.category.toLowerCase()} vendors you might like</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(vendorsData)
              .filter((vendor) => vendor.id !== vendorId && vendor.category === vendorData.category)
              .slice(0, 3)
              .map((vendor) => (
                <Card
                  key={vendor.id}
                  className="card-luxury border-0 group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={vendor.coverImage || "/placeholder.svg"}
                      alt={vendor.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold-500 text-white">{vendor.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">{vendor.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Addis Ababa
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            {vendor.rating}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">{vendor.completedWeddings} events completed</div>
                        <Link href={`/vendors/${vendor.id}`}>
                          <Button size="sm" className="btn-luxury">
                            View Profile
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
