"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  Target,
  Lightbulb,
  Shield,
  Sparkles,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "10,000+", label: "Happy Couples", icon: Heart },
    { number: "500+", label: "Verified Vendors", icon: Award },
    { number: "50+", label: "Cities Covered", icon: MapPin },
    { number: "99.9%", label: "Success Rate", icon: CheckCircle },
  ]

  const values = [
    {
      icon: Heart,
      title: "Love-Centered",
      description: "Every decision we make is centered around celebrating love and creating magical moments.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We ensure every vendor is verified and every transaction is secure for your peace of mind.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to make wedding planning easier, smarter, and more enjoyable.",
      color: "from-gold-400 to-gold-600",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build a supportive community where couples and vendors can connect and thrive together.",
      color: "from-green-400 to-green-600",
    },
  ]

  const team = [
    {
      name: "Bisrat Gizaw",
      role: "Project Manager",
      image: "/team-bisrat-new.jpg",
    },
    {
      name: "Dagmawi Paris",
      role: "Lead System Analyst",
      image: "/team-dagmawi-new.jpg",
    },
    {
      name: "Adera Yoseph",
      role: "Requirements & Documentation Specialist",
      image: "/team-adera-new.jpg",
    },
    {
      name: "Nathan Samuel",
      role: "System Designer",
      image: "/team-nathan-new.jpg",
    },
    {
      name: "Simeon Fikre",
      role: "UI/UX Designer",
      image: "/team-simeon-new.jpg",
    },
  ]

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Started with a vision to revolutionize wedding planning through technology in Ethiopia.",
    },
    {
      year: "2023",
      title: "First 50 Vendors",
      description: "Reached our first milestone of 50 verified wedding vendors in Addis Ababa.",
    },
    {
      year: "2024",
      title: "500 Weddings",
      description: "Celebrated helping plan our 500th wedding, marking a major achievement.",
    },
    {
      year: "2024",
      title: "Platform Launch",
      description: "Successfully launched our comprehensive wedding planning platform.",
    },
    {
      year: "2024",
      title: "5,000 Happy Couples",
      description: "Reached the incredible milestone of 5,000 couples who found their perfect wedding through us.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50/30 to-bronze-50/30 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 animate-sparkle">
          <Sparkles className="h-6 w-6 text-gold-400" />
        </div>
        <div className="absolute top-32 right-20 animate-sparkle" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-4 w-4 text-bronze-400" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-sparkle" style={{ animationDelay: "2s" }}>
          <Sparkles className="h-5 w-5 text-gold-500" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="gradient-text">Memosheria</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're passionate about making wedding planning effortless, enjoyable, and unforgettable. Our mission is to
              connect couples with the perfect vendors to create their dream wedding.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="h-8 w-8 text-gold-600 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages">
                <Button size="lg" className="btn-luxury text-lg px-8 py-4 rounded-full">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 rounded-full border-2 border-gold-300 hover:bg-gold-50 hover:border-gold-400 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-xl text-gray-600">How we started and where we're going</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">From Personal Experience to Platform</h3>
                <p className="text-gray-600 leading-relaxed">
                  Memosheria was born from our founders' own wedding planning experience in Ethiopia. After spending
                  countless hours searching for the perfect vendors, comparing prices, and coordinating details, they
                  realized there had to be a better way for Ethiopian couples.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a simple idea to help couples find trusted wedding vendors has evolved into a
                  comprehensive platform that serves thousands of couples and vendors across Ethiopia. We've built more
                  than just a marketplace – we've created a community where love stories come to life.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gold-600 mr-2" />
                    <span className="text-gray-600">Founded in 2023</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gold-600 mr-2" />
                    <span className="text-gray-600">Based in Addis Ababa</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/inspiration-rustic-garden.jpg"
                  alt="Wedding celebration"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold-600">4.9★</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-bronze-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-luxury text-center group hover:scale-105 transition-all duration-300 border-0"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Clean Minimal Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The passionate professionals behind Memosheria</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gold-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-bronze-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-300 hidden md:block"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:space-x-8`}
                  >
                    <div className="flex-1 md:text-right md:pr-8">
                      <Card className="card-luxury border-0 max-w-md mx-auto md:mx-0">
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge className="bg-gold-500 text-white">{milestone.year}</Badge>
                              <Target className="h-5 w-5 text-gold-600" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900">{milestone.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div className="flex-1 md:pl-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              To revolutionize wedding planning in Ethiopia by creating a seamless, trustworthy platform that connects
              couples with exceptional vendors, making every wedding celebration as unique and beautiful as the love it
              celebrates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be Ethiopia's most trusted wedding planning platform, where every couple finds their perfect match.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-bronze-400 to-bronze-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Our Purpose</h3>
                <p className="text-gray-600">
                  To celebrate love by making wedding planning stress-free, enjoyable, and memorable for every Ethiopian
                  couple.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-bronze-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Our Promise</h3>
                <p className="text-gray-600">
                  To provide exceptional service, verified quality, and unwavering support throughout your wedding
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-bronze-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 animate-sparkle">
          <Sparkles className="h-8 w-8 text-white/50" />
        </div>
        <div className="absolute bottom-10 right-10 animate-sparkle" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-6 w-6 text-white/50" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Wedding Journey?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of couples who have trusted us to make their wedding dreams come true
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 rounded-full bg-white text-gold-600 hover:bg-gray-100"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-gold-600 bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-gray-400">+251 911 123456</p>
                <p className="text-gray-400">Mon-Fri 9AM-6PM EAT</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-gray-400">hello@memosheria.com</p>
                <p className="text-gray-400">We respond within 24 hours</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-400">Bole Road, Addis Ababa</p>
                <p className="text-gray-400">Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
