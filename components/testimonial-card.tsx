import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1">
        <Quote className="h-8 w-8 text-primary/30 mb-4" />
        <p className="italic">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </CardFooter>
    </Card>
  )
}
