"use client"

import { Phone, Mail, Instagram, Facebook, Linkedin, Twitter, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AirnetHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Contact Details - Added customer service number with +91, prevented line wrapping */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 text-sm md:text-sm whitespace-nowrap">
              <a
                href="tel:9920216805"
                className="flex items-center gap-1 hover:opacity-80 transition font-semibold flex-nowrap"
              >
                <Phone size={16} />
                <span>+91 9920216805</span>
              </a>
              <a
                href="https://wa.me/919322867487"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:opacity-80 transition font-semibold flex-nowrap"
              >
                <span>WhatsApp: +91 9322867487</span>
              </a>
              <a
                href="tel:989233085"
                className="flex items-center gap-1 hover:opacity-80 transition font-semibold flex-nowrap"
              >
                <span>Support: +91 9892330085</span>
              </a>
              <a
                href="mailto:ns@skyflyexpress.com"
                className="flex items-center gap-1 hover:opacity-80 transition font-semibold hidden md:flex flex-nowrap"
              >
                <Mail size={16} />
                <span>ns@skyflyexpress.com</span>
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <span className="text-xs font-semibold">Follow:</span>
              <a
                href="https://www.instagram.com/skyflyinternational_courier/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/SkyFlyLogistics/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://x.com/skyflylogistic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="X"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sky-fly-international-00816919a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Company Info */}
      <div className="bg-white border-b-2 border-primary py-3 px-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/airnet-symbol.png" alt="Airnet International Logo" className="h-14 w-14 object-contain" />
            <div>
              <h1 className="text-2xl font-bold gradient-text">Airnet International</h1>
              <p className="text-xs md:text-xs text-gray-700 font-semibold">Express Courier and Cargo Services</p>
              <p className="text-xs text-gray-600">A Division of Sky Fly Group</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition font-semibold">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition font-semibold">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition font-semibold">
              Services
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-primary transition font-semibold">
              Blogs
            </Link>
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2 rounded-lg font-semibold text-sm"
            >
              Visit Main Website
            </a>
          </nav>

          <button
            className="lg:hidden text-gray-700 hover:text-primary transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-gray-200 shadow-lg">
          <nav className="container mx-auto py-4 px-4 flex flex-col gap-3">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary transition font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-primary transition font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/blogs" 
              className="text-gray-700 hover:text-primary transition font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <a
              href="https://www.skyflyexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2 rounded-lg font-semibold text-sm text-center"
            >
              Visit Main Website
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
