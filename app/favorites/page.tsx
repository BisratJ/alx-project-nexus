"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, MapPin, CheckCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"

// Mock data - in a real app, this would come from an API or database
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
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [favoritePackages, setFavoritePackages] = useState<any[]>([])
  const { user } = useAuth()

  // Simulate loading favorites from localStorage or API
  useEffect(() => {
    // In a real app, this would come from an API call
    // For now, we'll just use a mock implementation with localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("packageFavorites") || "[]")
    const favoritesSet = new Set(storedFavorites)
    setFavorites(favoritesSet)

    // Filter packages to only show favorites
    const filtered = mockPackages.filter((pkg) => favoritesSet.has(pkg.id))
    setFavoritePackages(filtered)
  }, [])

  const handleToggleFavorite = (packageId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(packageId)) {
        newFavorites.delete(packageId)
      } else {
        newFavorites.add(packageId)
      }

      // Update localStorage
      localStorage.setItem("packageFavorites", JSON.stringify([...newFavorites]))

      // Update displayed packages
      const filtered = mockPackages.filter((pkg) => newFavorites.has(pkg.id))
      setFavoritePackages(filtered)

      return newFavorites
    })
  }

  const handleBookNow = (packageId: string) => {
    window.location.href = `/packages/${packageId}?action=book`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50/30 to-bronze-50/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center text-gray-600 hover:text-gold-600 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Favorites</h1>
          <p className="text-gray-600">Your saved wedding packages and vendors</p>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {favoritePackages.length > 0 ? (
            favoritePackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="card-luxury border-0 overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={pkg.images[0] || "/placeholder.svg"}
                    alt={pkg.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gold-500 text-white border-0 shadow-sm">{pkg.badge}</Badge>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500 shadow-sm"
                    onClick={() => handleToggleFavorite(pkg.id)}
                  >
                    <Heart className="h-4 w-4 fill-current" />
                  </Button>
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

                  <h3 className="font-bold text-lg mb-2 text-gray-900">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pkg.description}</p>
                  <p className="text-sm font-medium text-gold-600 mb-3">{pkg.vendor.name}</p>

                  <div className="space-y-2 mb-4">
                    {pkg.features.slice(0, 3).map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
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
                    <Link href={`/packages/${pkg.id}`}>
                      <Button variant="outline" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
              <p className="text-gray-600 mb-4">Browse packages and save your favorites by clicking the heart icon</p>
              <Link href="/packages">
                <Button className="btn-luxury">Browse Packages</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
