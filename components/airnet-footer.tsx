"use client"

import { Instagram, Facebook, Linkedin, Twitter, MapPin, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function AirnetFooter() {
  
const seoKeywords = [
  "courier service near me", "best courier service near me", "international courier service near me",
  "dhl courier service near me", "courier charges for usa", "courier service for usa", "international courier to usa",
  "courier india to usa cost", "usa parcel service india", "usa courier pickup near me", "international courier cost calculator",
  "cheap courier service to usa", "dox courier service", "non dox courier service", "document courier near me",
  "parcel courier near me", "express courier service", "same day pickup courier", "international courier tracking",
  "courier delivery estimate india", "courier for export companies", "courier for chemical exporters", "courier for oil exporters",
  "courier for pharma exporters", "pharma courier service india", "pharmaceutical courier solutions", "api export courier service",
  "chemical courier service india", "chemical sample courier service", "dg cargo courier india", "hazardous goods courier service",
  "dg certified courier company", "dangerous goods shipping india", "iata dg shipment service", "class 3 dg cargo service",
  "international cargo service for chemicals", "chemical logistics company india", "chemical export shipping company",
  "cargo services for oil companies", "courier service for essential oils", "essential oil export courier", "industrial cargo courier india",
  "engineering goods courier", "courier service for industrial supplies", "international shipment for raw materials",
  "import courier service india", "import parcel from usa to india", "import courier from china to india", "import cargo clearance india",
  "import documentation services", "import shipping solutions", "india import courier charges", "export courier service india",
  "international export shipping india", "courier for global exporters", "courier services for manufacturers", "b2b courier service india",
  "corporate courier service india", "business logistics partner india", "international b2b logistics", "india to europe courier service",
  "courier service to uk", "courier service to dubai", "dubai courier from india", "courier to singapore from india",
  "courier to china from india", "parcel service to germany", "international courier to france", "courier for shipping cosmetics export",
  "courier for chemicals and oils", "courier for food ingredients", "food ingredient courier service", "herbal extract export courier",
  "nutraceutical export courier", "food grade chemical courier", "spices export courier", "synthetic dyes courier service",
  "ink courier service", "paint color courier service", "oils courier service", "testing materials courier", "powder chemicals courier",
  "electronic components courier", "creams export courier", "plastic granules courier", "manufacturing products courier",
  "comprehensive logistics solutions", "complete international services", "one stop logistics solution",
  "customized logistics service", "domestic courier service", "export air cargo service india", "sea cargo service for exporters",
  "fcl shipping india", "lcl shipping from india", "air freight for chemicals", "freight forwarding for exporters",
  "custom clearance for export shipments", "customs clearance for chemical cargo", "msds based shipping support",
  "msds validation for shipping", "invoice support for export", "packing list support services", "air cargo service near me",
  "international air cargo from india", "affordable international courier india", "top courier company india",
  "global courier service india", "courier with customs clearance", "courier for high value shipments",
  "courier for sensitive cargo", "temperature safe logistics", "lab samples courier (non biological)",
  "research material courier india", "india international delivery service", "global parcel delivery from india",
  "cheapest courier to usa from india", "best courier for usa from india", "india to usa courier per kg price",
  "courier charges per kg international", "volumetric weight calculation courier", "courier packaging guidelines india",
  "courier customs duty calculator", "hs code based customs support", "courier for online sellers india",
  "ecommerce courier for exporters", "worldwide courier services india", "international express delivery india",
  "international priority courier india", "import export logistics india", "end to end logistics for exporters",
  "fast international shipping from india", "secure courier for chemicals", "compliant courier service for hazardous cargo",
  "supply chain solutions for exporters", "logistics partner for chemical industry", "logistics partner for oil industry",
  "logistics partner for pharma exporters", "trade logistics india", "courier for sample shipment india",
  "international sample courier service", "courier for business samples", "business courier near me",
  "global delivery partner india", "india export courier experts", "india import courier experts",
  "door to door international courier", "pickup and delivery international courier", "international courier booking india",
  "courier for manufacturing companies", "courier for petrochemical exports", "courier for coating and paint manufacturers",
  "courier for fragrances and oils", "courier for aroma chemicals", "courier for organic chemicals",
  "courier for industrial solvents", "courier for corrosive materials", "export cargo handling india",
  "bulk shipment courier india", "packaging and forwarding service india", "international courier consultant india",
  "industrial shipment express courier", "urgent courier for exporters", "reliable courier for chemical samples",
  "international parcel pickup india", "cross border shipping india", "global cargo movement india",
  "india to usa express cargo", "india to europe express cargo", "india to australia courier",
  "shipping to canada from india", "courier to canada from india", "india to uae courier", "dubai express courier",
  "cheap courier for exporters", "courier with real time tracking", "ai search friendly courier keywords",
  "conversational ai courier queries", "courier service india suggestions", "best international courier options india",
  "how to send parcel to usa from india", "cheapest way to send courier to usa", "customs process for international courier",
  "courier export guide india", "courier import guide india", "what is non dox courier india", "international courier faq",
  "international courier near me open now", "courier service for b2b exporters", "courier partner for global trade",
  "courier charges to all countries", "worldwide delivery from india", "india international shipping solutions",
  "courier for heavy parcels india", "bulk parcel courier india", "india cross border logistics",
  "trustworthy courier service india", "safe courier for chemical industries", "global chemical shipping india",
  "global pharma shipping support", "export import supply chain partner india", "shipping partner for exporters",
  "logistic support for manufacturers", "courier for production plants", "incoming courier from overseas india",
  "export documentation assistance", "international courier with compliance", "professional logistics company india",
  "international delivery with tracking", "courier for specialized industries", "chemical and oil logistics partner",
  "international parcel forwarding india", "india overseas courier solutions", "courier to 200+ countries india",
  "international cargo availability near me", "chemical industry courier service", "professional export courier india",
  "courier for regulated goods india", "india freight and courier services", "movin courier alternative",
  "delhivery courier near me", "bluedart courier alternative", "ups courier service india", "aramex courier india",
  "trackon courier near me", "dtdc courier near me", "dhl shipping india", "ups international shipping india",
  "aramex export courier", "bluedart international courier", "delhivery international shipping"
];


  const [showAllKeywords, setShowAllKeywords] = useState(false);

  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-16 px-4">
      <div className="container mx-auto">
        
        {/* --- TOP GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Contact Info */}
          <div className="no-select">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin size={20} />
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <p className="leading-relaxed selectable">
                <strong>Office:</strong> Office no. 8, A-Wing, Ground Floor, Chamunda Heritage, Sai Mandir Marg,
                Koldongri, Sahar Road, Behind Jeevan Vikas Hospital, Andheri East, Mumbai - 400069, MH, India
              </p>

              <a href="tel:+919920216805" className="flex items-center gap-2 hover:opacity-80 transition selectable">
                <Phone size={16} /> +91 9920216805
              </a>

              <a
                href="https://wa.me/919322867487"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition selectable"
              >
                <MessageCircle size={16} /> +91 9322867487
              </a>

              <a href="tel:+919892330855" className="flex items-center gap-2 hover:opacity-80 transition selectable">
                <Phone size={16} /> Support: +91 9892330085
              </a>

              <a href="mailto:ns@skyflyexpress.com" className="flex items-center gap-2 hover:opacity-80 transition selectable">
                <Mail size={16} /> ns@skyflyexpress.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="no-select">
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80 transition">Export Services</a></li>
              <li><a href="#" className="hover:opacity-80 transition">Import Services</a></li>
              <li><a href="#" className="hover:opacity-80 transition">Chemical Shipping</a></li>
              <li><a href="#" className="hover:opacity-80 transition">Freight Forwarding</a></li>
              <li><a href="#" className="hover:opacity-80 transition">Track Shipment</a></li>
            </ul>
          </div>

          {/* Group Companies */}
          <div className="no-select">
            <h3 className="font-bold text-lg mb-4">Sky Fly Group</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.skyflyexpress.com" className="hover:opacity-80 transition">Sky Fly Logistics Pvt Ltd</a></li>
              <li><a href="https://www.skyflyexpress.com" className="hover:opacity-80 transition">Sky Fly International</a></li>
              <li><a href="#" className="hover:opacity-80 transition">Airnet International</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="no-select">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/skyflyinternational_courier/" className="hover:opacity-80 transition p-2 bg-white/20 rounded-lg"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/SkyFlyLogistics/" className="hover:opacity-80 transition p-2 bg-white/20 rounded-lg"><Facebook size={20} /></a>
              <a href="https://x.com/skyflylogistic" className="hover:opacity-80 transition p-2 bg-white/20 rounded-lg"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/in/sky-fly-international-00816919a/" className="hover:opacity-80 transition p-2 bg-white/20 rounded-lg"><Linkedin size={20} /></a>
            </div>

            <a
              href="https://share.google/SLVnF9CRCDe3oAwHb"
              className="inline-block bg-white text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-accent hover:text-white transition"
            >
              Google Business Profile
            </a>
          </div>

        </div>

        {/* --- KEYWORDS BLOCK --- */}
        <div className="bg-white/10 p-8 rounded-lg mb-8 backdrop-blur-sm">

          {/* Toggle Button */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <button
              onClick={() => setShowAllKeywords(!showAllKeywords)}
              className="flex items-center gap-2 text-xs bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition no-select font-semibold"
            >
              <span>{showAllKeywords ? "Hide" : "Show"} Keywords</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${showAllKeywords ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Animated Expand / Collapse */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              showAllKeywords ? "max-h-[850px]" : "max-h-10"
            }`}
          >
            <p className="text-xs text-gray-300/40 leading-relaxed text-center flex flex-wrap gap-2 justify-center no-select">
              {seoKeywords.map((keyword, idx) => (
                <span key={idx} className="bg-white/5 px-2 py-1 rounded">
                  {keyword}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 text-center no-select">
          <p className="text-sm text-white/80">
            &copy; 2025 Airnet International. All rights reserved. A Division of Sky Fly Group.
          </p>
          <p className="text-xs text-white/60 mt-2">
            Specializing in 30 years of international courier, freight forwarding, and logistics expertise.
          </p>
        </div>
      </div>
    </footer>
  )
}
