// ============================================================
// components/sections/AboutSection.tsx
// ============================================================

'use client'

import { motion } from 'framer-motion'
import { STATS } from '@/constants'
import { useInView, useCountUp } from '@/hooks'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeIn, staggerContainer } from '@/animations/variants'
import Image from 'next/image'

// ── Stat Counter Card ────────────────────────────────────────
function StatCard({
  label,
  value,
  suffix = '+',
  delay = 0,
  triggered,
}: {
  label: string
  value: number
  suffix?: string
  delay?: number
  triggered: boolean
}) {
  const count = useCountUp(value, 1800, triggered)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass-card gradient-border p-6 text-center rounded-2xl"
    >
      <div className="text-4xl md:text-5xl font-bold font-space-grotesk gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-white/50 text-sm font-inter">{label}</div>
    </motion.div>
  )
}

export default function AboutSection() {
  const [sectionRef, inView] = useInView(0.15)

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background blob */}
      <div className="blob w-[500px] h-[500px] bg-secondary left-1/2 -translate-x-1/2 top-0 opacity-5 pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting Digital"
          highlight="Experiences"
          subtitle="Passionate Full Stack Developer with a strong foundation in modern web technologies and machine learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* ── Left: Profile visual ───────────────────────── */}
          <motion.div
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-2xl scale-110" />

              {/* Card */}
             <div className="relative w-80 h-80 rounded-3xl glass-card gradient-border overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 z-10" />
  <Image
    src="/image/Allauddin.jpeg"
    alt="Allauddin"
    fill
    className="object-cover object-center"
    priority
  />
</div>

              {/* Floating tech chips */}
              {[
                { text: '🚀 Next.js 15', y: -20, x: -20 },
                { text: '⚡ Node.js', y: 20, x: 20 },
              ].map(({ text, y, x }) => (
                <motion.div
                  key={text}
                  className="absolute glass-card px-3 py-2 text-xs font-semibold text-white/80 border border-white/10 whitespace-nowrap rounded-full"
                  style={{
                    top: y < 0 ? `${y}px` : 'auto',
                    bottom: y > 0 ? `${-y}px` : 'auto',
                    left: x < 0 ? `${x}px` : 'auto',
                    right: x > 0 ? `${-x}px` : 'auto',
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Bio text ────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <motion.p
              variants={fadeIn('left', 0)}
              className="text-white/80 font-inter text-base md:text-lg leading-relaxed"
            >
              I am a passionate{' '}
              <span className="text-secondary font-semibold">Full Stack Developer</span> specialising
              in modern web technologies. I build scalable, responsive, and high-performance web
              applications using{' '}
              <span className="text-primary font-semibold">
                React, Next.js, Node.js, Express.js, MongoDB, and MySQL.
              </span>
            </motion.p>

            <motion.p
              variants={fadeIn('left', 0.1)}
              className="text-white/70 font-inter text-base leading-relaxed"
            >
              With hands-on internship experience at{' '}
              <span className="text-accent font-semibold">NIT Silchar</span> (Machine Learning) and{' '}
              <span className="text-accent font-semibold">Elevate Labs</span> (Web Development), I
              bring both academic rigour and real-world product experience to every project.
            </motion.p>

            <motion.p
              variants={fadeIn('left', 0.2)}
              className="text-white/70 font-inter text-base leading-relaxed"
            >
              I am fascinated by the intersection of AI and web development — building intelligent,
              data-driven applications that are fast, accessible, and beautiful.
            </motion.p>

            {/* Key highlights */}
            <motion.ul
              variants={staggerContainer(0.06)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {[
                { label: 'B.Tech ECE', sub: 'Assam University' },
                { label: 'MERN Stack', sub: 'Full Stack' },
                { label: 'ML / AI', sub: 'TensorFlow, OpenCV' },
                { label: 'CI/CD', sub: 'GitHub Actions' },
              ].map(({ label, sub }) => (
                <motion.li
                  key={label}
                  variants={fadeIn('left', 0)}
                  className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl border border-white/5"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <div>
                    <div className="text-white font-semibold text-sm">{label}</div>
                    <div className="text-white/40 text-xs">{sub}</div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              variants={fadeIn('left', 0.3)}
              href="#contact"
              className="btn-primary inline-flex mt-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>

        {/* ── Stats Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              delay={i * 0.1}
              triggered={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

