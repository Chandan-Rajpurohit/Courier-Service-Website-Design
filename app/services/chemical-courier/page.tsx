import type { Metadata } from "next"
import { FlaskConical, CheckCircle, Globe, Truck, Shield, FileText, Plane, Ship } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Chemical Courier Services | Chemical Export & Shipping | Airnet International",
  description: "Professional chemical courier and shipping services worldwide. Hazardous and non-hazardous chemicals, export specialists, full compliance with safety regulations.",
  keywords: "chemical courier, chemical export, chemical shipping, hazardous chemical transport, industrial chemicals logistics, chemical export India, IATA chemical shipping",
}

export default function ChemicalCourierPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <FlaskConical size={64} className="text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chemical Courier Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Expert Chemical Shipment Handling - Hazardous & Non-Hazardous Solutions Worldwide
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Chemical Logistics Specialists</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With 30 years of specialized expertise, Airnet International has become a trusted name in chemical logistics. We safely transport industrial chemicals, solvents, acids, bases, and specialized chemical formulations across the globe with full regulatory compliance and professional care.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">Industrial Chemicals</h3>
                    <p className="text-sm text-gray-600">Solvents, cleaners, additives, and industrial compounds</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">Acids & Bases</h3>
                    <p className="text-sm text-gray-600">Sulfuric, nitric, hydrochloric acids and alkali solutions</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">Flammable Chemicals</h3>
                    <p className="text-sm text-gray-600">Specialized handling of volatile and inflammable substances</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-secondary">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Our Chemical Services</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <p>Full compatibility assessment and container selection</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <p>Temperature-controlled transport for sensitive chemicals</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <p>Proper segregation per chemical compatibility rules</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <p>Complete Safety Data Sheet (SDS) management</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <p>Export-import licenses and regulatory support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Modes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Chemical Transport Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <Plane className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Air Freight</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fast chemical shipments via air with IATA hazmat compliance
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Express chemical delivery</li>
                <li>✓ Limited and excepted quantities</li>
                <li>✓ Class 3, 5, 6, 8, 9 handling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <Ship className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Sea Freight</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cost-effective bulk chemical shipping via ocean routes
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ FCL chemical containers</li>
                <li>✓ IMDG compliance</li>
                <li>✓ Segregation planning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-accent">
              <Truck className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Road Transport</h3>
              <p className="text-gray-600 text-sm mb-4">
                Chemical tanker and ADR-compliant road delivery
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Specialized tankers</li>
                <li>✓ ADR certified drivers</li>
                <li>✓ Regular & bulk shipments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chemicals We Handle */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            Chemical Categories Handled
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our expertise spans across diverse chemical shipments with full compliance
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-primary">Organic Chemicals</h3>
              <p className="text-sm text-gray-600">Hydrocarbons, alcohols, ketones, aldehydes, and organic solvents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-secondary">Inorganic Chemicals</h3>
              <p className="text-sm text-gray-600">Salts, minerals, metal compounds, and industrial oxides</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-accent">Specialty Chemicals</h3>
              <p className="text-sm text-gray-600">Additives, catalysts, flame retardants, and lubricants</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-primary">Surfactants & Detergents</h3>
              <p className="text-sm text-gray-600">Industrial cleaning agents and surfactant products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-secondary">Coatings & Resins</h3>
              <p className="text-sm text-gray-600">Paints, varnishes, epoxy resins, and polyurethanes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-accent">Pigments & Dyes</h3>
              <p className="text-sm text-gray-600">Industrial colorants, synthetic dyes, and pigments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Safety & Compliance Standards
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Protocols</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Pre-shipment chemical analysis and compatibility check</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>UN-approved container selection and labeling</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Spill prevention and emergency response procedures</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Real-time tracking with temperature monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Regulations We Follow</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span><strong>IATA:</strong> International Air Transport Association standards</span>
                </li>
                <li className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span><strong>IMDG:</strong> International Maritime Dangerous Goods Code</span>
                </li>
                <li className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span><strong>ADR:</strong> European Agreement on Road Transport</span>
                </li>
                <li className="flex gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span><strong>GHS:</strong> Global Harmonized System of classification</span>
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
            <Link href="/services/dg-hazardous" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-primary">DG & Hazardous Cargo</h3>
              <p className="text-sm text-gray-600">Full dangerous goods shipping expertise</p>
            </Link>
            <Link href="/services/commercial-courier" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-secondary">Commercial Courier</h3>
              <p className="text-sm text-gray-600">General commercial shipments worldwide</p>
            </Link>
            <Link href="/services" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-accent">All Services</h3>
              <p className="text-sm text-gray-600">Browse all shipping solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ship Your Chemicals Safely</h2>
          <p className="text-xl mb-8">Expert handling with 30 years of chemical logistics expertise</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Chemical Quote
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
