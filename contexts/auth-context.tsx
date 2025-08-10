"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { AuthContextType, User } from "@/types"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for demo
const mockUsers: User[] = [
  {
    id: "1",
    email: "bride@example.com",
    name: "Sarah Johnson",
    role: "user",
    avatar: "/elegant-bride.png",
    phone: "+1 234 567 8900",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    email: "vendor@example.com",
    name: "Mike Photography",
    role: "vendor",
    avatar: "/photographer.png",
    phone: "+1 234 567 8901",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    email: "admin@example.com",
    name: "Admin User",
    role: "admin",
    avatar: "/admin-interface.png",
    phone: "+1 234 567 8902",
    createdAt: "2024-01-01",
  },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("memosheria_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)

    // Mock authentication
    const foundUser = mockUsers.find((u) => u.email === email)
    if (foundUser && password === "password") {
      setUser(foundUser)
      localStorage.setItem("memosheria_user", JSON.stringify(foundUser))
    } else {
      throw new Error("Invalid credentials")
    }

    setLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("memosheria_user")
  }

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
