// ============================================================
// components/sections/ProjectsSection.tsx
// ============================================================

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { PROJECTS } from '@/constants'
import type { Project } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'
import { backdropVariants, modalVariants, cardHover } from '@/animations/variants'
import { cn } from '@/lib/utils'

const CATEGORY_LABELS: Record<string, string> = {
  fullstack: 'Full Stack',
  ml: 'ML / AI',
  frontend: 'Frontend',
  backend: 'Backend',
}

const CATEGORY_COLORS: Record<string, string> = {
  fullstack: '#7C3AED',
  ml: '#00E5FF',
  frontend: '#FF4D8D',
  backend: '#F59E0B',
}

// ── Project Card ─────────────────────────────────────────────
function ProjectCard({ project, onClick, span }: { project: Project; onClick: () => void; span?: string }) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={cn(
        'glass-card gradient-border rounded-2xl overflow-hidden cursor-pointer group',
        span
      )}
      onClick={onClick}
    >
      {/* Image placeholder */}
      <div
        className="h-48 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${CATEGORY_COLORS[project.category]}20, ${CATEGORY_COLORS[project.category]}05)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold font-space-grotesk opacity-20 text-white select-none">
            {project.title[0]}
          </span>
        </div>
        {/* Category badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold font-mono text-white"
          style={{ background: `${CATEGORY_COLORS[project.category]}40`, border: `1px solid ${CATEGORY_COLORS[project.category]}60` }}
        >
          {CATEGORY_LABELS[project.category]}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-sm">View Details →</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold font-space-grotesk text-white mb-2 group-hover:text-secondary transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm font-inter leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs font-mono text-white/60 border border-white/10 bg-white/5"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-mono text-white/40">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors"
          >
            <FaGithub size={13} /> GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors"
            >
              <FaExternalLinkAlt size={11} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── Project Modal ─────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-2xl glass-card gradient-border rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition"
          >
            <HiX size={18} />
          </button>

          {/* Category */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold text-white mb-4"
            style={{
              background: `${CATEGORY_COLORS[project.category]}30`,
              border: `1px solid ${CATEGORY_COLORS[project.category]}50`,
            }}
          >
            {CATEGORY_LABELS[project.category]}
          </span>

          <h2 className="text-3xl font-bold font-space-grotesk text-white mb-3">{project.title}</h2>

          <p className="text-white/70 font-inter leading-relaxed mb-6">{project.longDescription}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-sm font-mono text-white/80 border border-white/10 bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 text-sm">
              <FaGithub /> View Code
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm">
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Main Section ─────────────────────────────────────────────
export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  // Bento grid spans
  const SPANS = ['', 'md:col-span-2', '', 'md:col-span-2']

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary top-1/2 right-0 opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="Real-world applications I have built — from full stack healthcare platforms to hybrid ML models."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
              span={SPANS[i] || ''}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
