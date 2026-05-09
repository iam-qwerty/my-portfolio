import Script from 'next/script'

interface JsonLdProps {
  json: Record<string, unknown>
}

export function JsonLd({ json }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      strategy="beforeInteractive"
    />
  )
}

/* ── Homepage – Person schema ── */
export function homepageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emmanuel Oyegbile',
    url: 'https://emmanueloye.com',
    jobTitle: 'Web Developer',
    description:
      'Web developer with 2+ years of experience delivering production web apps and client sites. Specializing in Next.js, TypeScript, and Supabase.',
    sameAs: [
      // Add your actual social/profile URLs here
      // 'https://github.com/yourhandle',
      // 'https://linkedin.com/in/yourhandle',
      // 'https://twitter.com/yourhandle',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
      'Sanity CMS',
    ],
  }
}

/* ── Blog post – Article schema ── */
export function blogPostJsonLd(post: {
  title: string
  slug: string
  description: string
  publishedAt: string
  authorName: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.imageUrl,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.authorName,
    },
    publisher: {
      '@type': 'Person',
      name: 'Emmanuel Oyegbile',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://emmanueloye.com/blog/${post.slug}`,
    },
  }
}

/* ── Website schema for sitemap/logo ── */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Emmanuel Oyegbile',
    url: 'https://emmanueloye.com',
  }
}
