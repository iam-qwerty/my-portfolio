import HomeSection from '@/components/sections/Hero'
import AboutSection from '@/components/sections/About'
import dynamic from 'next/dynamic'
const ServicesSection = dynamic(() => import('@/components/sections/Services'))
const SkillsSection = dynamic(() => import('@/components/sections/Skills'))
const ExperienceSection = dynamic(() => import('@/components/sections/Experience'))
const ProjectsSection = dynamic(() => import('@/components/sections/Projects'))
const ContactSection = dynamic(() => import('@/components/sections/Contact'))
const ScrollProgressBar = dynamic(() => import('@/components/animated/ScrollProgessBar'))
import { client } from '@/sanity-lib/client'
import { latestPostsQuery } from '@/sanity-lib/queries'
import { BlogSection } from '@/components/sections/BlogSection'

export default async function Portfolio() {
  const latestPosts = await client.fetch(latestPostsQuery)

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