import type { Metadata } from "next"
import { Plane, CheckCircle, Globe, Clock, FileText, Package } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Air Freight Services | Fast International Shipping | Airnet International",
  description: "Professional air freight solutions for time-sensitive shipments. Express air courier with 24-72 hour delivery worldwide. IATA compliant.",
  keywords: "air freight, air courier, express air shipping, international air freight, cargo airline, fast shipment delivery",
}

export default function AirFreightPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Plane size={64} className="text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Air Freight Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Fast & Reliable Air Cargo Solutions for Time-Sensitive Shipments Worldwide
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Why Choose Air Freight?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Clock className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Speed</h3>
              <p className="text-gray-600">
                Fastest shipping option with 24-72 hour delivery to major global hubs. Perfect for urgent orders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Globe className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Access to major airports worldwide with partnerships ensuring reliable delivery to remote locations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Package className="text-accent mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Safety</h3>
              <p className="text-gray-600">
                Secure handling with advanced tracking and insurance coverage for valuable shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Our Air Freight Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary">Express Air Courier</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>24-48 hour delivery to major cities</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Weight limit: up to 1000 kg</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Door-to-door service</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Real-time tracking</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Standard Air Freight</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>3-5 day delivery for budget-conscious</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Unlimited weight capacity</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Cost-effective pricing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Consolidated shipments available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/express-courier" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-primary">Express Courier</h3>
              <p className="text-sm text-gray-600">Quick door-to-door delivery services</p>
            </Link>
            <Link href="/services/commercial-courier" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-secondary">Commercial Courier</h3>
              <p className="text-sm text-gray-600">Business shipping solutions</p>
            </Link>
            <Link href="/services" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-accent">All Services</h3>
              <p className="text-sm text-gray-600">Browse complete offerings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ship Faster with Air Freight</h2>
          <p className="text-xl mb-8">Get your shipment to its destination in record time</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Air Freight Quote
            </a>
            <a
              href="tel:9920216805"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              Call +91 9920216805
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
