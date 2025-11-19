import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Get a Quote | Sky Fly Express",
  description:
    "Request a customized shipping quote from Sky Fly Express. Fill out our simple form to receive competitive rates for your courier and logistics needs.",
}

export default function QuotePage() {
  return (
    <main className="container px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Get a Quote</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Fill out the form below to receive a customized shipping quote for your logistics needs.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Quote Request</CardTitle>
            <CardDescription>
              Please provide accurate information to ensure we can provide the most competitive rates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Contact Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Shipment Type</h3>
                <RadioGroup defaultValue="document">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="document" id="document" />
                      <Label htmlFor="document">Document</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="parcel" id="parcel" />
                      <Label htmlFor="parcel">Parcel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="freight" id="freight" />
                      <Label htmlFor="freight">Freight</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Origin</h3>
                  <div>
                    <Label htmlFor="origin-country">Country</Label>
                    <Select>
                      <SelectTrigger id="origin-country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="origin-city">City</Label>
                    <Input id="origin-city" placeholder="Mumbai" />
                  </div>
                  <div>
                    <Label htmlFor="origin-zip">Postal/ZIP Code</Label>
                    <Input id="origin-zip" placeholder="400001" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Destination</h3>
                  <div>
                    <Label htmlFor="dest-country">Country</Label>
                    <Select>
                      <SelectTrigger id="dest-country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dest-city">City</Label>
                    <Input id="dest-city" placeholder="New York" />
                  </div>
                  <div>
                    <Label htmlFor="dest-zip">Postal/ZIP Code</Label>
                    <Input id="dest-zip" placeholder="10001" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Package Details</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" placeholder="5" />
                  </div>
                  <div>
                    <Label htmlFor="length">Length (cm)</Label>
                    <Input id="length" type="number" placeholder="30" />
                  </div>
                  <div>
                    <Label htmlFor="width">Width (cm)</Label>
                    <Input id="width" type="number" placeholder="20" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" type="number" placeholder="15" />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" type="number" placeholder="1" />
                  </div>
                  <div>
                    <Label htmlFor="value">Declared Value ($)</Label>
                    <Input id="value" type="number" placeholder="100" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Additional Services</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="insurance" />
                    <Label htmlFor="insurance">Shipping Insurance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="signature" />
                    <Label htmlFor="signature">Signature Required</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="priority" />
                    <Label htmlFor="priority">Priority Handling</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="packaging" />
                    <Label htmlFor="packaging">Packaging Service</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Any special requirements or instructions..." rows={3} />
              </div>

              <Button type="submit" className="w-full">
                Request Quote
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
