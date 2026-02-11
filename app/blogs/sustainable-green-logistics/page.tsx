import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Sustainable Green Logistics: Reducing Carbon Footprint in Shipping",
  description:
    "Learn how modern logistics companies are implementing eco-friendly practices and carbon-neutral shipping solutions for a sustainable future.",
  keywords:
    "sustainable logistics, green shipping, carbon neutral, eco-friendly delivery, environmental logistics, sustainable supply chain",
}

export default function SustainableGreenLogistics() {
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
              Sustainability
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sustainable Green Logistics: Reducing Carbon Footprint in Shipping
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Jan 25, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>8 min read</span>
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
          <h2>The Environmental Impact of Logistics</h2>
          <p>
            The logistics industry accounts for significant carbon emissions globally. However, forward-thinking companies are
            implementing sustainable practices that reduce environmental impact while maintaining operational efficiency.
          </p>

          <h2>Green Logistics Strategies</h2>
          <h3>1. Alternative Fuel Vehicles</h3>
          <p>Electric vehicles, hydrogen fuel cells, and biofuels are transforming fleet operations.</p>

          <h3>2. Route Optimization</h3>
          <p>
            AI-powered route planning reduces miles traveled, fuel consumption, and delivery times simultaneously.
          </p>

          <h3>3. Sustainable Packaging</h3>
          <p>
            Biodegradable, recyclable, and minimal packaging reduces waste while protecting shipments.
          </p>

          <h3>4. Modal Shift</h3>
          <p>
            Shifting from air to sea freight or rail transport significantly reduces carbon footprint for non-urgent shipments.
          </p>

          <h2>Benefits of Green Logistics</h2>
          <ul>
            <li>Reduced operational costs</li>
            <li>Improved brand reputation</li>
            <li>Regulatory compliance advantage</li>
            <li>Customer loyalty and satisfaction</li>
            <li>Environmental contribution</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Sustainability is no longer optional in logistics—it's essential. Airnet International is committed to minimizing
            environmental impact while delivering exceptional service.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl mt-12 pt-12 border-t">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Choose Sustainable Shipping</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skyflyexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition text-center"
              >
                Learn About Our Services
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
