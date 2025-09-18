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
    title: "Web Development",
    description: "I build  stunning and unique professional websites for individuals, brands, agencies and all sorts of businesses"
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
    title: "RDAS SOFTECH",
    description: "Landing Website for a software solution company developed with Next.js",
    src: "/images/rdas.png",
    link: "https://rdas.com.ng"
  },
  {
    title: "Professional Portfolio Website",
    description: "Professional portfolio website for an incredible client, showcasing her expertise, experience, projects, etc. (still under construction)",  
    src: "/images/opeyemi.png",
    link: "https://opeyemi-five.vercel.app/"
  },
  {
    title: "The Emergence Porch",
    description: "The official website of a non-profit organization.",  
    src: "/images/TEP.png",
    link: "https://tep-one.vercel.app/"
  },
  {
    title: "Cataleex",
    description: "The official website of an experienced web3 marketing agency (still under construction).",  
    src: "/images/Cataleex.png",
    link: "https://cataleex.vercel.app/"
  },
   {
    title: "Dish Palette",
    description: "Next.js Full-stack CRUD recipe blog, with authentication and authorization.",
    src: "/images/dish-palette.png",
    link: "https://dish-palette-fullstack.vercel.app"
  },
  {
    title: "NFT Marketplace",
    description: "Frontend project of a seamless NFT Marketplace built with Next.js and shadcn UI",  
    src: "/images/nft.png",
    link: "https://nft-marketplace-zeta-weld.vercel.app/"
  },
  {
    title: "Isalesbook",
    description: "SEO optimized landing website for a Inventory software solution company",
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
    description: "Landing page for a Web3 startup built with React",
    src: "/images/moonex.png",
    link: "https://moonex-gules.vercel.app/"
  },
]

export const experience = [
  {
    period: "July 2024 - December 2024",
    role: "Next.js Front-end Developer",
    company: "RDAS SOFTTECH",
    link: "https://rdas.com.ng",
    description: "5-months contracts at rdas.com.ng"
  },
  {
    period: "August 2024 - Present",
    role: "Freelance Front-end Developer",
    company: "Self-employed",
    link: "#",
    description: "I currently work as a freelancer, building websites for individuals and businesses."
  },
  // {
  //   period: "2022 - 2023",
  //   role: "Computer Science Student",
  //   company: "University",
  //   link: "#",
  //   description: "Completed coursework in algorithms, data structures, and software engineering principles."
  // }
]