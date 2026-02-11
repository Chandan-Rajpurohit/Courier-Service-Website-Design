import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Share2, Clock, User, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Chemical Shipment Best Practices: Safety & Compliance Guide",
  description:
    "Expert guide to safe chemical transportation, packaging requirements, documentation, temperature control, and regulatory compliance for hazardous materials.",
  keywords:
    "chemical shipment, chemical transportation, hazardous materials, chemical safety, chemical logistics, dangerous goods, DG shipping, chemical export",
}

export default function ChemicalShipmentBestPractices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary via-secondary to-accent text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Chemical Logistics
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Chemical Shipment Best Practices: Safety, Compliance & Efficiency
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Feb 8, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>Airnet International</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg max-w-none">
          <h2>Introduction: Why Chemical Shipment Safety Matters</h2>
          <p>
            Chemical shipments represent one of the most critical and highly regulated aspects of international logistics.
            Improper handling can result in environmental damage, health hazards, regulatory fines, and business disruption.
            At Airnet International, we've spent 30 years perfecting the art and science of safe chemical transportation.
          </p>

          <h2>1. Understanding Chemical Classification & Documentation</h2>
          <h3>UN Classification System</h3>
          <p>
            All hazardous chemicals fall under the UN numbering system (Class 1-9). Each chemical requires:
          </p>
          <ul>
            <li>Proper UN number identification</li>
            <li>Correct packaging group designation (I, II, or III)</li>
            <li>Accurate hazard class and division</li>
            <li>Compliance with IATA, IMDG, and ADR regulations</li>
          </ul>

          <h3>Critical Documentation</h3>
          <p>
            Proper documentation is your first line of defense in safe chemical shipping:
          </p>
          <ul>
            <li>
              <strong>Shipper's Declaration:</strong> Complete hazard information and emergency procedures
            </li>
            <li>
              <strong>Safety Data Sheets (SDS):</strong> Must be available in applicable languages
            </li>
            <li>
              <strong>Certificate of Analysis:</strong> Proves chemical composition and purity
            </li>
            <li>
              <strong>Customs Declaration:</strong> Includes hazardous materials disclosure
            </li>
            <li>
              <strong>Insurance Documentation:</strong> All chemical shipments require special hazmat insurance
            </li>
          </ul>

          <h2>2. Packaging & Containment Standards</h2>
          <h3>UN-Approved Packaging Requirements</h3>
          <p>
            Chemical shipments MUST use only UN-approved packaging:
          </p>
          <ul>
            <li>
              <strong>Packaging Groups:</strong> Selected based on chemical hazard level and substance properties
            </li>
            <li>
              <strong>Container Integrity:</strong> All seals, closures, and ventilation must be certified
            </li>
            <li>
              <strong>Compatibility:</strong> Packaging materials must be chemically compatible with contents
            </li>
            <li>
              <strong>Labeling & Marking:</strong> Clear hazard labels, UN numbers, and contact information required
            </li>
          </ul>

          <h3>Secondary & Tertiary Containment</h3>
          <p>
            For sensitive chemical shipments, multiple containment levels provide critical protection:
          </p>
          <ul>
            <li>Primary container (drums, bottles, cylinders)</li>
            <li>Secondary containment (absorbent materials, secondary drums)</li>
            <li>Tertiary packaging (wooden crates, pallets, securing mechanisms)</li>
          </ul>

          <h2>3. Temperature & Environmental Control</h2>
          <h3>Specialized Transport Conditions</h3>
          <p>
            Many chemicals require precise environmental conditions:
          </p>
          <ul>
            <li>
              <strong>Temperature-Controlled Shipping:</strong> Pharmaceutical chemicals need 2-8°C or 15-25°C
            </li>
            <li>
              <strong>Humidity Management:</strong> Moisture-sensitive chemicals require desiccant packaging
            </li>
            <li>
              <strong>Light Protection:</strong> UV-sensitive chemicals need opaque, protected containers
            </li>
            <li>
              <strong>Pressure Monitoring:</strong> Volatile chemicals require specialized venting systems
            </li>
          </ul>

          <h2>4. International Regulatory Compliance</h2>
          <h3>IATA (Air Transport) Requirements</h3>
          <p>
            Air transport of chemicals follows the strictest regulations:
          </p>
          <ul>
            <li>Many chemicals are completely forbidden on passenger aircraft</li>
            <li>Cargo aircraft have slightly relaxed restrictions with enhanced packaging</li>
            <li>Quantity limitations apply to most hazardous materials</li>
            <li>Special training certifications required for handlers</li>
          </ul>

          <h3>IMDG (Maritime Transport) Requirements</h3>
          <p>
            Ocean shipping has unique chemical transport protocols:
          </p>
          <ul>
            <li>Segregation requirements prevent dangerous chemical reactions</li>
            <li>Stowage positions determined by chemical properties</li>
            <li>Emergency procedures and spill response protocols mandatory</li>
            <li>Container manifest and chemical inventory declarations required</li>
          </ul>

          <h3>ADR (Road Transport) Requirements</h3>
          <p>
            Ground transportation requires vehicle certifications and driver training:
          </p>
          <ul>
            <li>Vehicle must display hazard placards and orange warning panels</li>
            <li>Drivers must hold ADR hazmat certification</li>
            <li>Route planning avoids populated areas when possible</li>
            <li>Emergency response kits must be on board</li>
          </ul>

          <h2>5. Carrier & Handler Selection</h2>
          <h3>What to Look For in a Chemical Logistics Provider</h3>
          <p>
            Choosing the right chemical shipping partner is critical:
          </p>
          <ul>
            <li>30+ years of hazmat experience (like Airnet International)</li>
            <li>Full IATA, IMDG, and ADR certifications</li>
            <li>Specialized equipment for chemical transport</li>
            <li>Insurance coverage up to your shipment value</li>
            <li>Track record with your specific chemical type</li>
            <li>Real-time tracking and emergency response capabilities</li>
          </ul>

          <h2>6. Practical Safety Checklist</h2>
          <p>
            Before shipping any chemical, ensure:
          </p>
          <ul>
            <li>☐ Chemical properly classified under UN system</li>
            <li>☐ Complete Safety Data Sheet (SDS) prepared</li>
            <li>☐ Packaging approved and sealed correctly</li>
            <li>☐ Labels and markings applied accurately</li>
            <li>☐ Documentation complete and accurate</li>
            <li>☐ Shipper's Declaration of Hazardous Goods signed</li>
            <li>☐ Insurance confirmation received</li>
            <li>☐ Carrier verified as certified for chemical transport</li>
            <li>☐ Route and method selected appropriate for chemical type</li>
            <li>☐ Emergency contacts and procedures provided</li>
          </ul>

          <h2>Conclusion: Partner with Chemical Shipping Experts</h2>
          <p>
            Chemical shipment best practices aren't just about regulatory compliance—they're about protecting your business,
            your customers, and the environment. With 30 years of experience handling everything from industrial chemicals to
            pharmaceutical intermediates, Airnet International ensures your chemical shipments arrive safely and on time.
          </p>
          <p>
            Contact our chemical logistics specialists today for a consultation on your next shipment.
          </p>
        </div>

        {/* CTA */}
        <div className="container mx-auto max-w-4xl mt-12 pt-12 border-t">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Ship Chemicals Safely?</h3>
            <p className="text-gray-600 mb-6">
              Let Airnet International handle your chemical and hazardous material shipments with 30 years of expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skyflyexpress.com/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition text-center"
              >
                Get a Quote
              </a>
              <a
                href="https://www.skyflyexpress.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blogs/dg-hazardous-chemical-courier-guide" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">The Ultimate Guide to DG & Hazardous Chemical Courier Services</h3>
              <p className="text-gray-600 text-sm">Comprehensive guide to dangerous goods shipping and IATA/IMDG compliance</p>
            </Link>
            <Link href="/blogs/iata-imdg-compliance-guide" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">IATA & IMDG Compliance: Your Complete Hazmat Shipping Guide</h3>
              <p className="text-gray-600 text-sm">Navigate international hazmat regulations with our complete guide</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
