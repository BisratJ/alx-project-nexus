"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Bole Road, Addis Ababa", "Ethiopia"],
      color: "from-gold-400 to-gold-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+251 911 123456", "+251 911 654321"],
      color: "from-bronze-400 to-bronze-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@memosheria.com", "support@memosheria.com"],
      color: "from-gold-500 to-bronze-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-bronze-500 to-gold-500",
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "vendor", label: "Vendor Partnership" },
    { value: "booking", label: "Booking Support" },
    { value: "technical", label: "Technical Support" },
    { value: "feedback", label: "Feedback" },
  ]

  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Get help whenever you need it",
    },
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "Schedule a personalized planning session",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with experienced wedding professionals",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-bronze-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about planning your dream wedding? We're here to help every step of the way.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="card-luxury text-center border-0 group hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-luxury border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted && (
                    <Alert className="mb-6 border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you for your message! We'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-gold-200 focus:border-gold-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="border-gold-200 focus:border-gold-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+251 911 123456"
                          className="border-gold-200 focus:border-gold-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select onValueChange={(value) => handleSelectChange("inquiryType", value)}>
                          <SelectTrigger className="border-gold-200 focus:border-gold-400">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        required
                        className="border-gold-200 focus:border-gold-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                        className="border-gold-200 focus:border-gold-400"
                      />
                    </div>

                    <Button type="submit" className="w-full btn-luxury" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Features & Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="gradient-text">Memosheria?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're committed to making your wedding planning journey as smooth and enjoyable as possible. Our team
                  of experts is here to support you every step of the way.
                </p>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-bronze-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="card-luxury border-0 bg-gradient-to-br from-gold-50 to-bronze-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Free Consultation</h3>
                  <p className="text-gray-600 mb-6">
                    Ready to start planning? Book a free 30-minute consultation with our wedding experts.
                  </p>
                  <Button className="w-full btn-luxury">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-bronze-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">How do I book a vendor?</h3>
                <p className="text-gray-600">
                  Simply browse our verified vendors, view their profiles, and click "Book Now" to start the booking
                  process. We'll guide you through each step.
                </p>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Are all vendors verified?</h3>
                <p className="text-gray-600">
                  Yes! All vendors on our platform go through a rigorous verification process to ensure quality and
                  reliability for your special day.
                </p>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">What areas do you serve?</h3>
                <p className="text-gray-600">
                  Currently, we serve Addis Ababa, Ethiopia. We're working on expanding to other cities across the
                  country.
                </p>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Is there a booking fee?</h3>
                <p className="text-gray-600">
                  No! Our platform is free for couples to use. You only pay the vendors directly for their services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
