"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"}`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-secondary-900 text-white py-2">
        <div className="container px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+91 9928215805</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>info@skyflyexpress.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Corporate Headquarters, New Delhi</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="#" aria-label="Facebook" className="hover:text-accent-300 transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-accent-300 transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-accent-300 transition-colors">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-accent-300 transition-colors">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-accent-300 transition-colors">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SF</span>
            </div>
            <div>
              <div className="font-bold text-xl text-secondary-900">Sky Fly Express</div>
              <div className="text-xs text-accent-600">International Courier & Cargo Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-secondary-800 hover:text-primary-600`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-secondary-800 hover:text-primary-600">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-50 hover:text-accent-900 focus:bg-accent-50 focus:text-accent-900"
                          >
                            <div className="text-sm font-medium leading-none">Company Profile</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about our history, mission, and values
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/team"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-50 hover:text-accent-900 focus:bg-accent-50 focus:text-accent-900"
                          >
                            <div className="text-sm font-medium leading-none">Our Team</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Meet the experts behind our logistics solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-secondary-800 hover:text-primary-600">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/express-courier"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-50 focus:text-primary-900"
                          >
                            <div className="text-sm font-medium leading-none">Express Courier</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast and reliable delivery of documents and packages
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/freight-forwarding"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-50 focus:text-primary-900"
                          >
                            <div className="text-sm font-medium leading-none">Freight Forwarding</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Efficient transportation of goods via air, sea, and land
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/international-shipping"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-50 focus:text-primary-900"
                          >
                            <div className="text-sm font-medium leading-none">International Shipping</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Global trade solutions with export and import support
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/warehousing"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-50 focus:text-primary-900"
                          >
                            <div className="text-sm font-medium leading-none">Warehousing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Secure storage with inventory management
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/track" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-secondary-800 hover:text-primary-600`}
                    >
                      Track Shipment
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-secondary-800 hover:text-primary-600`}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-primary hover:bg-primary-600 text-white">Book Online</Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium text-secondary-800">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium text-secondary-800">
                  About Us
                </Link>
                <Link href="/services" className="text-lg font-medium text-secondary-800">
                  Services
                </Link>
                <Link href="/track" className="text-lg font-medium text-secondary-800">
                  Track Shipment
                </Link>
                <Link href="/contact" className="text-lg font-medium text-secondary-800">
                  Contact Us
                </Link>
                <Button className="mt-4 bg-primary hover:bg-primary-600">Book Online</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
