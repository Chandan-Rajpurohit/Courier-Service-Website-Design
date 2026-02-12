import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Customs Documentation Guide: Complete Import/Export Paperwork",
  description:
    "Master the complexities of international trade documentation, from commercial invoices to certificates of origin with expert guidance.",
  keywords:
    "customs documentation, import export, trade documents, commercial invoice, certificate of origin, customs clearance",
}

export default function CustomsDocumentationGuide() {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white shadow-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary via-secondary to-accent text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Trade & Compliance
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Customs Documentation: Complete Guide to Import/Export Paperwork
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Jan 19, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>Airnet International</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg max-w-none">
          <h2>The Importance of Proper Customs Documentation</h2>
          <p>
            Incorrect or incomplete customs documentation can result in delayed shipments, unexpected customs fees, and
            potential legal complications. Understanding international trade paperwork is essential for smooth cross-border commerce.
          </p>

          <h2>Essential Customs Documents</h2>
          <h3>1. Commercial Invoice</h3>
          <p>
            The most important customs document, detailing goods, quantities, prices, and payment terms.
          </p>

          <h3>2. Bill of Lading (B/L)</h3>
          <p>
            Proof of shipment for ocean freight, serving as a receipt and document of title.
          </p>

          <h3>3. Air Waybill (AWB)</h3>
          <p>
            The equivalent of B/L for air freight, tracking cargo movement.
          </p>

          <h3>4. Packing List</h3>
          <p>
            Itemized list of goods and packaging details for verification and customs inspection.
          </p>

          <h3>5. Certificate of Origin (CO)</h3>
          <p>
            Certifies where goods are manufactured, important for trade agreements and tariff classification.
          </p>

          <h3>6. Customs Declaration Form</h3>
          <p>
            Required by customs authorities detailing shipment contents and values.
          </p>

          <h2>Common Customs Codes & Classifications</h2>
          <p>
            All goods are classified under the Harmonized Tariff System (HTS) or HS Code. Correct classification determines:
          </p>
          <ul>
            <li>Import/export duties and taxes</li>
            <li>Regulatory requirements</li>
            <li>Licensing or permit needs</li>
            <li>Special handling requirements</li>
          </ul>

          <h2>Documentation Best Practices</h2>
          <ul>
            <li>☐ Ensure all documents are accurate and consistent</li>
            <li>☐ Use correct HS Codes for product classification</li>
            <li>☐ Include detailed product descriptions</li>
            <li>☐ Verify declared values match commercial terms</li>
            <li>☐ Obtain required certificates and licenses</li>
            <li>☐ Keep copies of all documentation</li>
            <li>☐ Update documents if shipment details change</li>
          </ul>

          <h2>Working with Customs Brokers</h2>
          <p>
            Professional customs brokers handle complex documentation, navigate regulations, and represent you with customs
            authorities. Airnet International works with experienced brokers to ensure smooth customs clearance.
          </p>

          <h2>Conclusion</h2>
          <p>
            Proper customs documentation is the foundation of successful international trade. Let Airnet International handle
            your documentation and customs clearance with 30 years of expertise.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl mt-12 pt-12 border-t">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Simplify Your Import/Export Process</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skyflyexpress.com/services/import-export"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition text-center"
              >
                Our Import/Export Services
              </a>
              <a
                href="https://www.skyflyexpress.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition text-center"
              >
                Get Expert Help
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
