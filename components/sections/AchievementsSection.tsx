// ============================================================
// components/sections/AchievementsSection.tsx
// ============================================================

'use client'

import { motion } from 'framer-motion'
// import { HiTrophy, HiBadgeCheck, HiAcademicCap } from 'react-icons/hi'
import { HiBadgeCheck, HiAcademicCap } from 'react-icons/hi'
import { FaTrophy } from 'react-icons/fa'
import { ACHIEVEMENTS } from '@/constants'
import type { Achievement } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeIn } from '@/animations/variants'

// const ICON_MAP: Record<string, React.ElementType> = {
//   HiTrophy,
//   HiBadgeCheck,
//   HiAcademicCap,
// }
const ICON_MAP: Record<string, React.ElementType> = {
  HiTrophy: FaTrophy,
  HiBadgeCheck,
  HiAcademicCap,
}

const CATEGORY_COLORS: Record<string, string> = {
  hackathon: '#FF4D8D',
  certificate: '#7C3AED',
  award: '#00E5FF',
  contribution: '#F59E0B',
}

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const Icon = ICON_MAP[achievement.icon]
  const color = CATEGORY_COLORS[achievement.category]

  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', damping: 15 }}
      className="glass-card gradient-border p-8 rounded-2xl group relative overflow-hidden"
    >
      {/* Gradient glow */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ background: color, filter: 'blur(30px)' }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        {Icon && <Icon size={28} style={{ color }} />}
      </div>

      {/* Date badge */}
      <span className="text-xs font-mono text-white/40 mb-2 block">{achievement.date}</span>

      {/* Title */}
      <h3 className="text-lg font-bold font-space-grotesk text-white mb-3 group-hover:text-secondary transition-colors">
        {achievement.title}
      </h3>

      {/* Description */}
      <p className="text-white/60 text-sm font-inter leading-relaxed">{achievement.description}</p>

      {/* Category tag */}
      <div className="mt-5">
        <span
          className="px-2.5 py-1 rounded-full text-xs font-mono capitalize font-semibold"
          style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
        >
          {achievement.category}
        </span>
      </div>
    </motion.div>
  )
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="blob w-[350px] h-[350px] bg-accent bottom-10 right-10 opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements &"
          highlight="Certifications"
          subtitle="Recognition, competitions, and certifications that mark my journey as a developer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, i) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
