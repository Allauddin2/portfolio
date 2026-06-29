// // ============================================================
// // components/sections/HeroSection.tsx
// // ============================================================

// 'use client'

// import { useEffect, useRef } from 'react'
// import { motion } from 'framer-motion'
// import { HiArrowDown, HiDownload } from 'react-icons/hi'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import gsap from 'gsap'
// import { useParallax } from '@/hooks'
// import { HERO_ROLES } from '@/constants'
// import { fadeIn, staggerContainer } from '@/animations/variants'

// export default function HeroSection() {
//   const parallax = useParallax(0.02)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const roleIndex = useRef(0)
//   const roleRef = useRef<HTMLSpanElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)

//   // ── GSAP entrance ─────────────────────────────────────────
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0.3 })

//       tl.fromTo(
//         '.hero-greeting',
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
//       )
//         .fromTo(
//           '.hero-name span',
//           { y: 60, opacity: 0, skewX: -6 },
//           { y: 0, opacity: 1, skewX: 0, duration: 0.8, stagger: 0.08, ease: 'power4.out' },
//           '-=0.3'
//         )
//         .fromTo(
//           '.hero-role-line',
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
//           '-=0.4'
//         )
//         .fromTo(
//           '.hero-description',
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
//           '-=0.3'
//         )
//         .fromTo(
//           '.hero-cta',
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
//           '-=0.2'
//         )
//         .fromTo(
//           '.hero-social',
//           { x: -20, opacity: 0 },
//           { x: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
//           '-=0.3'
//         )
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   // ── Typewriter for role ───────────────────────────────────
//   useEffect(() => {
//     if (!roleRef.current) return
//     let charIdx = 0
//     let deleting = false
//     let timer: ReturnType<typeof setTimeout>

//     function type() {
//       if (!roleRef.current) return
//       const current = HERO_ROLES[roleIndex.current]

//       if (!deleting) {
//         roleRef.current.textContent = current.slice(0, ++charIdx)
//         if (charIdx === current.length) {
//           deleting = true
//           timer = setTimeout(type, 1600)
//           return
//         }
//       } else {
//         roleRef.current.textContent = current.slice(0, --charIdx)
//         if (charIdx === 0) {
//           deleting = false
//           roleIndex.current = (roleIndex.current + 1) % HERO_ROLES.length
//         }
//       }
//       timer = setTimeout(type, deleting ? 50 : 90)
//     }

//     timer = setTimeout(type, 1200)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <section
//       id="home"
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
//     >
//       {/* ── Ambient gradient blobs ─────────────────────────── */}
//       <motion.div
//         className="blob w-[600px] h-[600px] bg-primary top-[-15%] left-[-10%]"
//         animate={parallax}
//         style={{ x: parallax.x * 1.5, y: parallax.y * 1.5 }}
//       />
//       <motion.div
//         className="blob w-[500px] h-[500px] bg-secondary bottom-[-10%] right-[-5%] opacity-10"
//         style={{ x: parallax.x * -1, y: parallax.y * -1 }}
//       />
//       <motion.div
//         className="blob w-[300px] h-[300px] bg-accent top-[40%] right-[20%] opacity-8"
//         style={{ x: parallax.x * 0.5, y: parallax.y * 2 }}
//       />

//       {/* ── Grid overlay ──────────────────────────────────── */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
//           backgroundSize: '60px 60px',
//         }}
//       />

//       {/* ── Main content ──────────────────────────────────── */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div>
//           {/* Greeting */}
//           <div className="hero-greeting inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 text-secondary text-sm font-mono mb-6">
//             <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
//             Available for new opportunities
//           </div>

//           {/* Name */}
//           <h1 ref={titleRef} className="hero-name text-5xl sm:text-6xl lg:text-7xl font-bold font-space-grotesk leading-[1.05] mb-4 overflow-hidden">
//             <div>
//               {'MD Allauddin'.split('').map((char, i) => (
//                 <span key={i} className="inline-block" style={{ opacity: 0 }}>
//                   {char === ' ' ? '\u00A0' : char}
//                 </span>
//               ))}
//             </div>
//           </h1>

//           {/* Animated Role */}
//           <div className="hero-role-line flex items-center gap-3 mb-6" style={{ opacity: 0 }}>
//             <span className="text-white/40 font-inter text-xl">I am a</span>
//             <span className="text-2xl font-semibold font-space-grotesk gradient-text min-w-[220px]">
//               <span ref={roleRef} />
//               <span className="animate-pulse ml-0.5 text-secondary">|</span>
//             </span>
//           </div>

//           {/* Description */}
//           <p className="hero-description text-white/60 font-inter text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ opacity: 0 }}>
//             Full Stack Developer specialising in React, Next.js, Node.js and MongoDB. I build
//             scalable, responsive, and high-performance web applications with clean architecture and
//             modern tooling.
//           </p>

//           {/* CTAs */}
//           <div className="flex flex-wrap gap-4 mb-10">
//             <motion.a
//               href="#contact"
//               className="hero-cta btn-primary"
//               style={{ opacity: 0 }}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               Hire Me
//             </motion.a>

//             <motion.a
//               href="/resume.pdf"
//               download="MD_Allauddin_Resume.pdf"
//               className="hero-cta btn-secondary flex items-center gap-2"
//               style={{ opacity: 0 }}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <HiDownload size={16} />
//               Download Resume
//             </motion.a>
//           </div>

//           {/* Social */}
//           <div className="flex items-center gap-5">
//             <span className="text-white/30 text-xs font-mono uppercase tracking-widest">
//               Find me on
//             </span>
//             {[
//               { href: 'https://github.com/Allauddin2', Icon: FaGithub, label: 'GitHub' },
//               { href: 'https://linkedin.com/in/mdallauddin', Icon: FaLinkedin, label: 'LinkedIn' },
//             ].map(({ href, Icon, label }) => (
//               <motion.a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="hero-social text-white/40 text-xl hover:text-white transition-colors"
//                 style={{ opacity: 0 }}
//                 whileHover={{ y: -3, scale: 1.2 }}
//               >
//                 <Icon />
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* ── Profile visual (right) ──────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className="hidden lg:flex justify-center items-center relative"
//         >
//           {/* Outer ring */}
//           <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/20 animate-spin-slow" />
//           <div className="absolute w-[340px] h-[340px] rounded-full border border-secondary/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

//           {/* Avatar placeholder */}
//           <motion.div
//             className="relative w-72 h-72 rounded-full overflow-hidden gradient-border"
//             animate={{ y: [-8, 8, -8] }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//           >
//             <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
//               <span className="text-7xl font-bold font-space-grotesk gradient-text select-none">MA</span>
//             </div>
//           </motion.div>

//           {/* Floating badges */}
//           {[
//             { label: 'React', color: '#61DAFB', top: '10%', left: '-5%' },
//             { label: 'Node.js', color: '#339933', top: '20%', right: '-5%' },
//             { label: 'MongoDB', color: '#47A248', bottom: '20%', left: '-5%' },
//             { label: 'Next.js', color: '#ffffff', bottom: '10%', right: '-5%' },
//           ].map(({ label, color, ...pos }) => (
//             <motion.div
//               key={label}
//               className="absolute glass-card px-3 py-1.5 text-xs font-semibold font-mono border border-white/10"
//               style={{ ...pos, color }}
//               animate={{ y: [0, -6, 0] }}
//               transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
//             >
//               {label}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* ── Scroll indicator ──────────────────────────────── */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2 }}
//       >
//         <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <HiArrowDown size={16} />
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }



// 'use client'

// import { useEffect, useRef, useCallback } from 'react'
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
// import { HiArrowDown, HiDownload } from 'react-icons/hi'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import gsap from 'gsap'
// import { useParallax } from '@/hooks'
// import { HERO_ROLES } from '@/constants'

// // ── Code lines for the laptop screen ────────────────────────
// const CODE = [
//   { n: 1,  tokens: [{ t: '// building the future', c: '#4b5563' }] },
//   { n: 2,  tokens: [{ t: 'import', c: '#a78bfa' }, { t: ' { ', c: '#e2e8f0' }, { t: 'Next', c: '#60a5fa' }, { t: ', ', c: '#e2e8f0' }, { t: 'AI', c: '#60a5fa' }, { t: ' }', c: '#e2e8f0' }, { t: " from ", c: '#a78bfa' }, { t: "'stack'", c: '#34d399' }] },
//   { n: 3,  tokens: [] },
//   { n: 4,  tokens: [{ t: 'const ', c: '#a78bfa' }, { t: 'Developer', c: '#60a5fa' }, { t: ' = () => {', c: '#e2e8f0' }] },
//   { n: 5,  tokens: [{ t: '  const ', c: '#a78bfa' }, { t: '[passion] ', c: '#e2e8f0' }, { t: '= ', c: '#f472b6' }, { t: 'useState', c: '#60a5fa' }, { t: '(', c: '#e2e8f0' }, { t: "'infinite'", c: '#34d399' }, { t: ')', c: '#e2e8f0' }] },
//   { n: 6,  tokens: [] },
//   { n: 7,  tokens: [{ t: '  ', c: '#e2e8f0' }, { t: 'useEffect', c: '#60a5fa' }, { t: '(() => {', c: '#e2e8f0' }] },
//   { n: 8,  tokens: [{ t: '    ', c: '#e2e8f0' }, { t: 'build', c: '#60a5fa' }, { t: '(', c: '#e2e8f0' }, { t: 'greatProducts', c: '#fbbf24' }, { t: ')', c: '#e2e8f0' }] },
//   { n: 9,  tokens: [{ t: '  }, [])', c: '#e2e8f0' }] },
//   { n: 10, tokens: [] },
//   { n: 11, tokens: [{ t: '  return ', c: '#a78bfa' }, { t: '<', c: '#f472b6' }, { t: 'Portfolio', c: '#60a5fa' }, { t: ' />', c: '#f472b6' }] },
//   { n: 12, tokens: [{ t: '}', c: '#e2e8f0' }] },
//   { n: 13, tokens: [] },
//   { n: 14, tokens: [{ t: 'export default ', c: '#a78bfa' }, { t: 'Developer', c: '#60a5fa' }] },
// ]

// const BADGES = [
//   { label: '⚛ React',     color: '#60a5fa', bg: 'rgba(30,58,95,0.9)',   border: 'rgba(37,99,235,0.4)',   top: '8%',   left: '-60px' },
//   { label: '⬡ Node.js',   color: '#34d399', bg: 'rgba(6,46,30,0.9)',    border: 'rgba(16,185,129,0.4)',  top: '30%',  right: '-55px' },
//   { label: '🧠 ML / AI',  color: '#a78bfa', bg: 'rgba(45,27,78,0.9)',   border: 'rgba(124,58,237,0.4)',  bottom: '28%', left: '-65px' },
//   { label: '▲ Next.js',   color: '#e2e8f0', bg: 'rgba(20,20,40,0.9)',   border: 'rgba(255,255,255,0.15)', bottom: '8%',  right: '-52px' },
// ]

// // ── Laptop 3D component ──────────────────────────────────────
// function CursorLaptop3D() {
//   const wrapRef = useRef<HTMLDivElement>(null)

//   // Raw mouse values
//   const rawX = useMotionValue(0)
//   const rawY = useMotionValue(0)

//   // Smooth spring — feels physical
//   const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [18, -18]), { stiffness: 120, damping: 22 })
//   const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-22, 22]), { stiffness: 120, damping: 22 })
//   const glowX   = useTransform(rawX, [-0.5, 0.5], ['30%', '70%'])
//   const glowY   = useTransform(rawY, [-0.5, 0.5], ['30%', '70%'])

//   // Float animation reference
//   const floatRef = useRef<HTMLDivElement>(null)

//   const onMouseMove = useCallback((e: MouseEvent) => {
//     if (!wrapRef.current) return
//     const rect = wrapRef.current.getBoundingClientRect()
//     rawX.set((e.clientX - rect.left) / rect.width - 0.5)
//     rawY.set((e.clientY - rect.top)  / rect.height - 0.5)
//   }, [rawX, rawY])

//   const onMouseLeave = useCallback(() => {
//     rawX.set(0)
//     rawY.set(0)
//   }, [rawX, rawY])

//   useEffect(() => {
//     const el = wrapRef.current
//     if (!el) return
//     el.addEventListener('mousemove', onMouseMove)
//     el.addEventListener('mouseleave', onMouseLeave)
//     return () => {
//       el.removeEventListener('mousemove', onMouseMove)
//       el.removeEventListener('mouseleave', onMouseLeave)
//     }
//   }, [onMouseMove, onMouseLeave])

//   return (
//     <div
//       ref={wrapRef}
//       className="relative flex items-center justify-center w-full h-full cursor-none"
//       style={{ minHeight: '480px' }}
//     >
//       {/* Ambient glow that tracks cursor */}
//       <motion.div
//         className="absolute pointer-events-none"
//         style={{
//           width: '500px', height: '500px',
//           borderRadius: '50%',
//           background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 65%)',
//           top: '50%', left: '50%',
//           translateX: '-50%', translateY: '-50%',
//         }}
//       />

//       {/* 3D tilt wrapper */}
//       <motion.div
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: 'preserve-3d',
//           perspective: '1000px',
//         }}
//         className="relative"
//       >
//         {/* Float wrapper */}
//         <motion.div
//           animate={{ y: [0, -14, 0] }}
//           transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
//           style={{ transformStyle: 'preserve-3d' }}
//           className="relative"
//         >
//           {/* Shadow on z-axis */}
//           <motion.div
//             className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full"
//             style={{ width: '320px', height: '20px', background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 75%)' }}
//             animate={{ scaleX: [1, 0.85, 1], opacity: [0.5, 0.3, 0.5] }}
//             transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
//           />

//           {/* Floating tech badges */}
//           {BADGES.map(({ label, color, bg, border, ...pos }) => (
//             <motion.span
//               key={label}
//               className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-semibold font-mono whitespace-nowrap"
//               style={{ color, background: bg, border: `1px solid ${border}`, ...pos }}
//               animate={{ y: [0, -9, 0] }}
//               transition={{ duration: 3 + Math.random() * 1.5, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
//             >
//               {label}
//             </motion.span>
//           ))}

//           {/* ── Laptop screen ── */}
//           <motion.div
//             className="relative overflow-hidden rounded-t-2xl"
//             style={{
//               width: '360px',
//               height: '225px',
//               background: '#0a0a1f',
//               border: '2.5px solid #3a3a5c',
//               boxShadow: '0 0 60px rgba(124,58,237,0.2), inset 0 0 40px rgba(5,5,20,0.9)',
//               transformStyle: 'preserve-3d',
//             }}
//           >
//             {/* Screen glow bg */}
//             <motion.div
//               className="absolute inset-0 pointer-events-none"
//               style={{
//                 background: `radial-gradient(ellipse at var(--gx, 50%) var(--gy, 40%), rgba(124,58,237,0.08) 0%, transparent 70%)`,
//               }}
//             />

//             {/* Webcam */}
//             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0a0a1a] border border-[#2a2a4a] z-10 flex items-center justify-center">
//               <motion.div
//                 className="w-1 h-1 rounded-full bg-blue-600"
//                 animate={{ opacity: [0.5, 1, 0.5] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//             </div>

//             {/* Tab bar */}
//             <div className="flex items-center gap-1.5 px-3 pt-5 pb-1.5 border-b border-white/5">
//               <div className="w-2 h-2 rounded-full bg-red-500/70" />
//               <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
//               <div className="w-2 h-2 rounded-full bg-green-500/70" />
//               <div className="ml-3 flex gap-1">
//                 {['portfolio.tsx', 'styles.css'].map((tab, i) => (
//                   <div
//                     key={tab}
//                     className="px-2 py-0.5 rounded-t text-[7px] font-mono"
//                     style={{
//                       background: i === 0 ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
//                       color: i === 0 ? '#a78bfa' : '#4b5563',
//                       border: i === 0 ? '0.5px solid rgba(124,58,237,0.3)' : '0.5px solid transparent',
//                     }}
//                   >
//                     {tab}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Code area */}
//             <div className="px-3 py-2 overflow-hidden" style={{ height: '168px' }}>
//               {CODE.map((line, idx) => (
//                 <div key={line.n} className="flex gap-2" style={{ lineHeight: '1.5' }}>
//                   <span style={{ fontSize: '7px', color: '#2d2d5a', minWidth: '14px', textAlign: 'right', flexShrink: 0, paddingTop: '1px', fontFamily: 'monospace' }}>
//                     {line.n}
//                   </span>
//                   <span style={{ fontSize: '8.5px', fontFamily: "'Courier New', monospace", whiteSpace: 'pre' }}>
//                     {line.tokens.map((token, ti) => (
//                       <span key={ti} style={{ color: token.c }}>{token.t}</span>
//                     ))}
//                     {/* Blinking cursor on last real line */}
//                     {idx === CODE.length - 1 && (
//                       <motion.span
//                         className="inline-block align-text-bottom ml-px"
//                         style={{ width: '2px', height: '9px', background: '#a78bfa' }}
//                         animate={{ opacity: [1, 0, 1] }}
//                         transition={{ duration: 0.85, repeat: Infinity }}
//                       />
//                     )}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Status bar */}
//             <div
//               className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-3 py-1"
//               style={{ background: 'rgba(8,8,28,0.95)', borderTop: '0.5px solid #1a1a3a' }}
//             >
//               <span style={{ fontSize: '7px', color: '#a78bfa', fontFamily: 'monospace' }}>⎇ main</span>
//               <span style={{ fontSize: '7px', color: '#4ade80', fontFamily: 'monospace' }}>✓ 0 errors</span>
//               <span style={{ fontSize: '7px', color: '#4b5563', fontFamily: 'monospace' }}>TypeScript JSX</span>
//             </div>

//             {/* Scanlines */}
//             <div
//               className="absolute inset-0 pointer-events-none rounded-t-2xl"
//               style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.03) 3px,rgba(0,0,0,0.03) 4px)' }}
//             />
//             {/* Screen reflection */}
//             <div
//               className="absolute inset-0 pointer-events-none rounded-t-2xl"
//               style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.03) 0%,transparent 55%)' }}
//             />
//           </motion.div>

//           {/* ── Hinge ── */}
//           <div style={{ width: '360px', height: '4px', background: 'linear-gradient(180deg,#222 0%,#111 100%)', border: '2px solid #2a2a2a', borderTop: 'none', borderBottom: 'none' }} />

//           {/* ── Base ── */}
//           <div
//             style={{
//               width: '380px',
//               marginLeft: '-10px',
//               background: 'linear-gradient(160deg, #252525 0%, #181818 60%, #111 100%)',
//               border: '2px solid #333',
//               borderTop: 'none',
//               borderRadius: '0 0 12px 12px',
//               padding: '8px 16px 12px',
//               boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
//             }}
//           >
//             {/* Keyboard rows */}
//             {[20, 19, 18, 17].map((count, row) => (
//               <div key={row} className="flex gap-[2.5px] justify-center mb-[3px]">
//                 {Array.from({ length: count }).map((_, i) => (
//                   <motion.div
//                     key={i}
//                     style={{
//                       width: '12px', height: '8px',
//                       background: '#1e1e1e',
//                       borderRadius: '2px',
//                       border: '0.5px solid #2a2a2a',
//                       boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
//                     }}
//                     whileHover={{ background: '#2a2a2a', scale: 0.95 }}
//                   />
//                 ))}
//               </div>
//             ))}

//             {/* Spacebar row */}
//             <div className="flex gap-[3px] justify-center mb-3">
//               {[14, 80, 14].map((w, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     width: `${w}px`, height: '8px',
//                     background: '#1e1e1e',
//                     borderRadius: '2px',
//                     border: '0.5px solid #2a2a2a',
//                     boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Trackpad */}
//             <div className="flex justify-center">
//               <div
//                 style={{
//                   width: '100px', height: '14px',
//                   background: '#191919',
//                   borderRadius: '6px',
//                   border: '0.5px solid #2d2d2d',
//                 }}
//               />
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Hint text */}
//       <motion.p
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/20 text-xs font-mono whitespace-nowrap"
//         animate={{ opacity: [0.3, 0.6, 0.3] }}
//         transition={{ duration: 3, repeat: Infinity }}
//       >
//         move cursor to interact
//       </motion.p>
//     </div>
//   )
// }

// // ── Hero Section ─────────────────────────────────────────────
// export default function HeroSection() {
//   const parallax = useParallax(0.02)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const roleIndex = useRef(0)
//   const roleRef = useRef<HTMLSpanElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)

//   // ── GSAP entrance ─────────────────────────────────────────
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0.3 })
//       tl.fromTo('.hero-greeting', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
//         .fromTo('.hero-name span', { y: 60, opacity: 0, skewX: -6 }, { y: 0, opacity: 1, skewX: 0, duration: 0.8, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
//         .fromTo('.hero-role-line', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
//         .fromTo('.hero-description', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3')
//         .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.2')
//         .fromTo('.hero-social', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, '-=0.3')
//     }, containerRef)
//     return () => ctx.revert()
//   }, [])

//   // ── Typewriter ────────────────────────────────────────────
//   useEffect(() => {
//     if (!roleRef.current) return
//     let charIdx = 0
//     let deleting = false
//     let timer: ReturnType<typeof setTimeout>

//     function type() {
//       if (!roleRef.current) return
//       const current = HERO_ROLES[roleIndex.current]
//       if (!deleting) {
//         roleRef.current.textContent = current.slice(0, ++charIdx)
//         if (charIdx === current.length) {
//           deleting = true
//           timer = setTimeout(type, 1600)
//           return
//         }
//       } else {
//         roleRef.current.textContent = current.slice(0, --charIdx)
//         if (charIdx === 0) {
//           deleting = false
//           roleIndex.current = (roleIndex.current + 1) % HERO_ROLES.length
//         }
//       }
//       timer = setTimeout(type, deleting ? 50 : 90)
//     }

//     timer = setTimeout(type, 1200)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <section
//       id="home"
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
//     >
//       {/* Ambient blobs */}
//       <motion.div
//         className="blob w-[600px] h-[600px] bg-primary top-[-15%] left-[-10%]"
//         style={{ x: parallax.x * 1.5, y: parallax.y * 1.5 }}
//       />
//       <motion.div
//         className="blob w-[500px] h-[500px] bg-secondary bottom-[-10%] right-[-5%] opacity-10"
//         style={{ x: parallax.x * -1, y: parallax.y * -1 }}
//       />
//       <motion.div
//         className="blob w-[300px] h-[300px] bg-accent top-[40%] right-[20%] opacity-8"
//         style={{ x: parallax.x * 0.5, y: parallax.y * 2 }}
//       />

//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
//           backgroundSize: '60px 60px',
//         }}
//       />

//       {/* Main content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* ── Left: Text ─────────────────────────────────── */}
//         <div>
//           {/* Greeting */}
//           <div className="hero-greeting inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 text-secondary text-sm font-mono mb-6">
//             <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
//             Available for new opportunities
//           </div>

//           {/* Name */}
//           <h1
//             ref={titleRef}
//             className="hero-name text-5xl sm:text-6xl lg:text-7xl font-bold font-space-grotesk leading-[1.05] mb-4 overflow-hidden"
//           >
//             <div>
//               {'MD Allauddin'.split('').map((char, i) => (
//                 <span key={i} className="inline-block" style={{ opacity: 0 }}>
//                   {char === ' ' ? '\u00A0' : char}
//                 </span>
//               ))}
//             </div>
//           </h1>

//           {/* Animated role */}
//           <div className="hero-role-line flex items-center gap-3 mb-6" style={{ opacity: 0 }}>
//             <span className="text-white/40 font-inter text-xl">I am a</span>
//             <span className="text-2xl font-semibold font-space-grotesk gradient-text min-w-[220px]">
//               <span ref={roleRef} />
//               <span className="animate-pulse ml-0.5 text-secondary">|</span>
//             </span>
//           </div>

//           {/* Description */}
//           <p
//             className="hero-description text-white/60 font-inter text-base md:text-lg leading-relaxed mb-8 max-w-xl"
//             style={{ opacity: 0 }}
//           >
//             Full Stack Developer specialising in React, Next.js, Node.js and MongoDB. I build
//             scalable, responsive, and high-performance web applications with clean architecture
//             and modern tooling.
//           </p>

//           {/* CTAs */}
//           <div className="flex flex-wrap gap-4 mb-10">
//             <motion.a
//               href="#contact"
//               className="hero-cta btn-primary"
//               style={{ opacity: 0 }}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               Hire Me
//             </motion.a>
//             <motion.a
//               href="/resume.pdf"
//               download="MD_Allauddin_Resume.pdf"
//               className="hero-cta btn-secondary flex items-center gap-2"
//               style={{ opacity: 0 }}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <HiDownload size={16} />
//               Download Resume
//             </motion.a>
//           </div>

//           {/* Socials */}
//           <div className="flex items-center gap-5">
//             <span className="text-white/30 text-xs font-mono uppercase tracking-widest">
//               Find me on
//             </span>
//             {[
//               { href: 'https://github.com/Allauddin2', Icon: FaGithub, label: 'GitHub' },
//               { href: 'https://linkedin.com/in/mdallauddin', Icon: FaLinkedin, label: 'LinkedIn' },
//             ].map(({ href, Icon, label }) => (
//               <motion.a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="hero-social text-white/40 text-xl hover:text-white transition-colors"
//                 style={{ opacity: 0 }}
//                 whileHover={{ y: -3, scale: 1.2 }}
//               >
//                 <Icon />
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* ── Right: 3D Cursor Laptop ─────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 30 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className="hidden lg:flex justify-center items-center relative"
//         >
//           <CursorLaptop3D />
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2 }}
//       >
//         <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
//         <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//           <HiArrowDown size={16} />
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import gsap from 'gsap'
import { useParallax } from '@/hooks'
import { HERO_ROLES } from '@/constants'

// ── Code lines for the monitor screen ───────────────────────
const CODE = [
  { n: 1,  tokens: [{ t: '// building the future', c: '#4b5563' }] },
  { n: 2,  tokens: [{ t: 'import', c: '#a78bfa' }, { t: ' { ', c: '#e2e8f0' }, { t: 'Next', c: '#60a5fa' }, { t: ', ', c: '#e2e8f0' }, { t: 'AI', c: '#60a5fa' }, { t: ' }', c: '#e2e8f0' }, { t: ' from ', c: '#a78bfa' }, { t: "'stack'", c: '#34d399' }] },
  { n: 3,  tokens: [] },
  { n: 4,  tokens: [{ t: 'const ', c: '#a78bfa' }, { t: 'Developer', c: '#60a5fa' }, { t: ' = () => {', c: '#e2e8f0' }] },
  { n: 5,  tokens: [{ t: '  const ', c: '#a78bfa' }, { t: '[passion] ', c: '#e2e8f0' }, { t: '= ', c: '#f472b6' }, { t: 'useState', c: '#60a5fa' }, { t: '(', c: '#e2e8f0' }, { t: "'infinite'", c: '#34d399' }, { t: ')', c: '#e2e8f0' }] },
  { n: 6,  tokens: [] },
  { n: 7,  tokens: [{ t: '  ', c: '#e2e8f0' }, { t: 'useEffect', c: '#60a5fa' }, { t: '(() => {', c: '#e2e8f0' }] },
  { n: 8,  tokens: [{ t: '    ', c: '#e2e8f0' }, { t: 'build', c: '#60a5fa' }, { t: '(', c: '#e2e8f0' }, { t: 'greatProducts', c: '#fbbf24' }, { t: ')', c: '#e2e8f0' }] },
  { n: 9,  tokens: [{ t: '  }, [])', c: '#e2e8f0' }] },
  { n: 10, tokens: [] },
  { n: 11, tokens: [{ t: '  return ', c: '#a78bfa' }, { t: '<', c: '#f472b6' }, { t: 'Portfolio', c: '#60a5fa' }, { t: ' />', c: '#f472b6' }] },
  { n: 12, tokens: [{ t: '}', c: '#e2e8f0' }] },
  { n: 13, tokens: [] },
  { n: 14, tokens: [{ t: 'export default ', c: '#a78bfa' }, { t: 'Developer', c: '#60a5fa' }] },
]

// Full code as a flat string for live typing
const CODE_FLAT = CODE.map(line =>
  line.tokens.map(t => t.t).join('') + '\n'
).join('')

const BADGES = [
  { label: '⚛ React',    color: '#60a5fa', bg: 'rgba(30,58,95,0.9)',    border: 'rgba(37,99,235,0.4)',    top: '4%',   left: '-68px' },
  { label: '⬡ Node.js',  color: '#34d399', bg: 'rgba(6,46,30,0.9)',     border: 'rgba(16,185,129,0.4)',   top: '28%',  right: '-60px' },
  { label: '🧠 ML / AI', color: '#a78bfa', bg: 'rgba(45,27,78,0.9)',    border: 'rgba(124,58,237,0.4)',   bottom: '30%', left: '-72px' },
  { label: '▲ Next.js',  color: '#e2e8f0', bg: 'rgba(20,20,40,0.9)',    border: 'rgba(255,255,255,0.15)', bottom: '10%', right: '-58px' },
]

// ── Keyboard row definitions ─────────────────────────────────
const KB_ROWS: { label: string; w: number }[][] = [
  // Fn row
  [
    { label: 'Esc', w: 14 }, { label: 'F1', w: 12 }, { label: 'F2', w: 12 }, { label: 'F3', w: 12 },
    { label: 'F4', w: 12 }, { label: 'F5', w: 12 }, { label: 'F6', w: 12 }, { label: 'F7', w: 12 },
    { label: 'F8', w: 12 }, { label: 'F9', w: 12 }, { label: 'F10', w: 12 }, { label: 'F11', w: 12 }, { label: 'F12', w: 12 },
  ],
  // Number row
  ['`','1','2','3','4','5','6','7','8','9','0','-','='].map(l => ({ label: l, w: 14 }))
    .concat([{ label: 'Bks', w: 24 }]),
  // QWERTY row
  [{ label: 'Tab', w: 20 }].concat('QWERTYUIOP[]\\'.split('').map(l => ({ label: l, w: 14 }))),
  // ASDF row
  [{ label: 'Caps', w: 22 }].concat("ASDFGHJKL;'".split('').map(l => ({ label: l, w: 14 })))
    .concat([{ label: 'Ent', w: 24 }]),
  // ZXCV row
  [{ label: 'Shft', w: 26 }].concat('ZXCVBNM,./'.split('').map(l => ({ label: l, w: 14 })))
    .concat([{ label: 'Shft', w: 26 }]),
  // Spacebar row
  [
    { label: 'Ctrl', w: 20 }, { label: 'Alt', w: 20 }, { label: '', w: 120 },
    { label: 'Alt', w: 20 }, { label: 'Ctrl', w: 20 },
    { label: '◄', w: 14 }, { label: '▼', w: 14 }, { label: '►', w: 14 },
  ],
]

const ROW_INDENT = [0, 0, 4, 8, 16, 0]

// ── Single keyboard key ─────────────────────────────────────
function Key({
  label, width, isPressed,
}: { label: string; width: number; isPressed: boolean }) {
  return (
    <motion.div
      style={{
        width: `${width}px`,
        height: '12px',
        background: '#1e1e1e',
        borderRadius: '3px',
        border: '0.5px solid #2a2a2a',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'default',
        boxShadow: isPressed
          ? 'inset 0 1px 0 rgba(255,255,255,0.1), 0 0px 0 #111'
          : 'inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 0 #111',
      }}
      animate={{
        y: isPressed ? 1.5 : 0,
        background: isPressed ? '#2c2c2c' : '#1e1e1e',
      }}
      transition={{ duration: 0.08 }}
      whileHover={{ background: '#2a2a2a', y: 1, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 0 #111' }}
    >
      {label && (
        <span style={{
          fontSize: label.length > 2 ? '5px' : '6px',
          color: ['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','Tab','Caps','Shft','Ent','Bks','Ctrl','Alt'].includes(label)
            ? '#4b5563' : '#555',
          fontFamily: 'monospace',
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          {label}
        </span>
      )}
    </motion.div>
  )
}

// ── Desktop PC 3D Component ──────────────────────────────────
function CursorPC3D() {
  const wrapRef = useRef<HTMLDivElement>(null)

  // Tilt
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [18, -18]), { stiffness: 120, damping: 22 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-22, 22]), { stiffness: 120, damping: 22 })

  // Live typing state
  const typedRef = useRef<HTMLDivElement>(null)
  const charIdxRef = useRef(0)
  const deletingRef = useRef(false)
  const liveTimerRef = useRef<ReturnType<typeof setTimeout>>()

  // Random key press state
  const pressedKeysRef = useRef<Set<string>>(new Set())
  const keyTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [rawX, rawY])

  const onMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
  }, [rawX, rawY])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseMove, onMouseLeave])

  // ── Live coding on screen ──
  useEffect(() => {
    if (!typedRef.current) return

    function renderTyped(text: string) {
      if (!typedRef.current) return
      // Re-render with syntax colours based on raw character position in CODE_FLAT
      let globalIdx = 0
      typedRef.current.innerHTML = ''
      CODE.forEach((line, lineIdx) => {
        const lineStr = line.tokens.map(t => t.t).join('') + '\n'
        const charsOnThisLine = Math.max(0, Math.min(lineStr.length, text.length - globalIdx))
        if (charsOnThisLine <= 0 && globalIdx < text.length) { globalIdx += lineStr.length; return }

        const row = document.createElement('div')
        row.style.cssText = 'display:flex;gap:6px;line-height:1.55;'

        const num = document.createElement('span')
        num.style.cssText = 'font-size:7px;color:#2d2d5a;min-width:12px;text-align:right;flex-shrink:0;padding-top:1px;font-family:monospace;'
        num.textContent = String(line.n)
        row.appendChild(num)

        const codePart = document.createElement('span')
        codePart.style.cssText = "font-size:8.5px;font-family:'Courier New',monospace;white-space:pre;"

        let charInLine = 0
        let charsLeft = charsOnThisLine
        line.tokens.forEach(tok => {
          if (charsLeft <= 0) return
          const visible = tok.t.slice(0, charsLeft)
          if (!visible) return
          const span = document.createElement('span')
          span.style.color = tok.c
          span.textContent = visible
          codePart.appendChild(span)
          charsLeft -= visible.length
          charInLine += visible.length
        })

        // Blinking cursor on the current typing line
        const isCurrentLine = globalIdx <= text.length && text.length < globalIdx + lineStr.length
        if (isCurrentLine || (lineIdx === CODE.length - 1 && text.length >= CODE_FLAT.length - 1)) {
          const cur = document.createElement('span')
          cur.style.cssText = 'display:inline-block;vertical-align:text-bottom;margin-left:1px;width:2px;height:9px;background:#a78bfa;animation:blinkCursor .85s infinite;'
          codePart.appendChild(cur)
        }

        row.appendChild(codePart)
        typedRef.current!.appendChild(row)
        globalIdx += lineStr.length
        if (globalIdx > text.length) return
      })
    }

    function type() {
      if (!typedRef.current) return
      const total = CODE_FLAT.length

      if (!deletingRef.current) {
        charIdxRef.current = Math.min(charIdxRef.current + 1, total)
        renderTyped(CODE_FLAT.slice(0, charIdxRef.current))
        if (charIdxRef.current >= total) {
          deletingRef.current = true
          liveTimerRef.current = setTimeout(type, 2200)
          return
        }
      } else {
        charIdxRef.current = Math.max(charIdxRef.current - 2, 0)
        renderTyped(CODE_FLAT.slice(0, charIdxRef.current))
        if (charIdxRef.current <= 0) {
          deletingRef.current = false
          liveTimerRef.current = setTimeout(type, 600)
          return
        }
      }

      liveTimerRef.current = setTimeout(type, deletingRef.current ? 18 : 55)
    }

    liveTimerRef.current = setTimeout(type, 800)
    return () => {
      if (liveTimerRef.current) clearTimeout(liveTimerRef.current)
    }
  }, [])

  // ── Random key presses (synced with typing animation) ──
  useEffect(() => {
    const allLabels = KB_ROWS.flat().map(k => k.label).filter(l => l && l.length <= 2 && !['Esc','Tab','Caps','Shft','Ent','Bks','Ctrl','Alt','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'].includes(l))

    function pressRandom() {
      const label = allLabels[Math.floor(Math.random() * allLabels.length)]
      setPressedKeys(prev => new Set(prev).add(label))
      setTimeout(() => {
        setPressedKeys(prev => {
          const next = new Set(prev)
          next.delete(label)
          return next
        })
      }, 120)
      keyTimerRef.current = setTimeout(pressRandom, 180 + Math.random() * 380)
    }

    keyTimerRef.current = setTimeout(pressRandom, 1600)
    return () => {
      if (keyTimerRef.current) clearTimeout(keyTimerRef.current)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative flex flex-col items-center justify-center w-full h-full cursor-none"
      style={{ minHeight: '560px' }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '520px', height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.10) 0%, transparent 65%)',
          top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
        }}
      />

      {/* ── Floating badges ── */}
      {BADGES.map(({ label, color, bg, border, ...pos }) => (
        <motion.span
          key={label}
          className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-semibold font-mono whitespace-nowrap"
          style={{ color, background: bg, border: `1px solid ${border}`, ...pos }}
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 3 + Math.random() * 1.5, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
        >
          {label}
        </motion.span>
      ))}

      {/* ── Monitor + Tower row ── */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex flex-row items-end gap-5"
      >
        {/* Shadow under setup */}
        <motion.div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
          style={{ width: '420px', height: '16px', background: 'radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 75%)' }}
          animate={{ scaleX: [1, 0.85, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Monitor ── */}
        <div className="flex flex-col items-center">
          {/* 3D tilt wrapper — only the screen tilts */}
          <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
            {/* Screen bezel */}
            <div style={{
              width: '360px',
              background: '#0a0a1f',
              border: '2.5px solid #3a3a5c',
              borderRadius: '14px 14px 0 0',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 0 60px rgba(124,58,237,0.2), inset 0 0 40px rgba(5,5,20,0.9)',
            }}>
              {/* Webcam */}
              <div style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', width: '7px', height: '7px', borderRadius: '50%', background: '#0a0a1a', border: '1px solid #2a2a4a', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                  style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2563eb' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              {/* Tab bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '18px 10px 5px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(239,68,68,.7)' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(234,179,8,.7)' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(34,197,94,.7)' }} />
                <div style={{ display: 'flex', gap: '3px', marginLeft: '8px' }}>
                  {['portfolio.tsx', 'styles.css'].map((tab, i) => (
                    <div key={tab} style={{
                      padding: '2px 7px', borderRadius: '3px 3px 0 0', fontSize: '7px', fontFamily: 'monospace',
                      background: i === 0 ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                      color: i === 0 ? '#a78bfa' : '#4b5563',
                      border: i === 0 ? '0.5px solid rgba(124,58,237,0.3)' : '0.5px solid transparent',
                    }}>{tab}</div>
                  ))}
                </div>
              </div>
              {/* Live code area */}
              <div style={{ padding: '8px 10px', height: '168px', overflow: 'hidden', background: '#0a0a1f', position: 'relative' }}>
                <style>{`@keyframes blinkCursor{0%,100%{opacity:1}50%{opacity:0}}`}</style>
                <div ref={typedRef} style={{ fontFamily: "'Courier New', monospace", fontSize: '8.5px', lineHeight: '1.55' }} />
              </div>
              {/* Status bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 10px', background: 'rgba(8,8,28,0.95)', borderTop: '0.5px solid #1a1a3a' }}>
                <span style={{ fontSize: '7px', color: '#a78bfa', fontFamily: 'monospace' }}>⎇ main</span>
                <span style={{ fontSize: '7px', color: '#4ade80', fontFamily: 'monospace' }}>✓ 0 errors</span>
                <span style={{ fontSize: '7px', color: '#4b5563', fontFamily: 'monospace' }}>TypeScript JSX</span>
              </div>
              {/* Scanlines */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: '14px 14px 0 0', background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.03) 3px,rgba(0,0,0,0.03) 4px)' }} />
              {/* Reflection */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: '14px 14px 0 0', background: 'linear-gradient(135deg,rgba(255,255,255,0.03) 0%,transparent 55%)' }} />
            </div>
            {/* Bottom bezel */}
            <div style={{ width: '360px', height: '18px', background: 'linear-gradient(180deg,#1c1c2e 0%,#141420 100%)', border: '2.5px solid #3a3a5c', borderTop: 'none', borderRadius: '0 0 8px 8px' }} />
          </motion.div>
          {/* Neck */}
          <div style={{ width: '14px', height: '36px', background: 'linear-gradient(90deg,#222,#333,#1a1a1a)', borderRadius: '0 0 4px 4px' }} />
          {/* Base */}
          <div style={{ width: '120px', height: '10px', background: 'linear-gradient(180deg,#2a2a2a,#1a1a1a)', borderRadius: '6px', border: '1px solid #333' }} />
        </div>

        {/* ── Tower PC ── */}
        <div style={{
          width: '72px', height: '200px',
          background: 'linear-gradient(160deg,#2a2a2a 0%,#1a1a1a 50%,#111 100%)',
          border: '1.5px solid #3a3a3a',
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '20px',
          boxShadow: 'inset 2px 0 6px rgba(255,255,255,0.04)',
        }}>
          {/* Top line */}
          <div style={{ position: 'absolute', top: '10px', left: '8px', right: '8px', height: '1px', background: '#333' }} />
          {/* Power button */}
          <div style={{ position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)', width: '14px', height: '14px', borderRadius: '50%', background: '#1a1a1a', border: '1.5px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 4px #4ade80' }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
          </div>
          {/* HDD LED */}
          <div style={{ position: 'absolute', top: '36px', left: 'calc(50% - 9px)', width: '5px', height: '5px', borderRadius: '50%', background: '#2563eb', opacity: 0.7 }} />
          {/* Disc drive */}
          <div style={{ position: 'absolute', top: '50px', left: '8px', right: '8px', height: '5px', background: '#111', borderRadius: '2px', border: '0.5px solid #2a2a2a' }} />
          {/* USB ports */}
          <div style={{ position: 'absolute', top: '62px', left: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ width: '12px', height: '5px', background: '#111', border: '0.5px solid #2a2a2a', borderRadius: '1px' }} />
            <div style={{ width: '12px', height: '5px', background: '#111', border: '0.5px solid #2a2a2a', borderRadius: '1px' }} />
          </div>
          {/* Vents */}
          <div style={{ position: 'absolute', bottom: '20px', left: '8px', right: '8px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ height: '1.5px', background: '#222', borderRadius: '1px' }} />
            ))}
          </div>
          {/* GPU glow stripe */}
          <div style={{ position: 'absolute', right: 0, top: '80px', bottom: '60px', width: '3px', background: 'linear-gradient(180deg,rgba(124,58,237,.6),rgba(124,58,237,.1))', borderRadius: '2px' }} />
        </div>
      </motion.div>

      {/* ── Desk surface ── */}
      <div style={{ width: '560px', height: '6px', background: 'linear-gradient(180deg,#2a2a2a,#1e1e1e)', borderRadius: '4px', border: '1px solid #333', position: 'relative', zIndex: 5, marginTop: '-2px' }} />

      {/* ── Keyboard + Mouse row ── */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px', marginTop: '12px' }}>

        {/* Keyboard */}
        <div style={{
          background: 'linear-gradient(160deg,#252525 0%,#181818 60%,#111 100%)',
          border: '1.5px solid #333',
          borderRadius: '10px',
          padding: '8px 10px 10px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.5)',
          position: 'relative',
        }}>
          {/* Indicator LEDs */}
          <div style={{ position: 'absolute', top: '6px', right: '10px', display: 'flex', gap: '5px' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', opacity: 0.7 }} />
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2563eb', opacity: 0.5 }} />
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#f59e0b', opacity: 0.4 }} />
          </div>

          {/* Key rows */}
          {KB_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              style={{
                display: 'flex',
                gap: '2px',
                marginBottom: rowIdx === KB_ROWS.length - 1 ? 0 : rowIdx === 0 ? '3px' : '2px',
                marginLeft: `${ROW_INDENT[rowIdx]}px`,
                justifyContent: rowIdx === 0 || rowIdx === KB_ROWS.length - 1 ? 'center' : undefined,
              }}
            >
              {row.map((key, kIdx) => (
                <Key
                  key={`${rowIdx}-${kIdx}`}
                  label={key.label}
                  width={key.w}
                  isPressed={pressedKeys.has(key.label)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Mouse + Mousepad */}
        <div style={{ position: 'relative', marginTop: '4px' }}>
          {/* Mousepad */}
          <div style={{ width: '90px', height: '72px', background: '#1a1a28', borderRadius: '6px', border: '1px solid #2a2a3a', position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', bottom: '4px', right: '5px', fontSize: '6px', color: '#2a2a3a', fontFamily: 'monospace', letterSpacing: '1px' }}>DEV</span>
          </div>
          {/* Mouse */}
          <motion.div
            style={{ position: 'absolute', left: '22px', bottom: '8px', zIndex: 10 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div style={{
              width: '30px', height: '46px',
              background: 'linear-gradient(160deg,#2e2e2e 0%,#1c1c1c 60%,#141414 100%)',
              borderRadius: '15px 15px 10px 10px',
              border: '1.5px solid #3a3a3a',
              position: 'relative',
              boxShadow: '2px 3px 8px rgba(0,0,0,0.5)',
            }}>
              {/* Seam */}
              <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '18px', background: '#111', transform: 'translateX(-50%)' }} />
              {/* Left click */}
              <div style={{ position: 'absolute', top: '1px', left: '2px', width: '11px', height: '16px', background: '#252525', borderRadius: '13px 4px 0 0', border: '0.5px solid #333' }} />
              {/* Right click */}
              <div style={{ position: 'absolute', top: '1px', right: '2px', width: '11px', height: '16px', background: '#252525', borderRadius: '4px 13px 0 0', border: '0.5px solid #333' }} />
              {/* Scroll wheel */}
              <div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', width: '5px', height: '10px', background: '#383838', borderRadius: '3px', border: '0.5px solid #444' }} />
              {/* LED glow */}
              <div style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '3px', background: 'rgba(124,58,237,0.6)', borderRadius: '3px', boxShadow: '0 0 4px rgba(124,58,237,0.4)' }} />
            </div>
            {/* Cable */}
            <svg width="36" height="28" viewBox="0 0 36 28" style={{ position: 'absolute', top: '-24px', left: '9px', overflow: 'visible' }} fill="none">
              <path d="M5 26 Q5 10 18 5 Q28 1 34 1" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Hint */}
      <motion.p
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/20 text-xs font-mono whitespace-nowrap"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        move cursor to interact
      </motion.p>
    </div>
  )
}

// ── Hero Section ─────────────────────────────────────────────
export default function HeroSection() {
  const parallax = useParallax(0.02)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const roleIndex = useRef(0)
  const roleRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // ── GSAP entrance ─────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.hero-greeting', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
        .fromTo('.hero-name span', { y: 60, opacity: 0, skewX: -6 }, { y: 0, opacity: 1, skewX: 0, duration: 0.8, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
        .fromTo('.hero-role-line', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-description', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.2')
        .fromTo('.hero-social', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, '-=0.3')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  // ── Typewriter ────────────────────────────────────────────
  useEffect(() => {
    if (!roleRef.current) return
    let charIdx = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    function type() {
      if (!roleRef.current) return
      const current = HERO_ROLES[roleIndex.current]
      if (!deleting) {
        roleRef.current.textContent = current.slice(0, ++charIdx)
        if (charIdx === current.length) {
          deleting = true
          timer = setTimeout(type, 1600)
          return
        }
      } else {
        roleRef.current.textContent = current.slice(0, --charIdx)
        if (charIdx === 0) {
          deleting = false
          roleIndex.current = (roleIndex.current + 1) % HERO_ROLES.length
        }
      }
      timer = setTimeout(type, deleting ? 50 : 90)
    }

    timer = setTimeout(type, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Ambient blobs */}
      <motion.div
        className="blob w-[600px] h-[600px] bg-primary top-[-15%] left-[-10%]"
        style={{ x: parallax.x * 1.5, y: parallax.y * 1.5 }}
      />
      <motion.div
        className="blob w-[500px] h-[500px] bg-secondary bottom-[-10%] right-[-5%] opacity-10"
        style={{ x: parallax.x * -1, y: parallax.y * -1 }}
      />
      <motion.div
        className="blob w-[300px] h-[300px] bg-accent top-[40%] right-[20%] opacity-8"
        style={{ x: parallax.x * 0.5, y: parallax.y * 2 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── Left: Text ─────────────────────────────────── */}
        <div>
          {/* Greeting */}
          <div className="hero-greeting inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 text-secondary text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Available for new opportunities
          </div>

          {/* Name */}
          <h1
            ref={titleRef}
            className="hero-name text-5xl sm:text-6xl lg:text-7xl font-bold font-space-grotesk leading-[1.05] mb-4 overflow-hidden"
          >
            <div>
              {'MD Allauddin'.split('').map((char, i) => (
                <span key={i} className="inline-block" style={{ opacity: 0 }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </h1>

          {/* Animated role */}
          <div className="hero-role-line flex items-center gap-3 mb-6" style={{ opacity: 0 }}>
            <span className="text-white/40 font-inter text-xl">I am a</span>
            <span className="text-2xl font-semibold font-space-grotesk gradient-text min-w-[220px]">
              <span ref={roleRef} />
              <span className="animate-pulse ml-0.5 text-secondary">|</span>
            </span>
          </div>

          {/* Description */}
          <p
            className="hero-description text-white/60 font-inter text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ opacity: 0 }}
          >
            Full Stack Developer specialising in React, Next.js, Node.js and MongoDB. I build
            scalable, responsive, and high-performance web applications with clean architecture
            and modern tooling.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="#contact"
              className="hero-cta btn-primary"
              style={{ opacity: 0 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Connect
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="MD_Allauddin_Resume.pdf"
              className="hero-cta btn-secondary flex items-center gap-2"
              style={{ opacity: 0 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDownload size={16} />
              Download Resume
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <span className="text-white/30 text-xs font-mono uppercase tracking-widest">
              Find me on
            </span>
            {[
              { href: 'https://github.com/Allauddin2', Icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/md-allauddin-code/', Icon: FaLinkedin, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hero-social text-white/40 text-xl hover:text-white transition-colors"
                style={{ opacity: 0 }}
                whileHover={{ y: -3, scale: 1.2 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Right: Desktop PC ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <CursorPC3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <HiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}