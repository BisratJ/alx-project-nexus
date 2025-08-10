export interface User {
  id: string
  email: string
  name: string
  role: "user" | "vendor" | "admin"
  avatar?: string
  phone?: string
  createdAt: string
}

export interface WeddingPackage {
  id: string
  title: string
  description: string
  price: number
  vendor: Vendor
  images: string[]
  features: string[]
  category: "photography" | "catering" | "venue" | "decoration" | "music"
  rating: number
  reviews: number
  availability: string[]
}

export interface Vendor {
  id: string
  name: string
  email: string
  businessName: string
  category: string
  rating: number
  location: string
  avatar?: string
  verified: boolean
}

export interface Booking {
  id: string
  packageId: string
  userId: string
  vendorId: string
  eventDate: string
  status: "pending" | "confirmed" | "cancelled" | "completed"
  totalAmount: number
  createdAt: string
  notes?: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}
