import type { Metadata } from "next"
import TrackingForm from "@/components/tracking-form"

export const metadata: Metadata = {
  title: "Track Your Shipment | Sky Fly Express",
  description:
    "Track your shipment in real-time with Sky Fly Express. Get detailed information about your package's current location and delivery status.",
}

export default function TrackPage() {
  return (
    <main className="container px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Track Your Shipment</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enter your tracking number below to get real-time updates on your package's location and delivery status.
          </p>
        </div>
        <TrackingForm />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">How to Track Your Shipment</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Enter your tracking number in the field above</li>
              <li>Click on "Track Shipment"</li>
              <li>View detailed information about your package</li>
              <li>Check the shipment history for a complete timeline</li>
            </ol>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">
              If you're having trouble tracking your shipment or need additional assistance, our customer service team
              is here to help.
            </p>
            <p className="font-medium">Contact us:</p>
            <p className="text-muted-foreground">Phone: +91 9928215805</p>
            <p className="text-muted-foreground">Email: support@skyflyexpress.com</p>
          </div>
        </div>
      </div>
    </main>
  )
}
