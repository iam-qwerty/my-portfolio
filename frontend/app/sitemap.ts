import type { MetadataRoute } from 'next'
import { client } from '@/sanity-lib/client'

interface Post {
  slug: string;
  _updatedAt: string | Date;
  _createdAt: string | Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://emmanueloye.com';

  try {
    // Optimized query - only fetch what we need
    const posts: Post[] = await client.fetch(`
      *[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
        "slug": slug.current,
        _updatedAt,
        _createdAt
      }
    `);

    const blogPostEntries: MetadataRoute.Sitemap = posts.map((post: Post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post._createdAt),
      changeFrequency: 'monthly' as const, // More realistic than weekly
      priority: 0.7, // Slightly lower priority than main pages
    }));

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      ...blogPostEntries,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Fallback sitemap if Sanity fails
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
    ];
  }
}