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
  alternates: {
    canonical: 'https://emmanueloye.com',
  },
  openGraph: {
    description: 'Web developer with 2+ years of experience delivering production web apps and client sites. Specializing in Next.js, TypeScript, and Supabase.',
    images: ['']
  }
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