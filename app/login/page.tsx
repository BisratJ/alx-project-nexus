"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Logo } from "@/components/ui/logo"
import { Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("")

  const { login } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  useEffect(() => {
    // Get redirect URL from query parameters if available
    const redirect = searchParams.get("redirect")
    if (redirect) {
      setRedirectUrl(redirect)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const user = await login(email, password)

      // Show success toast
      toast({
        title: "Welcome back!",
        description: `Successfully logged in as ${user.name || user.email}`,
      })

      // Small delay to show the toast before redirecting
      setTimeout(() => {
        // Redirect based on user role or redirect URL
        if (redirectUrl) {
          router.push(redirectUrl)
        } else {
          // Redirect based on user role
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
        }
      }, 1000)
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const demoAccounts = [
    { role: "User (Bride/Groom)", email: "bride@example.com", password: "password" },
    { role: "Vendor", email: "vendor@example.com", password: "password" },
    { role: "Admin", email: "admin@example.com", password: "password" },
  ]

  const fillDemoAccount = (email: string, password: string) => {
    setEmail(email)
    setPassword(password)
    setError("") // Clear any existing errors when filling demo account
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gold-100 via-gold-50 to-bronze-100 px-4 py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-300/20 to-bronze-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-bronze-300/20 to-gold-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute top-20 left-20 animate-sparkle">
        <Sparkles className="h-6 w-6 text-gold-500" />
      </div>
      <div className="absolute bottom-20 right-20 animate-sparkle" style={{ animationDelay: "1s" }}>
        <Sparkles className="h-4 w-4 text-bronze-500" />
      </div>
      <div className="absolute top-1/2 left-10 animate-sparkle" style={{ animationDelay: "2s" }}>
        <Sparkles className="h-5 w-5 text-gold-600" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <Logo variant="primary" size="xl" href="/" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue planning your perfect wedding</p>
        </div>

        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
              Sign In
            </CardTitle>
            <CardDescription className="text-gray-600">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive" className="animate-fade-in">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 h-12 border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-gold-50"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-gold-600 hover:text-gold-700 font-medium">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white h-12 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-12 bg-transparent hover:bg-gray-50">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="h-12 bg-transparent hover:bg-gray-50">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-gold-600 hover:text-gold-700 font-medium">
                  Sign up for free
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Demo Accounts */}
        <Card className="mt-6 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-center text-gold-700">Demo Accounts</CardTitle>
            <CardDescription className="text-center text-sm">
              Click any account below to auto-fill credentials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {demoAccounts.map((account, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start h-auto p-3 hover:bg-gold-50 hover:border-gold-300 bg-transparent"
                onClick={() => fillDemoAccount(account.email, account.password)}
              >
                <div className="text-left">
                  <div className="font-medium text-sm">{account.role}</div>
                  <div className="text-xs text-gray-500">{account.email}</div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
