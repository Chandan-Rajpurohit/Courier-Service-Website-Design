import type { Metadata } from "next"
import ClientBlogsPage from "./client"

export const metadata: Metadata = {
  title: "Logistics Industry Insights & Shipping Tips | Airnet International Blog",
  description:
    "Stay informed with the latest logistics trends, shipping regulations, supply chain innovations, and international trade insights from Airnet International experts.",
  keywords:
    "logistics blog, shipping industry news, international trade insights, supply chain management, courier service tips, freight forwarding trends, import export regulations, cargo shipping guides",
}

export default function BlogsPage() {
  return <ClientBlogsPage />
}
