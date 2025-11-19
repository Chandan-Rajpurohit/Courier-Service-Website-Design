import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg hover:shadow-accent-200/50 border-accent-100 hover:border-accent-300 group">
      <CardHeader>
        <div className="mb-4 text-primary-500 group-hover:text-accent-500 transition-colors">{icon}</div>
        <CardTitle className="text-secondary-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto text-primary-600 hover:text-accent-600">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
