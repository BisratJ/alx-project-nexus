"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg" | "xl"
  href?: string
  className?: string
}

export function Logo({ variant = "primary", size = "md", href, className }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto",
    xl: "h-12 w-auto",
  }

  const logoSrc = variant === "primary" ? "/memosheria-primary.png" : "/memosheria-secondary.png"

  const LogoImage = (
    <div className={cn("flex items-center", className)}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="Memosheria"
        width={120}
        height={40}
        className={cn(sizeClasses[size], "object-contain")}
        priority
      />
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {LogoImage}
      </Link>
    )
  }

  return LogoImage
}
