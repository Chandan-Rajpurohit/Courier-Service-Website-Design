import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Pharmaceutical Cold Chain Logistics: Ensuring Product Integrity",
  description:
    "Critical guide to maintaining temperature-controlled supply chains for pharmaceuticals, vaccines, and sensitive medical products with precision.",
  keywords:
    "pharmaceutical logistics, cold chain, vaccine shipping, temperature control, medical shipments, pharmaceutical distribution",
}

export default function PharmaceuticalColdChain() {
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
              Specialized Logistics
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pharmaceutical Cold Chain Logistics: Ensuring Product Integrity
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Jan 28, 2025</span>
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

      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg max-w-none">
          <h2>The Critical Importance of Cold Chain Logistics</h2>
          <p>
            In pharmaceutical logistics, even a single degree of temperature variance can compromise product efficacy. Cold
            chain management is the backbone of vaccine distribution, biopharmaceutical transport, and specialized medication
            delivery. At Airnet International, we understand the life-or-death implications of proper temperature control.
          </p>

          <h2>Understanding Cold Chain Standards</h2>
          <h3>Temperature Ranges by Product Type</h3>
          <ul>
            <li>
              <strong>Frozen Products:</strong> -25°C to -15°C (vaccines, biologics)
            </li>
            <li>
              <strong>Refrigerated Products:</strong> 2°C to 8°C (most injectable medications)
            </li>
            <li>
              <strong>Cool Room Storage:</strong> 15°C to 25°C (certain biologics, temperature-sensitive drugs)
            </li>
          </ul>

          <h2>Cold Chain Monitoring Technology</h2>
          <p>
            Modern cold chain logistics relies on advanced monitoring:
          </p>
          <ul>
            <li>Real-time temperature tracking devices</li>
            <li>Humidity and vibration monitoring</li>
            <li>Cloud-based cold chain management systems</li>
            <li>Automated alert systems for temperature deviations</li>
          </ul>

          <h2>Regulations & Compliance</h2>
          <p>
            Pharmaceutical cold chain must comply with GxP standards (GDP, GMP, GCP), WHO guidelines, and local regulatory
            requirements. Documentation and validation are critical.
          </p>

          <h2>Conclusion</h2>
          <p>
            Effective pharmaceutical cold chain logistics requires precision, expertise, and unwavering commitment to
            maintaining product integrity. Airnet International's 30 years of experience ensures your pharmaceutical shipments
            arrive in perfect condition.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl mt-12 pt-12 border-t">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Trust Your Pharmaceuticals with Experts</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skyflyexpress.com/services/chemical-courier"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition text-center"
              >
                Our Specialized Services
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
