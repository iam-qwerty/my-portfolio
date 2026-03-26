'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity-lib/client";
import { Post } from "@/lib/types";

interface BlogListProps {
    posts: Post[];
}

export const BlogList = ({ posts }: BlogListProps) => (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-1 md:px-8 lg:px-16">
        {posts.map((post: Post, i: number) => (
            <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-800 rounded-lg overflow-hidden"
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
);