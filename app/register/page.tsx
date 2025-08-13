"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Store, CheckCircle, AlertCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<"couple" | "vendor">("couple")
  const [formData, setFormData] = useState({
    // Common fields
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "Addis Ababa",

    // Couple specific
    partnerName: "",
    weddingDate: "",
    budget: "",

    // Vendor specific
    businessName: "",
    category: "",
    experience: "",
    description: "",
    website: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const vendorCategories = [
    "Wedding Venues",
    "Photography",
    "Catering",
    "Floral Design",
    "Music & Entertainment",
    "Wedding Cakes",
    "Transportation",
    "Wedding Planning",
    "Decoration",
    "Makeup & Beauty",
  ]

  const budgetRanges = [
    "Under 50,000 ETB",
    "50,000 - 100,000 ETB",
    "100,000 - 200,000 ETB",
    "200,000 - 500,000 ETB",
    "500,000+ ETB",
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Common validations
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.password) newErrors.password = "Password is required"
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match"

    // Couple specific validations
    if (accountType === "couple") {
      if (!formData.partnerName.trim()) newErrors.partnerName = "Partner name is required"
      if (!formData.weddingDate) newErrors.weddingDate = "Wedding date is required"
      if (!formData.budget) newErrors.budget = "Budget range is required"
    }

    // Vendor specific validations
    if (accountType === "vendor") {
      if (!formData.businessName.trim()) newErrors.businessName = "Business name is required"
      if (!formData.category) newErrors.category = "Service category is required"
      if (!formData.experience) newErrors.experience = "Experience is required"
      if (!formData.description.trim()) newErrors.description = "Business description is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gold-50 to-bronze-50 pt-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto card-luxury border-0">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Memosheria!</h1>
              <p className="text-lg text-gray-600 mb-8">
                Your account has been created successfully.
                {accountType === "couple"
                  ? " You can now start planning your dream wedding!"
                  : " Your vendor profile is under review and will be activated within 24 hours."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login">
                  <Button size="lg" className="btn-luxury">
                    Sign In to Your Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="bg-transparent">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 to-bronze-50 pt-20">
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute top-10 left-10 animate-sparkle">
          <Sparkles className="h-6 w-6 text-gold-400" />
        </div>
        <div className="absolute top-32 right-20 animate-sparkle" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-4 w-4 text-bronze-400" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join <span className="gradient-text">Memosheria</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create your account and start your wedding planning journey or grow your wedding business with us
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs value={accountType} onValueChange={(value) => setAccountType(value as "couple" | "vendor")}>
              {/* Account Type Selection */}
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/50 backdrop-blur-sm">
                <TabsTrigger value="couple" className="flex items-center gap-2 data-[state=active]:bg-white">
                  <Heart className="h-4 w-4" />
                  I'm Planning a Wedding
                </TabsTrigger>
                <TabsTrigger value="vendor" className="flex items-center gap-2 data-[state=active]:bg-white">
                  <Store className="h-4 w-4" />
                  I'm a Wedding Vendor
                </TabsTrigger>
              </TabsList>

              {/* Couple Registration */}
              <TabsContent value="couple">
                <Card className="card-luxury border-0">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Create Your Couple Account</CardTitle>
                    <CardDescription className="text-base">
                      Start planning your dream wedding with access to verified vendors and planning tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Your First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Your Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partnerName">Partner's Full Name *</Label>
                        <Input
                          id="partnerName"
                          value={formData.partnerName}
                          onChange={(e) => handleInputChange("partnerName", e.target.value)}
                          className={errors.partnerName ? "border-red-500" : ""}
                        />
                        {errors.partnerName && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.partnerName}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="weddingDate">Wedding Date *</Label>
                          <Input
                            id="weddingDate"
                            type="date"
                            value={formData.weddingDate}
                            onChange={(e) => handleInputChange("weddingDate", e.target.value)}
                            className={errors.weddingDate ? "border-red-500" : ""}
                          />
                          {errors.weddingDate && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.weddingDate}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range *</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className={errors.budget ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select your budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.budget && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.budget}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="password">Password *</Label>
                          <Input
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className={errors.password ? "border-red-500" : ""}
                          />
                          {errors.password && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.password}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password *</Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className={errors.confirmPassword ? "border-red-500" : ""}
                          />
                          {errors.confirmPassword && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.confirmPassword}
                            </p>
                          )}
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full btn-luxury" disabled={isSubmitting}>
                        {isSubmitting ? "Creating Account..." : "Create Couple Account"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Vendor Registration */}
              <TabsContent value="vendor">
                <Card className="card-luxury border-0">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Store className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Create Your Vendor Account</CardTitle>
                    <CardDescription className="text-base">
                      Join our network of verified wedding vendors and grow your business
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Your First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Your Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange("businessName", e.target.value)}
                          className={errors.businessName ? "border-red-500" : ""}
                        />
                        {errors.businessName && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.businessName}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="category">Service Category *</Label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => handleInputChange("category", value)}
                          >
                            <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select your service category" />
                            </SelectTrigger>
                            <SelectContent>
                              {vendorCategories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.category && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.category}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience *</Label>
                          <Select
                            value={formData.experience}
                            onValueChange={(value) => handleInputChange("experience", value)}
                          >
                            <SelectTrigger className={errors.experience ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.experience && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.experience}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Business Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Business Phone *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="website">Website (Optional)</Label>
                          <Input
                            id="website"
                            value={formData.website}
                            onChange={(e) => handleInputChange("website", e.target.value)}
                            placeholder="https://yourwebsite.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Business Description *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          className={errors.description ? "border-red-500" : ""}
                          placeholder="Tell us about your business, services, and what makes you special..."
                          rows={4}
                        />
                        {errors.description && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.description}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="password">Password *</Label>
                          <Input
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className={errors.password ? "border-red-500" : ""}
                          />
                          {errors.password && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.password}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password *</Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className={errors.confirmPassword ? "border-red-500" : ""}
                          />
                          {errors.confirmPassword && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.confirmPassword}
                            </p>
                          )}
                        </div>
                      </div>

                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Your vendor account will be reviewed within 24 hours. You'll receive an email confirmation
                          once approved.
                        </AlertDescription>
                      </Alert>

                      <Button type="submit" size="lg" className="w-full btn-luxury" disabled={isSubmitting}>
                        {isSubmitting ? "Creating Account..." : "Create Vendor Account"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Login Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-gold-600 hover:text-gold-700 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
