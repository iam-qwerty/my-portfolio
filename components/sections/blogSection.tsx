'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity-lib/client";
import { Post } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogSectionProps {
    posts: Post[];
}

export const BlogSection = ({ posts }: BlogSectionProps) => (
    <section className="relative px-1 py-16 md:px-6 lg:px-16">
        {/* <div className="container mx-auto px-4"> */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Latest Blog Posts</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
                Explore thoughts, insights and news on web development, AI, modern technologies and frameworks.
            </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {posts.map((post: Post, i: number) => (
                <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-gray-800 rounded-lg overflow-hidden "
                >
                    {post.mainImage ? (
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                        />
                    ) : (
                        <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                            <span className="text-gray-500">No image available</span>
                        </div>
                    )}
                    <div className="p-6">
                        <div className="flex gap-2 mb-2">
                            {post.categories?.map((cat: string,) => (
                                <span key={post._id} className="text-sm text-yellow-400">
                                    #{cat}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-400 mb-4">{post.excerpt}</p>
                        <Link
                            href={`/blog/${post.slug.current}`}
                            className="text-yellow-400 hover:text-yellow-500 transition-colors"
                        >
                            Read more →
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
        <div className="text-center">
            <Link href="/blog">
                <Button size="lg" className="bg-yellow-400 text-black rounded-lg group">
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>
        {/* </div> */}
    </section>
);