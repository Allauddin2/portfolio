// // ============================================================
// // components/sections/ServicesSection.tsx
// // ============================================================

// 'use client'

// import { useRef } from 'react'
// import { motion } from 'framer-motion'
// import {
//   HiCode, HiServer, HiCube, HiGlobe, HiDeviceMobile,
// } from 'react-icons/hi'
// import { HiCheckCircle } from 'react-icons/hi2'
// import { SERVICES } from '@/constants'
// import type { Service } from '@/types'
// import SectionHeading from '@/components/ui/SectionHeading'
// import { staggerContainer, fadeIn } from '@/animations/variants'
// import { useTilt } from '@/hooks'

// const ICON_MAP: Record<string, React.ElementType> = {
//   HiCode, HiServer, HiCube, HiGlobe, HiDeviceMobile,
// }

// function ServiceCard({ service, index }: { service: Service; index: number }) {
//   const { ref, transform, handleMouseMove, handleMouseLeave } = useTilt(8)
//   const Icon = ICON_MAP[service.icon]

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
//     >
//       <div
//         ref={ref}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="glass-card gradient-border p-8 rounded-2xl h-full group cursor-default"
//         style={{
//           transform,
//           transition: 'transform 0.15s ease, box-shadow 0.3s ease',
//         }}
//         onMouseEnter={(e) => {
//           ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${service.color}25`
//         }}
//         onMouseLeave={(e) => {
//           ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
//         }}
//       >
//         {/* Icon bubble */}
//         <div
//           className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
//           style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
//         >
//           {Icon && <Icon size={26} style={{ color: service.color }} />}
//         </div>

//         {/* Title */}
//         <h3 className="text-xl font-bold font-space-grotesk text-white mb-3 group-hover:text-secondary transition-colors">
//           {service.title}
//         </h3>

//         {/* Description */}
//         <p className="text-white/60 font-inter text-sm leading-relaxed mb-6">
//           {service.description}
//         </p>

//         {/* Feature list */}
//         <ul className="space-y-2">
//           {service.features.map((feature) => (
//             <li key={feature} className="flex items-center gap-2 text-sm font-inter text-white/70">
//               <HiCheckCircle className="text-secondary shrink-0" size={15} />
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   )
// }

// export default function ServicesSection() {
//   return (
//     <section id="services" className="relative py-24 px-4 md:px-8 overflow-hidden">
//       <div className="blob w-[450px] h-[450px] bg-accent bottom-0 left-10 opacity-5 pointer-events-none" />

//       <div className="max-w-7xl mx-auto">
//         <SectionHeading
//           eyebrow="What I Offer"
//           title="Services I"
//           highlight="Provide"
//           subtitle="From pixel-perfect UI to scalable back-end systems — I handle the full stack so you can focus on your product."
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {SERVICES.map((service, i) => (
//             <ServiceCard key={service.id} service={service} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// ============================================================
// components/sections/ServicesSection.tsx
// ============================================================

'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  HiCode, HiServer, HiCube, HiGlobe, HiDeviceMobile,
} from 'react-icons/hi'
import { HiCheckCircle } from 'react-icons/hi2'
import { SERVICES } from '@/constants'
import type { Service } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, fadeIn } from '@/animations/variants'
import { useTilt } from '@/hooks'

const ICON_MAP: Record<string, React.ElementType> = {
  HiCode, HiServer, HiCube, HiGlobe, HiDeviceMobile,
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, transform, handleMouseMove, handleMouseLeave } = useTilt(8)
  const Icon = ICON_MAP[service.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="glass-card gradient-border p-8 rounded-2xl h-full group cursor-default"
        style={{
          transform,
          transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${service.color}25`
        }}
        onMouseLeave={(e) => {
          handleMouseLeave() // Combines your tilt hook cleanup
          ;(e.currentTarget as HTMLElement).style.boxShadow = 'none' // Combines your shadow cleanup
        }}
      >
        {/* Icon bubble */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
        >
          {Icon && <Icon size={26} style={{ color: service.color }} />}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-space-grotesk text-white mb-3 group-hover:text-secondary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/60 font-inter text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature list */}
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm font-inter text-white/70">
              <HiCheckCircle className="text-secondary shrink-0" size={15} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="blob w-[450px] h-[450px] bg-accent bottom-0 left-10 opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What I Offer"
          title="Services I"
          highlight="Provide"
          subtitle="From pixel-perfect UI to scalable back-end systems — I handle the full stack so you can focus on your product."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}