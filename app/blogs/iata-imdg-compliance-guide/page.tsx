import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "IATA & IMDG Compliance: Complete Hazmat Shipping Guide 2025",
  description:
    "Navigate international hazmat regulations with our complete guide to IATA air transport and IMDG maritime regulations for dangerous goods and DG cargo.",
  keywords:
    "IATA compliance, IMDG regulations, hazmat shipping, dangerous goods, DG cargo, international shipping regulations, hazardous materials transport",
}

export default function IataImdgComplianceGuide() {
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
              Compliance & Regulations
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IATA & IMDG Compliance: Your Complete Hazmat Shipping Guide
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Feb 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>11 min read</span>
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
          <h2>Understanding International Hazmat Regulations</h2>
          <p>
            International transportation of dangerous goods is governed by three primary regulatory frameworks: IATA for air
            transport, IMDG for maritime transport, and ADR for road transport. Each has unique requirements, restrictions,
            and compliance procedures that shippers must understand and follow meticulously.
          </p>

          <h2>IATA (International Air Transport Association)</h2>
          <h3>Overview & Scope</h3>
          <p>
            IATA regulations apply to all dangerous goods transported by air. The IATA Dangerous Goods Regulations (DGR) are
            updated annually and are the gold standard for air cargo safety. Compliance is mandatory for all shipments,
            whether on passenger or cargo aircraft.
          </p>

          <h3>Key IATA Requirements</h3>
          <ul>
            <li>
              <strong>Classification:</strong> All materials must be accurately classified into one of 9 classes
            </li>
            <li>
              <strong>Packaging:</strong> Must use UN-approved packaging with proper padding and securing
            </li>
            <li>
              <strong>Documentation:</strong> Shipper's Declaration of Dangerous Goods form required
            </li>
            <li>
              <strong>Labeling:</strong> Class labels, handling labels, and package markings mandatory
            </li>
            <li>
              <strong>Training:</strong> All personnel must have IATA hazmat certification
            </li>
          </ul>

          <h3>Passenger vs. Cargo Aircraft</h3>
          <p>
            Restrictions differ significantly based on aircraft type:
          </p>
          <ul>
            <li>
              <strong>Passenger Aircraft:</strong> Only limited quantities of Class 3-9 materials allowed; many classes
              completely prohibited
            </li>
            <li>
              <strong>Cargo Aircraft:</strong> Higher quantities permitted with enhanced packaging and documentation
            </li>
            <li>
              <strong>Class 1 (Explosives):</strong> Strictly prohibited on passenger aircraft; limited on cargo aircraft
            </li>
          </ul>

          <h2>IMDG (International Maritime Dangerous Goods Code)</h2>
          <h3>Maritime Shipping Overview</h3>
          <p>
            IMDG regulations govern all dangerous goods transported by sea. These regulations focus on vessel safety,
            preventing chemical reactions at sea, and protecting marine environments.
          </p>

          <h3>Critical IMDG Concepts</h3>
          <ul>
            <li>
              <strong>Segregation:</strong> Incompatible chemicals must be separated to prevent dangerous reactions
            </li>
            <li>
              <strong>Stowage:</strong> Each chemical has designated stowage locations on vessels
            </li>
            <li>
              <strong>Container Stability:</strong> Secure lashing and weather protection required
            </li>
            <li>
              <strong>Documentation:</strong> Dangerous Goods Manifest and Declaration Form mandatory
            </li>
            <li>
              <strong>Spill Response:</strong> Emergency procedures and chemical information available on board
            </li>
          </ul>

          <h3>IMDG Segregation Categories</h3>
          <p>
            Chemicals must maintain minimum separation distances based on incompatibility:
          </p>
          <ul>
            <li>Category 0: Incompatible - Keep apart</li>
            <li>Category 1: Incompatible - Keep 1 container apart</li>
            <li>Category 2: Incompatible - Keep 1 unit or 4 compartments apart</li>
            <li>Category 3: Incompatible - Keep 2 units or 4 compartments apart</li>
            <li>Category 4: Incompatible - Keep 2 units or 8 compartments apart</li>
          </ul>

          <h2>Comparing IATA vs. IMDG Requirements</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border border-gray-300 p-3 text-left">Aspect</th>
                <th className="border border-gray-300 p-3 text-left">IATA</th>
                <th className="border border-gray-300 p-3 text-left">IMDG</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="border border-gray-300 p-3 font-semibold">Packaging</td>
                <td className="border border-gray-300 p-3">Stricter for air safety</td>
                <td className="border border-gray-300 p-3">Allows larger containers</td>
              </tr>
              <tr className="hover:bg-gray-100 transition">
                <td className="border border-gray-300 p-3 font-semibold">Documentation</td>
                <td className="border border-gray-300 p-3">Shipper's Declaration</td>
                <td className="border border-gray-300 p-3">Manifest & Declaration</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="border border-gray-300 p-3 font-semibold">Segregation</td>
                <td className="border border-gray-300 p-3">Not as restrictive</td>
                <td className="border border-gray-300 p-3">Strict separation rules</td>
              </tr>
              <tr className="hover:bg-gray-100 transition">
                <td className="border border-gray-300 p-3 font-semibold">Quantity Limits</td>
                <td className="border border-gray-300 p-3">Strict limits per package</td>
                <td className="border border-gray-300 p-3">Flexible with proper stowage</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="border border-gray-300 p-3 font-semibold">Updates</td>
                <td className="border border-gray-300 p-3">Annual revisions</td>
                <td className="border border-gray-300 p-3">Biennial amendments</td>
              </tr>
            </tbody>
          </table>

          <h2>The 9 Hazard Classes Explained</h2>
          <ul>
            <li>
              <strong>Class 1:</strong> Explosives (fireworks, ammunition, detonators)
            </li>
            <li>
              <strong>Class 2:</strong> Gases (flammable, non-flammable, toxic)
            </li>
            <li>
              <strong>Class 3:</strong> Flammable Liquids (alcohols, solvents, paints)
            </li>
            <li>
              <strong>Class 4:</strong> Flammable Solids (phosphorus, metals, lighters)
            </li>
            <li>
              <strong>Class 5:</strong> Oxidizers (peroxides, chlorates, permanganates)
            </li>
            <li>
              <strong>Class 6:</strong> Toxic & Infectious (poisons, pesticides, pathogens)
            </li>
            <li>
              <strong>Class 7:</strong> Radioactive Materials (isotopes, medical sources)
            </li>
            <li>
              <strong>Class 8:</strong> Corrosives (acids, bases, batteries)
            </li>
            <li>
              <strong>Class 9:</strong> Miscellaneous (dry ice, asbestos, magnets)
            </li>
          </ul>

          <h2>Compliance Checklist for International Shipments</h2>
          <p>
            Before shipping dangerous goods internationally, verify:
          </p>
          <ul>
            <li>☐ Correct UN number assigned to material</li>
            <li>☐ Proper hazard class and division identified</li>
            <li>☐ Packaging group determined based on hazard level</li>
            <li>☐ UN-approved packaging selected and certified</li>
            <li>☐ Safety Data Sheet (SDS) prepared in required languages</li>
            <li>☐ All labels and markings applied correctly</li>
            <li>☐ Documentation completed (DGD, manifest, etc.)</li>
            <li>☐ Carrier verified as certified for transport method</li>
            <li>☐ Insurance obtained with hazmat coverage</li>
            <li>☐ Emergency contact information provided</li>
            <li>☐ Shipper and handler training completed</li>
          </ul>

          <h2>Working with Certified Hazmat Providers</h2>
          <p>
            While this guide covers the basics, proper compliance requires expertise. At Airnet International, our 30 years
            of experience means we stay current with all IATA and IMDG amendments, anticipate regulatory changes, and ensure
            your shipments meet every requirement while arriving safely and on schedule.
          </p>
        </div>

        {/* CTA */}
        <div className="container mx-auto max-w-4xl mt-12 pt-12 border-t">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ensure IATA & IMDG Compliance</h3>
            <p className="text-gray-600 mb-6">
              Navigate complex hazmat regulations with confidence. Airnet International provides expert guidance and certified transport for all dangerous goods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skyflyexpress.com/services/dg-hazardous"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition text-center"
              >
                Learn About Our DG Services
              </a>
              <a
                href="tel:9920216805"
                className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition text-center"
              >
                Call Our Experts
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
