// ============================================================
// components/layout/SmoothScrollProvider.tsx
// ============================================================

'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface Props {
  children: React.ReactNode
}

export default function SmoothScrollProvider({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    // Integrate with GSAP ticker if available
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Expose lenis instance globally for GSAP ScrollTrigger
    ;(window as unknown as Record<string, unknown>).__lenis__ = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
