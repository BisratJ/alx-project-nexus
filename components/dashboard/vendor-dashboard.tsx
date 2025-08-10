"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  DollarSign,
  Star,
  TrendingUp,
  MessageCircle,
  Phone,
  Mail,
  Edit,
  Plus,
  Eye,
  Heart,
  Share,
  Download,
  Settings,
  Bell,
  CheckCircle,
  Clock,
  AlertCircle,
  Package,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock vendor data
  const vendor = {
    name: "Elite Moments Studio",
    businessName: "Elite Moments Photography",
    category: "Photography",
    rating: 4.9,
    reviews: 156,
    location: "New York, NY",
    joinDate: "2020-03-15",
    verified: true,
    avatar: "/vendor-photographer.jpg",
    coverImage: "/vendor-cover-photo.jpg",
    totalEarnings: 125000,
    monthlyEarnings: 18500,
    completedBookings: 89,
    activeBookings: 12,
    responseRate: 98,
    responseTime: "2 hours",
  }

  const bookings = [
    {
      id: "1",
      clientName: "Sarah & John Mitchell",
      service: "Premium Wedding Photography",
      date: "2024-06-15",
      time: "10:00 AM",
      status: "confirmed",
      amount: 2800,
      location: "Enchanted Gardens, NY",
      clientAvatar: "/couple-1.jpg",
      notes: "8-hour coverage, engagement session included",
      contact: {
        phone: "+1 (555) 123-4567",
        email: "sarah@example.com",
      },
    },
    {
      id: "2",
      clientName: "Emily & Michael Chen",
      service: "Engagement Photography Session",
      date: "2024-05-20",
      time: "4:00 PM",
      status: "pending",
      amount: 800,
      location: "Central Park, NY",
      clientAvatar: "/couple-2.jpg",
      notes: "2-hour session, outdoor location",
      contact: {
        phone: "+1 (555) 234-5678",
        email: "emily@example.com",
      },
    },
    {
      id: "3",
      clientName: "Lisa & David Rodriguez",
      service: "Wedding Photography Package",
      date: "2024-07-10",
      time: "2:00 PM",
      status: "confirmed",
      amount: 3200,
      location: "Grand Ballroom, NY",
      clientAvatar: "/couple-3.jpg",
      notes: "Full day coverage, second photographer",
      contact: {
        phone: "+1 (555) 345-6789",
        email: "lisa@example.com",
      },
    },
  ]

  const services = [
    {
      id: "1",
      title: "Premium Wedding Photography",
      description: "Complete wedding photography with 8 hours coverage and engagement session",
      price: 2800,
      originalPrice: 3200,
      image: "/wedding-photo-premium.jpg",
      features: ["8 hours coverage", "500+ edited photos", "Online gallery", "Print release", "Engagement session"],
      bookings: 24,
      rating: 4.9,
      reviews: 45,
      active: true,
    },
    {
      id: "2",
      title: "Engagement Photography Session",
      description: "Professional engagement photos to capture your love story",
      price: 800,
      originalPrice: 1000,
      image: "/portfolio-2.jpg",
      features: ["2 hours session", "100+ edited photos", "Online gallery", "Print release"],
      bookings: 18,
      rating: 4.8,
      reviews: 32,
      active: true,
    },
    {
      id: "3",
      title: "Bridal Portrait Session",
      description: "Elegant bridal portraits for your special day memories",
      price: 600,
      originalPrice: 750,
      image: "/portfolio-3.jpg",
      features: ["1.5 hours session", "75+ edited photos", "Online gallery", "Styling consultation"],
      bookings: 12,
      rating: 4.9,
      reviews: 28,
      active: true,
    },
  ]

  const portfolio = [
    {
      id: "1",
      title: "Garden Wedding Ceremony",
      image: "/portfolio-1.jpg",
      likes: 234,
      views: 1520,
      category: "Wedding",
    },
    {
      id: "2",
      title: "Romantic Engagement Session",
      image: "/portfolio-2.jpg",
      likes: 189,
      views: 987,
      category: "Engagement",
    },
    {
      id: "3",
      title: "Elegant Bridal Portraits",
      image: "/portfolio-3.jpg",
      likes: 156,
      views: 743,
      category: "Bridal",
    },
    {
      id: "4",
      title: "Reception Celebration",
      image: "/wedding-photo-1.jpg",
      likes: 298,
      views: 1876,
      category: "Reception",
    },
    {
      id: "5",
      title: "Outdoor Ceremony",
      image: "/wedding-venue-1.jpg",
      likes: 167,
      views: 892,
      category: "Ceremony",
    },
    {
      id: "6",
      title: "Intimate Moments",
      image: "/inspiration-rustic-garden.jpg",
      likes: 203,
      views: 1234,
      category: "Candid",
    },
  ]

  const analytics = {
    monthlyViews: 5420,
    monthlyInquiries: 34,
    conversionRate: 68,
    averageBookingValue: 2100,
    topServices: ["Wedding Photography", "Engagement Sessions", "Bridal Portraits"],
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "cancelled":
        return "bg-red-500"
      case "completed":
        return "bg-blue-500"
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
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50/30 to-bronze-50/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16 ring-4 ring-gold-200">
                <AvatarImage src={vendor.avatar || "/placeholder.svg"} alt={vendor.name} />
                <AvatarFallback className="bg-gold-100 text-gold-700 text-xl font-bold">
                  {vendor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Welcome back, <span className="gradient-text">{vendor.name}</span>
                </h1>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{vendor.rating}</span>
                    <span className="text-gray-600 ml-1">({vendor.reviews} reviews)</span>
                  </div>
                  {vendor.verified && (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="outline" size="icon" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                <Settings className="h-4 w-4" />
              </Button>
              <Link href="/vendor/profile">
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
                    <p className="text-sm font-medium text-gray-600">Monthly Earnings</p>
                    <p className="text-2xl font-bold text-gray-900">${vendor.monthlyEarnings.toLocaleString()}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">{vendor.activeBookings}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Response Rate</p>
                    <p className="text-2xl font-bold text-gray-900">{vendor.responseRate}%</p>
                  </div>
                  <MessageCircle className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Completed</p>
                    <p className="text-2xl font-bold text-gray-900">{vendor.completedBookings}</p>
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
              Bookings
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Services
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Portfolio
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Business Overview */}
              <Card className="card-luxury border-0 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 text-gold-600 mr-2" />
                    Business Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Business Name</p>
                        <p className="text-lg font-semibold text-gray-900">{vendor.businessName}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Category</p>
                        <p className="text-lg font-semibold text-gray-900">{vendor.category}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Member Since</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {new Date(vendor.joinDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Location</p>
                        <p className="text-lg font-semibold text-gray-900">{vendor.location}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Response Time</p>
                        <p className="text-lg font-semibold text-gray-900">{vendor.responseTime}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                        <p className="text-lg font-semibold text-gray-900">${vendor.totalEarnings.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card className="card-luxury border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-gold-600 mr-2" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Response Rate</span>
                        <span className="font-medium">{vendor.responseRate}%</span>
                      </div>
                      <Progress value={vendor.responseRate} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Customer Rating</span>
                        <span className="font-medium">{vendor.rating}/5.0</span>
                      </div>
                      <Progress value={(vendor.rating / 5) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Profile Completion</span>
                        <span className="font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
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
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={booking.clientAvatar || "/placeholder.svg"} alt={booking.clientName} />
                        <AvatarFallback className="bg-gold-100 text-gold-700">
                          {booking.clientName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{booking.clientName}</h4>
                        <p className="text-sm text-gray-600">{booking.service}</p>
                        <div className="flex items-center mt-1">
                          <Badge className={`${getStatusColor(booking.status)} text-white text-xs`}>
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">${booking.amount.toLocaleString()}</p>
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
              <h2 className="text-2xl font-bold text-gray-900">Booking Management</h2>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button className="btn-luxury">
                  <Calendar className="h-4 w-4 mr-2" />
                  Calendar View
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="card-luxury border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={booking.clientAvatar || "/placeholder.svg"} alt={booking.clientName} />
                          <AvatarFallback className="bg-gold-100 text-gold-700">
                            {booking.clientName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">{booking.clientName}</h3>
                            <p className="text-gray-600">{booking.service}</p>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">Date</p>
                              <p className="font-medium">{booking.date}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Time</p>
                              <p className="font-medium">{booking.time}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Location</p>
                              <p className="font-medium">{booking.location}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Amount</p>
                              <p className="font-medium">${booking.amount.toLocaleString()}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">{booking.notes}</p>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-1" />
                              {booking.contact.phone}
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-1" />
                              {booking.contact.email}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge className={`${getStatusColor(booking.status)} text-white`}>
                          {getStatusIcon(booking.status)}
                          <span className="ml-1 capitalize">{booking.status}</span>
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" className="btn-luxury">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gold-300 hover:bg-gold-50 bg-transparent"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Service Management</h2>
              <Button className="btn-luxury">
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="card-luxury border-0 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={service.active ? "bg-green-500 text-white" : "bg-gray-500 text-white"}>
                        {service.active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-1">
                      <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white text-gray-700 h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white text-gray-700 h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900">${service.price.toLocaleString()}</span>
                          {service.originalPrice > service.price && (
                            <span className="text-lg text-gray-500 line-through">
                              ${service.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1 font-medium">
                            {service.rating} ({service.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Features</h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                              {feature}
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <p className="text-xs text-gray-500">+{service.features.length - 3} more features</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">{service.bookings}</span> bookings
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gold-300 hover:bg-gold-50 bg-transparent"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" className="btn-luxury">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Portfolio Management</h2>
              <Button className="btn-luxury">
                <Plus className="h-4 w-4 mr-2" />
                Add Photos
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item) => (
                <Card
                  key={item.id}
                  className="card-luxury border-0 overflow-hidden group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gold-500 text-white border-0 shadow-sm">{item.category}</Badge>
                    </div>

                    <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white text-gray-700 h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white text-gray-700 h-8 w-8">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {item.likes}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {item.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Business Analytics</h2>
              <Button variant="outline" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-luxury border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Monthly Views</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.monthlyViews.toLocaleString()}</p>
                    </div>
                    <Eye className="h-8 w-8 text-gold-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Inquiries</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.monthlyInquiries}</p>
                    </div>
                    <MessageCircle className="h-8 w-8 text-gold-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.conversionRate}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-gold-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg. Booking</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${analytics.averageBookingValue.toLocaleString()}
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-gold-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-luxury border-0">
                <CardHeader>
                  <CardTitle>Top Performing Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analytics.topServices.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="font-medium text-gray-900">{service}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{Math.floor(Math.random() * 20) + 10} bookings</p>
                          <p className="text-sm text-gray-600">
                            ${(Math.floor(Math.random() * 5000) + 2000).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Profile Views</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-gold-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Inquiry Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                        </div>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Booking Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                        </div>
                        <span className="text-sm font-medium">82%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
