// ============================================================
// app/layout.tsx — Root Layout
// ============================================================

import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import '@/styles/globals.css'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'

// ── Fonts ────────────────────────────────────────────────────
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

// ── Metadata ─────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://mdallauddin.vercel.app'),
  title: {
    default: 'MD Allauddin — Full Stack Developer',
    template: '%s | MD Allauddin',
  },
  description:
    'Full Stack Developer specialising in React, Next.js, Node.js, Express.js, MongoDB, and Machine Learning. Building scalable, responsive, high-performance web applications.',
  keywords: [
    'MD Allauddin',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MERN Stack',
    'Portfolio',
    'Web Developer India',
  ],
  authors: [{ name: 'MD Allauddin', url: 'https://github.com/Allauddin2' }],
  creator: 'MD Allauddin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mdallauddin.vercel.app',
    title: 'MD Allauddin — Full Stack Developer',
    description:
      'Full Stack Developer specialising in React, Next.js, Node.js, and Machine Learning.',
    siteName: 'MD Allauddin Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MD Allauddin — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD Allauddin — Full Stack Developer',
    description:
      'Full Stack Developer specialising in React, Next.js, Node.js, and Machine Learning.',
    images: ['/og-image.png'],
    creator: '@mdallauddin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
}

// ── Root Layout ──────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-background font-space-grotesk text-white antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgressBar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
