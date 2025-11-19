import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, MapPin, Clock, Truck, Plane, CheckCircle, Download, Share2, Bell, Phone, Mail } from "lucide-react"

// Mock tracking data - in real app this would come from your database
const getTrackingData = (trackingNumber: string) => {
  const mockData: Record<string, any> = {
    SFE12345: {
      trackingNumber: "SFE12345",
      status: "In Transit",
      statusColor: "accent",
      currentLocation: "Dubai International Hub, UAE",
      estimatedDelivery: "June 5, 2025",
      deliveryTime: "Before 6:00 PM",
      origin: {
        city: "Mumbai",
        country: "India",
        date: "June 1, 2025",
        time: "10:30 AM",
      },
      destination: {
        city: "New York",
        country: "United States",
        address: "123 Business Ave, Manhattan, NY 10001",
      },
      packageInfo: {
        weight: "2.5 kg",
        dimensions: "30 x 20 x 15 cm",
        service: "Express International",
        reference: "ORD-2025-001234",
      },
      timeline: [
        {
          status: "Package Picked Up",
          location: "Mumbai, India",
          date: "June 1, 2025",
          time: "10:30 AM",
          description: "Package collected from sender",
          icon: Package,
          completed: true,
        },
        {
          status: "Departed Origin Facility",
          location: "Mumbai International Airport, India",
          date: "June 1, 2025",
          time: "8:45 PM",
          description: "Package departed from origin facility",
          icon: Plane,
          completed: true,
        },
        {
          status: "In Transit",
          location: "Dubai International Hub, UAE",
          date: "June 2, 2025",
          time: "2:15 AM",
          description: "Package arrived at international transit hub",
          icon: Truck,
          completed: true,
          current: true,
        },
        {
          status: "Customs Clearance",
          location: "New York, United States",
          date: "June 4, 2025",
          time: "Expected",
          description: "Package will undergo customs clearance",
          icon: CheckCircle,
          completed: false,
        },
        {
          status: "Out for Delivery",
          location: "New York, United States",
          date: "June 5, 2025",
          time: "Expected",
          description: "Package will be out for final delivery",
          icon: Truck,
          completed: false,
        },
        {
          status: "Delivered",
          location: "New York, United States",
          date: "June 5, 2025",
          time: "Expected",
          description: "Package delivered to recipient",
          icon: CheckCircle,
          completed: false,
        },
      ],
    },
  }

  return mockData[trackingNumber] || null
}

interface PageProps {
  params: {
    trackingNumber: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Track ${params.trackingNumber} | Sky Fly Express`,
    description: `Track your shipment ${params.trackingNumber} with Sky Fly Express. Get real-time updates on your package location and delivery status.`,
  }
}

export default function TrackingDetailsPage({ params }: PageProps) {
  const trackingData = getTrackingData(params.trackingNumber)

  if (!trackingData) {
    notFound()
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "default"
      case "in transit":
        return "secondary"
      case "out for delivery":
        return "default"
      default:
        return "outline"
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50">
      <div className="container px-4 md:px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">Tracking Details</h1>
              <p className="text-lg text-gray-600">Real-time updates for your shipment</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary-600">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>

        {/* Status Overview Card */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-secondary-900 to-secondary-800 text-white overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Package className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Tracking Number</p>
                    <p className="text-2xl font-bold">{trackingData.trackingNumber}</p>
                  </div>
                </div>
                <Badge
                  variant={getStatusBadgeVariant(trackingData.status)}
                  className="bg-accent text-white border-0 text-sm px-3 py-1"
                >
                  {trackingData.status}
                </Badge>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Current Location</p>
                  <p className="text-lg font-semibold">{trackingData.currentLocation}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Estimated Delivery</p>
                  <p className="text-lg font-semibold">{trackingData.estimatedDelivery}</p>
                  <p className="text-white/80 text-sm">{trackingData.deliveryTime}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Section */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipment Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {trackingData.timeline.map((event: any, index: number) => {
                    const Icon = event.icon
                    return (
                      <div key={index} className="relative flex items-start gap-4">
                        {/* Timeline Line */}
                        {index < trackingData.timeline.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-accent-300 to-gray-200" />
                        )}

                        {/* Icon */}
                        <div
                          className={`relative z-10 p-3 rounded-full border-4 ${
                            event.completed
                              ? event.current
                                ? "bg-accent-500 border-accent-200 animate-pulse-slow"
                                : "bg-primary-500 border-primary-200"
                              : "bg-gray-100 border-gray-200"
                          }`}
                        >
                          <Icon className={`h-5 w-5 ${event.completed ? "text-white" : "text-gray-400"}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className={`font-semibold ${event.completed ? "text-secondary-900" : "text-gray-500"}`}>
                              {event.status}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>
                                {event.date} • {event.time}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-1">{event.description}</p>
                          <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Package Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Package Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Service Type</p>
                  <p className="font-semibold text-secondary-900">{trackingData.packageInfo.service}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-semibold">{trackingData.packageInfo.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dimensions</p>
                  <p className="font-semibold">{trackingData.packageInfo.dimensions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Reference Number</p>
                  <p className="font-semibold">{trackingData.packageInfo.reference}</p>
                </div>
              </CardContent>
            </Card>

            {/* Route Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-secondary-700 to-secondary-800 text-white">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Route Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <p className="text-sm font-medium text-gray-500">FROM</p>
                  </div>
                  <p className="font-semibold text-secondary-900">
                    {trackingData.origin.city}, {trackingData.origin.country}
                  </p>
                  <p className="text-sm text-gray-500">
                    {trackingData.origin.date} • {trackingData.origin.time}
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-primary-300 to-accent-300"></div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <p className="text-sm font-medium text-gray-500">TO</p>
                  </div>
                  <p className="font-semibold text-secondary-900">
                    {trackingData.destination.city}, {trackingData.destination.country}
                  </p>
                  <p className="text-sm text-gray-500">{trackingData.destination.address}</p>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-secondary-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our customer support team is here to assist you with any questions about your shipment.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
