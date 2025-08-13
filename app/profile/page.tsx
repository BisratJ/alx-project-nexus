"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Camera, User, Lock, Bell, Calendar } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"

export default function ProfilePage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("personal")
  const [formData, setFormData] = useState({
    name: user?.name || "Sarah Johnson",
    email: user?.email || "sarah@example.com",
    phone: "+251 911 123456",
    address: "Bole Road, Addis Ababa",
    weddingDate: "2024-06-15",
    partnerName: "John Mitchell",
    bio: "Planning our dream wedding in Addis Ababa!",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
      // Show success message or toast
    }, 1000)
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Profile Settings</h1>
            {!isEditing ? (
              <Button
                className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            ) : (
              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl bg-white sticky top-24">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24 ring-4 ring-gold-200">
                      <AvatarImage src={user?.avatar || "/placeholder-user.jpg"} alt={formData.name} />
                      <AvatarFallback className="bg-gold-100 text-gold-700 text-2xl font-bold">
                        {formData.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-gold-500 text-white hover:bg-gold-600"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-gray-900">{formData.name}</h3>
                    <p className="text-sm text-gray-600">{formData.email}</p>
                    <div className="inline-flex items-center px-3 py-1 mt-2 rounded-full text-xs font-medium bg-gradient-to-r from-gold-100 to-bronze-100 text-gold-700">
                      {user?.role || "User"} Account
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white shadow-lg rounded-lg p-1">
                <TabsTrigger
                  value="personal"
                  className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold-500 data-[state=active]:to-bronze-500 data-[state=active]:text-white"
                >
                  <User className="h-4 w-4" />
                  <span>Personal</span>
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold-500 data-[state=active]:to-bronze-500 data-[state=active]:text-white"
                >
                  <Lock className="h-4 w-4" />
                  <span>Security</span>
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold-500 data-[state=active]:to-bronze-500 data-[state=active]:text-white"
                >
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gold-600" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                        />
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Calendar className="h-5 w-5 text-gold-600 mr-2" />
                        Wedding Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="weddingDate">Wedding Date</Label>
                          <Input
                            id="weddingDate"
                            name="weddingDate"
                            type="date"
                            value={formData.weddingDate}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partnerName">Partner's Name</Label>
                          <Input
                            id="partnerName"
                            name="partnerName"
                            value={formData.partnerName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">About You</h3>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="border-gold-200 focus:border-gold-400 focus:ring-gold-400 min-h-[100px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lock className="h-5 w-5 text-gold-600" />
                      <span>Security Settings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input
                            id="currentPassword"
                            name="currentPassword"
                            type="password"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            value={formData.newPassword}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Account Security</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                          </div>
                          <Button
                            variant="outline"
                            disabled={!isEditing}
                            className="border-gold-300 bg-transparent hover:bg-gold-50"
                          >
                            Enable
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Login Sessions</p>
                            <p className="text-sm text-gray-600">Manage your active sessions</p>
                          </div>
                          <Button variant="outline" className="border-gold-300 bg-transparent hover:bg-gold-50">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-gold-600" />
                      <span>Notification Preferences</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive updates about your bookings and account</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="emailNotifications"
                            className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                            defaultChecked
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">SMS Notifications</p>
                          <p className="text-sm text-gray-600">Receive text messages for important updates</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="smsNotifications"
                            className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                            defaultChecked
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Marketing Emails</p>
                          <p className="text-sm text-gray-600">Receive promotional offers and updates</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="marketingEmails"
                            className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Reminder Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Booking Reminders</p>
                            <p className="text-sm text-gray-600">Receive reminders about upcoming appointments</p>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="bookingReminders"
                              className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                              defaultChecked
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Payment Reminders</p>
                            <p className="text-sm text-gray-600">Receive reminders about upcoming payments</p>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="paymentReminders"
                              className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                              defaultChecked
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
