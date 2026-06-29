// ============================================================
// components/sections/ContactSection.tsx
// ============================================================

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeIn } from '@/animations/variants'
import { isValidEmail } from '@/lib/utils'
import type { ContactForm } from '@/types'

const INITIAL: ContactForm = { name: '', email: '', subject: '', message: '' }

type Status = 'idle' | 'loading' | 'success' | 'error'

const INFO = [
  { icon: HiMail, label: 'Email', value: 'mallauddin6542@gmail.com', href: 'mailto:mallauddin6542@gmail.com' },
  { icon: HiPhone, label: 'Phone', value: '+91 6900344541', href: 'tel:+916900344541' },
  { icon: HiLocationMarker, label: 'Location', value: 'Assam, India', href: '#' },
]

const SOCIALS = [
  { Icon: FaGithub, href: 'https://github.com/Allauddin2', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/md-allauddin-code/', label: 'LinkedIn' },
  { Icon: FaTwitter, href: '', label: 'Twitter' },
]

// ── Field ─────────────────────────────────────────────────────
function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-mono uppercase tracking-widest text-white/50">{label}</label>
      {children}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent text-xs font-inter"
        >
          {error}
        </motion.span>
      )}
    </div>
  )
}

const INPUT_CLASS =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm placeholder-white/25 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all duration-200'

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(INITIAL)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): boolean => {
    const errs: Partial<ContactForm> = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!isValidEmail(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.subject.trim()) errs.subject = 'Subject is required.'
    if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-primary top-10 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Info ─────────────────────────────────── */}
          <motion.div
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-white/70 font-inter leading-relaxed">
              I am currently open to new opportunities — whether it's a full-time role, freelance
              project, or an interesting collaboration. Let's connect and build something great.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 glass-card border border-white/5 rounded-xl p-4 group hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center text-secondary group-hover:bg-primary/25 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-mono uppercase tracking-wider">{label}</div>
                    <div className="text-white/80 font-inter text-sm font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-4">Follow me</p>
              <div className="flex gap-4">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-primary transition-all"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ────────────────────────────────── */}
          <motion.div
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card gradient-border rounded-2xl p-8 space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your Name" error={errors.name}>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="MD Allauddin"
                    className={INPUT_CLASS}
                    autoComplete="name"
                  />
                </Field>

                <Field label="Email Address" error={errors.email}>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className={INPUT_CLASS}
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Subject" error={errors.subject}>
                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className={INPUT_CLASS}
                />
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  rows={5}
                  className={`${INPUT_CLASS} resize-none`}
                />
              </Field>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' && (
                  <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                )}
                {status === 'idle' && 'Send Message →'}
                {status === 'loading' && 'Sending…'}
                {status === 'success' && (
                  <>
                    <HiCheckCircle size={18} className="text-green-400" />
                    Message Sent!
                  </>
                )}
                {status === 'error' && 'Failed — Try Again'}
              </motion.button>

              {/* Success message */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-sm text-green-400 font-inter"
                  >
                    Thank you! I will get back to you within 24 hours.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-sm text-accent font-inter"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
