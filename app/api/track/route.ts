import { NextResponse } from "next/server"

// This would typically connect to your actual tracking database
const mockTrackingData = {
  SFE12345678: {
    status: "In Transit",
    location: "New Delhi, India",
    date: "June 2, 2025",
    history: [
      {
        status: "Shipment picked up",
        location: "Mumbai, India",
        date: "May 30, 2025",
        time: "10:23 AM",
      },
      {
        status: "Arrived at sorting facility",
        location: "Mumbai, India",
        date: "May 30, 2025",
        time: "4:15 PM",
      },
      {
        status: "Departed from facility",
        location: "Mumbai, India",
        date: "May 31, 2025",
        time: "6:45 AM",
      },
      {
        status: "In Transit",
        location: "New Delhi, India",
        date: "June 2, 2025",
        time: "8:30 AM",
      },
    ],
  },
  SFE87654321: {
    status: "Delivered",
    location: "London, UK",
    date: "June 1, 2025",
    history: [
      {
        status: "Shipment picked up",
        location: "New Delhi, India",
        date: "May 28, 2025",
        time: "11:45 AM",
      },
      {
        status: "Departed from facility",
        location: "New Delhi, India",
        date: "May 28, 2025",
        time: "5:30 PM",
      },
      {
        status: "Arrived at international hub",
        location: "Dubai, UAE",
        date: "May 29, 2025",
        time: "2:15 AM",
      },
      {
        status: "Departed from international hub",
        location: "Dubai, UAE",
        date: "May 29, 2025",
        time: "6:45 AM",
      },
      {
        status: "Arrived at destination country",
        location: "London, UK",
        date: "May 30, 2025",
        time: "8:20 AM",
      },
      {
        status: "Out for delivery",
        location: "London, UK",
        date: "June 1, 2025",
        time: "9:15 AM",
      },
      {
        status: "Delivered",
        location: "London, UK",
        date: "June 1, 2025",
        time: "2:30 PM",
      },
    ],
  },
}

export async function POST(request: Request) {
  try {
    const { trackingNumber } = await request.json()
    
    if (!trackingNumber) {
      return NextResponse.json(
        { error: "Tracking number is required" },
        { status: 400 }
      )
    }
    
    const trackingInfo = mockTrackingData[trackingNumber as keyof typeof mockTrackingData]
    
    if (!trackingInfo) {
      return NextResponse.json(
        { error: "Tracking number not found" },
        { status: 404 }
      )
    }
    
    return NextResponse.json(trackingInfo)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tracking information" },
      { status: 500 }
    )
  }
}
