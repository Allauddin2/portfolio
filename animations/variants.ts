// ============================================================
// animations/variants.ts — Framer Motion Variants
// ============================================================

import type { Variants } from 'framer-motion'

// ── Fade Variants ────────────────────────────────────────────
export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'tween',
      ease: [0.25, 0.46, 0.45, 0.94],
      duration,
      delay,
    },
  },
})

// ── Stagger Container ────────────────────────────────────────
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

// ── Slide Variants ───────────────────────────────────────────
export const slideIn = (
  direction: 'up' | 'down' | 'left' | 'right',
  delay = 0
): Variants => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      delay,
    },
  },
})

// ── Scale Variants ───────────────────────────────────────────
export const scaleIn = (delay = 0): Variants => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      delay,
    },
  },
})

// ── Card Hover ───────────────────────────────────────────────
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 300,
    },
  },
}

// ── Text Reveal ──────────────────────────────────────────────
export const textReveal: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 80,
    },
  },
}

// ── Character Reveal ─────────────────────────────────────────
export const charReveal: Variants = {
  hidden: { y: 20, opacity: 0, rotateX: -90 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

// ── Page Transition ──────────────────────────────────────────
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
}

// ── Floating Animation ───────────────────────────────────────
export const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// ── Pulse Glow ───────────────────────────────────────────────
export const pulseGlow = (color: string) => ({
  boxShadow: [
    `0 0 0px ${color}00`,
    `0 0 30px ${color}80`,
    `0 0 0px ${color}00`,
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
})

// ── Rotate Icon ──────────────────────────────────────────────
export const rotateIcon: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 15,
    transition: { type: 'spring', damping: 8, stiffness: 200 },
  },
}

// ── Magnetic Button ──────────────────────────────────────────
export const magneticButton = (x: number, y: number): Variants => ({
  rest: { x: 0, y: 0 },
  hover: {
    x,
    y,
    transition: { type: 'spring', damping: 10, stiffness: 300 },
  },
})

// ── Timeline Card ────────────────────────────────────────────
export const timelineCard = (side: 'left' | 'right'): Variants => ({
  hidden: {
    opacity: 0,
    x: side === 'left' ? -60 : 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 80,
    },
  },
})

// ── Modal ────────────────────────────────────────────────────
export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 200 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 20,
    transition: { duration: 0.2 },
  },
}

// ── Backdrop ─────────────────────────────────────────────────
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

// ── Nav Links ────────────────────────────────────────────────
export const navLinkVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: 'spring',
      damping: 20,
      stiffness: 200,
    },
  }),
}

// ── Skill Card ───────────────────────────────────────────────
export const skillCard: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { type: 'spring', damping: 15, stiffness: 100 },
  },
}
