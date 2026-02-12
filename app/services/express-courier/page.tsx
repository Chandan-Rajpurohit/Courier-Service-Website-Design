import type { Metadata } from "next"
import { Clock, CheckCircle, Globe, Package, FileText, Truck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Express Courier Services | Next-Day Delivery | Airnet International",
  description: "Fast express courier delivery for documents and parcels. Same-day and next-day options to 100+ countries with tracking and POD.",
  keywords: "express courier, express delivery, next day delivery, document courier, parcel shipping, international express",
}

export default function ExpressCourierPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Clock size={64} className="text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Express Courier Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Same-Day & Next-Day Delivery to 100+ Countries Worldwide
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Express Delivery Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">Same-Day Local</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span>Delivery within 24 hours in city</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span>Flexible pickup times</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span>Signature confirmation</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4">Next-Day International</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle className="text-secondary flex-shrink-0" size={18} />
                  <span>Guaranteed next-day delivery</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-secondary flex-shrink-0" size={18} />
                  <span>To major global hubs</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-secondary flex-shrink-0" size={18} />
                  <span>Real-time tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Why Choose Our Express Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center">
              <Globe className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Global Coverage</h3>
              <p className="text-sm text-gray-600">100+ countries served</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center">
              <Package className="text-secondary mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Any Size</h3>
              <p className="text-sm text-gray-600">Documents to parcels</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center">
              <Truck className="text-accent mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Door-to-Door</h3>
              <p className="text-sm text-gray-600">Safe delivery to recipient</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center">
              <FileText className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Proof of Delivery</h3>
              <p className="text-sm text-gray-600">Signature confirmation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/air-freight" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-primary">Air Freight</h3>
              <p className="text-sm text-gray-600">Fast international shipping</p>
            </Link>
            <Link href="/services/commercial-courier" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-secondary">Commercial Courier</h3>
              <p className="text-sm text-gray-600">Business shipping</p>
            </Link>
            <Link href="/services" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-accent">All Services</h3>
              <p className="text-sm text-gray-600">Browse offerings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Express Delivery Today</h2>
          <p className="text-xl mb-8">Fast, reliable service for urgent shipments</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Book Express Service
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
