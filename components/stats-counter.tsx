"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface StatsCounterProps {
  number: number
  label: string
}

export default function StatsCounter({ number, label }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countingDone = useRef(false)

  useEffect(() => {
    if (inView && !countingDone.current) {
      const duration = 2000 // ms
      const steps = 50
      const stepTime = duration / steps
      const increment = number / steps
      let currentCount = 0
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        currentCount = Math.min(Math.round(currentStep * increment), number)
        setCount(currentCount)

        if (currentStep >= steps) {
          clearInterval(timer)
          countingDone.current = true
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold mb-2">{count.toLocaleString()}</div>
      <div className="text-white/80">{label}</div>
    </div>
  )
}
