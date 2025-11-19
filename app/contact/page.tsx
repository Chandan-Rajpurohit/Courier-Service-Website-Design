import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Sky Fly Express",
  description:
    "Get in touch with Sky Fly Express for inquiries about our courier and logistics services. Our team is ready to assist you with your shipping needs.",
}

export default function ContactPage() {
  return (
    <main className="container px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have questions or need assistance? Our team is here to help you with all your logistics needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <Input id="phone" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="quote">Request a Quote</SelectItem>
                  <SelectItem value="tracking">Shipment Tracking</SelectItem>
                  <SelectItem value="complaint">Complaint</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="How can we help you?" rows={5} />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Corporate Headquarters</h3>
                <p className="text-muted-foreground">
                  123 Logistics Avenue
                  <br />
                  New Delhi, 110001
                  <br />
                  India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+91 9928215805</p>
                <p className="text-muted-foreground">+91 9322847487</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">info@skyflyexpress.com</p>
                <p className="text-muted-foreground">support@skyflyexpress.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-4">Our Locations</h3>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              {/* Replace with actual map component or embed */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Goes Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
