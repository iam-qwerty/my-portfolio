import { sanityFetch } from "@/sanity-lib/live";
import { blogQuery } from "@/sanity-lib/queries";
import { BlogList } from "@/components/sections/blogList";
import Section from "@/components/section";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest blog posts about web development, AI, modern technologies and frameworks.',
  alternates: {
    canonical: 'https://emmanueloye.com/blog',
  },
  openGraph: {
    title: 'Blog | Emmanuel Oyegbile',
    description: 'Read my latest blog posts about web development, AI, modern technologies and frameworks.',
    url: '/blog',
  },
};

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: blogQuery });

  return (
    <Section id="blog" className="min-h-screen">
      <h1 className="text-4xl text-center font-bold mb-16">Welcome to my Blog</h1>
      <BlogList posts={posts} />
    </Section>
  );
}