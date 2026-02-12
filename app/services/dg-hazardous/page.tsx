import type { Metadata } from "next"
import { AlertTriangle, CheckCircle, Shield, Plane, Ship, FileText, Globe, Truck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "DG Hazardous Cargo Shipping | Dangerous Goods Courier | Airnet International",
  description: "Expert DG (Dangerous Goods) and hazardous cargo shipping services. IATA, IMDG, ADR compliant. Specializing in chemical, pharmaceutical, and petroleum transport with 30 years experience.",
  keywords: "DG shipping, dangerous goods courier, hazardous cargo transport, chemical export, IATA compliant, hazmat logistics, DG specialist, international hazardous shipping, chemical courier India",
}

export default function DGHazardousPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">DG & Hazardous Cargo Shipping</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            30 Years of Expertise in Safe, Compliant, and Secure Dangerous Goods Transportation Worldwide
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Recognized DG Specialists</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Airnet International is a certified leader in transporting Dangerous Goods (DG) and hazardous materials globally. With three decades of specialized expertise, we ensure your sensitive cargo is handled with precision, meeting all international safety and regulatory standards including IATA, IMDG, and ADR compliance.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">IATA Air Transport Certified</h3>
                    <p className="text-sm text-gray-600">Full compliance for air freight of hazardous materials</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">IMDG Sea Transport Certified</h3>
                    <p className="text-sm text-gray-600">International Maritime Dangerous Goods regulations</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">ADR Road Transport Certified</h3>
                    <p className="text-sm text-gray-600">European agreement for hazardous road transport</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-primary">
              <h3 className="text-2xl font-bold mb-6 text-primary">Why Choose Airnet for DG Shipping?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p>UN-approved specialized packaging with proper hazard classification</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p>Expert documentation (MSDS/SDS, dangerous goods declarations, permits)</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p>Trained and certified DG handlers and coordinators</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p>Real-time tracking with route optimization for safety</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p>Comprehensive insurance coverage for hazardous cargo</p>
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
            Comprehensive DG & Hazardous Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <Plane className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Air Freight - DG</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fast air transport for hazardous materials with IATA compliance and emergency protocols
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Express DG air courier (24-72 hrs)</li>
                <li>• Class 1-9 dangerous goods handling</li>
                <li>• Direct routing to authorized airports</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <Ship className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Sea Freight - DG</h3>
              <p className="text-gray-600 text-sm mb-4">
                Secure ocean transport for hazardous materials with IMDG compliance
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• FCL & LCL hazardous cargo options</li>
                <li>• Segregation planning per IMDG rules</li>
                <li>• Port-to-port & door-to-door delivery</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-accent">
              <Truck className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Road Transport - DG</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional ADR-compliant road transport for dangerous goods across Europe and Asia
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• ADR certified vehicles and drivers</li>
                <li>• Hazmat-specific routing</li>
                <li>• Emergency response coordination</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <FileText className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">DG Documentation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete support with dangerous goods declarations and regulatory paperwork
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Shipper's Declaration of Dangerous Goods</li>
                <li>• Material Safety Data Sheet (MSDS/SDS)</li>
                <li>• Permits and licenses management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <Globe className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Customs & Compliance</h3>
              <p className="text-gray-600 text-sm mb-4">
                Expert handling of hazardous cargo clearance across international borders
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Regulatory compliance verification</li>
                <li>• Customs documentation support</li>
                <li>• Import/export permit assistance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-accent">
              <Shield className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Insurance & Risk Mgmt</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive coverage and risk assessment for hazardous cargo shipments
              </p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Full coverage hazmat insurance</li>
                <li>• Risk assessment & mitigation</li>
                <li>• Emergency response planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Substances Handled */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
            Hazardous Materials We Handle
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            30 years of expertise safely transporting a wide range of regulated hazardous substances
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">🧪</div>
              <h3 className="font-bold text-lg mb-2">Chemicals</h3>
              <p className="text-sm text-gray-600">
                Industrial chemicals, solvents, acids, bases, oxidizers, and flammable liquids
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="font-bold text-lg mb-2">Pharmaceuticals</h3>
              <p className="text-sm text-gray-600">
                Active pharmaceutical ingredients, vaccines, and temperature-sensitive medical compounds
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Petroleum & Gas</h3>
              <p className="text-sm text-gray-600">
                Crude oil, refined products, LPG, compressed gases, and petrochemical derivatives
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-lg mb-2">Paints & Coatings</h3>
              <p className="text-sm text-gray-600">
                Flammable paints, varnishes, lacquers, and industrial finishing materials
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="font-bold text-lg mb-2">Dyes & Pigments</h3>
              <p className="text-sm text-gray-600">
                Synthetic dyes, food colors, and specialty pigments for various industries
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-lg mb-2">Paste & Liquids</h3>
              <p className="text-sm text-gray-600">
                Chemical pastes, suspensions, emulsions, and specialized liquid formulations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="font-bold text-lg mb-2">Machinery Parts</h3>
              <p className="text-sm text-gray-600">
                Heavy equipment, batteries, and automotive components with hazardous components
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-lg mb-2">Non-Hazardous Cargo</h3>
              <p className="text-sm text-gray-600">
                Certified handling of general commercial goods alongside hazardous materials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DG Classes Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            All DG Classes Covered (Class 1-9)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <p className="font-semibold">Class 1:</p>
              <p className="text-sm text-gray-700">Explosives</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
              <p className="font-semibold">Class 2:</p>
              <p className="text-sm text-gray-700">Gases (flammable, non-flammable, toxic)</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
              <p className="font-semibold">Class 3:</p>
              <p className="text-sm text-gray-700">Flammable Liquids</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
              <p className="font-semibold">Class 4:</p>
              <p className="text-sm text-gray-700">Flammable Solids (self-reactive, water-reactive)</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg">
              <p className="font-semibold">Class 5:</p>
              <p className="text-sm text-gray-700">Oxidizers & Organic Peroxides</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg">
              <p className="font-semibold">Class 6:</p>
              <p className="text-sm text-gray-700">Toxic & Infection-Hazard Substances</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <p className="font-semibold">Class 7:</p>
              <p className="text-sm text-gray-700">Radioactive Materials</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
              <p className="font-semibold">Class 8:</p>
              <p className="text-sm text-gray-700">Corrosives (Acids, Bases, Oxidizing)</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg md:col-span-2 md:w-1/2 md:mx-auto">
              <p className="font-semibold">Class 9:</p>
              <p className="text-sm text-gray-700">Miscellaneous Hazardous Materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/chemical-courier" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-primary">Chemical Courier Services</h3>
              <p className="text-sm text-gray-600">Specialized chemical shipment handling with expert care</p>
            </Link>
            <Link href="/services/commercial-courier" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-secondary">Commercial Courier Services</h3>
              <p className="text-sm text-gray-600">General commercial goods with professional handling</p>
            </Link>
            <Link href="/services" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-accent">View All Services</h3>
              <p className="text-sm text-gray-600">Explore our complete range of logistics solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Frequently Asked Questions About DG Shipping
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">What are the 9 classes of dangerous goods?</h3>
              <p className="text-gray-600">
                The UN system classifies dangerous goods into 9 classes: Class 1 (Explosives), Class 2 (Gases), Class 3 (Flammable Liquids), Class 4 (Flammable Solids), Class 5 (Oxidizers), Class 6 (Toxic), Class 7 (Radioactive), Class 8 (Corrosives), and Class 9 (Miscellaneous). Each requires specific handling, packaging, and documentation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Is my chemical considered hazardous?</h3>
              <p className="text-gray-600">
                If your chemical has hazardous properties (flammable, toxic, corrosive, explosive, oxidizing, or radioactive), it's classified as a dangerous good. Contact us with your Safety Data Sheet (SDS) and we'll assess whether DG regulations apply to your shipment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">What's the difference between IATA, IMDG, and ADR?</h3>
              <p className="text-gray-600">
                IATA covers air transport, IMDG covers maritime/sea transport, and ADR covers road transport. Each has different requirements for packaging, labeling, and quantity limits. We ensure compliance with the appropriate regulation for your chosen transport method.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Can all chemicals be transported by air?</h3>
              <p className="text-gray-600">
                No. Some chemicals are prohibited on passenger aircraft and limited on cargo aircraft. Air transport is more restrictive than sea or road. Our team will advise on the best transport method for your specific chemical.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">How much does DG shipping cost?</h3>
              <p className="text-gray-600">
                DG shipping costs depend on chemical type, quantity, destination, urgency, and transport method. We provide competitive quotes based on your specific requirements. Request a quote to get an accurate estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            DG Shipping Industry Insights
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3>The Importance of Certified DG Handlers</h3>
            <p>
              Dangerous goods require specialized expertise. All personnel involved in DG transport must have proper certifications. At Airnet International, our team includes certified dangerous goods handlers, shippers, and coordinators who stay current with regulatory changes.
            </p>

            <h3>Global DG Shipping Regulations</h3>
            <p>
              International DG transport is governed by the UN Recommendations on the Transport of Dangerous Goods, implemented through IATA, IMDG, and ADR. These regulations are regularly updated to reflect new hazards and best practices. We track all changes to ensure your shipments remain compliant.
            </p>

            <h3>DG Packaging & Containers</h3>
            <p>
              UN-approved packaging is not negotiable. All containers must be tested and certified for the specific hazard class. Improper packaging is one of the leading causes of DG shipping incidents. We only use certified UN packaging from trusted manufacturers.
            </p>

            <h3>Chemical Compatibility & Segregation</h3>
            <p>
              Some chemicals cannot be shipped together due to dangerous reactions. Our experts ensure proper segregation and stowage to prevent accidents. This is especially critical for sea freight where chemicals are stored in close proximity.
            </p>

            <h3>Emergency Response & Safety Protocols</h3>
            <p>
              We maintain 24/7 emergency response capabilities for any DG-related incidents. Our personnel know proper handling of spills, leaks, and chemical reactions. We also provide Emergency Response Information in compliance with international requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship Dangerous Goods Safely?</h2>
          <p className="text-xl mb-8">
            Get expert guidance and reliable transportation for your hazardous materials with 30 years of DG shipping experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get a Quote
            </a>
            <a
              href="tel:9920216805"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              Call Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
