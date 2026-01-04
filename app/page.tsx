"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Package,
  Globe,
  Truck,
  ArrowRight,
  FileText,
  BarChart3,
  Award,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Flame,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function AirnetHome() {
  const handleGetQuote = () => {
    window.open("https://www.skyflyexpress.com", "_blank")
  }

  const handleTrackShipment = () => {
    window.open("https://www.skyflyexpress.com", "_blank")
  }

  const handleContactUs = () => {
    window.open("https://www.skyflyexpress.com", "_blank")
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [showAllKeywords, setShowAllKeywords] = useState(false)

  const heroSlides = [
    {
      title: "Global Courier & Logistics Excellence",
      subtitle:
        "One-Stop Complete Logistics Solution for International Export & Import Services | Trusted by Corporates & Companies Worldwide",
      image: "/hero-global-courier-services.jpg",
    },
    {
      title: "30 Years of Trusted International Logistics",
      subtitle: "Serving 150+ countries with specialized handling of chemical, pharmaceutical, and hazardous shipments",
      image: "/hero-chemical-pharmaceutical-shipping.jpg",
    },
    {
      title: "Your Complete Export & Import Solution",
      subtitle:
        "Fast, reliable, and secure logistics services backed by expert customs clearance and real-time tracking",
      image: "/hero-freight-container-shipping.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="w-full no-select">
      <section className="relative text-white py-24 px-4 overflow-hidden h-[500px] md:h-[600px] flex items-center">
        {/* Background image slider */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/90"></div>
          </div>
        ))}

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10 w-full">
          <div className="min-h-[300px] flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance transition-all duration-500">
              {heroSlides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto text-balance transition-all duration-500">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-lg shadow-lg"
            >
              Get a Free Quote <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={handleTrackShipment}
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-lg bg-transparent"
            >
              Track Your Shipment
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 py-3 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b-2 border-primary/20">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm font-bold gradient-text">🏆 Google Verified Business - Trusted by Thousands</span>
            <a
              href="https://share.google/AiieQXeaJzWlWC7M6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-primary text-white px-4 py-1 rounded-full hover:opacity-80 transition font-semibold whitespace-nowrap"
            >
              View Our Reviews →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold gradient-text mb-4 text-center">Partnered With Industry Leaders</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted collaborations with world-renowned courier and logistics providers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              { name: "DHL", logo: "/images/dhl-logo.webp", desc: "Trusted Express Cargo & Logistics" },
              { name: "UPS", logo: "/images/ups-logo.jpg", desc: "Global Shipping Solutions" },
              { name: "Aramex", logo: "/images/aramex-logo.png", desc: "International Express Services" },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border-2 border-primary/20 hover:border-accent hover:shadow-xl transition-all text-center card-shadow group"
              >
                <div className="h-20 mb-4 flex items-center justify-center">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-20 max-w-32 object-contain group-hover:scale-110 transition"
                  />
                </div>
                <h3 className="font-bold text-lg gradient-text mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Our Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Chemical Shipments",
                desc: "Safe handling of chemical shipments with compliance to international regulations",
              },
              {
                title: "Hazardous/Non-Hazardous Materials",
                desc: "Expert packaging and transportation of hazardous and non-hazardous cargo",
              },
              {
                title: "Pharmaceutical Products",
                desc: "Temperature-controlled export of pharmaceutical and medical supplies",
              },
              {
                title: "Petroleum & Petro-Chemicals",
                desc: "Specialized logistics for petroleum and petro-chemical products",
              },
              {
                title: "Paints & Finishes",
                desc: "Secure packaging and delivery of paints, coatings, and finishing materials",
              },
              { title: "Synthetic Dyes & Colors", desc: "Export of synthetic dyes and food color additives" },
              {
                title: "Chemical Pastes",
                desc: "Proper handling of chemical pastes and concentrated solutions",
              },
              {
                title: "Food Colors & Additives",
                desc: "Food-grade chemical shipments meeting international standards",
              },
              {
                title: "Ink & Machinery/Automotive Parts",
                desc: "Specialized export services for industrial inks and automotive components",
              },
            ].map((spec, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-accent hover:shadow-lg card-shadow transition no-select">
                <Flame className="text-accent mb-3" size={24} />
                <h3 className="text-lg font-bold text-primary mb-2">{spec.title}</h3>
                <p className="text-gray-600">{spec.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Industries We Specialize In</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Serving diverse sectors with expert logistics and export solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Chemical Industry", icon: "⚗️", color: "from-primary/20 to-primary/5" },
              { name: "Pharmaceutical", icon: "💊", color: "from-secondary/20 to-secondary/5" },
              { name: "Food & Beverages", icon: "🍱", color: "from-accent/20 to-accent/5" },
              { name: "Manufacturing", icon: "🏭", color: "from-primary/20 to-accent/5" },
              { name: "Textiles", icon: "🧵", color: "from-secondary/20 to-accent/5" },
              { name: "Electronics", icon: "📱", color: "from-accent/20 to-primary/5" },
              { name: "Cosmetics", icon: "💄", color: "from-primary/20 to-secondary/5" },
              { name: "Automotive", icon: "🚗", color: "from-secondary/20 to-primary/5" },
              { name: "Petrochemicals", icon: "🛢️", color: "from-accent/20 to-secondary/5" },
              { name: "Engineering", icon: "⚙️", color: "from-primary/20 to-primary/5" },
              { name: "Spices & Condiments", icon: "🌶️", color: "from-secondary/20 to-secondary/5" },
              { name: "Art & Crafts", icon: "🎨", color: "from-accent/20 to-accent/5" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${industry.color} p-8 rounded-xl border-2 border-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer no-select`}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{industry.icon}</div>
                <h3 className="text-xl font-bold gradient-text">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl font-bold gradient-text mb-6">Part of Sky Fly Group</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg no-select">
            Airnet International is a proud division of Sky Fly Group, bringing together expertise, reliability, and
            excellence in logistics and courier services since 1995.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Sky Fly Logistics Pvt Ltd",
                desc: "Parent Company & Industry Leader",
                logo: "/images/sfl-globe-logo.png",
              },
              {
                name: "Sky Fly International",
                desc: "Global Courier & Logistics Services",
                logo: "/images/sfl-globe-logo.png",
              },
              {
                name: "Airnet International",
                desc: "Global Courier & Export Services",
                logo: "/images/airnet-symbol.png",
              },
            ].map((company, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border-2 border-primary/20 card-shadow hover:shadow-lg transition no-select"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-24 w-24 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-bold gradient-text mb-2">{company.name}</h3>
                <p className="text-gray-600">{company.desc}</p>
              </div>
            ))}
          </div>

          <Button onClick={handleGetQuote} size="lg" className="btn-primary px-8 py-6 rounded-lg text-lg font-bold">
            Visit Main Website <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="no-select">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                30 Years of Excellence in International Logistics
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded in 1995, Airnet International has grown into a trusted division of Sky Fly Group, pioneering
                comprehensive import-export logistics solutions across the globe. With three decades of expertise, we've
                established ourselves as industry leaders in handling specialized shipments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From chemical shipments and hazardous materials to pharmaceutical products, petroleum, petro-chemicals,
                and specialized cargo, our team delivers excellence with precision, compliance, and reliability.
              </p>
              <Button onClick={handleGetQuote} className="btn-primary px-8 py-3 rounded-lg text-lg font-bold">
                Learn More About Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 no-select">
              {[
                { number: "30+", label: "Years Experience", icon: Award },
                { number: "150+", label: "Countries Served", icon: Globe },
                { number: "10K+", label: "Happy Clients", icon: Users },
                { number: "99.9%", label: "On-Time Delivery", icon: TrendingUp },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary card-shadow">
                    <Icon className="text-secondary mb-2" size={28} />
                    <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 gradient-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center no-select">
            Comprehensive Logistics Services
          </h2>
          <p className="text-white/90 text-center mb-12 max-w-3xl mx-auto text-lg no-select">
            Complete solution for all your international export and import requirements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Express Export Services",
                desc: "Fast international export with real-time tracking worldwide",
                icon: Package,
              },
              {
                title: "Import Solutions",
                desc: "Seamless import services with customs clearance support",
                icon: Globe,
              },
              {
                title: "Air & Sea Freight",
                desc: "Efficient air and sea freight forwarding to all destinations",
                icon: Truck,
              },
              {
                title: "Customs Clearance",
                desc: "Expert assistance in documentation and regulatory compliance",
                icon: FileText,
              },
              {
                title: "Supply Chain Management",
                desc: "End-to-end logistics with warehousing and distribution",
                icon: BarChart3,
              },
              {
                title: "Corporate Solutions",
                desc: "Tailored packages for enterprises and bulk shipments",
                icon: Zap,
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <Card
                  key={idx}
                  className="bg-white/10 backdrop-blur text-white p-6 border border-white/20 card-shadow no-select"
                >
                  <Icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/80">{service.desc}</p>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="bg-white text-primary hover:bg-accent hover:text-white font-bold px-8 py-6 rounded-lg text-lg"
            >
              Explore All Services <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center no-select">Who We Serve</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg no-select">
            Trusted by diverse industries for their international export and import logistics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Corporate Enterprises", emoji: "🏢" },
              { name: "Manufacturing Units", emoji: "🏭" },
              { name: "E-Commerce Retailers", emoji: "🛍️" },
              { name: "Import-Export Businesses", emoji: "🌍" },
              { name: "Trading Companies", emoji: "📦" },
              { name: "Pharmaceutical Firms", emoji: "💊" },
              { name: "Chemical Manufacturers", emoji: "⚗️" },
              { name: "SMBs & Startups", emoji: "🚀" },
            ].map((client, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-lg p-8 border-2 border-primary/20 hover:border-accent hover:shadow-xl transition-all duration-300 card-shadow text-center no-select"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{client.emoji}</div>
                <p className="font-bold text-gray-700 group-hover:text-primary transition">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center no-select">
            Why Choose Airnet International?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "30 Years of Experience",
                desc: "Established since 1995 with proven expertise in international logistics",
              },
              {
                title: "Global Network",
                desc: "Operations spanning 150+ countries with reliable local partnerships",
              },
              {
                title: "Real-Time Tracking",
                desc: "Advanced tracking systems for complete shipment visibility",
              },
              {
                title: "Customs Expertise",
                desc: "Smooth clearance and compliance with all regulations",
              },
              {
                title: "Competitive Pricing",
                desc: "Affordable rates without compromising on quality service",
              },
              {
                title: "24/7 Support",
                desc: "Round-the-clock customer support for your peace of mind",
              },
              {
                title: "Specialized Handling",
                desc: "Expert care for chemical, hazardous, and pharmaceutical shipments",
              },
              {
                title: "Complete Solutions",
                desc: "One-stop solution for all export and import requirements",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-accent hover:shadow-lg card-shadow bg-white no-select">
                <div className="flex gap-4">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative gradient-primary text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center max-w-3xl relative z-10 no-select">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 text-balance">
            Join thousands of businesses trusting Airnet International for seamless international export and import
            logistics. Get started with a free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="bg-white text-primary hover:bg-accent hover:text-white font-bold text-lg px-8 py-6 rounded-lg"
            >
              Get Free Quote <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={handleContactUs}
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-lg bg-transparent"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
