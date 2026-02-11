import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "E-Commerce Logistics Trends 2025: Future of Shipping",
  description:
    "Explore emerging trends in e-commerce logistics including automation, sustainability, and last-mile delivery innovations shaping the future of shipping.",
  keywords:
    "ecommerce logistics, shipping trends, last-mile delivery, logistics automation, sustainable shipping, supply chain trends",
}

export default function EcommerceTrends() {
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
              Industry Trends
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            E-Commerce Logistics Trends: What's Shaping the Future of Shipping
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Feb 1, 2025</span>
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
          <h2>The E-Commerce Logistics Revolution</h2>
          <p>
            E-commerce has grown exponentially, and with it, the logistics industry is undergoing a transformation. From
            automated warehouses to sustainable delivery methods, the future of e-commerce shipping is driven by innovation,
            efficiency, and environmental responsibility.
          </p>

          <h2>1. Automation & Robotics in Warehousing</h2>
          <p>
            Automated sorting systems, robotic picking, and conveyor networks are becoming standard in modern fulfillment
            centers. These technologies reduce errors, increase speed, and lower labor costs.
          </p>

          <h2>2. Sustainability in Shipping</h2>
          <p>
            Green logistics is no longer optional. E-commerce companies are adopting electric vehicles, sustainable packaging,
            and carbon-neutral shipping options to meet customer expectations and regulatory requirements.
          </p>

          <h2>3. Last-Mile Delivery Innovation</h2>
          <p>
            Drones, autonomous vehicles, and micro-fulfillment centers are revolutionizing last-mile delivery, making it faster
            and more cost-effective than ever before.
          </p>

          <h2>Conclusion</h2>
          <p>
            The future of e-commerce logistics is exciting and rapidly evolving. Staying ahead requires partnering with
            logistics providers who embrace innovation and sustainability. Airnet International combines 30 years of expertise
            with cutting-edge technology to deliver exceptional service.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl mt-12 pt-12 border-t">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Optimize Your E-Commerce Logistics</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skyflyexpress.com/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
