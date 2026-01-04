"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight, TrendingUp, Globe, Package, X } from "lucide-react"

const blogPosts = [
  {
    id: 0,
    title: "The Ultimate Guide to DG & Hazardous Chemical Courier Services in 2025",
    excerpt:
      "Master the complexities of shipping hazardous materials, chemicals, and pharmaceutical products. Learn why Airnet International's 30 years of expertise makes us the top choice for secure, compliant DG transport.",
    category: "Expertise",
    date: "January 20, 2025",
    readTime: "12 min read",
    image: "/hero-chemical-pharmaceutical-shipping.jpg",
    slug: "dg-hazardous-chemical-courier-guide-2025",
    content: `
      <h2>Specialized Handling for Dangerous Goods (DG)</h2>
      <p>Shipping hazardous materials like chemicals, petroleum products, and pharmaceutical ingredients requires more than just a standard courier service. It demands a partner with deep industry knowledge and technical expertise.</p>
      
      <h3>Key Terms in Hazardous Shipping:</h3>
      <ul>
        <li><strong>DG Courier:</strong> A specialized service for Dangerous Goods that handles flammable, toxic, and corrosive substances.</li>
        <li><strong>Chemical Courier:</strong> Focused on the safe transport of laboratory samples, industrial chemicals, and synthetic dyes.</li>
        <li><strong>Hazmat Logistics:</strong> The end-to-end management of hazardous materials through air, sea, and ground networks.</li>
      </ul>

      <p>At Airnet International, we specialize in exporting synthetic dyes, food colors, chemical pastes, and petroleum products. Our 30-year legacy since 1995 ensures that every shipment meets IATA and IMDG standards for global safety.</p>
    `,
  },
  {
    id: 1,
    title: "Understanding International Shipping Regulations for Chemical Exports in 2025",
    excerpt:
      "Navigate the complex landscape of chemical shipping regulations with our comprehensive guide covering IATA, IMDG, and country-specific requirements for safe and compliant exports.",
    category: "Regulations",
    date: "January 15, 2025",
    readTime: "8 min read",
    image: "/chemical-shipping-containers.jpg",
    slug: "international-chemical-shipping-regulations-2025",
  },
  {
    id: 2,
    title: "The Rise of E-commerce Logistics: Meeting Growing Demand for Express Delivery",
    excerpt:
      "Explore how the booming e-commerce sector is transforming courier services and what businesses need to know about last-mile delivery, same-day shipping, and customer expectations.",
    category: "Industry Trends",
    date: "January 10, 2025",
    readTime: "6 min read",
    image: "/ecommerce-delivery-packages.jpg",
    slug: "ecommerce-logistics-express-delivery-trends",
  },
  {
    id: 3,
    title: "How to Choose the Right Freight Forwarder for Your Pharmaceutical Shipments",
    excerpt:
      "Pharmaceutical products require specialized handling and temperature control. Learn the key factors to consider when selecting a logistics partner for medical and healthcare shipments.",
    category: "Guides",
    date: "January 5, 2025",
    readTime: "7 min read",
    image: "/pharmaceutical-cold-chain-logistics.jpg",
    slug: "choosing-freight-forwarder-pharmaceutical-shipments",
  },
  {
    id: 4,
    title: "Sustainability in Logistics: Green Practices for International Shipping",
    excerpt:
      "Discover how the logistics industry is adopting eco-friendly practices, from carbon-neutral shipping to sustainable packaging solutions, and how businesses can reduce their environmental impact.",
    category: "Sustainability",
    date: "December 28, 2024",
    readTime: "5 min read",
    image: "/green-logistics-sustainable-shipping.jpg",
    slug: "sustainability-green-practices-international-shipping",
  },
  {
    id: 5,
    title: "Digital Transformation in Freight Management: AI and IoT Revolution",
    excerpt:
      "Technology is reshaping logistics operations. Learn how artificial intelligence, IoT sensors, and blockchain are improving shipment tracking, route optimization, and supply chain visibility.",
    category: "Technology",
    date: "December 20, 2024",
    readTime: "9 min read",
    image: "/digital-logistics-technology-ai.jpg",
    slug: "digital-transformation-freight-management-ai-iot",
  },
  {
    id: 6,
    title: "Import-Export Documentation Guide: Essential Papers for International Trade",
    excerpt:
      "Master the paperwork required for seamless international shipping. This comprehensive guide covers commercial invoices, packing lists, certificates of origin, and customs documentation.",
    category: "Documentation",
    date: "December 15, 2024",
    readTime: "10 min read",
    image: "/shipping-documents-customs-paperwork.jpg",
    slug: "import-export-documentation-guide-international-trade",
  },
]

export default function ClientBlogsPage() {
  const [selectedPost, setSelectedPost] = useState<null | (typeof blogPosts)[0]>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Logistics Insights & Industry News</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Expert perspectives on international shipping, supply chain management, and logistics innovation
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Featured</span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-semibold">
                  {blogPosts[0].category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 leading-tight">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
              <button
                onClick={() => setSelectedPost(blogPosts[0])}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read Full Article
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span className="text-xs">{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight line-clamp-2 group-hover:text-primary transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-primary font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-4">Popular Topics</h2>
          <p className="text-center text-gray-600 mb-12">Explore content by category</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Trends</h3>
              <p className="text-gray-600 text-sm mb-4">
                Latest developments shaping the logistics and courier industry
              </p>
              <a
                href="https://www.skyflyexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Articles
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Trade</h3>
              <p className="text-gray-600 text-sm mb-4">Insights on international commerce and cross-border shipping</p>
              <a
                href="https://www.skyflyexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Articles
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Shipping Guides</h3>
              <p className="text-gray-600 text-sm mb-4">Practical tips and how-to guides for efficient shipping</p>
              <a
                href="https://www.skyflyexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Articles
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Industry Insights</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Subscribe to receive the latest logistics news, shipping tips, and industry updates directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Visit Main Website
            </a>
            <a
              href="mailto:ns@skyflyexpress.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="overflow-y-auto">
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedPost.image || "/placeholder.svg"}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight">{selectedPost.title}</h2>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-8 border-b pb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p className="text-xl font-medium text-gray-900 border-l-4 border-primary pl-4 italic">
                    {selectedPost.excerpt}
                  </p>
                  {selectedPost.id === 0 ? (
                    <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                  ) : (
                    <p>
                      International logistics and courier services are constantly evolving to meet the demands of global
                      trade. At Airnet International, we understand that staying ahead of these changes is crucial for
                      our clients' success. This article explores the nuances of {selectedPost.category.toLowerCase()}{" "}
                      and how it impacts your daily operations.
                    </p>
                  )}
                  <p>
                    Whether you are shipping chemicals, pharmaceutical products, or e-commerce parcels, the principles
                    of efficiency, compliance, and safety remain the same. Our 30 years of experience have taught us
                    that attention to detail is what separates a standard shipment from an exceptional one.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8">Key Considerations</h3>
                  <p>
                    When managing global supply chains, several factors must be considered to ensure smooth operations
                    and minimize disruptions. These include real-time tracking, documentation accuracy, and choosing the
                    right logistics partner who understands regional regulations.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8">
                    <h4 className="font-bold mb-3 text-primary uppercase tracking-wide">Expert Insight</h4>
                    <p className="mb-0">
                      "Digital transformation isn't just a trend; it's a fundamental shift in how we handle global
                      cargo. The integration of AI and IoT allows for a level of transparency that was previously
                      impossible."
                    </p>
                  </div>
                  <p>
                    As we look toward the future of international trade, Airnet International continues to innovate and
                    expand its service offerings, providing our clients with the tools and expertise they need to
                    compete on a global stage.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-gray-500 italic">Interested in learning more about our services?</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.skyflyexpress.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
                    >
                      Visit Main Site
                    </a>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
