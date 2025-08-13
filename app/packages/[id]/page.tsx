"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Heart,
  MapPin,
  Calendar,
  CheckCircle,
  Shield,
  Award,
  MessageCircle,
  Share2,
  ArrowLeft,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - in real app, this would come from API
const mockPackageData = {
  "1": {
    id: "1",
    title: "Premium Photography Package",
    description:
      "Complete wedding photography with 8 hours coverage, engagement session, and premium album. Our award-winning photographers capture every precious moment of your special day with artistic flair and professional expertise.",
    price: 2500,
    originalPrice: 3000,
    vendor: {
      id: "1",
      name: "Elite Moments Studio",
      location: "Addis Ababa, Ethiopia",
      rating: 4.9,
      reviews: 156,
      verified: true,
      avatar: "/vendor-photographer.jpg",
      description:
        "Award-winning wedding photographers with over 8 years of experience capturing love stories across Ethiopia.",
      responseTime: "Within 2 hours",
      completedWeddings: 200,
    },
    images: ["/wedding-photo-premium.jpg", "/portfolio-1.jpg", "/portfolio-2.jpg", "/wedding-photo-1.jpg"],
    features: [
      "8 hours of wedding day coverage",
      "500+ professionally edited photos",
      "Online gallery with download access",
      "Print release for all images",
      "Complimentary engagement session",
      "Premium wedding album (50 pages)",
      "USB drive with all photos",
      "Second photographer included",
    ],
    category: "photography",
    rating: 4.9,
    reviews: 156,
    badge: "Most Popular",
    availability: "Available",
    included: [
      "Pre-wedding consultation",
      "Wedding day timeline planning",
      "Professional editing and retouching",
      "24/7 customer support",
      "Backup photographer on standby",
    ],
    addOns: [
      { name: "Additional hour of coverage", price: 200 },
      { name: "Same-day photo preview", price: 150 },
      { name: "Extra wedding album", price: 300 },
      { name: "Canvas prints (set of 3)", price: 250 },
    ],
    testimonials: [
      {
        name: "Sarah & John",
        text: "Elite Moments captured our wedding beautifully! Every photo tells our story perfectly.",
        rating: 5,
        image: "/couple-1.jpg",
      },
      {
        name: "Meron & Daniel",
        text: "Professional, creative, and so easy to work with. Highly recommend!",
        rating: 5,
        image: "/couple-2.jpg",
      },
    ],
  },
  "2": {
    id: "2",
    title: "Elegant Garden Venue",
    description:
      "Beautiful outdoor garden venue for up to 150 guests with bridal suite and catering facilities. Perfect for couples who want a romantic outdoor celebration surrounded by nature's beauty.",
    price: 5000,
    originalPrice: 5500,
    vendor: {
      id: "2",
      name: "Enchanted Gardens",
      location: "Addis Ababa, Ethiopia",
      rating: 4.8,
      reviews: 89,
      verified: true,
      avatar: "/vendor-venue.jpg",
      description: "Premier garden venue specializing in outdoor weddings with elegant indoor backup options.",
      responseTime: "Within 4 hours",
      completedWeddings: 150,
    },
    images: ["/wedding-venue-garden.jpg", "/elegant-outdoor-wedding.png", "/venue-1.jpg", "/venue-2.jpg"],
    features: [
      "150 guest capacity",
      "Beautiful garden ceremony space",
      "Elegant reception area",
      "Bridal suite for preparation",
      "Catering kitchen facilities",
      "Free parking for 50 cars",
      "Professional lighting setup",
      "Sound system included",
    ],
    category: "venue",
    rating: 4.8,
    reviews: 89,
    badge: "Premium",
    availability: "Limited",
    included: ["Venue coordinator", "Setup and cleanup service", "Tables and chairs", "Basic lighting", "Sound system"],
    addOns: [
      { name: "Additional decorative lighting", price: 500 },
      { name: "Extended venue hours", price: 300 },
      { name: "Bridal suite upgrade", price: 200 },
      { name: "Additional parking space", price: 150 },
    ],
    testimonials: [
      {
        name: "Hanan & Ahmed",
        text: "The garden setting was absolutely magical! Perfect venue for our dream wedding.",
        rating: 5,
        image: "/couple-1.jpg",
      },
      {
        name: "Bethlehem & Yonas",
        text: "Beautiful venue with excellent service. The staff made everything perfect.",
        rating: 4,
        image: "/couple-2.jpg",
      },
    ],
  },
  "3": {
    id: "3",
    title: "Gourmet Catering Experience",
    description:
      "Premium catering service with customizable menus and professional service staff. Featuring traditional Ethiopian cuisine alongside international favorites for a memorable dining experience.",
    price: 4200,
    originalPrice: 4800,
    vendor: {
      id: "3",
      name: "Gourmet Celebrations",
      location: "Addis Ababa, Ethiopia",
      rating: 4.9,
      reviews: 203,
      verified: true,
      avatar: "/catering-1.jpg",
      description:
        "Premium catering service specializing in fusion of traditional Ethiopian and international cuisine.",
      responseTime: "Within 1 hour",
      completedWeddings: 300,
    },
    images: ["/wedding-catering-gourmet.jpg", "/catering-1.jpg", "/catering-2.jpg", "/catering-3.jpg"],
    features: [
      "3-course plated dinner service",
      "Open bar package included",
      "Traditional Ethiopian dishes",
      "International cuisine options",
      "Wedding cake included",
      "Dietary accommodations",
      "Professional service staff",
      "Coffee ceremony",
    ],
    category: "catering",
    rating: 4.9,
    reviews: 203,
    badge: "Chef's Choice",
    availability: "Available",
    included: ["Menu tasting session", "Professional chef service", "Serving staff", "Table setup", "Cleanup service"],
    addOns: [
      { name: "Premium wine selection", price: 800 },
      { name: "Late night snack station", price: 400 },
      { name: "Additional course", price: 300 },
      { name: "Specialty cocktail bar", price: 600 },
    ],
    testimonials: [
      {
        name: "Almaz & Tesfaye",
        text: "The food was absolutely incredible! Our guests couldn't stop talking about it.",
        rating: 5,
        image: "/couple-1.jpg",
      },
      {
        name: "Helen & Marcus",
        text: "Perfect blend of traditional and modern cuisine. Excellent service!",
        rating: 5,
        image: "/couple-2.jpg",
      },
    ],
  },
  "4": {
    id: "4",
    title: "Live Band & DJ Combo",
    description:
      "Professional live band with DJ services for ceremony and reception. Keep your guests dancing all night with our talented musicians and state-of-the-art sound equipment.",
    price: 3200,
    originalPrice: 3600,
    vendor: {
      id: "4",
      name: "Harmony Entertainment",
      location: "Addis Ababa, Ethiopia",
      rating: 4.7,
      reviews: 134,
      verified: true,
      avatar: "/vendor-music.jpg",
      description: "Professional entertainment company providing live music and DJ services for weddings and events.",
      responseTime: "Within 3 hours",
      completedWeddings: 180,
    },
    images: ["/wedding-music-band.jpg", "/music-1.jpg", "/music-2.jpg", "/music-3.jpg"],
    features: [
      "4-piece live band",
      "Professional DJ services",
      "Complete sound system",
      "Lighting package included",
      "MC services",
      "Music for ceremony",
      "Reception entertainment",
      "Backup equipment",
    ],
    category: "music",
    rating: 4.7,
    reviews: 134,
    badge: "Trending",
    availability: "Available",
    included: ["Sound engineer", "Equipment setup", "Music consultation", "Microphones", "Basic lighting"],
    addOns: [
      { name: "Extended performance time", price: 500 },
      { name: "Premium lighting package", price: 400 },
      { name: "Additional band members", price: 600 },
      { name: "Special song arrangements", price: 300 },
    ],
    testimonials: [
      {
        name: "Rahel & Dawit",
        text: "Amazing music! The band kept everyone dancing all night long.",
        rating: 5,
        image: "/couple-1.jpg",
      },
      {
        name: "Meron & Daniel",
        text: "Professional and talented musicians. Perfect for our celebration!",
        rating: 4,
        image: "/couple-2.jpg",
      },
    ],
  },
  "5": {
    id: "5",
    title: "Floral Design Package",
    description:
      "Complete floral arrangements including bridal bouquet, centerpieces, and ceremony decor. Our expert florists create stunning arrangements that perfectly complement your wedding theme.",
    price: 1800,
    originalPrice: 2200,
    vendor: {
      id: "5",
      name: "Bloom & Blossom",
      location: "Addis Ababa, Ethiopia",
      rating: 4.8,
      reviews: 167,
      verified: true,
      avatar: "/floral-1.jpg",
      description: "Creative floral designers specializing in wedding arrangements with fresh, seasonal flowers.",
      responseTime: "Within 2 hours",
      completedWeddings: 120,
    },
    images: ["/wedding-flowers-elegant.jpg", "/floral-1.jpg", "/floral-2.jpg", "/floral-3.jpg"],
    features: [
      "Bridal bouquet design",
      "Ceremony arch decoration",
      "Reception centerpieces",
      "Boutonnières for groomsmen",
      "Flower petals for aisle",
      "Corsages for mothers",
      "Altar arrangements",
      "Fresh seasonal flowers",
    ],
    category: "decoration",
    rating: 4.8,
    reviews: 167,
    badge: "Seasonal",
    availability: "Available",
    included: ["Design consultation", "Flower selection", "Arrangement setup", "Delivery service", "Care instructions"],
    addOns: [
      { name: "Premium flower upgrade", price: 400 },
      { name: "Additional centerpieces", price: 200 },
      { name: "Flower girl arrangements", price: 150 },
      { name: "Ceremony aisle decor", price: 300 },
    ],
    testimonials: [
      {
        name: "Sarah & Michael",
        text: "The floral arrangements were absolutely stunning! Exceeded our expectations.",
        rating: 5,
        image: "/couple-1.jpg",
      },
      {
        name: "Hanan & Ahmed",
        text: "Beautiful flowers that perfectly matched our wedding theme.",
        rating: 5,
        image: "/couple-2.jpg",
      },
    ],
  },
  "6": {
    id: "6",
    title: "Luxury Transportation",
    description:
      "Premium wedding transportation with decorated luxury vehicles and professional chauffeur service. Arrive in style on your special day with our elegant transportation options.",
    price: 800,
    originalPrice: 1000,
    vendor: {
      id: "6",
      name: "Elite Wedding Cars",
      location: "Addis Ababa, Ethiopia",
      rating: 4.6,
      reviews: 92,
      verified: true,
      avatar: "/wedding-car-luxury.jpg",
      description: "Luxury transportation service specializing in wedding cars and special event vehicles.",
      responseTime: "Within 4 hours",
      completedWeddings: 85,
    },
    images: ["/wedding-car-luxury.jpg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    features: [
      "Luxury sedan vehicle",
      "Professional chauffeur",
      "Wedding decorations",
      "Red carpet service",
      "Complimentary champagne",
      "Photo opportunities",
      "Flexible timing",
      "Backup vehicle available",
    ],
    category: "transportation",
    rating: 4.6,
    reviews: 92,
    badge: "Luxury",
    availability: "Limited",
    included: [
      "Vehicle decoration",
      "Professional driver",
      "Fuel and insurance",
      "Route planning",
      "Waiting time included",
    ],
    addOns: [
      { name: "Additional vehicle", price: 400 },
      { name: "Extended service hours", price: 200 },
      { name: "Premium decoration", price: 150 },
      { name: "Photography session", price: 300 },
    ],
    testimonials: [
      {
        name: "Bethlehem & Yonas",
        text: "Elegant and professional service. The car was beautifully decorated!",
        rating: 5,
        image: "/couple-1.jpg",
      },
      {
        name: "Almaz & Tesfaye",
        text: "Reliable and luxurious transportation. Made our day extra special.",
        rating: 4,
        image: "/couple-2.jpg",
      },
    ],
  },
  "7": {
    id: "7",
    title: "Traditional Wedding Cake",
    description:
      "Custom designed wedding cakes with traditional and modern flavors. Our expert bakers create beautiful, delicious cakes that serve as the perfect centerpiece for your celebration.",
    price: 1200,
    originalPrice: 1500,
    vendor: {
      id: "7",
      name: "Sweet Dreams Bakery",
      location: "Addis Ababa, Ethiopia",
      rating: 4.7,
      reviews: 78,
      verified: true,
      avatar: "/cake-1.jpg",
      description: "Artisan bakery specializing in custom wedding cakes with traditional and contemporary designs.",
      responseTime: "Within 6 hours",
      completedWeddings: 95,
    },
    images: ["/cake-1.jpg", "/cake-2.jpg", "/cake-3.jpg", "/placeholder.svg"],
    features: [
      "Custom cake design",
      "Multiple flavor options",
      "Traditional decorations",
      "Modern styling available",
      "Cake tasting session",
      "Delivery and setup",
      "Cutting ceremony guidance",
      "Leftover packaging",
    ],
    category: "cakes",
    rating: 4.7,
    reviews: 78,
    badge: "Custom Made",
    availability: "Available",
    included: ["Design consultation", "Cake tasting", "Custom decorations", "Delivery service", "Setup assistance"],
    addOns: [
      { name: "Additional tier", price: 300 },
      { name: "Premium decorations", price: 200 },
      { name: "Groom's cake", price: 400 },
      { name: "Cake cutting set", price: 100 },
    ],
    testimonials: [
      {
        name: "Helen & Marcus",
        text: "The cake was not only beautiful but tasted amazing! Everyone loved it.",
        rating: 5,
        image: "/couple-1.jpg",
      },
      {
        name: "Rahel & Dawit",
        text: "Perfect custom design that matched our wedding theme perfectly.",
        rating: 4,
        image: "/couple-2.jpg",
      },
    ],
  },
  "8": {
    id: "8",
    title: "Bridal Makeup & Hair",
    description:
      "Professional bridal makeup and hairstyling for your perfect wedding look. Our experienced stylists create stunning looks that enhance your natural beauty and last throughout your special day.",
    price: 800,
    originalPrice: 1000,
    vendor: {
      id: "8",
      name: "Beauty Bliss Studio",
      location: "Addis Ababa, Ethiopia",
      rating: 4.8,
      reviews: 95,
      verified: true,
      avatar: "/elegant-bride.png",
      description: "Professional beauty studio specializing in bridal makeup and hairstyling with years of experience.",
      responseTime: "Within 2 hours",
      completedWeddings: 110,
    },
    images: ["/elegant-bride.png", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    features: [
      "Professional bridal makeup",
      "Wedding hairstyling",
      "Trial session included",
      "Touch-up kit provided",
      "Long-lasting products",
      "Traditional and modern styles",
      "On-location service",
      "Photography-ready finish",
    ],
    category: "beauty",
    rating: 4.8,
    reviews: 95,
    badge: "Bridal Special",
    availability: "Available",
    included: [
      "Consultation session",
      "Trial makeup and hair",
      "Wedding day service",
      "Touch-up products",
      "Travel to venue",
    ],
    addOns: [
      { name: "Bridesmaids makeup", price: 300 },
      { name: "Mother of bride makeup", price: 200 },
      { name: "Additional trial session", price: 150 },
      { name: "Hair accessories", price: 100 },
    ],
    testimonials: [
      {
        name: "Sarah & Michael",
        text: "I felt absolutely beautiful! The makeup lasted all day and looked perfect in photos.",
        rating: 5,
        image: "/couple-1.jpg",
      },
      {
        name: "Meron & Daniel",
        text: "Professional and talented team. Made me feel like a princess on my wedding day!",
        rating: 5,
        image: "/couple-2.jpg",
      },
    ],
  },
}

export default function PackageDetailPage() {
  const params = useParams()
  const router = useRouter()
  const packageId = params.id as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)

  const packageData = mockPackageData[packageId as keyof typeof mockPackageData]

  if (!packageData) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <p className="text-gray-600 mb-6">The package you're looking for doesn't exist.</p>
          <Link href="/packages">
            <Button className="btn-luxury">Browse All Packages</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleBookNow = () => {
    setShowBookingModal(true)
  }

  const handleContactVendor = () => {
    router.push(`/vendors/${packageData.vendor.id}?action=contact`)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gold-50 to-bronze-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Button variant="ghost" onClick={() => router.back()} className="mr-4 hover:bg-gold-100">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gold-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-gold-600">
                Packages
              </Link>
              <span>/</span>
              <span className="text-gray-900">{packageData.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card className="card-luxury border-0 overflow-hidden">
              <div className="relative">
                <div className="aspect-video relative">
                  <Image
                    src={packageData.images[currentImageIndex] || "/placeholder.svg"}
                    alt={packageData.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <Badge className="bg-gold-500 text-white">{packageData.badge}</Badge>
                    {packageData.originalPrice > packageData.price && (
                      <Badge variant="destructive">Save ${packageData.originalPrice - packageData.price}</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex space-x-2 p-4 overflow-x-auto">
                  {packageData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? "border-gold-500" : "border-gray-200"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${packageData.title} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Package Details */}
            <Card className="card-luxury border-0">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{packageData.title}</CardTitle>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1 font-medium">
                          {packageData.rating} ({packageData.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {packageData.vendor.location}
                      </div>
                      <Badge
                        className={`text-xs ${
                          packageData.availability === "Available"
                            ? "bg-green-500 text-white"
                            : "bg-orange-500 text-white"
                        }`}
                      >
                        {packageData.availability}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">${packageData.price.toLocaleString()}</span>
                      {packageData.originalPrice > packageData.price && (
                        <span className="text-lg text-gray-500 line-through">
                          ${packageData.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">Starting price</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="vendor">Vendor</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="mt-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-600 leading-relaxed mb-6">{packageData.description}</p>

                      <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {packageData.included.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-3">Available Add-ons</h4>
                      <div className="space-y-3">
                        {packageData.addOns.map((addon, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm text-gray-700">{addon.name}</span>
                            <span className="font-semibold text-gray-900">+${addon.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {packageData.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gold-50 to-bronze-50 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-6">
                    <div className="space-y-6">
                      {packageData.testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-gray-200">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                  <div className="flex">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="vendor" className="mt-6">
                    <Card className="border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage
                              src={packageData.vendor.avatar || "/placeholder.svg"}
                              alt={packageData.vendor.name}
                            />
                            <AvatarFallback>{packageData.vendor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-bold text-gray-900">{packageData.vendor.name}</h3>
                              {packageData.vendor.verified && (
                                <Badge className="bg-green-500 text-white">
                                  <Shield className="h-3 w-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 mb-3">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-sm ml-1 font-medium">
                                  {packageData.vendor.rating} ({packageData.vendor.reviews} reviews)
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Clock className="h-4 w-4 mr-1" />
                                Responds {packageData.vendor.responseTime}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4">{packageData.vendor.description}</p>
                            <div className="flex space-x-3">
                              <Link href={`/vendors/${packageData.vendor.id}`}>
                                <Button variant="outline" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                                  View Profile
                                </Button>
                              </Link>
                              <Button
                                variant="outline"
                                onClick={handleContactVendor}
                                className="border-gold-300 hover:bg-gold-50 bg-transparent"
                              >
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Contact
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="card-luxury border-0 sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Book This Package</CardTitle>
                <CardDescription>Secure your date with this vendor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gold-50 to-bronze-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${packageData.price.toLocaleString()}</span>
                      {packageData.originalPrice > packageData.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${packageData.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  {packageData.originalPrice > packageData.price && (
                    <Badge variant="destructive" className="text-xs">
                      Save ${packageData.originalPrice - packageData.price}
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Availability:</span>
                    <Badge
                      className={`text-xs ${
                        packageData.availability === "Available"
                          ? "bg-green-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {packageData.availability}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Response time:</span>
                    <span className="font-medium">{packageData.vendor.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Completed weddings:</span>
                    <span className="font-medium">{packageData.vendor.completedWeddings}+</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full btn-luxury" onClick={handleBookNow}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gold-300 hover:bg-gold-50 bg-transparent"
                    onClick={handleContactVendor}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Vendor
                  </Button>
                </div>

                <div className="text-center pt-4 border-t">
                  <p className="text-xs text-gray-500">Free cancellation up to 48 hours before event</p>
                </div>
              </CardContent>
            </Card>

            {/* Vendor Quick Info */}
            <Card className="card-luxury border-0">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">About the Vendor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={packageData.vendor.avatar || "/placeholder.svg"} alt={packageData.vendor.name} />
                    <AvatarFallback>{packageData.vendor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{packageData.vendor.name}</h4>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs ml-1">
                        {packageData.vendor.rating} ({packageData.vendor.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{packageData.vendor.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{packageData.vendor.completedWeddings}+ weddings completed</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Responds {packageData.vendor.responseTime}</span>
                  </div>
                </div>
                <Link href={`/vendors/${packageData.vendor.id}`} className="block mt-4">
                  <Button variant="outline" className="w-full border-gold-300 hover:bg-gold-50 bg-transparent">
                    View Full Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Similar Packages */}
            <Card className="card-luxury border-0">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Similar Packages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: "2",
                    title: "Basic Photography Package",
                    price: 1800,
                    rating: 4.7,
                    image: "/wedding-photo-1.jpg",
                  },
                  {
                    id: "3",
                    title: "Deluxe Photography Package",
                    price: 3500,
                    rating: 4.9,
                    image: "/basic-wedding-photo.png",
                  },
                ].map((pkg) => (
                  <Link key={pkg.id} href={`/packages/${pkg.id}`}>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold-50 transition-colors cursor-pointer">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={pkg.image || "/placeholder.svg"}
                          alt={pkg.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{pkg.title}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs ml-1">{pkg.rating}</span>
                          </div>
                          <span className="font-bold text-gray-900 text-sm">${pkg.price}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Book {packageData.title}</CardTitle>
              <CardDescription>Fill in your details to proceed with booking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date</Label>
                <Input id="eventDate" type="date" className="border-gold-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guestCount">Number of Guests</Label>
                <Input id="guestCount" type="number" placeholder="150" className="border-gold-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Special Requirements</Label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-3 py-2 border border-gold-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
                  placeholder="Any special requirements or questions..."
                />
              </div>
              <div className="flex space-x-3">
                <Button className="flex-1 btn-luxury">Proceed to Booking</Button>
                <Button variant="outline" onClick={() => setShowBookingModal(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
