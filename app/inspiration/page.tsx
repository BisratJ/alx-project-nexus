"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Search, Grid3X3, List, Camera, Palette, Sparkles, Share, Bookmark, Eye, TrendingUp } from "lucide-react"
import Image from "next/image"

const mockInspirations = [
  {
    id: "1",
    title: "Rustic Garden Wedding",
    category: "Outdoor",
    style: "Rustic",
    season: "Spring",
    image: "/inspiration-rustic-garden.jpg",
    likes: 1247,
    saves: 892,
    views: 5420,
    tags: ["Garden", "Rustic", "Outdoor", "Spring", "Flowers"],
    photographer: "Elite Moments Studio",
    venue: "Enchanted Gardens",
    description: "A beautiful rustic garden wedding with natural elements and soft spring colors.",
    featured: true,
  },
  {
    id: "2",
    title: "Modern Minimalist Ceremony",
    category: "Indoor",
    style: "Modern",
    season: "Winter",
    image: "/inspiration-modern-minimal.jpg",
    likes: 987,
    saves: 654,
    views: 3210,
    tags: ["Modern", "Minimalist", "Indoor", "Winter", "Clean"],
    photographer: "Urban Lens Photography",
    venue: "Metropolitan Hall",
    description: "Clean lines and modern elegance define this sophisticated winter wedding.",
    featured: false,
  },
  {
    id: "3",
    title: "Bohemian Beach Wedding",
    category: "Beach",
    style: "Bohemian",
    season: "Summer",
    image: "/inspiration-boho-beach.jpg",
    likes: 2156,
    saves: 1432,
    views: 8765,
    tags: ["Beach", "Bohemian", "Summer", "Sunset", "Casual"],
    photographer: "Coastal Captures",
    venue: "Sunset Beach Resort",
    description: "Free-spirited bohemian vibes meet ocean breeze in this stunning beach ceremony.",
    featured: true,
  },
  {
    id: "4",
    title: "Vintage Barn Reception",
    category: "Barn",
    style: "Vintage",
    season: "Fall",
    image: "/inspiration-vintage-barn.jpg",
    likes: 1543,
    saves: 987,
    views: 4321,
    tags: ["Barn", "Vintage", "Fall", "Rustic", "Country"],
    photographer: "Country Roads Photography",
    venue: "Heritage Barn",
    description: "Vintage charm and autumn colors create a warm and inviting celebration.",
    featured: false,
  },
  {
    id: "5",
    title: "Elegant Ballroom Affair",
    category: "Ballroom",
    style: "Classic",
    season: "Winter",
    image: "/inspiration-elegant-ballroom.jpg",
    likes: 1876,
    saves: 1234,
    views: 6543,
    tags: ["Ballroom", "Elegant", "Classic", "Formal", "Luxury"],
    photographer: "Grand Events Photography",
    venue: "Royal Ballroom",
    description: "Timeless elegance and luxury define this classic ballroom wedding.",
    featured: true,
  },
  {
    id: "6",
    title: "Intimate Backyard Celebration",
    category: "Backyard",
    style: "Casual",
    season: "Summer",
    image: "/inspiration-backyard-intimate.jpg",
    likes: 892,
    saves: 567,
    views: 2987,
    tags: ["Backyard", "Intimate", "Casual", "Summer", "Family"],
    photographer: "Home Sweet Home Photos",
    venue: "Private Residence",
    description: "A cozy and intimate backyard wedding surrounded by family and friends.",
    featured: false,
  },
]

const categories = [
  { id: "all", name: "All", count: mockInspirations.length },
  { id: "outdoor", name: "Outdoor", count: 2 },
  { id: "indoor", name: "Indoor", count: 1 },
  { id: "beach", name: "Beach", count: 1 },
  { id: "barn", name: "Barn", count: 1 },
  { id: "ballroom", name: "Ballroom", count: 1 },
]

const styles = [
  { id: "all", name: "All Styles" },
  { id: "rustic", name: "Rustic" },
  { id: "modern", name: "Modern" },
  { id: "bohemian", name: "Bohemian" },
  { id: "vintage", name: "Vintage" },
  { id: "classic", name: "Classic" },
  { id: "casual", name: "Casual" },
]

const seasons = [
  { id: "all", name: "All Seasons" },
  { id: "spring", name: "Spring" },
  { id: "summer", name: "Summer" },
  { id: "fall", name: "Fall" },
  { id: "winter", name: "Winter" },
]

export default function InspirationPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStyle, setSelectedStyle] = useState("all")
  const [selectedSeason, setSelectedSeason] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("popular")
  const [activeTab, setActiveTab] = useState("photos")

  const filteredInspirations = mockInspirations.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesStyle = selectedStyle === "all" || item.style.toLowerCase() === selectedStyle.toLowerCase()
    const matchesSeason = selectedSeason === "all" || item.season.toLowerCase() === selectedSeason.toLowerCase()
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesStyle && matchesSeason && matchesSearch
  })

  const sortedInspirations = [...filteredInspirations].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes - a.likes
      case "recent":
        return b.views - a.views
      case "saves":
        return b.saves - a.saves
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
            Wedding <span className="gradient-text">Inspiration</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover beautiful wedding ideas and real celebrations to inspire your perfect day
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border border-gold-200 rounded-xl p-1 max-w-md mx-auto">
            <TabsTrigger
              value="photos"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              <Camera className="h-4 w-4 mr-2" />
              Photos
            </TabsTrigger>
            <TabsTrigger
              value="colors"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              <Palette className="h-4 w-4 mr-2" />
              Colors
            </TabsTrigger>
            <TabsTrigger
              value="trends"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Trends
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              <Bookmark className="h-4 w-4 mr-2" />
              Saved
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="space-y-6">
            {/* Search and Filters */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search inspiration..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-full border-gold-200 focus:border-gold-400"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40 border-gold-200">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger className="w-40 border-gold-200">
                    <SelectValue placeholder="Style" />
                  </SelectTrigger>
                  <SelectContent>
                    {styles.map((style) => (
                      <SelectItem key={style.id} value={style.id}>
                        {style.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                  <SelectTrigger className="w-40 border-gold-200">
                    <SelectValue placeholder="Season" />
                  </SelectTrigger>
                  <SelectContent>
                    {seasons.map((season) => (
                      <SelectItem key={season.id} value={season.id}>
                        {season.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 border-gold-200">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="recent">Most Viewed</SelectItem>
                    <SelectItem value="saves">Most Saved</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center space-x-2 bg-white rounded-lg border border-gold-200 p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-gold-500 hover:bg-gold-600" : ""}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-gold-500 hover:bg-gold-600" : ""}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-gray-600">
                Showing {sortedInspirations.length} of {mockInspirations.length} inspirations
              </p>
            </div>

            {/* Inspiration Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1 max-w-4xl mx-auto"
              }`}
            >
              {sortedInspirations.map((item, index) => (
                <Card
                  key={item.id}
                  className={`card-luxury border-0 overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative ${viewMode === "list" ? "w-80 flex-shrink-0" : ""}`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={viewMode === "list" ? 200 : 300}
                      className={`w-full object-cover ${viewMode === "list" ? "h-48" : "h-64"}`}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Featured Badge */}
                    {item.featured && (
                      <Badge className="absolute top-3 left-3 bg-gold-500 text-white border-0 shadow-sm">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 shadow-sm h-8 w-8"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white text-gray-700 shadow-sm h-8 w-8"
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white text-gray-700 shadow-sm h-8 w-8"
                      >
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {item.likes}
                        </div>
                        <div className="flex items-center">
                          <Bookmark className="h-4 w-4 mr-1" />
                          {item.saves}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {item.views}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-gold-100 text-gold-700 text-xs">
                            {item.style}
                          </Badge>
                          <Badge variant="outline" className="border-gold-200 text-xs">
                            {item.season}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-1 text-xs text-gray-500">
                        <div>📸 {item.photographer}</div>
                        <div>📍 {item.venue}</div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-gold-200">
                            #{tag}
                          </Badge>
                        ))}
                        {item.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs border-gold-200">
                            +{item.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      {viewMode === "list" && (
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Heart className="h-4 w-4 mr-1" />
                              {item.likes}
                            </div>
                            <div className="flex items-center">
                              <Bookmark className="h-4 w-4 mr-1" />
                              {item.saves}
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {item.views}
                            </div>
                          </div>
                          <Button size="sm" className="btn-luxury">
                            View Details
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {sortedInspirations.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No inspiration found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setSelectedStyle("all")
                    setSelectedSeason("all")
                  }}
                  className="btn-luxury"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {sortedInspirations.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                  Load More Inspiration
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="colors" className="space-y-6">
            <div className="text-center py-16">
              <Palette className="h-16 w-16 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Color Palettes</h3>
              <p className="text-gray-600 mb-6">
                Discover trending wedding color combinations and create your perfect palette.
              </p>
              <Button className="btn-luxury">Coming Soon</Button>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="text-center py-16">
              <TrendingUp className="h-16 w-16 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Wedding Trends</h3>
              <p className="text-gray-600 mb-6">Stay up-to-date with the latest wedding trends and popular styles.</p>
              <Button className="btn-luxury">Coming Soon</Button>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <div className="text-center py-16">
              <Bookmark className="h-16 w-16 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Saved Inspiration</h3>
              <p className="text-gray-600 mb-6">
                Your saved wedding inspiration will appear here. Start saving ideas you love!
              </p>
              <Button className="btn-luxury">Browse Inspiration</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
