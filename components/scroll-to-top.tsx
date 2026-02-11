'use client'

import { useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function ScrollToTop() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Scroll to top when pathname or searchParams change
    window.scrollTo(0, 0)
  }, [pathname, searchParams])

  return null
}
