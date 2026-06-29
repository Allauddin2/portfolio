// ============================================================
// components/ui/SectionHeading.tsx
// ============================================================

'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Props {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
}: Props) {
  const alignClass =
    align === 'left' ? 'items-start text-left' : align === 'right' ? 'items-end text-right' : 'items-center text-center'

  return (
    <div className={cn('flex flex-col gap-3 mb-16', alignClass, className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-secondary text-sm font-semibold font-mono uppercase tracking-widest"
        >
          <span className="w-6 h-px bg-secondary/60" />
          {eyebrow}
          <span className="w-6 h-px bg-secondary/60" />
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="section-heading"
      >
        {highlight ? (
          <>
            {title}{' '}
            <span className="gradient-text">{highlight}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subheading max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
