// ============================================================
// types/index.ts — Global TypeScript Type Definitions
// ============================================================

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  category: 'fullstack' | 'ml' | 'frontend' | 'backend'
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  level: number // 0–100
  color: string
  category: 'frontend' | 'backend' | 'tools' | 'ml'
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  color: string
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  location: string
  type: 'internship' | 'fulltime' | 'parttime' | 'freelance'
  description: string[]
  technologies: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  icon: string
  category: 'hackathon' | 'certificate' | 'award' | 'contribution'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface AnimationVariants {
  hidden: Record<string, unknown>
  visible: Record<string, unknown>
  exit?: Record<string, unknown>
}
