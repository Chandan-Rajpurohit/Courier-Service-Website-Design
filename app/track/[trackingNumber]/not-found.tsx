import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <Card className="max-w-md mx-auto border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-primary-600" />
            </div>
            <CardTitle className="text-2xl text-secondary-900">Tracking Number Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              We couldn't find any shipment with this tracking number. Please check the number and try again.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/track">
                  <Search className="h-4 w-4 mr-2" />
                  Try Another Number
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
