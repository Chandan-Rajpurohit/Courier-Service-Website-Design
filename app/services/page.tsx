import type { Metadata } from "next"
import {
  Package,
  Plane,
  Ship,
  AlertTriangle,
  Globe,
  Clock,
  Shield,
  FileText,
  Warehouse,
  CheckCircle,
  FlaskConical,
} from "lucide-react"

export const metadata: Metadata = {
  title: "DG & Hazardous Courier | Chemical & Pharmaceutical Shipping | Airnet International",
  description:
    "Expert DG (Dangerous Goods) and hazardous cargo courier services. Specializing in chemical, pharmaceutical, and petroleum shipping with 30 years of expertise. Secure, compliant, and global reach.",
  keywords:
    "DG courier service, hazardous cargo shipping, chemical courier, dangerous goods transport, pharmaceutical logistics, hazardous material shipping, chemical export services, DG shipping specialist, international hazardous courier",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Complete logistics solutions for all your shipping needs - from express courier to specialized cargo
            handling
          </p>
        </div>
      </section>

      {/* Dedicated Expertise: DG & Hazardous Shipments */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Expertise in DG & Hazardous Cargo</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Airnet International is a recognized leader in the transportation of Dangerous Goods (DG) and hazardous
                materials. With 30 years of specialized experience, we ensure your sensitive cargo is handled with
                utmost precision, meeting all international safety and regulatory standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <FlaskConical className="text-primary" size={24} />
                  <span className="font-semibold">Chemical Specialists</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="text-secondary" size={24} />
                  <span className="font-semibold">Full Compliance</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl border-t-8 border-primary">
              <h3 className="text-2xl font-bold mb-4">Why Trust Airnet?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <p className="text-sm">IATA, IMDG, and ADR compliant handling procedures</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <p className="text-sm">UN-approved specialized packaging for hazardous chemicals</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <p className="text-sm">Expert documentation support (MSDS/SDS management)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Comprehensive Shipping Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Air Freight */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <Plane className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Air Freight Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fast, reliable air cargo solutions for time-sensitive shipments worldwide. Express and standard options
                available.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Express air courier (24-72 hours delivery)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Standard air freight for bulk shipments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Real-time tracking and updates</span>
                </li>
              </ul>
            </div>

            {/* Sea Freight */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                <Ship className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sea Freight Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Cost-effective ocean freight solutions for large volume shipments. Full container load (FCL) and less
                than container load (LCL).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>FCL and LCL shipping options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Port-to-port and door-to-door delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Customs clearance assistance</span>
                </li>
              </ul>
            </div>

            {/* Express Courier */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-accent">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Express Courier</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Rapid door-to-door delivery for documents and parcels to over 100 countries with guaranteed delivery
                times.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Same-day and next-day delivery options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Document and parcel shipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Signature confirmation and proof of delivery</span>
                </li>
              </ul>
            </div>

            {/* DG & Hazardous Courier */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">DG & Hazardous Courier</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Expert handling of Dangerous Goods (DG) and hazardous cargo with full IATA and IMO compliance for secure
                global transport.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Chemical, Pharmaceutical & Petroleum specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Hazardous and Non-Hazardous cargo handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>UN-approved packaging and documentation</span>
                </li>
              </ul>
            </div>

            {/* Import/Export */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Import & Export Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Complete import-export solutions with documentation, customs clearance, and compliance management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>End-to-end documentation handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Customs brokerage and clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Compliance with international regulations</span>
                </li>
              </ul>
            </div>

            {/* Warehousing */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-accent">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4">
                <Warehouse className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Warehousing Solutions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Secure storage facilities with inventory management and distribution services for your cargo.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Climate-controlled storage facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Inventory management systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Pick, pack, and distribution services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            Specialized Industry Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            30 years of expertise in handling complex and regulated shipments across specialized industries
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🧪</div>
              <h3 className="font-bold text-lg mb-2">Chemical Shipments</h3>
              <p className="text-sm text-gray-600">
                Hazardous and non-hazardous chemical logistics with full compliance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="font-bold text-lg mb-2">Pharmaceutical Products</h3>
              <p className="text-sm text-gray-600">
                Temperature-controlled transport for medicines and healthcare products
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Petroleum & Petrochemical</h3>
              <p className="text-sm text-gray-600">Specialized handling of oil, gas, and petrochemical products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-lg mb-2">Paints & Finishes</h3>
              <p className="text-sm text-gray-600">Safe transport of paints, coatings, and finishing materials</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="font-bold text-lg mb-2">Synthetic Dyes</h3>
              <p className="text-sm text-gray-600">Secure shipping for dyes and chemical colorants</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-bold text-lg mb-2">Food Colors</h3>
              <p className="text-sm text-gray-600">Compliant transport of food-grade colorants and additives</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🖨️</div>
              <h3 className="font-bold text-lg mb-2">Ink & Printing</h3>
              <p className="text-sm text-gray-600">Professional handling of printing inks and related materials</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="font-bold text-lg mb-2">Machinery & Auto Parts</h3>
              <p className="text-sm text-gray-600">Heavy equipment and automotive component logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Value-Added Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <Clock className="text-primary flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600 text-sm">
                  Monitor your shipment 24/7 with our advanced tracking system and receive instant notifications
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <Shield className="text-secondary flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Cargo Insurance</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive insurance coverage options to protect your valuable shipments
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <FileText className="text-accent flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Documentation Support</h3>
                <p className="text-gray-600 text-sm">
                  Complete assistance with shipping documents, licenses, and regulatory compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Airnet International?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Get a customized quote for your specific shipping requirements today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request a Quote
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
