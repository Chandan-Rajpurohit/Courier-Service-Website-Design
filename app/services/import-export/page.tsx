import type { Metadata } from "next"
import { Globe, CheckCircle, FileText, Truck, Package, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Import & Export Services | Customs Clearance | Airnet International",
  description: "Complete import-export solutions with documentation, customs clearance, and regulatory compliance for international trade.",
  keywords: "import export, customs clearance, international trade, customs brokerage, shipping documentation, import duty",
}

export default function ImportExportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Globe size={64} className="text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Import & Export Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Complete End-to-End International Trade Solutions with Full Documentation & Compliance
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Comprehensive Trade Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <FileText className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Documentation</h3>
              <ul className="text-sm space-y-2">
                <li>✓ Commercial invoices</li>
                <li>✓ Bill of lading</li>
                <li>✓ Packing lists</li>
                <li>✓ Certificates of origin</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <Truck className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Customs Clearance</h3>
              <ul className="text-sm space-y-2">
                <li>✓ Customs entry filing</li>
                <li>✓ Duty assessment</li>
                <li>✓ Tax compliance</li>
                <li>✓ Release coordination</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-accent">
              <Globe className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Compliance</h3>
              <ul className="text-sm space-y-2">
                <li>✓ Trade regulations</li>
                <li>✓ Tariff classification</li>
                <li>✓ Import permits</li>
                <li>✓ Regulatory approvals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Expert Handling</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Experienced customs brokers</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>30 years of trade expertise</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Multi-country certifications</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Speed & Efficiency</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Fastest clearance times</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Proactive communication</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Duty optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/commercial-courier" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-primary">Commercial Courier</h3>
              <p className="text-sm text-gray-600">Business shipping solutions</p>
            </Link>
            <Link href="/services/air-freight" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-secondary">Air Freight</h3>
              <p className="text-sm text-gray-600">Fast international shipping</p>
            </Link>
            <Link href="/services" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-accent">All Services</h3>
              <p className="text-sm text-gray-600">Browse all options</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simplify Your International Trade</h2>
          <p className="text-xl mb-8">Let our experts handle all import-export logistics</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Trade Services
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
