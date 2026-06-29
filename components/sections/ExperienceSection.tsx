// ============================================================
// components/sections/ExperienceSection.tsx
// ============================================================

'use client'

import { motion } from 'framer-motion'
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi'
import { EXPERIENCES } from '@/constants'
import type { Experience } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'
import { timelineCard } from '@/animations/variants'
import { cn } from '@/lib/utils'

const TYPE_COLORS: Record<string, string> = {
  internship: '#00E5FF',
  fulltime: '#7C3AED',
  parttime: '#FF4D8D',
  freelance: '#F59E0B',
}

const TYPE_LABELS: Record<string, string> = {
  internship: 'Internship',
  fulltime: 'Full-Time',
  parttime: 'Part-Time',
  freelance: 'Freelance',
}

function TimelineCard({ exp, index }: { exp: Experience; index: number }) {
  const isLeft = index % 2 === 0
  const color = TYPE_COLORS[exp.type]

  return (
    <div className="relative flex items-start gap-8 md:gap-0">
      {/* Card — alternates left/right on md+ */}
      <motion.div
        variants={timelineCard(isLeft ? 'left' : 'right')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={cn(
          'w-full md:w-[calc(50%-32px)] glass-card gradient-border p-6 rounded-2xl group hover:shadow-neon-purple transition-shadow duration-300',
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold font-space-grotesk text-white group-hover:text-secondary transition-colors">
              {exp.role}
            </h3>
            <div className="flex items-center gap-1.5 mt-1 text-sm font-semibold" style={{ color }}>
              <HiBriefcase size={14} />
              {exp.company}
            </div>
          </div>
          <span
            className="shrink-0 px-2.5 py-1 rounded-full text-xs font-mono font-semibold text-white"
            style={{ background: `${color}20`, border: `1px solid ${color}40` }}
          >
            {TYPE_LABELS[exp.type]}
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-xs text-white/50 font-inter mb-4">
          <span className="flex items-center gap-1">
            <HiCalendar size={12} /> {exp.duration}
          </span>
          <span className="flex items-center gap-1">
            <HiLocationMarker size={12} /> {exp.location}
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-5">
          {exp.description.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-white/70 font-inter leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
              {item}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs font-mono text-white/50 border border-white/10 bg-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Centre dot (desktop) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full border-2 items-center justify-center"
        style={{ borderColor: color, background: '#050816' }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
      </motion.div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-secondary top-0 left-0 opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Work History"
          title="Professional"
          highlight="Experience"
          subtitle="Real-world exposure through internships at research institutions and product companies."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-line opacity-20" />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, i) => (
              <TimelineCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
