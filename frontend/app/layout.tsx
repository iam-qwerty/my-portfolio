import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'

// Font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

//  Generate metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL('https://emmanueloye.com'),
  title: {
    default: 'Emmanuel Oye | Web Developer & Software Engineer',
    template: '%s | Emmanuel Oye',
  },
  description: 'Full-stack Web Developer specializing in Next.js, React, Node.js, and modern web technologies. I build high-performance, accessible, and SEO-optimized web applications.',
  keywords: [
    "Web Developer",
    "Software Engineer",
    "Full-stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Expert",
    "Node.js Developer",
    "Portfolio Developer Nigerians",
    "Modern Web Applications",
    "Performance Optimization",
    "Emmanuel Oye",
    "Hire Web Developer Nigeria",
  ],
  authors: [{ name: 'Emmanuel Oye' }],
  creator: 'Emmanuel Oye',
  publisher: 'Emmanuel Oye',
  alternates: {
    canonical: 'https://emmanueloye.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emmanueloye.com',
    siteName: 'Emmanuel Oye Portfolio',
    title: 'Emmanuel Oye | Web Developer & Software Engineer',
    description: 'Expert Web Developer building modern, performant, and user-centric digital experiences with Next.js and React.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Oye - Web Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Oye | Web Developer & Software Engineer',
    description: 'Expert Web Developer building modern, performant, and user-centric digital experiences with Next.js and React.',
    creator: '@emmanuel_oye',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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
        {/* Structured Data (JSON-LD) */}
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Emmanuel Oye",
            "url": "https://emmanueloye.com",
            "jobTitle": "Web Developer & Software Engineer",
            "knowsAbout": ["Web Development", "Next.js", "React", "Node.js", "TypeScript", "UI/UX Design"],
            "sameAs": [
              "https://github.com/iam-qwerty",
              "https://twitter.com/iam__qwerty",
              "https://www.linkedin.com/in/emmanuel-oyegbile/"
            ],
            "description": "Expert Web Developer specializing in Next.js, React, and modern web technologies. I build high-performance, accessible, and SEO-optimized web applications."
          })}
        </Script>
      </head>
      <body className={`${montserrat.className} bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden`}>
        <Navigation />
        <main className="container mx-auto px-4 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}