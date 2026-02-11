import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Transformation in Logistics: AI, IoT & Blockchain Technology",
  description:
    "Discover how cutting-edge technologies including AI, IoT, and blockchain are revolutionizing supply chain management and real-time cargo tracking.",
  keywords:
    "logistics technology, AI logistics, blockchain supply chain, IoT tracking, digital transformation, supply chain technology",
}

export default function DigitalLogisticsTechnology() {
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
              Technology
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Transformation in Logistics: AI, IoT & Blockchain
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Jan 22, 2025</span>
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

      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg max-w-none">
          <h2>The Technology Revolution in Logistics</h2>
          <p>
            Digital transformation is reshaping logistics. From artificial intelligence optimizing routes to blockchain
            ensuring supply chain transparency, technology is making logistics faster, safer, and more efficient than ever.
          </p>

          <h2>1. Artificial Intelligence (AI) in Logistics</h2>
          <h3>Predictive Analytics</h3>
          <p>
            AI algorithms analyze historical data to predict demand, optimize inventory, and prevent stockouts.
          </p>

          <h3>Route Optimization</h3>
          <p>
            Machine learning calculates the most efficient routes considering traffic, weather, and delivery priorities,
            reducing fuel costs and delivery times.
          </p>

          <h3>Warehouse Automation</h3>
          <p>
            AI-powered systems manage inventory, automate picking and packing, and organize shipments for maximum efficiency.
          </p>

          <h2>2. Internet of Things (IoT) in Supply Chains</h2>
          <h3>Real-Time Tracking</h3>
          <p>
            IoT sensors track temperature, humidity, location, and handling conditions throughout the supply chain.
          </p>

          <h3>Predictive Maintenance</h3>
          <p>
            Sensors monitor vehicle and equipment health, alerting operators to maintenance needs before breakdowns occur.
          </p>

          <h2>3. Blockchain Technology</h2>
          <h3>Supply Chain Transparency</h3>
          <p>
            Immutable records create complete visibility from manufacturer to end customer.
          </p>

          <h3>Fraud Prevention</h3>
          <p>
            Blockchain prevents counterfeit products and ensures authenticity in supply chains.
          </p>

          <h2>Conclusion</h2>
          <p>
            Technology is transforming logistics into a data-driven, transparent, and efficient industry. Airnet International
            embraces cutting-edge technology to serve you better.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl mt-12 pt-12 border-t">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Experience Tech-Enabled Logistics</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skyflyexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
