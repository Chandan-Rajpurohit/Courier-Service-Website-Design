import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src="/placeholder.svg?height=40&width=40" alt="Sky Fly Express Logo" width={40} height={40} />
              <div>
                <div className="font-bold text-xl">Sky Fly Express</div>
                <div className="text-xs text-gray-400">International Courier & Cargo Services</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Sky Fly Express is a leading provider of global logistics solutions, offering express courier, freight
              forwarding, and international shipping services to businesses and individuals worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-gray-400 hover:text-white">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-white">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/express-courier" className="text-gray-400 hover:text-white">
                  Express Courier
                </Link>
              </li>
              <li>
                <Link href="/services/freight-forwarding" className="text-gray-400 hover:text-white">
                  Freight Forwarding
                </Link>
              </li>
              <li>
                <Link href="/services/international-shipping" className="text-gray-400 hover:text-white">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing" className="text-gray-400 hover:text-white">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services/time-critical" className="text-gray-400 hover:text-white">
                  Time-Critical Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-gray-400 hover:text-white">
                  E-commerce Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-gray-400">
                  Corporate Headquarters
                  <br />
                  123 Logistics Avenue
                  <br />
                  New Delhi, 110001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+91 9928215805</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@skyflyexpress.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button size="icon" className="shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sky Fly Express. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
