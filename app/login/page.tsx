"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Eye, EyeOff, Heart, Sparkles, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const user = await login(email, password)

      // Show success toast
      toast({
        title: "Welcome back!",
        description: `Successfully logged in as ${user.name || user.email}`,
        duration: 3000,
      })

      // Redirect based on user role
      setTimeout(() => {
        switch (user.role) {
          case "admin":
            router.push("/admin")
            break
          case "vendor":
            router.push("/vendor")
            break
          default:
            router.push("/dashboard")
        }
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoLogin = async (demoEmail: string) => {
    setError("")
    setEmail(demoEmail)
    setPassword("password")
    setIsLoading(true)

    try {
      const user = await login(demoEmail, "password")

      toast({
        title: "Demo Login Successful!",
        description: `Logged in as ${user.name}`,
        duration: 3000,
      })

      setTimeout(() => {
        switch (user.role) {
          case "admin":
            router.push("/admin")
            break
          case "vendor":
            router.push("/vendor")
            break
          default:
            router.push("/dashboard")
        }
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Demo login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-100 via-gold-50 to-bronze-100 py-32 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-gold-200/30 to-bronze-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-bronze-200/30 to-gold-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gold-100/20 to-bronze-100/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-32 animate-float">
        <Sparkles className="h-6 w-6 text-gold-400 opacity-70" />
      </div>
      <div className="absolute top-40 right-40 animate-float" style={{ animationDelay: "1s" }}>
        <Heart className="h-5 w-5 text-bronze-400 opacity-60" />
      </div>
      <div className="absolute bottom-40 left-40 animate-float" style={{ animationDelay: "2s" }}>
        <Star className="h-4 w-4 text-gold-500 opacity-50" />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-bronze-500 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue planning your perfect wedding</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl text-center text-gray-800">Sign In</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 border-gray-200 focus:border-gold-400 focus:ring-gold-400/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 pr-12 border-gray-200 focus:border-gold-400 focus:ring-gold-400/20"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-12 w-12 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Sign In</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or try demo accounts</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleDemoLogin("bride@example.com")}
                disabled={isLoading}
                className="h-12 border-gold-200 hover:bg-gold-50 hover:border-gold-300 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-800">Demo Bride Account</div>
                    <div className="text-xs text-gray-500">bride@example.com</div>
                  </div>
                </div>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleDemoLogin("vendor@example.com")}
                disabled={isLoading}
                className="h-12 border-gold-200 hover:bg-gold-50 hover:border-gold-300 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-800">Demo Vendor Account</div>
                    <div className="text-xs text-gray-500">vendor@example.com</div>
                  </div>
                </div>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleDemoLogin("admin@example.com")}
                disabled={isLoading}
                className="h-12 border-gold-200 hover:bg-gold-50 hover:border-gold-300 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-800">Demo Admin Account</div>
                    <div className="text-xs text-gray-500">admin@example.com</div>
                  </div>
                </div>
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="font-medium text-gold-600 hover:text-gold-700 transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Badge variant="secondary" className="bg-white/80 text-gray-600 px-4 py-2">
            <Sparkles className="h-3 w-3 mr-1" />
            All demo accounts use password: "password"
          </Badge>
        </div>
      </div>
    </div>
  )
}
