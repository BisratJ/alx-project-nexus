"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  DollarSign,
  Heart,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Camera,
  Building,
  Utensils,
  Music,
  Palette,
  Users,
  Gift,
  Bell,
  Settings,
  Plus,
  Edit,
  Trash2,
  Download,
  Share,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    weddingDate: "2024-06-15",
    partner: "John Mitchell",
    venue: "Enchanted Gardens",
    guestCount: 150,
    budget: 25000,
    spent: 18500,
  }

  const bookings = [
    {
      id: "1",
      service: "Premium Photography Package",
      vendor: "Elite Moments Studio",
      category: "Photography",
      price: 2800,
      status: "confirmed",
      date: "2024-06-15",
      time: "10:00 AM",
      image: "/wedding-photo-premium.jpg",
      contact: {
        name: "Mike Johnson",
        phone: "+1 (555) 123-4567",
        email: "mike@elitemoments.com",
      },
    },
    {
      id: "2",
      service: "Garden Paradise Venue",
      vendor: "Enchanted Gardens",
      category: "Venue",
      price: 5500,
      status: "confirmed",
      date: "2024-06-15",
      time: "4:00 PM",
      image: "/wedding-venue-garden.jpg",
      contact: {
        name: "Lisa Chen",
        phone: "+1 (555) 234-5678",
        email: "lisa@enchantedgardens.com",
      },
    },
    {
      id: "3",
      service: "Gourmet Catering Experience",
      vendor: "Gourmet Celebrations",
      category: "Catering",
      price: 4200,
      status: "pending",
      date: "2024-06-15",
      time: "6:00 PM",
      image: "/wedding-catering-gourmet.jpg",
      contact: {
        name: "Chef Rodriguez",
        phone: "+1 (555) 345-6789",
        email: "chef@gourmetcelebrations.com",
      },
    },
    {
      id: "4",
      service: "Live Band & DJ Combo",
      vendor: "Harmony Entertainment",
      category: "Music",
      price: 3200,
      status: "confirmed",
      date: "2024-06-15",
      time: "7:00 PM",
      image: "/wedding-music-band.jpg",
      contact: {
        name: "David Wilson",
        phone: "+1 (555) 456-7890",
        email: "david@harmonyent.com",
      },
    },
    {
      id: "5",
      service: "Floral Design Package",
      vendor: "Bloom & Blossom",
      category: "Floral",
      price: 1800,
      status: "confirmed",
      date: "2024-06-15",
      time: "2:00 PM",
      image: "/wedding-flowers-elegant.jpg",
      contact: {
        name: "Emma Davis",
        phone: "+1 (555) 567-8901",
        email: "emma@bloomblossom.com",
      },
    },
  ]

  const timeline = [
    {
      date: "2024-01-15",
      title: "Venue Booked",
      description: "Enchanted Gardens confirmed for June 15th",
      status: "completed",
      category: "venue",
    },
    {
      date: "2024-02-01",
      title: "Photography Secured",
      description: "Elite Moments Studio package confirmed",
      status: "completed",
      category: "photography",
    },
    {
      date: "2024-02-15",
      title: "Catering Consultation",
      description: "Menu tasting scheduled with Gourmet Celebrations",
      status: "pending",
      category: "catering",
    },
    {
      date: "2024-03-01",
      title: "Music & Entertainment",
      description: "Harmony Entertainment booking confirmed",
      status: "completed",
      category: "music",
    },
    {
      date: "2024-03-15",
      title: "Floral Design Meeting",
      description: "Final flower arrangements with Bloom & Blossom",
      status: "upcoming",
      category: "floral",
    },
  ]

  const favorites = [
    {
      id: "1",
      title: "Rustic Barn Wedding",
      vendor: "Country Heritage Venue",
      price: 4500,
      rating: 4.8,
      image: "/inspiration-vintage-barn.jpg",
      category: "Venue",
    },
    {
      id: "2",
      title: "Elegant Ballroom Setup",
      vendor: "Grand Events Hall",
      price: 6200,
      rating: 4.9,
      image: "/inspiration-elegant-ballroom.jpg",
      category: "Venue",
    },
    {
      id: "3",
      title: "Bohemian Floral Design",
      vendor: "Wild Flower Studio",
      price: 2100,
      rating: 4.7,
      image: "/floral-2.jpg",
      category: "Floral",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "cancelled":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "photography":
        return <Camera className="h-4 w-4" />
      case "venue":
        return <Building className="h-4 w-4" />
      case "catering":
        return <Utensils className="h-4 w-4" />
      case "music":
        return <Music className="h-4 w-4" />
      case "floral":
        return <Palette className="h-4 w-4" />
      default:
        return <Gift className="h-4 w-4" />
    }
  }

  const budgetPercentage = (user.spent / user.budget) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50/30 to-bronze-50/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Welcome back, <span className="gradient-text">{user.name}</span>
              </h1>
              <p className="text-gray-600">
                Your wedding is in{" "}
                <span className="font-semibold text-gold-600">
                  {Math.ceil((new Date(user.weddingDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}{" "}
                  days
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="outline" size="icon" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                <Settings className="h-4 w-4" />
              </Button>
              <Link href="/profile">
                <Button className="btn-luxury">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Wedding Date</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {new Date(user.weddingDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Budget Used</p>
                    <p className="text-2xl font-bold text-gray-900">{budgetPercentage.toFixed(0)}%</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Guest Count</p>
                    <p className="text-2xl font-bold text-gray-900">{user.guestCount}</p>
                  </div>
                  <Users className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Services Booked</p>
                    <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm border border-gold-200 rounded-xl p-1">
            <TabsTrigger
              value="overview"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="bookings"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              My Bookings
            </TabsTrigger>
            <TabsTrigger
              value="timeline"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Timeline
            </TabsTrigger>
            <TabsTrigger
              value="budget"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Budget
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Favorites
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Wedding Details */}
              <Card className="card-luxury border-0 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 text-gold-600 mr-2" />
                    Wedding Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Couple</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {user.name} & {user.partner}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Wedding Date</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {new Date(user.weddingDate).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Venue</p>
                        <p className="text-lg font-semibold text-gray-900">{user.venue}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Expected Guests</p>
                        <p className="text-lg font-semibold text-gray-900">{user.guestCount} guests</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Budget Overview */}
              <Card className="card-luxury border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gold-600 mr-2" />
                    Budget Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Spent</span>
                      <span className="font-medium">${user.spent.toLocaleString()}</span>
                    </div>
                    <Progress value={budgetPercentage} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Remaining</span>
                      <span className="font-medium">${(user.budget - user.spent).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Budget</span>
                      <span className="font-bold text-lg">${user.budget.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Bookings */}
            <Card className="card-luxury border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Bookings</CardTitle>
                  <Link href="#" onClick={() => setActiveTab("bookings")}>
                    <Button variant="outline" size="sm" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Image
                        src={booking.image || "/placeholder.svg"}
                        alt={booking.service}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{booking.service}</h4>
                        <p className="text-sm text-gray-600">{booking.vendor}</p>
                        <div className="flex items-center mt-1">
                          <Badge className={`${getStatusColor(booking.status)} text-white text-xs`}>
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">${booking.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">{booking.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
              <Link href="/packages">
                <Button className="btn-luxury">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {bookings.map((booking) => (
                <Card key={booking.id} className="card-luxury border-0 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={booking.image || "/placeholder.svg"}
                      alt={booking.service}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getStatusColor(booking.status)} text-white`}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1 capitalize">{booking.status}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {getCategoryIcon(booking.category)}
                        <span className="ml-1">{booking.category}</span>
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{booking.service}</h3>
                        <p className="text-gray-600">{booking.vendor}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Date</p>
                          <p className="font-medium">{booking.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Time</p>
                          <p className="font-medium">{booking.time}</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-600">Total Cost</span>
                          <span className="text-2xl font-bold text-gray-900">${booking.price.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Vendor Contact</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            {booking.contact.name}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            {booking.contact.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            {booking.contact.email}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-4">
                        <Button size="sm" className="flex-1 btn-luxury">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-300 hover:bg-red-50 bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Wedding Timeline</h2>
              <Button className="btn-luxury">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            event.status === "completed"
                              ? "bg-green-500 text-white"
                              : event.status === "pending"
                                ? "bg-yellow-500 text-white"
                                : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          {getCategoryIcon(event.category)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <span className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                        <Badge
                          className={`mt-2 text-xs ${
                            event.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : event.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {event.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Budget Tab */}
          <TabsContent value="budget" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Budget Management</h2>
              <Button className="btn-luxury">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="card-luxury border-0 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Budget Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getCategoryIcon(booking.category)}
                          <div>
                            <p className="font-medium text-gray-900">{booking.category}</p>
                            <p className="text-sm text-gray-600">{booking.vendor}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${booking.price.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">
                            {((booking.price / user.spent) * 100).toFixed(1)}% of spent
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardHeader>
                  <CardTitle>Budget Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Budget</span>
                      <span className="font-bold">${user.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount Spent</span>
                      <span className="font-bold text-red-600">${user.spent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Remaining</span>
                      <span className="font-bold text-green-600">${(user.budget - user.spent).toLocaleString()}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <Progress value={budgetPercentage} className="h-3" />
                      <p className="text-sm text-gray-600 mt-2 text-center">
                        {budgetPercentage.toFixed(1)}% of budget used
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Saved Favorites</h2>
              <Link href="/packages">
                <Button variant="outline" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                  Browse More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <Card
                  key={item.id}
                  className="card-luxury border-0 overflow-hidden group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.vendor}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1 font-medium">{item.rating}</span>
                        </div>
                        <Badge variant="secondary" className="bg-gold-100 text-gold-700 text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">${item.price.toLocaleString()}</span>
                        <div className="flex space-x-1">
                          <Button size="sm" className="btn-luxury">
                            Book Now
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-gold-300 hover:bg-gold-50 bg-transparent"
                          >
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
