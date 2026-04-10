import HomeSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import dynamic from 'next/dynamic'
const ServicesSection = dynamic(() => import('@/components/sections/services'))
const SkillsSection = dynamic(() => import('@/components/sections/skills'))
const ExperienceSection = dynamic(() => import('@/components/sections/experience'))
const ProjectsSection = dynamic(() => import('@/components/sections/projects'))
const ContactSection = dynamic(() => import('@/components/sections/contact'))
const ScrollProgressBar = dynamic(() => import('@/components/animated/scroll-progress-bar'))
import { sanityFetch } from '@/sanity-lib/live'
import { latestPostsQuery } from '@/sanity-lib/queries'
import { BlogSection } from '@/components/sections/blogSection'

export default async function Portfolio() {
  const { data: latestPosts } = await sanityFetch({ query: latestPostsQuery })

  return (
    <>
      <ScrollProgressBar />
      <HomeSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <SkillsSection />
      <AboutSection />
      <BlogSection posts={latestPosts} />
      <ContactSection />
    </>
  )
}