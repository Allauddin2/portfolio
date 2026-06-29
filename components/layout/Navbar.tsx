// ============================================================
// components/layout/Navbar.tsx
// ============================================================

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { NAV_LINKS } from '@/constants'
import { useScrollProgress, useActiveSection } from '@/hooks'
import { cn } from '@/lib/utils'

const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''))

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollProgress = useScrollProgress()
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Desktop Navbar ─────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'py-3 bg-[#050816]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-2xl font-bold font-space-grotesk gradient-text">
              MD.
            </span>
            <span className="text-2xl font-bold font-space-grotesk text-white">
              Allauddin
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium font-space-grotesk rounded-full transition-all duration-300',
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Hire Me CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Connect
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white transition p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Scroll Progress */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <motion.div
            className="h-full"
            style={{
              background: 'linear-gradient(90deg, #7C3AED, #00E5FF)',
              width: `${scrollProgress * 100}%`,
              boxShadow: '0 0 8px rgba(124,58,237,0.6)',
            }}
          />
        </div>
      </motion.header>

      {/* ── Mobile Menu ────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 flex flex-col pt-24 pb-8 px-6 bg-[#050816]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 text-xl font-semibold font-space-grotesk text-white/80 hover:text-white border-b border-white/5 transition"
                >
                  <span className="text-primary mr-3 text-sm font-mono">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Connect
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
