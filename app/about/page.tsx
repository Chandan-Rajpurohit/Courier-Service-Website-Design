import type { Metadata } from "next"
import Link from "next/link"
import { Award, Globe, Users, TrendingUp, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About Airnet International | 30 Years of Excellence in Courier Services | Sky Fly Group",
  description:
    "Discover Airnet International's 30-year legacy since 1995. Premier courier and cargo service provider specializing in chemical, pharmaceutical, and hazardous shipments worldwide. Part of Sky Fly Group.",
  keywords:
    "about airnet international, courier company history, Sky Fly Group, chemical shipping experts, international logistics, cargo services mumbai, freight forwarding company, express delivery services",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Airnet International</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Three decades of unwavering commitment to excellence in international courier and cargo services
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Established in <strong>1995</strong>, Airnet International has been at the forefront of international
                  courier and cargo services for over <strong>30 years</strong>. As a proud division of the{" "}
                  <strong>Sky Fly Group</strong>, we have built an unparalleled reputation for reliability, speed, and
                  specialized handling of complex shipments.
                </p>
                <p className="text-lg">
                  Our expertise spans across diverse industries, with specialized focus on <strong>chemical</strong>,{" "}
                  <strong>pharmaceutical</strong>, <strong>petroleum</strong>, and{" "}
                  <strong>hazardous material shipments</strong>. We provide comprehensive import and export solutions
                  that cater to both corporate enterprises and individual clients worldwide.
                </p>
                <p className="text-lg">
                  With a team of dedicated professionals and state-of-the-art logistics infrastructure, Airnet
                  International delivers seamless door-to-door shipping solutions across the globe, ensuring your cargo
                  reaches its destination safely and on time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-primary">
                <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                <div className="text-gray-600 font-semibold">Years of Excellence</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-secondary">
                <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                <div className="text-gray-600 font-semibold">Countries Served</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-accent">
                <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
                <div className="text-gray-600 font-semibold">Happy Clients</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-primary">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold gradient-text mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide world-class courier and cargo services with unmatched reliability, safety, and efficiency. We
                are committed to delivering innovative logistics solutions that empower businesses to expand their
                global reach while maintaining the highest standards of service excellence and customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-lg border-l-4 border-secondary">
              <h3 className="text-2xl font-bold gradient-text mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred international logistics partner, recognized globally for our
                specialized expertise in handling complex shipments. We envision a future where Airnet International
                sets industry benchmarks for safety, innovation, and sustainable logistics practices worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Trust & Integrity</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We build lasting relationships through transparent operations and ethical business practices
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Excellence</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We continuously strive for perfection in every shipment and customer interaction
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Reliability</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                On-time delivery and consistent service quality form the backbone of our operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Why Choose Airnet International?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <Award className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Industry Expertise</h3>
                <p className="text-gray-600 text-sm">
                  30 years of specialized experience in chemical, pharmaceutical, and hazardous cargo handling
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <Globe className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Global Network</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive coverage across 100+ countries with reliable partner networks
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <Users className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Dedicated Team</h3>
                <p className="text-gray-600 text-sm">
                  Expert professionals committed to delivering exceptional service at every touchpoint
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Confidence?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Experience the Airnet International difference. Get a personalized quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get a Quote
            </a>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
