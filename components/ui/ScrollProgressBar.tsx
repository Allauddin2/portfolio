// ============================================================
// components/ui/ScrollProgressBar.tsx
// ============================================================

'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #7C3AED, #00E5FF, #FF4D8D)',
        boxShadow: '0 0 8px rgba(124,58,237,0.8)',
      }}
    />
  )
}
