// ============================================================
// app/robots.ts — Robots.txt
// ============================================================

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mdallauddin.vercel.app/sitemap.xml',
  }
}
