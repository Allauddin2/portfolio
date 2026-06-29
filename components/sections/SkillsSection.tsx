// ============================================================
// components/sections/SkillsSection.tsx
// ============================================================

'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiJsonwebtokens,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiDocker,
  SiPython,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
} from 'react-icons/si'

import { VscCode } from 'react-icons/vsc'
import { TbApi, TbBrandFramerMotion } from 'react-icons/tb'
import { SKILLS } from '@/constants'
import type { Skill } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'
import { useTilt, useInView } from '@/hooks'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiGreensock, TbBrandFramerMotion,
  SiNodedotjs, SiExpress, SiMongodb, SiPrisma, TbApi, SiJsonwebtokens, SiMysql,
  SiGit, SiGithub, SiVisualstudiocode: VscCode, VscCode, SiPostman, SiVercel, SiDocker,
  SiPython, SiTensorflow, SiOpencv, SiScikitlearn,
}

const CATEGORIES = [
  { key: 'all',      label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend' },
  { key: 'tools',    label: 'Tools' },
  { key: 'ml',       label: 'ML / AI' },
] as const

type CategoryKey = typeof CATEGORIES[number]['key']

// ── Skill Card ───────────────────────────────────────────────
function SkillCard({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) {
  const { ref, transform, handleMouseMove, handleMouseLeave } = useTilt(10)
  const Icon = ICON_MAP[skill.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}30`
        }}
        onMouseLeave={(e) => {
          handleMouseLeave()
          e.currentTarget.style.boxShadow = `0 0 0px ${skill.color}00`
        }}
        className="glass-card gradient-border p-5 rounded-2xl cursor-pointer group transition-all duration-300"
        style={{
          transform,
          transition: 'transform 0.15s ease',
          boxShadow: `0 0 0px ${skill.color}00`,
        }}
      >
        {/* Icon */}
        <motion.div
          className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300"
          style={{ color: skill.color }}
          whileHover={{ rotate: 12 }}
        >
          {Icon && <Icon />}
        </motion.div>

        {/* Name */}
        <div className="font-semibold font-space-grotesk text-white text-sm mb-3">
          {skill.name}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.4 + index * 0.04, ease: 'easeOut' }}
          />
        </div>

        <div className="flex justify-between items-center mt-1">
          <span className="text-white/30 text-xs font-mono">Proficiency</span>
          <span className="text-xs font-mono" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main Section ─────────────────────────────────────────────
export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')
  const [direction, setDirection] = useState<1 | -1>(1)
  const [ref, inView] = useInView(0.1)

  const currentIdxRef = useRef<number>(0)

  const handleCategoryChange = (key: CategoryKey) => {
    if (key === activeCategory) return
    const newIdx = CATEGORIES.findIndex(c => c.key === key)
    const dir: 1 | -1 = newIdx > currentIdxRef.current ? 1 : -1
    setDirection(dir)
    currentIdxRef.current = newIdx
    setActiveCategory(key)
  }

  const filtered =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory)

  const SLIDE_DISTANCE = 80

  const variants = {
    enter: (dir: number) => ({
      x: dir * SLIDE_DISTANCE,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir * -SLIDE_DISTANCE,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.15 },
      },
    }),
  }

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary top-10 right-0 opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          eyebrow="Technical Skills"
          title="My Tech"
          highlight="Arsenal"
          subtitle="A curated set of technologies I have worked with in production, internships, and personal projects."
        />

        {/* ── Category Tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                'relative px-5 py-2 rounded-full text-sm font-semibold font-space-grotesk transition-all duration-300 z-0',
                activeCategory === cat.key
                  ? 'text-white shadow-neon-purple'
                  : 'glass-card border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              )}
            >
              {/* Active pill underline indicator */}
              {activeCategory === cat.key && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-primary -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* ── Skills Grid with directional slide ── */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeCategory}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            >
              {filtered.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}