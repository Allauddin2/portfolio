// ============================================================
// app/page.tsx — Main Portfolio Page
// ============================================================

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import AchievementsSection from '@/components/sections/AchievementsSection'

import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />

      <Footer />
    </main>
  )
}
