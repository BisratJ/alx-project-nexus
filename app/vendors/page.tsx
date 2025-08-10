"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Star,
  MapPin,
  Shield,
  Award,
  Users,
  Camera,
  Building,
  Utensils,
  Music,
  Palette,
  Gift,
  Search,
  Heart,
  MessageCircle,
  Calendar,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const mockVendors = [
  {
    id: "1",
    name: "Elite Moments Studio",
    category: "Photography",
    location: "New York, NY",
    rating: 4.9,
    reviews: 156,
    verified: true,
    featured: true,
    avatar: "/vendor-photographer.jpg",
    coverImage: "/vendor-cover-photo.jpg",
    description: "Award-winning wedding photographers specializing in candid moments and artistic compositions.",
    services: ["Wedding Photography", "Engagement Sessions", "Bridal Portraits", "Photo Albums"],
    priceRange: "$2,000 - $5,000",
    experience: "8+ years",
    completedWeddings: 200,
    responseTime: "Within 2 hours",
    badges: ["Top Rated", "Quick Response", "Premium"],
    portfolio: ["/portfolio-1.jpg", "/portfolio-2.jpg", "/portfolio-3.jpg"],
    contact: {
      phone: "+1 (555) 123-4567",
      email: "info@elitemoments.com",
      website: "www.elitemoments.com",
    },
  },
  {
    id: "2",
    name: "Enchanted Gardens",
    category: "Venues",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 89,
    verified: true,
    featured: false,
    avatar: "/vendor-venue.jpg",
    coverImage: "/vendor-cover-venue.jpg",
    description: "Beautiful outdoor garden venue perfect for romantic ceremonies and elegant receptions.",
    services: ["Garden Ceremonies", "Reception Halls", "Bridal Suites", "Catering Kitchen"],
    priceRange: "$4,000 - $8,000",
    experience: "12+ years",
    completedWeddings: 150,
    responseTime: "Within 4 hours",
    badges: ["Verified", "Eco-Friendly", "Historic"],
    portfolio: ["/venue-1.jpg", "/venue-2.jpg", "/venue-3.jpg"],
    contact: {
      phone: "+1 (555) 234-5678",
      email: "events@enchantedgardens.com",
      website: "www.enchantedgardens.com",
    },
  },
  {
    id: "3",
    name: "Gourmet Celebrations",
    category: "Catering",
    location: "Chicago, IL",
    rating: 4.9,
    reviews: 203,
    verified: true,
    featured: true,
    avatar: "/vendor-catering.jpg",
    coverImage: "/vendor-cover-catering.jpg",
    description: "Premium catering services with customizable menus and exceptional presentation.",
    services: ["Wedding Catering", "Cocktail Hours", "Dessert Stations", "Dietary Accommodations"],
    priceRange: "$3,500 - $7,000",
    experience: "15+ years",
    completedWeddings: 300,
    responseTime: "Within 1 hour",
    badges: ["Chef's Choice", "Michelin Recommended", "Organic"],
    portfolio: ["/catering-1.jpg", "/catering-2.jpg", "/catering-3.jpg"],
    contact: {
      phone: "+1 (555) 345-6789",
      email: "chef@gourmetcelebrations.com",
      website: "www.gourmetcelebrations.com",
    },
  },
  {
    id: "4",
    name: "Harmony Entertainment",
    category: "Music & DJ",
    location: "Miami, FL",
    rating: 4.7,
    reviews: 134,
    verified: true,
    featured: false,
    avatar: "/vendor-music.jpg",
    coverImage: "/vendor-cover-music.jpg",
    description: "Professional live band and DJ services to keep your celebration dancing all night long.",
    services: ["Live Band", "DJ Services", "Sound Systems", "Lighting", "MC Services"],
    priceRange: "$2,500 - $5,500",
    experience: "10+ years",
    completedWeddings: 180,
    responseTime: "Within 3 hours",
    badges: ["Live Performance", "Full Equipment", "Bilingual"],
    portfolio: ["/music-1.jpg", "/music-2.jpg", "/music-3.jpg"],
    contact: {
      phone: "+1 (555) 456-7890",
      email: "bookings@harmonyent.com",
      website: "www.harmonyentertainment.com",
    },
  },
  {
    id: "5",
    name: "Bloom & Blossom",
    category: "Floral Design",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 167,
    verified: true,
    featured: true,
    avatar: "/vendor-floral.jpg",
    coverImage: "/vendor-cover-floral.jpg",
    description: "Creative floral designers crafting stunning arrangements that bring your vision to life.",
    services: ["Bridal Bouquets", "Ceremony Decor", "Centerpieces", "Floral Installations"],
    priceRange: "$1,500 - $4,000",
    experience: "6+ years",
    completedWeddings: 120,
    responseTime: "Within 2 hours",
    badges: ["Seasonal Flowers", "Sustainable", "Custom Design"],
    portfolio: ["/floral-1.jpg", "/floral-2.jpg", "/floral-3.jpg"],
    contact: {
      phone: "+1 (555) 567-8901",
      email: "hello@bloomblossom.com",
      website: "www.bloomblossom.com",
    },
  },
  {
    id: "6",
    name: "Sweet Dreams Bakery",
    category: "Wedding Cakes",
    location: "Austin, TX",
    rating: 4.9,
    reviews: 145,
    verified: true,
    featured: false,
    avatar: "/vendor-bakery.jpg",
    coverImage: "/vendor-cover-bakery.jpg",
    description: "Artisan wedding cakes and desserts that taste as amazing as they look.",
    services: ["Wedding Cakes", "Cupcake Towers", "Dessert Tables", "Cake Tastings"],
    priceRange: "$800 - $2,500",
    experience: "9+ years",
    completedWeddings: 250,
    responseTime: "Within 4 hours",
    badges: ["Custom Cakes", "Gluten-Free Options", "Award Winner"],
    portfolio: ["/cake-1.jpg", "/cake-2.jpg", "/cake-3.jpg"],
    contact: {
      phone: "+1 (555) 678-9012",
      email: "orders@sweetdreamsbakery.com",
      website: "www.sweetdreamsbakery.com",
    },
  },
]

const categories = [
  { id: "all", name: "All Categories", icon: Gift },
  { id: "photography", name: "Photography", icon: Camera },
  { id: "venues", name: "Venues", icon: Building },
  { id: "catering", name: "Catering", icon: Utensils },
  { id: "music", name: "Music & DJ", icon: Music },
  { id: "floral", name: "Floral Design", icon: Palette },
  { id: "cakes", name: "Wedding Cakes", icon: Gift },
]

export default function VendorsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("rating")
  const [showFeatured, setShowFeatured] = useState(false)

  const filteredVendors = mockVendors.filter((vendor) => {
    const matchesCategory =
      selectedCategory === "all" || vendor.category.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFeatured = !showFeatured || vendor.featured
    return matchesCategory && matchesSearch && matchesFeatured
  })

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "reviews":
        return b.reviews - a.reviews
      case "experience":
        return b.completedWeddings - a.completedWeddings
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50/30 to-bronze-50/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wedding <span className="gradient-text">Vendors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with verified wedding professionals in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search vendors, services, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-gold-200 focus:border-gold-400"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={showFeatured}
                  onChange={(e) => setShowFeatured(e.target.checked)}
                  className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  Featured only
                </label>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 border-gold-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full ${
                  selectedCategory === category.id
                    ? "bg-gold-500 hover:bg-gold-600 text-white"
                    : "border-gold-300 hover:bg-gold-50 bg-transparent"
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing {sortedVendors.length} of {mockVendors.length} vendors
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedVendors.map((vendor, index) => (
            <Card
              key={vendor.id}
              className="card-luxury border-0 overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Cover Image */}
              <div className="relative h-48">
                <Image
                  src={vendor.coverImage || "/placeholder.svg"}
                  alt={`${vendor.name} cover`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                  {vendor.verified && (
                    <Badge className="bg-green-500 text-white border-0 shadow-sm">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  {vendor.featured && (
                    <Badge className="bg-gold-500 text-white border-0 shadow-sm">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Favorite Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 shadow-sm"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Vendor Avatar */}
                <div className="absolute bottom-3 left-3">
                  <Avatar className="h-16 w-16 ring-4 ring-white shadow-lg">
                    <AvatarImage src={vendor.avatar || "/placeholder.svg"} alt={vendor.name} />
                    <AvatarFallback className="bg-gold-100 text-gold-700 text-lg font-semibold">
                      {vendor.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-gray-900">{vendor.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1 font-medium">{vendor.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({vendor.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <Badge variant="secondary" className="bg-gold-100 text-gold-700">
                      {vendor.category}
                    </Badge>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {vendor.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2">{vendor.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gradient-to-r from-gold-50 to-bronze-50 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold text-lg text-gray-900">{vendor.completedWeddings}+</div>
                    <div className="text-xs text-gray-600">Weddings</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-gray-900">{vendor.experience}</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Services</h4>
                  <div className="flex flex-wrap gap-1">
                    {vendor.services.slice(0, 3).map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-gold-200">
                        {service}
                      </Badge>
                    ))}
                    {vendor.services.length > 3 && (
                      <Badge variant="outline" className="text-xs border-gold-200">
                        +{vendor.services.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Price Range:</span>
                    <span className="font-semibold text-gray-900">{vendor.priceRange}</span>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mb-4 flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Responds {vendor.responseTime}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link href={`/vendors/${vendor.id}`} className="flex-1">
                    <Button className="w-full btn-luxury">View Profile</Button>
                  </Link>
                  <Button variant="outline" size="icon" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedVendors.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vendors found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setShowFeatured(false)
              }}
              className="btn-luxury"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {sortedVendors.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gold-300 hover:bg-gold-50 bg-transparent">
              Load More Vendors
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
