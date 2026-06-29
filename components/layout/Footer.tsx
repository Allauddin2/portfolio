// ============================================================
// components/layout/Footer.tsx
// ============================================================

'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'
import { SOCIAL_LINKS, CONTACT_EMAIL } from '@/constants'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
}

const COLOR_MAP: Record<string, string> = {
  GitHub: 'hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]',
  LinkedIn: 'hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.5)]',
  Twitter: 'hover:text-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.5)]',
  Instagram: 'hover:text-[#E1306C] hover:shadow-[0_0_15px_rgba(225,48,108,0.5)]',
 }

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 bg-[#030712] py-12 px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-2xl font-bold gradient-text font-space-grotesk">MD.</span>
              <span className="text-2xl font-bold text-white font-space-grotesk">Allauddin</span>
            </motion.div>
            <p className="text-white/50 text-sm font-inter leading-relaxed">
              Full Stack Developer building scalable, performant, and beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-space-grotesk mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-secondary text-sm font-inter transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-space-grotesk mb-4">Get in Touch</h4>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-secondary text-sm font-inter hover:text-secondary/80 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex items-center gap-4 mt-6">
              {SOCIAL_LINKS.map((social, i) => {
                const Icon = ICON_MAP[social.icon]
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4, scale: 1.15 }}
                    className={cn(
                      'text-white/40 text-xl transition-all duration-300 rounded-full',
                      COLOR_MAP[social.platform]
                    )}
                  >
                    {Icon && <Icon />}
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-inter">
            © {new Date().getFullYear()} MD Allauddin. 
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
          >
            Back to top
            <span className="p-1.5 rounded-full border border-white/10 group-hover:border-primary group-hover:text-primary transition-colors">
              <HiArrowUp size={12} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
