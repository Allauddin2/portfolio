// ============================================================
// components/sections/TestimonialsSection.tsx
// ============================================================

'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'
import { TESTIMONIALS } from '@/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const advance = (dir: 1 | -1) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => advance(1), 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20, stiffness: 200 } },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
      transition: { duration: 0.25 },
    }),
  }

  const testimonial = TESTIMONIALS[current]

  return (
    <section id="testimonials" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-secondary bottom-0 left-0 opacity-5 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="What People Say"
          title="Testimonials"
          subtitle="Honest feedback from mentors, collaborators, and supervisors."
        />

        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-card gradient-border rounded-3xl p-10 md:p-14 text-center relative"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-primary/30 text-5xl mx-auto mb-6" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <HiStar key={i} className="text-yellow-400" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 font-inter text-lg md:text-xl leading-relaxed italic mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full glass-card border border-white/10 flex items-center justify-center text-xl font-bold gradient-text mb-3">
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="font-bold font-space-grotesk text-white">{testimonial.name}</div>
                <div className="text-white/50 text-sm font-inter mt-0.5">
                  {testimonial.role} — {testimonial.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            onClick={() => advance(-1)}
            className="absolute -left-5 md:-left-10 top-1/2 -translate-y-1/2 p-2.5 rounded-full glass-card border border-white/10 text-white/60 hover:text-white hover:border-primary transition"
          >
            <HiChevronLeft size={20} />
          </button>
          <button
            onClick={() => advance(1)}
            className="absolute -right-5 md:-right-10 top-1/2 -translate-y-1/2 p-2.5 rounded-full glass-card border border-white/10 text-white/60 hover:text-white hover:border-primary transition"
          >
            <HiChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === current ? 'w-8 bg-primary' : 'w-2 bg-white/20'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
