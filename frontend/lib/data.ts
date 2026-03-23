import { Code, Code2, Search, LayoutDashboard, } from "lucide-react"
import { LucideIcon } from 'lucide-react'

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        icon: Code,
        title: "Full-Stack Web Development",
        description: "I build scalable and robust full-stack web applications using Next.js, Supabase, Convex, and PostgreSQL, handling everything from frontend interfaces to backend architecture."
    },
    {
        icon: Code2,
        title: "Frontend Development",
        description: "I build modern, stunning and responsive interfaces with Next.js and Shadcn ui, focusing on performance and a seamless user experience."
    },
    {
        icon: LayoutDashboard,
        title: "Implementing Designs (Figma to Code)",
        description: "I effortessly transform all sorts of Figma designs into pixel-perfect, responsive web pages that match the original vision."
    },
    {
        icon: Search,
        title: "Next.js Optimized SEO Landing Pages",
        description: "I create high-performance, SEO-friendly landing pages that boost your digital visibility and drive engagement."
    },
]

export const techStack = [
    {
        name: "React",
        logo: "/logos/reactjs.svg",
        class: ""
    },
    {
        name: "Next.js",
        logo: "/logos/nextjs.svg",
        class: "filter brightness-0 invert"
    },
    {
        name: "TypeScript",
        logo: "/logos/typescript.svg",
        class: ""
    },
    {
        name: "Tailwind CSS",
        logo: "/logos/tailwindcss.svg",
        class: ""
    },
    {
        name: "Shadcn UI",
        logo: "/logos/shadcnui.svg",
        class: ""
    },
    {
        name: "GitHub",
        logo: "/logos/github.svg",
        class: ""
    },
    {
        name: "Prisma",
        logo: "/logos/prisma.svg",
        class: ""
    },
    {
        name: "PostgreSQL",
        logo: "/logos/postgresql.svg",
        class: ""
    },
]

export const projects = [
    {
        title: "ICC Studios",
        description: "Sleek and Professional Photography Website",
        src: "/images/icc.jpeg",
        link: "https://icc-delta.vercel.app/"
    },
    {
        title: "Cyberdicts",
        description: "Gamified Cybersecurity Certification Prep",
        src: "/images/cyberdicts.jpeg",
        link: "https://cyberdicts.vercel.app/"
    },
    {
        title: "Which AI Tool",
        description: "AI tool directory where users can find the best AI tools for specific tasks.",
        src: "/images/which-ai.jpg",
        link: "https://which-aitool.vercel.app/"
    },
    {
        title: "RDAS SOFTECH",
        description: "Landing Website for a software solution company developed with Next.js",
        src: "/images/rdas.png",
        link: "https://rdas.com.ng"
    },
    {
        title: "Professional Portfolio Website",
        description: "Custom-designed portfolio site showcasing client experiences and impact.",
        src: "/images/opeyemi.png",
        link: "https://opeyemi-five.vercel.app/"
    },
    {
        title: "The Emergence Porch",
        description: "The official website of a non-profit organization helping young individuals find purpose.",
        src: "/images/TEP.png",
        link: "https://theemergenceporch.org/"
    },
    {
        title: "Cataleex",
        description: "Web3 marketing agency site with a unique, modern design aesthetic.",
        src: "/images/Cataleex.png",
        link: "https://cataleex.vercel.app/"
    },
    {
        title: "Dish Palette",
        description: "Full-stack recipe app with user authentication, image uploads, and a relational PostgreSQL database.",
        src: "/images/dish-palette.png",
        link: "https://dish-palette-fullstack.vercel.app"
    },
    {
        title: "NFT Marketplace",
        description: "Pixel-perfect Figma-to-code implementation with full responsiveness and smooth animations.",
        src: "/images/nft.png",
        link: "https://nft-marketplace-zeta-weld.vercel.app/"
    },
    {
        title: "Isalesbook",
        description: "SEO-optimized landing page for a sales inventory SaaS app.",
        src: "/images/isalesbook.png",
        link: "https://isalesbook.com"
    },
    {
        title: "PullVid App",
        description: "PullVid is a video downloader app that allows users to download videos from various platforms like YouTube, Twitter, Facebook, Instagram, and TikTok.",
        src: "/images/pullvid.png",
        link: "https://pullvid.vercel.app/"
    },
    {
        title: "Moonex",
        description: "Pixel-perfect Figma-to-code Web3 landing page implementation.",
        src: "/images/moonex.png",
        link: "https://moonex-gules.vercel.app/"
    },
]

export const experience = [
    {
        period: "2023 - Present",
        role: "Freelance Frontend Web Developer",
        company: "Freelance",
        link: "#",
        description: "Designed, built, and deployed 8+ production websites for clients across various niches. Delivered full project lifecycles independently, implementing pixel-perfect Figma-to-code conversions with responsive layouts, smooth animations, and SEO optimization."
    },
    {
        period: "July 2025 - Present",
        role: "Web Developer (Volunteer)",
        company: "The Emergence Porch",
        link: "https://theemergenceporch.org/",
        description: "Serving as in-house developer for a non-profit. Integrated analytics, metadata, sitemap generation, and performance budgets to establish SEO best practices."
    },
    {
        period: "July 2024 - December 2024",
        role: "Next.js Front-end Developer",
        company: "RDAS SOFTTECH",
        link: "https://rdas.com.ng",
        description: "5-months contract at rdas.com.ng building accessible frontend components."
    }
]