import { Metadata } from 'next';
import { client, urlFor } from "@/sanity-lib/client"; // Combined imports
import { sanityFetch } from "@/sanity-lib/live";
import { postQuery } from "@/sanity-lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { components } from "@/lib/portableText";
import { notFound } from "next/navigation";
import { Post } from '@/lib/types'; // Assuming you have a Post type defined
import { PortableTextBlock } from '@portabletext/types';
import ShareButton from '@/app/blog/components/share-button';
import ScrollProgressBar from '@/components/animated/scroll-progress-bar';

export const revalidate = 60;
export const dynamicParams = true;

interface Params {
    params: Promise<{
        slug: string;
    }>;
}

// Helper function to safely get text for description
function getPlainText(blocks: PortableTextBlock[] = []) {
    return blocks
        // loop through each block
        .map(block => {
            // if it's not a text block with children, 
            // return nothing
            if (block._type !== 'block' || !block.children) {
                return ''
            }
            // loop through the children spans, and join the
            // text strings
            return block.children.map((child) => child.text).join('')
        })
        // join the paragraphs leaving split by two linebreaks
        .join('\n\n')
}


// Generate dynamic metadata
export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const { data } = await sanityFetch({ query: postQuery, params: { slug } });
    const post = data as Post | null;

    if (!post) {
        // Return metadata for not found page
        return {
            title: "Post Not Found",
            description: "The requested blog post could not be found.",
        };
    }

    // Generate a description from the body content 
    // if it exists, otherwise use a default description
    // Limit the description to 160 characters
    const description = post.body ? getPlainText(post.body).substring(0, 160) : 'Read this blog post';

    // Generate metadata for the blog post
    return {
        title: post.title, // Use the post's title for SEO
        description: description, // Use the generated description for SEO
        alternates: {
            canonical: `https://emmanueloye.com/blog/${post.slug.current}`, // Add the canonical URL
        },
        openGraph: {
            title: post.title,
            description: description,
            type: 'article',
            publishedTime: post._createdAt,
            authors: post.authorName ? [post.authorName] : [],
            url: `https://emmanueloye.com/blog/${post.slug.current}`, // Add the canonical URL
            images: post.mainImage ? [
                {
                    url: urlFor(post.mainImage).width(1200).height(630).fit('crop').url(), // Use fit('crop') for better OG image aspect ratio
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ] : [], // Add image if it exists
        },
        // Example for Twitter Card (optional)
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: description,
            images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).fit('crop').url()] : [],
        },
    };
}


// This is a dynamic route for blog posts.
export default async function BlogPost({ params }: Params) {
    const { slug } = await params; // Access slug directly from params
    // Fetch the post data using our Sanity client
    const { data } = await sanityFetch({ query: postQuery, params: { slug } });
    const post = data as Post | null;

    // Use Next.js's new notFound() helper to gracefully handle missing data
    if (!post) return notFound();

    const shareURL = `https://emmanueloye.com/blog/${post.slug.current}`;
    return (
        <>
            <ScrollProgressBar />
            <article className="max-w-3xl mx-auto py-16 px-1">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex gap-4 text-gray-400">
                        {post._createdAt && <span>{new Date(post._createdAt).toLocaleDateString()}</span>}
                        {post.authorName && <span>by {post.authorName}</span>}
                    </div>
                </div>

                {post.mainImage ? (
                    <div className="relative w-full h-96 mb-8"> {/* Added container for better image handling */}
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill // Use fill for responsive image sizing within container
                            style={{ objectFit: 'cover' }} // Ensure image covers the area
                            className="rounded-lg"
                            priority // Prioritize loading the main image
                        />
                    </div>
                ) : null}

                <div className="prose prose-lg prose-invert max-w-none"> {/* Increased prose size */}
                    {post.body && <PortableText value={post.body} components={components} />}
                </div>
                <div className='flex justify-center lg:justify-end mt-20'>
                    <ShareButton url={shareURL} title={post.title} /> {/* Share button for social media */}
                </div>
            </article>
        </>
    );
}

// Next.js 15’s new static param generation for dynamic routes.
export async function generateStaticParams() {
    // Fetch only slugs for efficiency
    const posts: { slug: { current: string } }[] = await client
        .withConfig({ useCdn: false })
        .fetch(`*[_type == "post" && defined(slug.current)]{ "slug": slug }`);
    return posts.map((post) => ({
        slug: post.slug.current,
    }));
}
