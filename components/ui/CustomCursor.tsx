// ============================================================
// components/ui/CustomCursor.tsx
// ============================================================

'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(0)
  const dotY = useMotionValue(0)

  const ringX = useSpring(dotX, { damping: 18, stiffness: 200 })
  const ringY = useSpring(dotY, { damping: 18, stiffness: 200 })

  const isHovering = useRef(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const onEnterInteractive = () => {
      isHovering.current = true
      ringRef.current?.classList.add('hover')
    }

    const onLeaveInteractive = () => {
      isHovering.current = false
      ringRef.current?.classList.remove('hover')
    }

    window.addEventListener('mousemove', onMove)

    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label'
    )
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [dotX, dotY])

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ left: dotX, top: dotY }}
      />

      {/* Ring — spring-lagged */}
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{ left: ringX, top: ringY }}
      />
    </>
  )
}
