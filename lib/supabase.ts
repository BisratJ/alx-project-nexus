import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client for admin operations
export const supabaseAdmin = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          password_hash: string
          first_name: string
          last_name: string
          phone: string | null
          role: "user" | "vendor" | "admin"
          avatar_url: string | null
          is_active: boolean
          email_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          first_name: string
          last_name: string
          phone?: string | null
          role?: "user" | "vendor" | "admin"
          avatar_url?: string | null
          is_active?: boolean
          email_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          first_name?: string
          last_name?: string
          phone?: string | null
          role?: "user" | "vendor" | "admin"
          avatar_url?: string | null
          is_active?: boolean
          email_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      vendors: {
        Row: {
          id: string
          user_id: string
          business_name: string
          description: string | null
          website: string | null
          address: string | null
          city: string | null
          state: string | null
          zip_code: string | null
          country: string
          phone: string | null
          years_experience: number
          specialties: string[]
          cover_image_url: string | null
          portfolio_images: string[]
          status: "pending" | "approved" | "rejected" | "suspended"
          rating: number
          review_count: number
          total_bookings: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          business_name: string
          description?: string | null
          website?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip_code?: string | null
          country?: string
          phone?: string | null
          years_experience?: number
          specialties?: string[]
          cover_image_url?: string | null
          portfolio_images?: string[]
          status?: "pending" | "approved" | "rejected" | "suspended"
          rating?: number
          review_count?: number
          total_bookings?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          business_name?: string
          description?: string | null
          website?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip_code?: string | null
          country?: string
          phone?: string | null
          years_experience?: number
          specialties?: string[]
          cover_image_url?: string | null
          portfolio_images?: string[]
          status?: "pending" | "approved" | "rejected" | "suspended"
          rating?: number
          review_count?: number
          total_bookings?: number
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          icon_url: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          icon_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          icon_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      packages: {
        Row: {
          id: string
          vendor_id: string
          category_id: string
          name: string
          description: string | null
          price: number
          duration_hours: number | null
          max_guests: number | null
          includes: string[]
          images: string[]
          is_featured: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          vendor_id: string
          category_id: string
          name: string
          description?: string | null
          price: number
          duration_hours?: number | null
          max_guests?: number | null
          includes?: string[]
          images?: string[]
          is_featured?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          vendor_id?: string
          category_id?: string
          name?: string
          description?: string | null
          price?: number
          duration_hours?: number | null
          max_guests?: number | null
          includes?: string[]
          images?: string[]
          is_featured?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          user_id: string
          vendor_id: string
          package_id: string
          event_date: string
          event_time: string | null
          guest_count: number | null
          venue_address: string | null
          special_requests: string | null
          total_amount: number
          deposit_amount: number | null
          status: "pending" | "confirmed" | "cancelled" | "completed"
          payment_status: "pending" | "paid" | "failed" | "refunded"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          vendor_id: string
          package_id: string
          event_date: string
          event_time?: string | null
          guest_count?: number | null
          venue_address?: string | null
          special_requests?: string | null
          total_amount: number
          deposit_amount?: number | null
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          payment_status?: "pending" | "paid" | "failed" | "refunded"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          vendor_id?: string
          package_id?: string
          event_date?: string
          event_time?: string | null
          guest_count?: number | null
          venue_address?: string | null
          special_requests?: string | null
          total_amount?: number
          deposit_amount?: number | null
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          payment_status?: "pending" | "paid" | "failed" | "refunded"
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          booking_id: string
          user_id: string
          vendor_id: string
          rating: number
          comment: string | null
          images: string[]
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          booking_id: string
          user_id: string
          vendor_id: string
          rating: number
          comment?: string | null
          images?: string[]
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          booking_id?: string
          user_id?: string
          vendor_id?: string
          rating?: number
          comment?: string | null
          images?: string[]
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      galleries: {
        Row: {
          id: string
          title: string
          description: string | null
          category: string | null
          style: string | null
          season: string | null
          images: string[]
          tags: string[]
          is_featured: boolean
          view_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          category?: string | null
          style?: string | null
          season?: string | null
          images: string[]
          tags?: string[]
          is_featured?: boolean
          view_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          category?: string | null
          style?: string | null
          season?: string | null
          images?: string[]
          tags?: string[]
          is_featured?: boolean
          view_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      budget_items: {
        Row: {
          id: string
          user_id: string
          category: string
          item_name: string
          estimated_cost: number | null
          actual_cost: number | null
          vendor_id: string | null
          booking_id: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          category: string
          item_name: string
          estimated_cost?: number | null
          actual_cost?: number | null
          vendor_id?: string | null
          booking_id?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          category?: string
          item_name?: string
          estimated_cost?: number | null
          actual_cost?: number | null
          vendor_id?: string | null
          booking_id?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type:
            | "booking_request"
            | "booking_confirmed"
            | "booking_cancelled"
            | "payment_received"
            | "review_received"
            | "system_update"
          title: string
          message: string
          data: any | null
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type:
            | "booking_request"
            | "booking_confirmed"
            | "booking_cancelled"
            | "payment_received"
            | "review_received"
            | "system_update"
          title: string
          message: string
          data?: any | null
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?:
            | "booking_request"
            | "booking_confirmed"
            | "booking_cancelled"
            | "payment_received"
            | "review_received"
            | "system_update"
          title?: string
          message?: string
          data?: any | null
          is_read?: boolean
          created_at?: string
        }
      }
    }
  }
}
