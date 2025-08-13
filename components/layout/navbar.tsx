"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Logo } from "@/components/ui/logo"
import { Menu, User, Bell, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Navbar() {
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getDashboardLink = () => {
    if (!user) return "/login"
    switch (user.role) {
      case "admin":
        return "/admin"
      case "vendor":
        return "/vendor"
      default:
        return "/dashboard"
    }
  }

  const navLinks = [
    { href: "/packages", label: "Packages" },
    { href: "/vendors", label: "Vendors" },
    { href: "/inspiration", label: "Inspiration" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-2xl border-b border-gold-200/20"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Larger and Centered */}
          <div className="flex-shrink-0 flex items-center">
            <Logo
              variant="primary"
              size="lg"
              className="h-16 w-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation - Futuristic Design */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center space-x-1 bg-gradient-to-r from-gold-50/50 to-bronze-50/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gold-200/30 shadow-lg">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-6 py-3 text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 rounded-full group overflow-hidden"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-bronze-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-bronze-500 group-hover:w-8 transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* User Actions - Modern Design */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-12 w-12 rounded-full bg-gradient-to-r from-gold-50 to-bronze-50 hover:from-gold-100 hover:to-bronze-100 border border-gold-200/30 shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Bell className="h-5 w-5 text-gold-600" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    3
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-12 w-12 rounded-full p-0 ring-2 ring-gold-200/50 hover:ring-gold-300 transition-all duration-300 hover:scale-105"
                    >
                      <Avatar className="h-12 w-12 shadow-lg">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-gradient-to-r from-gold-100 to-bronze-100 text-gold-700 font-semibold">
                          <User className="h-6 w-6" />
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-72 bg-white/95 backdrop-blur-xl border border-gold-200/30 shadow-2xl rounded-2xl"
                    align="end"
                    forceMount
                  >
                    <DropdownMenuLabel className="font-normal p-4">
                      <div className="flex flex-col space-y-2">
                        <p className="text-lg font-semibold leading-none text-gray-900">{user.name}</p>
                        <p className="text-sm leading-none text-gray-500">{user.email}</p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gold-100 to-bronze-100 text-gold-700 w-fit">
                          {user.role} Account
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gold-200/30" />
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-gold-50/50 rounded-lg mx-2">
                      <Link href={getDashboardLink()} className="flex items-center px-3 py-2">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-gold-50/50 rounded-lg mx-2">
                      <Link href="/profile" className="flex items-center px-3 py-2">
                        Profile Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-gold-50/50 rounded-lg mx-2">
                      <Link href="/favorites" className="flex items-center px-3 py-2">
                        My Favorites
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gold-200/30" />
                    <DropdownMenuItem
                      onClick={logout}
                      className="cursor-pointer text-red-600 hover:bg-red-50 rounded-lg mx-2 mb-2"
                    >
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="font-medium px-6 py-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-200/50 shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            {user && (
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-gradient-to-r from-gold-50 to-bronze-50 border border-gold-200/30"
              >
                <Bell className="h-5 w-5 text-gold-600" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-12 w-12 rounded-full bg-gradient-to-r from-gold-50 to-bronze-50 hover:from-gold-100 hover:to-bronze-100 border border-gold-200/30 shadow-lg transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-gold-600" /> : <Menu className="h-6 w-6 text-gold-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Futuristic Design */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gold-200/30 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-2xl mx-4 mb-4">
            <div className="px-6 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gradient-to-r hover:from-gold-50 hover:to-bronze-50 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {user ? (
                <>
                  <div className="border-t border-gold-200/30 pt-4 mt-4">
                    <Link
                      href={getDashboardLink()}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gradient-to-r hover:from-gold-50 hover:to-bronze-50 rounded-xl transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gradient-to-r hover:from-gold-50 hover:to-bronze-50 rounded-xl transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        setMobileMenuOpen(false)
                      }}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <div className="border-t border-gold-200/30 pt-4 mt-4 space-y-3">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-gold-200 hover:bg-gold-50 rounded-xl py-3"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 rounded-xl py-3 shadow-lg">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
