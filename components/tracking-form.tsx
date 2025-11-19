"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate API validation
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to detailed tracking page
      router.push(`/track/${trackingNumber.trim()}`)
    }, 1000)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter your tracking number (e.g., SFE12345)"
            className="pl-10 border-2 border-accent-200 focus:border-accent-500 focus:ring-accent-500"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={isLoading} className="shrink-0 bg-primary hover:bg-primary-600 text-white px-8">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Tracking...
            </>
          ) : (
            "Track Shipment"
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
        <p className="text-sm text-accent-800 font-medium mb-2">Demo Tracking Numbers:</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTrackingNumber("SFE12345")}
            className="px-3 py-1 bg-accent-100 hover:bg-accent-200 text-accent-800 rounded text-sm transition-colors"
          >
            SFE12345
          </button>
        </div>
      </div>
    </div>
  )
}
