import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"

export const metadata: Metadata = {
  title: "DG & Hazardous Chemical Courier Guide 2025 | Airnet International",
  description:
    "Ultimate guide to dangerous goods shipping, chemical export services, IATA/IMDG compliance, hazmat regulations, and best practices for safe hazardous cargo transportation.",
  keywords:
    "DG courier, dangerous goods shipping, chemical export, hazmat regulations, IATA hazmat, IMDG compliance, hazardous cargo, chemical courier service",
}

export default function DGHazardousBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="sticky top-0 bg-white border-b z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blogs" className="flex items-center gap-2 text-primary hover:text-secondary transition w-fit">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Blogs</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
              DG & Hazardous
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Ultimate Guide to DG & Hazardous Chemical Courier Services in 2025
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Feb 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>Airnet International</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl prose prose-lg">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop"
            alt="DG Hazardous Shipping"
            className="w-full rounded-lg mb-8"
          />

          <h2>Introduction: Why DG Shipping Matters</h2>
          <p>
            Dangerous Goods (DG) and hazardous materials represent some of the most critical shipments in global logistics. From pharmaceutical compounds to industrial chemicals, petroleum products to pesticides, the safe transportation of hazardous materials is not just a business necessity—it's a legal and ethical imperative.
          </p>

          <h2>Understanding DG Classification</h2>
          <p>
            The international community has established nine classes of dangerous goods, each with specific handling requirements:
          </p>
          <ul>
            <li><strong>Class 1:</strong> Explosives - from fireworks to military ammunition</li>
            <li><strong>Class 2:</strong> Gases - compressed, liquefied, or dissolved under pressure</li>
            <li><strong>Class 3:</strong> Flammable Liquids - including gasoline, alcohol, and solvents</li>
            <li><strong>Class 4:</strong> Flammable Solids - self-reactive substances and water-reactive materials</li>
            <li><strong>Class 5:</strong> Oxidizers and Organic Peroxides - bleaching agents and catalysts</li>
            <li><strong>Class 6:</strong> Toxic and Infection-Hazard Substances - pesticides and biological materials</li>
            <li><strong>Class 7:</strong> Radioactive Materials - medical and industrial isotopes</li>
            <li><strong>Class 8:</strong> Corrosives - acids, bases, and oxidizing chemicals</li>
            <li><strong>Class 9:</strong> Miscellaneous Hazardous Materials - lithium batteries and others</li>
          </ul>

          <h2>IATA Compliance for Air Transport</h2>
          <p>
            The International Air Transport Association (IATA) maintains strict regulations for air transport of dangerous goods. Key requirements include:
          </p>
          <ul>
            <li>Proper hazard classification and documentation</li>
            <li>UN-approved packaging and labeling</li>
            <li>Trained personnel with valid certifications</li>
            <li>Shipper's Declaration of Dangerous Goods</li>
            <li>Regular compliance audits and reporting</li>
          </ul>

          <h2>IMDG Regulations for Maritime Transport</h2>
          <p>
            The International Maritime Dangerous Goods Code (IMDG) governs sea transport of hazardous materials. Maritime shipping requires additional considerations:
          </p>
          <ul>
            <li>Segregation planning between incompatible substances</li>
            <li>Special stowage requirements on vessels</li>
            <li>Emergency response procedures</li>
            <li>Port state control compliance</li>
            <li>Crew training and certification</li>
          </ul>

          <h2>Chemical Shipment Best Practices</h2>
          <p>
            Successful chemical shipping requires a comprehensive approach:
          </p>
          <h3>Pre-Shipment Assessment</h3>
          <p>
            Before any chemical leaves your facility, conduct a thorough assessment including hazard identification, proper classification, and compatibility verification with chosen transport methods.
          </p>
          <h3>Packaging & Labeling</h3>
          <p>
            Use only UN-certified containers appropriate for the substance class. Ensure all labels and placards meet international standards and are clearly visible and legible.
          </p>
          <h3>Documentation</h3>
          <p>
            Maintain accurate Safety Data Sheets (SDS), Material Safety Data Sheets (MSDS), and all required declarations. These documents are critical for customs clearance and emergency response.
          </p>
          <h3>Route Planning</h3>
          <p>
            Select shipping routes that minimize handling transfers and account for restricted areas where hazardous materials cannot transit.
          </p>

          <h2>Insurance & Liability</h2>
          <p>
            Comprehensive insurance coverage is essential for DG shipments. Professional couriers should maintain coverage for:
          </p>
          <ul>
            <li>Cargo liability (full replacement value)</li>
            <li>General liability for third-party claims</li>
            <li>Environmental liability for spills</li>
            <li>Professional indemnity</li>
          </ul>

          <h2>Choosing the Right DG Courier</h2>
          <p>
            Not all courier services are equipped to handle dangerous goods. When selecting a provider, verify:
          </p>
          <ul>
            <li>IATA, IMDG, and ADR certifications</li>
            <li>Experience with your specific product class</li>
            <li>Comprehensive insurance coverage</li>
            <li>Trained and certified personnel</li>
            <li>Advanced tracking and communication systems</li>
            <li>Emergency response procedures</li>
          </ul>

          <h2>Future Trends in DG Shipping</h2>
          <p>
            The DG shipping industry is evolving with technological advances and regulatory updates. Look for innovations in digital documentation, real-time hazard monitoring, and blockchain-based supply chain verification.
          </p>

          <h2>Conclusion</h2>
          <p>
            Safe and compliant hazardous cargo transportation requires expertise, dedication to regulations, and professional infrastructure. By partnering with experienced DG specialists like Airnet International, you ensure your dangerous goods arrive safely while maintaining full regulatory compliance.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Ship Your Hazardous Materials?</h3>
            <p className="mb-4">
              Our certified DG specialists are ready to handle your dangerous goods with expertise and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skyflyexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition text-center"
              >
                Get DG Quote
              </a>
              <a
                href="tel:9920216805"
                className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition text-center"
              >
                Call +91 9920216805
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blogs/chemical-shipment-best-practices" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">Chemical Shipment Best Practices</h3>
              <p className="text-sm text-gray-600">Expert tips on safe chemical transportation and compliance</p>
            </Link>
            <Link href="/blogs/iata-imdg-compliance-guide" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">IATA & IMDG Compliance Guide</h3>
              <p className="text-sm text-gray-600">Navigate international hazmat regulations</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
