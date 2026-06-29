// ============================================================
// constants/index.ts — All Static Data for the Portfolio
// ============================================================

import type {
  NavLink,
  Project,
  Skill,
  Service,
  Experience,
  Achievement,
  Testimonial,
  SocialLink,
  Stat,
} from '@/types'

// ── Navigation ──────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

// ── Social Links ─────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Allauddin2',
    icon: 'FaGithub',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/mdallauddin',
    icon: 'FaLinkedin',
  },
  // {
  //   platform: 'Twitter',
  //   url: 'https://twitter.com/mdallauddin',
  //   icon: 'FaTwitter',
  // },
  // {
  //   platform: 'Instagram',
  //   url: 'https://instagram.com/mdallauddin',
  //   icon: 'FaInstagram',
  // },
]

// ── Hero Roles (Typewriter) ──────────────────────────────────
export const HERO_ROLES: string[] = [
  'Full Stack Developer',
  'React Developer',
  'Next.js Developer',
  'Node.js Developer',
  'MERN Stack Developer',
  'Problem Solver',
]

// ── Stats ────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Months Experience', value: 6, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'GitHub Commits', value: 200, suffix: '+' },
]

// ── Skills ───────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: 'SiHtml5', level: 95, color: '#E34F26', category: 'frontend' },
  { name: 'CSS3', icon: 'SiCss3', level: 90, color: '#1572B6', category: 'frontend' },
  { name: 'JavaScript', icon: 'SiJavascript', level: 88, color: '#F7DF1E', category: 'frontend' },
  { name: 'TypeScript', icon: 'SiTypescript', level: 80, color: '#3178C6', category: 'frontend' },
  { name: 'React.js', icon: 'SiReact', level: 85, color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', icon: 'SiNextdotjs', level: 82, color: '#ffffff', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 88, color: '#06B6D4', category: 'frontend' },
  { name: 'GSAP', icon: 'SiGreensock', level: 70, color: '#88CE02', category: 'frontend' },
  { name: 'Framer Motion', icon: 'TbBrandFramerMotion', level: 72, color: '#BB4B96', category: 'frontend' },
  // Backend
  { name: 'Node.js', icon: 'SiNodedotjs', level: 82, color: '#339933', category: 'backend' },
  { name: 'Express.js', icon: 'SiExpress', level: 80, color: '#ffffff', category: 'backend' },
  { name: 'MongoDB', icon: 'SiMongodb', level: 78, color: '#47A248', category: 'backend' },
  { name: 'Prisma', icon: 'SiPrisma', level: 70, color: '#2D3748', category: 'backend' },
  { name: 'REST API', icon: 'TbApi', level: 85, color: '#FF6B35', category: 'backend' },
  { name: 'JWT', icon: 'SiJsonwebtokens', level: 82, color: '#00B9E1', category: 'backend' },
  { name: 'MySQL', icon: 'SiMysql', level: 72, color: '#4479A1', category: 'backend' },
  // Tools
  { name: 'Git', icon: 'SiGit', level: 88, color: '#F05032', category: 'tools' },
  { name: 'GitHub', icon: 'SiGithub', level: 88, color: '#ffffff', category: 'tools' },
  { name: 'VS Code', icon: 'SiVisualstudiocode', level: 90, color: '#007ACC', category: 'tools' },
  { name: 'Postman', icon: 'SiPostman', level: 82, color: '#FF6C37', category: 'tools' },
  { name: 'Vercel', icon: 'SiVercel', level: 80, color: '#ffffff', category: 'tools' },
  { name: 'Docker', icon: 'SiDocker', level: 55, color: '#2496ED', category: 'tools' },
  // ML
  { name: 'Python', icon: 'SiPython', level: 80, color: '#3776AB', category: 'ml' },
  { name: 'TensorFlow', icon: 'SiTensorflow', level: 70, color: '#FF6F00', category: 'ml' },
  { name: 'OpenCV', icon: 'SiOpencv', level: 72, color: '#5C3EE8', category: 'ml' },
  { name: 'Scikit-learn', icon: 'SiScikitlearn', level: 68, color: '#F7931E', category: 'ml' },
]

// ── Services ─────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Crafting pixel-perfect, responsive UIs with React, Next.js, Tailwind CSS, and animation libraries for delightful user experiences.',
    icon: 'HiCode',
    features: ['React / Next.js', 'Tailwind CSS', 'GSAP & Framer Motion', 'Responsive Design'],
    color: '#7C3AED',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description:
      'Building robust, scalable server-side systems with Node.js, Express.js, JWT authentication, and MVC architecture.',
    icon: 'HiServer',
    features: ['Node.js / Express', 'JWT Auth & RBAC', 'MVC Architecture', 'CI/CD Pipelines'],
    color: '#00E5FF',
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description:
      'End-to-end product development from database schema design to polished UI, using the MERN stack and modern tooling.',
    icon: 'HiCube',
    features: ['MERN Stack', 'Full Product Lifecycle', 'Performance Optimization', 'Deployment'],
    color: '#FF4D8D',
  },
  {
    id: 'api',
    title: 'REST API Development',
    description:
      'Designing clean, well-documented RESTful APIs with proper error handling, rate limiting, and security best practices.',
    icon: 'HiGlobe',
    features: ['RESTful Design', 'API Security', 'Documentation', 'Integration'],
    color: '#7C3AED',
  },
  {
    id: 'responsive',
    title: 'Responsive Web Design',
    description:
      'Ensuring your website looks and works perfectly across all devices — mobile, tablet, and desktop — with zero compromise.',
    icon: 'HiDeviceMobile',
    features: ['Mobile-First', 'Cross-Browser', 'Accessibility', 'Performance'],
    color: '#00E5FF',
  },
]

// ── Projects ─────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'medtrack',
    title: 'MedTrack',
    description:
      'Full-stack healthcare app with JWT auth, RBAC for 3 user roles, real-time medicine reminders, and interactive health dashboards.',
    longDescription:
      'Architected a full-stack healthcare application using MVC design pattern with JWT-based authentication and role-based access control (RBAC) supporting 3 user roles. Integrated real-time medicine reminders and interactive health monitoring dashboards using Chart.js. Designed MongoDB schemas for medicine adherence tracking, emergency alerts, and remote family monitoring.',
    image: '/images/medtrack.png',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
    githubUrl: 'https://github.com/Allauddin2/medtrack',
    liveUrl: '',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'subscription-tracker',
    title: 'AI Subscription Tracker',
    description:
      'NLP-powered email parser that auto-detects subscriptions, predicts unused services, and generates personalised savings recommendations.',
    longDescription:
      'Developed NLP-based email parsing engine to automatically detect subscription receipts and extract billing metadata, reducing manual data entry by ~80%. Implemented machine learning predictive analytics to identify unused subscriptions and generate personalized savings recommendations. Deployed using CI/CD pipelines (GitHub Actions) following Agile development methodology.',
    image: '/images/subscription-tracker.png',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'NLP', 'ML', 'CI/CD'],
    githubUrl: 'https://github.com/Allauddin2/ai-subscription-tracker',
    liveUrl: '',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'sign-language',
    title: 'Hybrid Sign Language Classification',
    description:
      'CNN+HOG deep learning model for Sign Language Alphabet Classification achieving ~15% improvement in feature extraction accuracy.',
    longDescription:
      'Designed and implemented a Hybrid CNN+HOG deep learning model for Sign Language Alphabet Classification, achieving ~15% improvement in feature extraction accuracy over baseline CNN using TensorFlow and Keras. Engineered data pipeline integrating HOG descriptors with CNN feature maps using Python and OpenCV.',
    image: '/images/sign-language.png',
    techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'CNN', 'HOG'],
    githubUrl: 'https://github.com/Allauddin2/hybrid-sign-language',
    liveUrl: '',
    category: 'ml',
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'Premium animated portfolio built with Next.js 15, GSAP, Framer Motion, and Three.js — the very site you are viewing.',
    longDescription:
      'Built a production-ready portfolio with Next.js 15 App Router, TypeScript, GSAP animations, Framer Motion transitions, Three.js hero background, and Lenis smooth scroll. Features dark glassmorphism design, neon glow effects, and full SEO optimisation.',
    image: '/images/portfolio.png',
    techStack: ['Next.js 15', 'TypeScript', 'GSAP', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Allauddin2/portfolio',
    liveUrl: 'https://mdallauddin.vercel.app',
    category: 'frontend',
    featured: true,
  },
]

// ── Experience ───────────────────────────────────────────────
export const EXPERIENCES: Experience[] = [
  {
    id: 'ml-intern-nit',
    company: 'NIT Silchar',
    role: 'Machine Learning Intern',
    duration: 'June 2025 – July 2025',
    location: 'Silchar, Assam',
    type: 'internship',
    description: [
      'Designed and implemented a Hybrid CNN+HOG model for Sign Language Alphabet Classification achieving ~15% improvement in feature extraction accuracy.',
      'Engineered data pipeline integrating HOG descriptors with CNN feature maps using Python, OpenCV, and Keras.',
      'Performed end-to-end data preprocessing, feature engineering, and model evaluation using Scikit-learn.',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'CNN', 'HOG'],
  },
  {
    id: 'web-intern-elevate',
    company: 'Elevate Labs',
    role: 'Web Development Intern',
    duration: 'May 2025 – June 2025',
    location: 'Remote',
    type: 'internship',
    description: [
      'Built and deployed responsive web pages using HTML5, CSS3, Flexbox, Grid, and media queries ensuring consistent UI/UX across all breakpoints.',
      'Integrated a third-party payment gateway RESTful API with secure, end-to-end transaction handling in a production agile environment.',
      'Collaborated with cross-functional Agile team (design, backend, QA) to improve UI consistency during sprint cycles.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'RESTful APIs', 'Agile/Scrum'],
  },
]

// ── Achievements ─────────────────────────────────────────────
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'unesco-hackathon',
    title: 'UNESCO Youth Hackathon 2025',
    description:
      'Developed and presented a project under the theme "Youth Leading the Way: Building MIL Solutions for Impact", demonstrating rapid prototyping and problem-solving in a global competition.',
    date: '2025',
    icon: 'HiTrophy',
    category: 'hackathon',
  },
  {
    id: 'oracle-ai',
    title: 'Oracle AI Foundations',
    description:
      'Earned the Oracle AI Foundations certification, demonstrating proficiency in artificial intelligence concepts and Oracle Cloud AI services.',
    date: '2024',
    icon: 'HiBadgeCheck',
    category: 'certificate',
  },
  {
    id: 'btech',
    title: "B.Tech — Electronics & Communication",
    description:
      'Completed Bachelor of Technology in Electronics and Communication Engineering at Assam University Silchar with specialisation in ML and web development.',
    date: '2022 – 2025',
    icon: 'HiAcademicCap',
    category: 'award',
  },
]

// ── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Arijit Roy',
    role: 'Research Supervisor',
    company: 'NIT Silchar',
    avatar: '/images/avatar1.png',
    content:
      'MD Allauddin demonstrated exceptional problem-solving skills during his ML internship. His hybrid CNN+HOG model achieved results beyond our initial expectations and showed deep understanding of computer vision techniques.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Engineering Lead',
    company: 'Elevate Labs',
    avatar: '/images/avatar2.png',
    content:
      'One of the most proactive interns we have had. Allauddin delivered production-quality code, collaborated brilliantly with the team, and showed real ownership of his tasks from day one.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Rajan Mehta',
    role: 'Mentor',
    company: 'UNESCO Hackathon',
    avatar: '/images/avatar3.png',
    content:
      "'Allauddin's project at the UNESCO Hackathon was both technically impressive and socially impactful. His ability to prototype quickly under pressure sets him apart from his peers.'",
    rating: 5,
  },
]

// ── GitHub ──────────────────────────────────────────────────
export const GITHUB_USERNAME = 'Allauddin2'

export const CONTACT_EMAIL = 'mallauddin6542@gmail.com'
