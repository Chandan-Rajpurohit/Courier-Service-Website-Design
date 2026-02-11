import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Logistics Blog | Shipping Industry Insights | Airnet International",
  description:
    "Stay informed with the latest logistics trends, shipping regulations, supply chain innovations, and international trade insights from Airnet International experts.",
  keywords:
    "logistics blog, shipping industry news, international trade insights, supply chain management, courier service tips, freight forwarding trends, import export regulations, cargo shipping guides, DG shipping, chemical logistics",
}

const blogArticles = [
  {
    id: "dg-hazardous-chemical-courier-guide",
    title: "The Ultimate Guide to DG & Hazardous Chemical Courier Services in 2025",
    excerpt:
      "Comprehensive guide to dangerous goods shipping, chemical export, hazmat regulations, IATA/IMDG compliance, and best practices for safe transportation.",
    category: "DG & Hazardous",
    readTime: "12 min",
    date: "Feb 10, 2025",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
    slug: "dg-hazardous-chemical-courier-guide",
  },
  {
    id: "chemical-shipment-best-practices",
    title: "Chemical Shipment Best Practices: Safety, Compliance & Efficiency",
    excerpt:
      "Expert tips on safe chemical transportation, packaging requirements, documentation, temperature control, and regulatory compliance for hazardous materials.",
    category: "Chemical Logistics",
    readTime: "10 min",
    date: "Feb 8, 2025",
    image: "https://images.unsplash.com/photo-1581092971360-8d5d51f05f4f?w=500&h=300&fit=crop",
    slug: "chemical-shipment-best-practices",
  },
  {
    id: "iata-imdg-compliance-guide",
    title: "IATA & IMDG Compliance: Your Complete Hazmat Shipping Guide",
    excerpt:
      "Navigate international hazmat regulations with our complete guide to IATA air transport and IMDG maritime regulations for dangerous goods.",
    category: "Compliance",
    readTime: "11 min",
    date: "Feb 5, 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    slug: "iata-imdg-compliance-guide",
  },
  {
    id: "ecommerce-logistics-trends",
    title: "E-Commerce Logistics Trends: What's Shaping the Future of Shipping",
    excerpt:
      "Explore emerging trends in e-commerce logistics, including automation, sustainability, and last-mile delivery innovations.",
    category: "Industry Trends",
    readTime: "9 min",
    date: "Feb 1, 2025",
    image: "https://images.unsplash.com/photo-1586528116039-c48148d2e059?w=500&h=300&fit=crop",
    slug: "ecommerce-logistics-trends",
  },
  {
    id: "pharmaceutical-cold-chain-logistics",
    title: "Pharmaceutical Cold Chain Logistics: Ensuring Product Integrity",
    excerpt:
      "Critical guide to maintaining temperature-controlled supply chains for pharmaceuticals, vaccines, and sensitive medical products.",
    category: "Specialized Logistics",
    readTime: "10 min",
    date: "Jan 28, 2025",
    image: "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=500&h=300&fit=crop",
    slug: "pharmaceutical-cold-chain-logistics",
  },
  {
    id: "sustainable-green-logistics",
    title: "Sustainable Green Logistics: Reducing Carbon Footprint in Shipping",
    excerpt:
      "Learn how modern logistics companies are implementing eco-friendly practices and carbon-neutral shipping solutions.",
    category: "Sustainability",
    readTime: "8 min",
    date: "Jan 25, 2025",
    image: "https://images.unsplash.com/photo-1559307592-642460f76ecc?w=500&h=300&fit=crop",
    slug: "sustainable-green-logistics",
  },
  {
    id: "digital-logistics-technology",
    title: "Digital Transformation in Logistics: AI, IoT & Blockchain",
    excerpt:
      "Discover how cutting-edge technologies are revolutionizing supply chain management and real-time cargo tracking.",
    category: "Technology",
    readTime: "11 min",
    date: "Jan 22, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    slug: "digital-logistics-technology",
  },
  {
    id: "customs-documentation-guide",
    title: "Customs Documentation: Complete Guide to Import/Export Paperwork",
    excerpt:
      "Master the complexities of international trade documentation, from commercial invoices to certificates of origin.",
    category: "Trade & Compliance",
    readTime: "9 min",
    date: "Jan 19, 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    slug: "customs-documentation-guide",
  },
]

export default function BlogsPage() {
  // Featured article (highest priority - DG/Hazardous)
  const featured = blogArticles[0]
  const rest = blogArticles.slice(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Logistics Industry Insights</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Expert articles on shipping, supply chain, regulations, and industry trends
          </p>
        </div>
      </section>

      {/* Featured Article (DG/Hazardous Focus) */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 gradient-text">Featured Article</h2>
          <Link href={`/blogs/${featured.slug}`}>
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden cursor-pointer">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                  <img
                    src={featured.image || "/placeholder.svg"}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition">
                      {featured.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{featured.date}</span>
                    <span className="text-primary font-semibold group-hover:text-secondary transition">
                      {featured.readTime} read →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 gradient-text">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <Link key={article.id} href={`/blogs/${article.slug}`}>
                <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                    />
                    <span className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                      <span>{article.date}</span>
                      <span className="text-primary font-semibold">{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Popular Topics</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["DG & Hazardous", "Chemical Logistics", "Compliance", "Industry Trends", "Specialized Logistics", "Sustainability", "Technology", "Trade & Compliance"].map((category) => (
              <div
                key={category}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center cursor-pointer hover:text-primary hover:border-primary border-2 border-transparent"
              >
                <span className="font-semibold">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated on Logistics Trends</h2>
          <p className="text-xl mb-8">Get industry insights and tips delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Subscribe to Newsletter
            </a>
            <a
              href="tel:9920216805"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
