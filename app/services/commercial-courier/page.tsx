import type { Metadata } from "next"
import { Package, CheckCircle, Globe, Truck, Plane, Ship, Clock, FileText } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Commercial Courier Services | Business Shipping Solutions | Airnet International",
  description: "Professional commercial courier services for businesses. Fast, reliable shipping for documents, parcels, and commercial goods worldwide.",
  keywords: "commercial courier, business shipping, parcel delivery, commercial transport, international courier, express courier India, B2B shipping",
}

export default function CommercialCourierPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Package size={64} className="text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Courier Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Reliable Business Shipping Solutions - Documents, Parcels & Commercial Goods Worldwide
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Business Shipping Excellence</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Airnet International provides comprehensive commercial courier solutions for businesses of all sizes. From small parcels to bulk shipments, we deliver your packages safely and on time across 100+ countries with professional service and competitive rates.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">Documents & Parcels</h3>
                    <p className="text-sm text-gray-600">Secure delivery of business documents and packages</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">Bulk Shipments</h3>
                    <p className="text-sm text-gray-600">Cost-effective solutions for large volume orders</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">B2B Solutions</h3>
                    <p className="text-sm text-gray-600">Customized commercial shipping programs</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-accent">
              <h3 className="text-2xl font-bold mb-6 text-accent">Why Businesses Choose Us</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>Competitive rates with volume discounts</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>Real-time tracking and proof of delivery</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>Flexible pickup and delivery schedules</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>Professional handling and documentation</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p>Dedicated account management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Commercial Shipping Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <Plane className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Air Express</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fast delivery to major cities worldwide in 24-72 hours
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Next-day delivery options</li>
                <li>✓ Weight limits up to 1000 kg</li>
                <li>✓ Track in real-time</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <Ship className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Sea Shipping</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cost-effective ocean freight for larger shipments
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ FCL & LCL options</li>
                <li>✓ 4-6 week delivery times</li>
                <li>✓ Bulk discounts available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-accent">
              <Truck className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Ground Delivery</h3>
              <p className="text-gray-600 text-sm mb-4">
                Road transport for regional and continental shipments
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Flexible scheduling</li>
                <li>✓ Partial/full truckload</li>
                <li>✓ Direct routing available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <Clock className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Same-Day Service</h3>
              <p className="text-gray-600 text-sm mb-4">
                Urgent deliveries within city limits on the same day
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Local courier service</li>
                <li>✓ Signature confirmation</li>
                <li>✓ Evening deliveries available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <Globe className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">International Service</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cross-border shipping to 100+ countries with customs support
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Customs documentation</li>
                <li>✓ Import/export support</li>
                <li>✓ Door-to-door delivery</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-accent">
              <FileText className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Corporate Programs</h3>
              <p className="text-gray-600 text-sm mb-4">
                Tailored solutions for large enterprises with volume pricing
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom billing reports</li>
                <li>✓ Priority service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Ship */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            Commercial Goods We Handle
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Shipping solutions for diverse commercial products and industries
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Electronics & IT</h3>
              <p className="text-sm text-gray-600">Computers, phones, components with safe packaging</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Textiles & Apparel</h3>
              <p className="text-sm text-gray-600">Clothing, fabrics, fashion goods in bulk</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Industrial Parts</h3>
              <p className="text-sm text-gray-600">Machinery, components, equipment shipping</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Consumer Goods</h3>
              <p className="text-sm text-gray-600">Retail products, home goods, merchandise</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Food & Beverages</h3>
              <p className="text-sm text-gray-600">Packaged foods, drinks with temperature control</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Books & Documents</h3>
              <p className="text-sm text-gray-600">Publishing materials, business documents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Art & Collectibles</h3>
              <p className="text-sm text-gray-600">Valuable items with special packaging</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Medical Supplies</h3>
              <p className="text-sm text-gray-600">Healthcare products with safe handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Business Advantages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Cost Efficiency</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span>Volume-based discounts for recurring shipments</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span>Consolidated shipping options to reduce costs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span>Transparent pricing with no hidden charges</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Operational Support</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                  <span>Online booking and shipment management portal</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                  <span>Automated invoicing and comprehensive reports</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                  <span>24/7 customer support and issue resolution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Commercial Courier FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">What delivery times do you offer?</h3>
              <p className="text-gray-600">
                We offer same-day local delivery, next-day domestic delivery, and express international shipping (3-7 days depending on destination). Exact timelines depend on location and service level selected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Do you provide tracking for all shipments?</h3>
              <p className="text-gray-600">
                Yes! All shipments include real-time tracking so you and your customers know exactly where packages are at all times. Access tracking information 24/7 via our online portal or mobile app.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">What is the maximum weight/size for parcels?</h3>
              <p className="text-gray-600">
                We handle parcels up to 100kg and bulk shipments of unlimited weight. Oversized items require special handling which we're equipped to provide. Contact us for custom requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Are your prices competitive for business volume?</h3>
              <p className="text-gray-600">
                Absolutely! We offer tiered discounts for high-volume shippers, consolidated shipping options, and customized rates for recurring business needs. Request a business quote for pricing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Do you offer insurance for valuable items?</h3>
              <p className="text-gray-600">
                Yes. All shipments include basic coverage, and we offer optional comprehensive insurance for high-value items at competitive rates. Declare value during booking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Can you handle fragile or special items?</h3>
              <p className="text-gray-600">
                Yes! We specialize in fragile item packaging, temperature-controlled delivery, and special handling for art, electronics, and other sensitive cargo. Notify us of special requirements during booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/dg-hazardous" className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-primary">DG & Hazardous Cargo</h3>
              <p className="text-sm text-gray-600">Specialized dangerous goods transport</p>
            </Link>
            <Link href="/services/chemical-courier" className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-secondary">Chemical Courier</h3>
              <p className="text-sm text-gray-600">Expert chemical shipment handling</p>
            </Link>
            <Link href="/services" className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-accent">All Services</h3>
              <p className="text-sm text-gray-600">View complete service offerings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Reliable Shipping?</h2>
          <p className="text-xl mb-8">Get competitive quotes for your commercial shipping needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Commercial Quote
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
