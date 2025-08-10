"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  DollarSign,
  TrendingUp,
  Package,
  Star,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  MessageCircle,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  UserCheck,
  Building,
  Camera,
  Utensils,
  Music,
  Palette,
} from "lucide-react"
import Link from "next/link"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Mock admin data
  const stats = {
    totalUsers: 12450,
    totalVendors: 1250,
    totalBookings: 8920,
    totalRevenue: 2450000,
    monthlyGrowth: 12.5,
    activeBookings: 340,
    pendingApprovals: 23,
    supportTickets: 15,
  }

  const recentUsers = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "user",
      joinDate: "2024-01-15",
      status: "active",
      avatar: "/couple-1.jpg",
      weddingDate: "2024-06-15",
      totalSpent: 18500,
    },
    {
      id: "2",
      name: "Mike Photography",
      email: "mike@elitemoments.com",
      role: "vendor",
      joinDate: "2024-01-10",
      status: "verified",
      avatar: "/vendor-photographer.jpg",
      category: "Photography",
      totalEarnings: 125000,
    },
    {
      id: "3",
      name: "Emily Chen",
      email: "emily@example.com",
      role: "user",
      joinDate: "2024-01-20",
      status: "active",
      avatar: "/couple-2.jpg",
      weddingDate: "2024-09-22",
      totalSpent: 12300,
    },
    {
      id: "4",
      name: "Enchanted Gardens",
      email: "info@enchantedgardens.com",
      role: "vendor",
      joinDate: "2024-01-05",
      status: "verified",
      avatar: "/vendor-venue.jpg",
      category: "Venues",
      totalEarnings: 89000,
    },
  ]

  const recentBookings = [
    {
      id: "1",
      clientName: "Sarah & John Mitchell",
      vendorName: "Elite Moments Studio",
      service: "Premium Wedding Photography",
      amount: 2800,
      date: "2024-06-15",
      status: "confirmed",
      clientAvatar: "/couple-1.jpg",
      vendorAvatar: "/vendor-photographer.jpg",
    },
    {
      id: "2",
      clientName: "Emily & Michael Chen",
      vendorName: "Gourmet Celebrations",
      service: "Wedding Catering Package",
      amount: 4200,
      date: "2024-09-22",
      status: "pending",
      clientAvatar: "/couple-2.jpg",
      vendorAvatar: "/vendor-catering.jpg",
    },
    {
      id: "3",
      clientName: "Lisa & David Rodriguez",
      vendorName: "Harmony Entertainment",
      service: "Live Band & DJ Combo",
      amount: 3200,
      date: "2024-07-10",
      status: "confirmed",
      clientAvatar: "/couple-3.jpg",
      vendorAvatar: "/vendor-music.jpg",
    },
  ]

  const pendingApprovals = [
    {
      id: "1",
      type: "vendor",
      name: "Sunset Photography Studio",
      email: "info@sunsetphoto.com",
      category: "Photography",
      submitDate: "2024-01-25",
      documents: ["Business License", "Portfolio", "Insurance"],
      avatar: "/vendor-photographer.jpg",
    },
    {
      id: "2",
      type: "service",
      vendorName: "Bloom & Blossom",
      serviceName: "Premium Floral Package",
      price: 2500,
      submitDate: "2024-01-24",
      status: "review",
      avatar: "/vendor-floral.jpg",
    },
    {
      id: "3",
      type: "vendor",
      name: "Grand Ballroom Events",
      email: "events@grandballroom.com",
      category: "Venues",
      submitDate: "2024-01-23",
      documents: ["Venue License", "Photos", "Capacity Certificate"],
      avatar: "/vendor-venue.jpg",
    },
  ]

  const topVendors = [
    {
      id: "1",
      name: "Elite Moments Studio",
      category: "Photography",
      rating: 4.9,
      bookings: 89,
      revenue: 125000,
      avatar: "/vendor-photographer.jpg",
    },
    {
      id: "2",
      name: "Gourmet Celebrations",
      category: "Catering",
      rating: 4.9,
      bookings: 67,
      revenue: 89000,
      avatar: "/vendor-catering.jpg",
    },
    {
      id: "3",
      name: "Enchanted Gardens",
      category: "Venues",
      rating: 4.8,
      bookings: 45,
      revenue: 156000,
      avatar: "/vendor-venue.jpg",
    },
    {
      id: "4",
      name: "Harmony Entertainment",
      category: "Music",
      rating: 4.7,
      bookings: 52,
      revenue: 78000,
      avatar: "/vendor-music.jpg",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "verified":
      case "confirmed":
        return "bg-green-500"
      case "pending":
      case "review":
        return "bg-yellow-500"
      case "suspended":
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
      case "verified":
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
      case "review":
        return <Clock className="h-4 w-4" />
      case "suspended":
      case "cancelled":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category?.toLowerCase()) {
      case "photography":
        return <Camera className="h-4 w-4" />
      case "venues":
        return <Building className="h-4 w-4" />
      case "catering":
        return <Utensils className="h-4 w-4" />
      case "music":
        return <Music className="h-4 w-4" />
      case "floral":
        return <Palette className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const filteredUsers = recentUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || user.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50/30 to-bronze-50/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Admin <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-gray-600">Manage your wedding platform and monitor business performance</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="outline" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button className="btn-luxury">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                    <p className="text-xs text-green-600 mt-1">+{stats.monthlyGrowth}% this month</p>
                  </div>
                  <Users className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Vendors</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalVendors.toLocaleString()}</p>
                    <p className="text-xs text-green-600 mt-1">+8.2% this month</p>
                  </div>
                  <Shield className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalBookings.toLocaleString()}</p>
                    <p className="text-xs text-green-600 mt-1">+15.3% this month</p>
                  </div>
                  <Calendar className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">${(stats.totalRevenue / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-green-600 mt-1">+22.1% this month</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-gold-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alert Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="card-luxury border-0 border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingApprovals}</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0 border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeBookings}</p>
                  </div>
                  <Activity className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0 border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Support Tickets</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.supportTickets}</p>
                  </div>
                  <MessageCircle className="h-8 w-8 text-red-600" />
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
              value="users"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Users
            </TabsTrigger>
            <TabsTrigger
              value="vendors"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Vendors
            </TabsTrigger>
            <TabsTrigger
              value="bookings"
              className="rounded-lg data-[state=active]:bg-gold-500 data-[state=active]:text-white"
            >
              Bookings
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={booking.clientAvatar || "/placeholder.svg"} alt={booking.clientName} />
                            <AvatarFallback className="bg-gold-100 text-gold-700 text-xs">
                              {booking.clientName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={booking.vendorAvatar || "/placeholder.svg"} alt={booking.vendorName} />
                            <AvatarFallback className="bg-bronze-100 text-bronze-700 text-xs">
                              {booking.vendorName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{booking.clientName}</h4>
                          <p className="text-xs text-gray-600">{booking.service}</p>
                          <p className="text-xs text-gray-500">{booking.vendorName}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900 text-sm">${booking.amount.toLocaleString()}</p>
                          <Badge className={`${getStatusColor(booking.status)} text-white text-xs`}>
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pending Approvals */}
              <Card className="card-luxury border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Pending Approvals</CardTitle>
                    <Badge className="bg-yellow-500 text-white">{pendingApprovals.length} pending</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingApprovals.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={item.avatar || "/placeholder.svg"} alt={item.name || item.serviceName} />
                          <AvatarFallback className="bg-gold-100 text-gold-700">
                            {(item.name || item.serviceName || "").charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{item.name || item.serviceName}</h4>
                          <p className="text-xs text-gray-600">
                            {item.type === "vendor" ? item.category : `by ${item.vendorName}`}
                          </p>
                          <p className="text-xs text-gray-500">
                            Submitted {new Date(item.submitDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="btn-luxury text-xs px-3 py-1">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs px-3 py-1 border-red-300 hover:bg-red-50 bg-transparent"
                          >
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Vendors */}
            <Card className="card-luxury border-0">
              <CardHeader>
                <CardTitle>Top Performing Vendors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {topVendors.map((vendor) => (
                    <div key={vendor.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={vendor.avatar || "/placeholder.svg"} alt={vendor.name} />
                          <AvatarFallback className="bg-gold-100 text-gold-700">{vendor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{vendor.name}</h4>
                          <p className="text-xs text-gray-600">{vendor.category}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Rating</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                            <span className="font-medium">{vendor.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Bookings</span>
                          <span className="font-medium">{vendor.bookings}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Revenue</span>
                          <span className="font-medium">${vendor.revenue.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 border-gold-200 focus:border-gold-400"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40 border-gold-200">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="btn-luxury">
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>

            <Card className="card-luxury border-0">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left p-4 font-semibold text-gray-900">User</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Role</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Join Date</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Activity</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback className="bg-gold-100 text-gold-700">
                                  {user.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold text-gray-900">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge
                              className={`${
                                user.role === "vendor" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                              }`}
                            >
                              {user.role}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge className={`${getStatusColor(user.status)} text-white`}>
                              {getStatusIcon(user.status)}
                              <span className="ml-1 capitalize">{user.status}</span>
                            </Badge>
                          </td>
                          <td className="p-4">
                            <p className="text-sm text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</p>
                          </td>
                          <td className="p-4">
                            <div className="text-sm">
                              {user.role === "user" ? (
                                <>
                                  <p className="text-gray-900">Wedding: {user.weddingDate}</p>
                                  <p className="text-gray-600">Spent: ${user.totalSpent?.toLocaleString()}</p>
                                </>
                              ) : (
                                <>
                                  <p className="text-gray-900">{user.category}</p>
                                  <p className="text-gray-600">Earned: ${user.totalEarnings?.toLocaleString()}</p>
                                </>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-gold-300 hover:bg-gold-50 bg-transparent"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-gold-300 hover:bg-gold-50 bg-transparent"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-red-300 hover:bg-red-50 bg-transparent"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vendors Tab */}
          <TabsContent value="vendors" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Vendor Management</h2>
              <Button className="btn-luxury">
                <Plus className="h-4 w-4 mr-2" />
                Add Vendor
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {topVendors.map((vendor) => (
                <Card key={vendor.id} className="card-luxury border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={vendor.avatar || "/placeholder.svg"} alt={vendor.name} />
                          <AvatarFallback className="bg-gold-100 text-gold-700 text-xl">
                            {vendor.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">{vendor.name}</h3>
                            <div className="flex items-center space-x-2">
                              {getCategoryIcon(vendor.category)}
                              <span className="text-gray-600">{vendor.category}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              <span className="font-medium">{vendor.rating}</span>
                            </div>
                            <Badge className="bg-green-500 text-white">
                              <UserCheck className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">Bookings</p>
                              <p className="font-semibold">{vendor.bookings}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Revenue</p>
                              <p className="font-semibold">${vendor.revenue.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" className="btn-luxury">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="border-gold-300 hover:bg-gold-50 bg-transparent">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-300 hover:bg-red-50 bg-transparent">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          Suspend
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              {recentBookings.map((booking) => (
                <Card key={booking.id} className="card-luxury border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={booking.clientAvatar || "/placeholder.svg"} alt={booking.clientName} />
                            <AvatarFallback className="bg-gold-100 text-gold-700">
                              {booking.clientName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-2xl text-gray-400">→</div>
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={booking.vendorAvatar || "/placeholder.svg"} alt={booking.vendorName} />
                            <AvatarFallback className="bg-bronze-100 text-bronze-700">
                              {booking.vendorName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-lg text-gray-900">{booking.clientName}</h3>
                          <p className="text-gray-600">{booking.service}</p>
                          <p className="text-sm text-gray-500">by {booking.vendorName}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {booking.date}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />${booking.amount.toLocaleString()}
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
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
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
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Platform Analytics</h2>
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
                      <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">$245K</p>
                      <p className="text-xs text-green-600 mt-1">+22.1% from last month</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-gold-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                      <p className="text-2xl font-bold text-gray-900">68.5%</p>
                      <p className="text-xs text-green-600 mt-1">+5.2% from last month</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-gold-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg. Order Value</p>
                      <p className="text-2xl font-bold text-gray-900">$2,850</p>
                      <p className="text-xs text-green-600 mt-1">+8.7% from last month</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-gold-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Customer Satisfaction</p>
                      <p className="text-2xl font-bold text-gray-900">4.8/5</p>
                      <p className="text-xs text-green-600 mt-1">+0.2 from last month</p>
                    </div>
                    <Star className="h-8 w-8 text-gold-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-luxury border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 text-gold-600 mr-2" />
                    Revenue by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Photography", percentage: 35, amount: 85750 },
                      { category: "Venues", percentage: 28, amount: 68600 },
                      { category: "Catering", percentage: 22, amount: 53900 },
                      { category: "Music & DJ", percentage: 10, amount: 24500 },
                      { category: "Floral", percentage: 5, amount: 12250 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {getCategoryIcon(item.category)}
                          <span className="font-medium text-gray-900">{item.category}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gold-500 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-12">{item.percentage}%</span>
                          <span className="text-sm text-gray-600 w-20">${item.amount.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 text-gold-600 mr-2" />
                    Platform Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">User Growth</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-sm font-medium">+12.5%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Vendor Growth</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                        </div>
                        <span className="text-sm font-medium">+8.2%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Booking Growth</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                        <span className="text-sm font-medium">+15.3%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenue Growth</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-gold-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                        <span className="text-sm font-medium">+22.1%</span>
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
