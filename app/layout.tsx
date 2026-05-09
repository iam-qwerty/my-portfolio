import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { SanityLive } from "@/sanity-lib/live"
import { JsonLd, websiteJsonLd } from '@/components/seo/json-ld'

// Font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

//  Generate metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL('https://emmanueloye.com'),
  keywords: [
    "Web Developer",
    "Full-Stack Web Developer",
    "Frontend & Full-Stack Web Developer",
    "Next.js Developer",
    "React & TypeScript Developer",
    "Supabase & PostgreSQL Developer",
    "Freelance Web Developer Portfolio",
    "Hire Freelance Web Developer",
    "SEO Optimized Web Applications",
    "Figma-to-Code Services",
    "Modern Responsive Web Apps",
    "Emmanuel Bukunmi Oyegbile",
    "Emmanuel Oye",
  ],
  title: {
    default: 'Emmanuel Oyegbile | Web Developer',
    template: '%s | Emmanuel Oyegbile',
  },
  description: 'Web developer with 2+ years of experience delivering production web apps and client sites. Specializing in Next.js, TypeScript, and Supabase.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://emmanueloye.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Emmanuel Oyegbile',
    title: 'Emmanuel Oyegbile | Web Developer',
    description: 'Web developer with 2+ years of experience delivering production web apps and client sites. Specializing in Next.js, TypeScript, and Supabase.',
    url: 'https://emmanueloye.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Oyegbile - Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Oyegbile | Web Developer',
    description: 'Web developer with 2+ years of experience delivering production web apps and client sites. Specializing in Next.js, TypeScript, and Supabase.',
    images: ['/images/my-pic.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd json={websiteJsonLd()} />
        {/* Load Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LGQ7ZN8Y91"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LGQ7ZN8Y91', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        {children}
        <SanityLive />
      </body>
    </html>
  )
}
