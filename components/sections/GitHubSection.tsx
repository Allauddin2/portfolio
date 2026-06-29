// // ============================================================
// // components/sections/GitHubSection.tsx
// // ============================================================

// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { FaGithub } from 'react-icons/fa'
// import { HiStar, HiCode, HiUsers } from 'react-icons/hi'
// import { GITHUB_USERNAME } from '@/constants'
// import SectionHeading from '@/components/ui/SectionHeading'
// import { fadeIn, staggerContainer } from '@/animations/variants'

// const STATS = [
//   { label: 'Public Repos', value: '10+', icon: HiCode, color: '#7C3AED' },
//   { label: 'GitHub Stars', value: '5+', icon: HiStar, color: '#F59E0B' },
//   { label: 'Followers', value: '10+', icon: HiUsers, color: '#00E5FF' },
// ]

// export default function GitHubSection() {
//   return (
//     <section id="github" className="relative py-24 px-4 md:px-8 overflow-hidden">
//       <div className="blob w-[400px] h-[400px] bg-primary top-0 left-1/4 opacity-5 pointer-events-none" />

//       <div className="max-w-5xl mx-auto">
//         <SectionHeading
//           eyebrow="Open Source"
//           title="GitHub"
//           highlight="Activity"
//           subtitle="Consistent contributor, always learning and sharing through code."
//         />

//         {/* Stat cards */}
//         <motion.div
//           variants={staggerContainer(0.1)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
//         >
//           {STATS.map(({ label, value, icon: Icon, color }, i) => (
//             <motion.div
//               key={label}
//               variants={fadeIn('up', i * 0.1)}
//               className="glass-card gradient-border p-6 rounded-2xl text-center group hover:shadow-neon-purple transition-shadow duration-300"
//             >
//               <div
//                 className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
//                 style={{ background: `${color}15`, border: `1px solid ${color}30` }}
//               >
//                 <Icon size={22} style={{ color }} />
//               </div>
//               <div className="text-3xl font-bold font-space-grotesk gradient-text mb-1">{value}</div>
//               <div className="text-white/50 text-sm font-inter">{label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* GitHub Stats Images */}
//         <motion.div
//           variants={staggerContainer(0.1)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
//         >
//           {/* Stats card */}
//           <motion.div variants={fadeIn('left', 0)} className="glass-card gradient-border rounded-2xl p-4 overflow-hidden">
//             <img
//               src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=7C3AED&text_color=ffffff&icon_color=00E5FF&border_color=7C3AED40&hide_border=false&rank_icon=github`}
//               alt="GitHub Stats"
//               className="w-full rounded-xl"
//             />
//           </motion.div>

//           {/* Streak card */}
//           <motion.div variants={fadeIn('right', 0)} className="glass-card gradient-border rounded-2xl p-4 overflow-hidden">
//             <img
//               src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&ring=7C3AED&fire=FF4D8D&currStreakLabel=00E5FF&sideNums=ffffff&currStreakNum=ffffff&sideLabels=ffffff99&dates=ffffff60&border=7C3AED40`}
//               alt="GitHub Streak"
//               className="w-full rounded-xl"
//             />
//           </motion.div>
//         </motion.div>

//         {/* Top languages */}
//         <motion.div
//           variants={fadeIn('up', 0.2)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="glass-card gradient-border rounded-2xl p-4 mb-8"
//         >
//           <img
//             src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&title_color=7C3AED&text_color=ffffff&border_color=7C3AED40&langs_count=8`}
//             alt="Top Languages"
//             className="w-full max-w-lg mx-auto rounded-xl"
//             style={{ display: 'block' }}
//           />
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           variants={fadeIn('up', 0.3)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <motion.a
//             href={`https://github.com/${GITHUB_USERNAME}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-primary inline-flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             <FaGithub size={18} />
//             Visit GitHub Profile
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
