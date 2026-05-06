// import Link from "next/link"
// // import { Calendar, Clock } from "lucide-react"
// // import { cn } from "@/lib/utils"
// // import { motion } from "framer-motion"
// import Image from "next/image"
// import { Post } from "@/lib/types"
// import { urlFor } from "@/sanity-lib/client"

// interface BlogCardProps {
//     post: Post
//     featured?: boolean
//     className?: string
// }

// export default function BlogCard({ post, featured = false, className }: BlogCardProps) {
//     return (
//         <>
//             {post.mainImage ? (
//                 <Image
//                     src={urlFor(post.mainImage).url()}
//                     alt={post.title}
//                     width={600}
//                     height={400}
//                     className="w-full h-48 object-cover"
//                 />
//             ) : (
//                 <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
//                     <span className="text-gray-500">No image available</span>
//                 </div>
//             )}
//             <div className="p-6">
//                 <div className="flex gap-2 mb-2">
//                     {post.categories?.map((cat: string,) => (
//                         <span key={post._id} className="text-sm text-yellow-400">
//                             #{cat}
//                         </span>
//                     ))}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{post.title}</h3>
//                 <p className="text-gray-400 mb-4">{post.excerpt}</p>
//                 <Link
//                     href={`/blog/${post.slug.current}`}
//                     className="text-yellow-400 hover:text-yellow-500 transition-colors"
//                 >
//                     Read more →
//                 </Link>
//             </div>
//         </>
//     )
// }

