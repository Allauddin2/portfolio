# MD Allauddin — Portfolio

Premium animated Full Stack Developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **GSAP**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.local.example .env.local
# Fill in your EmailJS or Resend API keys

# 3. Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── page.tsx                # Main page (all sections)
│   ├── sitemap.ts              # XML sitemap
│   ├── robots.ts               # robots.txt
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form API
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Animated navbar
│   │   ├── Footer.tsx          # Footer with social links
│   │   └── SmoothScrollProvider.tsx  # Lenis smooth scroll
│   ├── sections/
│   │   ├── HeroSection.tsx     # Full-screen hero
│   │   ├── AboutSection.tsx    # About + stat counters
│   │   ├── SkillsSection.tsx   # Filterable skill cards
│   │   ├── ServicesSection.tsx # Service cards
│   │   ├── ProjectsSection.tsx # Bento grid + modal
│   │   ├── ExperienceSection.tsx  # Timeline
│   │   ├── AchievementsSection.tsx  # Achievement cards
│   │   ├── GitHubSection.tsx   # GitHub stats
│   │   ├── TestimonialsSection.tsx  # Auto-slider
│   │   └── ContactSection.tsx  # Form + validation
│   └── ui/
│       ├── CustomCursor.tsx    # Animated cursor
│       ├── ScrollProgressBar.tsx  # Scroll indicator
│       └── SectionHeading.tsx  # Reusable heading
│
├── animations/
│   └── variants.ts             # Framer Motion variants
│
├── hooks/
│   └── index.ts                # Custom React hooks
│
├── lib/
│   └── utils.ts                # Utility functions
│
├── constants/
│   └── index.ts                # All static data
│
├── types/
│   └── index.ts                # TypeScript types
│
├── styles/
│   └── globals.css             # Global CSS
│
├── public/
│   ├── resume.pdf              # Your resume (ADD THIS)
│   ├── images/                 # Project screenshots
│   └── site.webmanifest
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | GSAP + Framer Motion |
| Smooth Scroll | Lenis |
| Icons | React Icons |
| Email | Resend / EmailJS |
| Deployment | Vercel |

---

## 📧 Contact Form Setup

### Option 1 — Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add `RESEND_API_KEY=re_xxx` to `.env.local`
4. Uncomment the Resend block in `app/api/contact/route.ts`

### Option 2 — EmailJS (Client-side)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service, template, and get your public key
3. Add the three `NEXT_PUBLIC_EMAILJS_*` vars to `.env.local`
4. Use `@emailjs/browser` in the ContactSection component

---

## 🖼 Adding Your Content

### Profile Photo
Place your photo at `public/images/profile.jpg` and update the avatar in `HeroSection.tsx` and `AboutSection.tsx`.

### Project Screenshots
Add screenshots to `public/images/` with filenames matching the `image` field in `constants/index.ts`.

### Resume
Place your PDF at `public/resume.pdf`.

---

## 🚀 Deploy to Vercel

```bash
# Option 1 — Vercel CLI
npm i -g vercel
vercel

# Option 2 — Connect GitHub repo at vercel.com/new
```

**Environment variables to add in Vercel Dashboard:**
- `RESEND_API_KEY` (if using Resend)
- `NEXT_PUBLIC_SITE_URL`

---

## ⚡ Performance

- Lazy loading for all sections
- Next.js Image optimization
- Dynamic imports for heavy components
- Font subsetting via `next/font`
- Tailwind CSS purging in production

---

## 🌐 SEO

- Full metadata in `app/layout.tsx`
- Open Graph tags
- Twitter Card
- XML sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`

---

## 📄 License

MIT — use freely for your own portfolio.

---

Made with ❤️ by MD Allauddin
"# portfolio" 
