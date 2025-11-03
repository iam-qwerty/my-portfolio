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
  metadataBase: new URL('https://emmanueloye.xyz'),
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "Web Developer",
    "React Developer Portfolio",
    "Next.js Developer Portfolio",
    "Frontend Developer Portfolio",
    "Hire Freelance Next.js Developer",
    "SEO Optimized Next.js Landing Pages",
    "Figma-to-Code developer",
    "Next.js & Tailwind CSS Developer",
    "Modern Responsive Web Apps Portfolio",
    "Emmanuel Oye",
  ],
  title: {
    default: 'Emmanuel Oye | Next.js & Frontend Developer',
    template: '%s | Emmanuel Oye',
  },
  description: 'Frontend Developer specializing in Next.js, React, and Tailwind. I build modern, fast and SEO-friendly web apps and landing pages. Check out my work!',
  alternates: {
    canonical: 'https://emmanueloye.xyz',
  },
  openGraph: {
    description: 'Frontend Developer specializing in Next.js, React, and Tailwind. I build modern, fast and SEO-friendly web apps and landing pages. Check out my work!',
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