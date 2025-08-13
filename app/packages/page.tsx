"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Star,
  Heart,
  MapPin,
  Filter,
  Search,
  Camera,
  Building,
  Utensils,
  Music,
  Palette,
  Gift,
  Users,
  Clock,
  CheckCircle,
  SlidersHorizontal,
  ChevronLeft,
} from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"

const mockPackages = [
  {
    id: "1",
    title: "Premium Photography Package",
    description: "Complete wedding photography with 8 hours coverage, engagement session, and premium album",
    price: 2500,
    originalPrice: 3000,
    vendor: {
      id: "1",
      name: "Elite Moments Studio",
      location: "Addis Ababa, Ethiopia",
      rating: 4.9,
      verified: true,
    },
    images: ["/wedding-photo-premium.jpg"],
    features: ["8 hours coverage", "500+ edited photos", "Online gallery", "Print release", "Engagement session"],
    category: "photography",
    rating: 4.9,
    reviews: 156,
    badge: "Most Popular",
    availability: "Available",
  },
  {
    id: "2",
    title: "Elegant Garden Venue",
    description: "Beautiful outdoor garden venue for up to 150 guests with bridal suite and catering facilities",
    price: 5000,
    originalPrice: 5500,
    vendor: {
      id: "2",
      name: "Enchanted Gardens",
      location: "Addis Ababa, Ethiopia",
      rating: 4.8,
      verified: true,
    },
    images: ["/wedding-venue-garden.jpg"],
    features: ["150 guest capacity", "Bridal suite", "Catering kitchen", "Free parking", "Garden ceremony space"],
    category: "venue",
    rating: 4.8,
    reviews: 89,
    badge: "Premium",
    availability: "Limited",
  },
  {
    id: "3",
    title: "Gourmet Catering Experience",
    description: "Premium catering service with customizable menus and professional service staff",
    price: 4200,
    originalPrice: 4800,
    vendor: {
      id: "3",
      name: "Gourmet Celebrations",
      location: "Addis Ababa, Ethiopia",
      rating: 4.9,
      verified: true,
    },
    images: ["/wedding-catering-gourmet.jpg"],
    features: ["3-course plated dinner", "Open bar package", "Wedding cake", "Dietary accommodations"],
    category: "catering",
    rating: 4.9,
    reviews: 203,
    badge: "Chef's Choice",
    availability: "Available",
  },
  {
    id: "4",
    title: "Live Band & DJ Combo",
    description: "Professional live band with DJ services for ceremony and reception",
    price: 3200,
    originalPrice: 3600,
    vendor: {
      id: "4",
      name: "Harmony Entertainment",
      location: "Addis Ababa, Ethiopia",
      rating: 4.7,
      verified: true,
    },
    images: ["/wedding-music-band.jpg"],
    features: ["4-piece live band", "DJ services", "Sound system", "Lighting package", "MC services"],
    category: "music",
    rating: 4.7,
    reviews: 134,
    badge: "Trending",
    availability: "Available",
  },
  {
    id: "5",
    title: "Floral Design Package",
    description: "Complete floral arrangements including bridal bouquet, centerpieces, and ceremony decor",
    price: 1800,
    originalPrice: 2200,
    vendor: {
      id: "5",
      name: "Bloom & Blossom",
      location: "Addis Ababa, Ethiopia",
      rating: 4.8,
      verified: true,
    },
    images: ["/wedding-flowers-elegant.jpg"],
    features: ["Bridal bouquet", "Ceremony arch", "Centerpieces", "Boutonnières", "Petals for aisle"],
    category: "decoration",
    rating: 4.8,
    reviews: 167,
    badge: "Seasonal",
    availability: "Available",
  },
  {
    id: "6",
    title: "Luxury Transportation",
    description: "Premium wedding transportation with decorated luxury vehicles",
    price: 800,
    originalPrice: 1000,
    vendor: {
      id: "6",
      name: "Elite Wedding Cars",
      location: "Addis Ababa, Ethiopia",
      rating: 4.6,
      verified: true,
    },
    images: ["/wedding-car-luxury.jpg"],
    features: ["Luxury sedan", "Professional chauffeur", "Wedding decorations", "Red carpet service"],
    category: "transportation",
    rating: 4.6,
    reviews: 92,
    badge: "Luxury",
    availability: "Limited",
  },
  {
    id: "7",
    title: "Traditional Wedding Cake",
    description: "Custom designed wedding cakes with traditional and modern flavors",
    price: 1200,
    originalPrice: 1500,
    vendor: {
      id: "7",
      name: "Sweet Dreams Bakery",
      location: "Addis Ababa, Ethiopia",
      rating: 4.7,
      verified: true,
    },
    images: ["/cake-1.jpg"],
    features: ["Custom design", "Multiple flavors", "Cake tasting", "Delivery included"],
    category: "cakes",
    rating: 4.7,
    reviews: 78,
    badge: "Custom Made",
    availability: "Available",
  },
  {
    id: "8",
    title: "Bridal Makeup & Hair",
    description: "Professional bridal makeup and hairstyling for your perfect wedding look",
    price: 800,
    originalPrice: 1000,
    vendor: {
      id: "8",
      name: "Beauty Bliss Studio",
      location: "Addis Ababa, Ethiopia",
      rating: 4.8,
      verified: true,
    },
    images: ["/elegant-bride.png"],
    features: ["Bridal makeup", "Hair styling", "Trial session", "Touch-up kit"],
    category: "beauty",
    rating: 4.8,
    reviews: 95,
    badge: "Bridal Special",
    availability: "Available",
  },
]

const categories = [
  { id: "all", name: "All Categories", icon: Gift, count: mockPackages.length },
  { id: "photography", name: "Photography", icon: Camera, count: 1 },
  { id: "venue", name: "Venues", icon: Building, count: 1 },
  { id: "catering", name: "Catering", icon: Utensils, count: 1 },
  { id: "music", name: "Music & DJ", icon: Music, count: 1 },
  { id: "decoration", name: "Decoration", icon: Palette, count: 1 },
  { id: "transportation", name: "Transportation", icon: Users, count: 1 },
  { id: "cakes", name: "Wedding Cakes", icon: Gift, count: 1 },
  { id: "beauty", name: "Beauty", icon: Palette, count: 1 },
]

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationHistory, setPaginationHistory] = useState<number[]>([1]) // Track pagination history
  const packagesPerPage = 6
  const { user } = useAuth()

  const filteredPackages = mockPackages.filter((pkg) => {
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.vendor.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1]
    return matchesCategory && matchesSearch && matchesPrice
  })

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "popular":
      default:
        return b.reviews - a.reviews
    }
  })

  // Pagination logic
  const totalPages = Math.ceil(sortedPackages.length / packagesPerPage)
  const startIndex = (currentPage - 1) * packagesPerPage
  const endIndex = startIndex + packagesPerPage
  const currentPackages = sortedPackages.slice(startIndex, endIndex)
  const hasMorePackages = currentPage < totalPages

  const handleToggleFavorite = (packageId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(packageId)) {
        newFavorites.delete(packageId)
      } else {
        newFavorites.add(packageId)
      }
      return newFavorites
    })
  }

  const handleViewDetails = (packageId: string) => {
    window.location.href = `/packages/${packageId}`
  }

  const handleBookNow = (packageId: string) => {
    if (!user) {
      // If user is not logged in, redirect to login page with return URL
      window.location.href = `/login?redirect=/packages/${packageId}?action=book`
      return
    }
    // If user is logged in, redirect directly to booking page
    window.location.href = `/packages/${packageId}?action=book`
  }

  const handleLoadMore = () => {
    // Save current page to history before moving to next page
    setPaginationHistory((prev) => [...prev, currentPage])
    setCurrentPage((prev) => prev + 1)
  }

  const handleGoBack = () => {
    // Go back to previous page in history
    if (paginationHistory.length > 1) {
      const newHistory = [...paginationHistory]
      const previousPage = newHistory.pop() || 1
      setPaginationHistory(newHistory)
      setCurrentPage(newHistory[newHistory.length - 1] || 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50/30 to-bronze-50/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wedding <span className="gradient-text">Packages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the perfect wedding services from our verified vendors in Addis Ababa
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
                placeholder="Search packages, vendors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-gold-200 focus:border-gold-400"
              />
            </div>

            {/* Sort and Filter Controls */}
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 border-gold-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-gold-300 hover:bg-gold-50 bg-transparent"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="card-luxury border-0 mb-6 animate-fade-in">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                    <div className="space-y-3">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={10000}
                        min={0}
                        step={100}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Location</h4>
                    <Select defaultValue="addis-ababa">
                      <SelectTrigger className="border-gold-200">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="addis-ababa">Addis Ababa, Ethiopia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Availability</h4>
                    <Select>
                      <SelectTrigger className="border-gold-200">
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="limited">Limited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Card className="card-luxury border-0 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 text-gold-600 mr-2" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-gold-500 text-white shadow-md"
                        : "hover:bg-gold-50 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <category.icon className="h-4 w-4 mr-3" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100"
                      }`}
                    >
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Packages Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {currentPackages.length} of {sortedPackages.length} packages in Addis Ababa
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>Updated 2 hours ago</span>
              </div>
            </div>

            {/* Pagination Navigation */}
            {currentPage > 1 && paginationHistory.length > 1 && (
              <div className="mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGoBack}
                  className="flex items-center space-x-1 border-gold-200 hover:bg-gold-50 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Back to Previous Page</span>
                </Button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentPackages.map((pkg, index) => (
                <Card
                  key={pkg.id}
                  className="card-luxury border-0 overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <Image
                      src={pkg.images[0] || "/placeholder.svg"}
                      alt={pkg.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 flex flex-col space-y-2">
                      <Badge className="bg-gold-500 text-white border-0 shadow-sm">{pkg.badge}</Badge>
                      {pkg.originalPrice > pkg.price && (
                        <Badge variant="destructive" className="text-xs shadow-sm">
                          Save ${pkg.originalPrice - pkg.price}
                        </Badge>
                      )}
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className={`absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 shadow-sm ${
                        favorites.has(pkg.id) ? "text-red-500" : "hover:text-red-500"
                      }`}
                      onClick={() => handleToggleFavorite(pkg.id)}
                    >
                      <Heart className={`h-4 w-4 ${favorites.has(pkg.id) ? "fill-current" : ""}`} />
                    </Button>
                    <div className="absolute bottom-3 right-3">
                      <Badge
                        className={`text-xs ${
                          pkg.availability === "Available" ? "bg-green-500 text-white" : "bg-orange-500 text-white"
                        }`}
                      >
                        {pkg.availability}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1 font-medium">
                          {pkg.rating} ({pkg.reviews})
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {pkg.vendor.location}
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">{pkg.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pkg.description}</p>
                    <p className="text-sm font-medium text-gold-600 mb-3">{pkg.vendor.name}</p>

                    <div className="space-y-2 mb-4">
                      {pkg.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {pkg.features.length > 3 && (
                        <p className="text-xs text-gray-500">+{pkg.features.length - 3} more features</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">${pkg.price.toLocaleString()}</span>
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ${pkg.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 btn-luxury" onClick={() => handleBookNow(pkg.id)}>
                        Book Now
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gold-300 hover:bg-gold-50 bg-transparent"
                        onClick={() => handleViewDetails(pkg.id)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedPackages.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setPriceRange([0, 10000])
                  }}
                  className="btn-luxury"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More Button - Only show if there are more packages */}
            {hasMorePackages && sortedPackages.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gold-300 hover:bg-gold-50 bg-transparent"
                  onClick={handleLoadMore}
                >
                  Load More Packages
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
