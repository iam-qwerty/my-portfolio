'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, X } from 'lucide-react'
import Link from 'next/link'
import Section from '../Section'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const emailSubject = "Inquiry"
  const emailBody = "Hello Emmanuel, I would like to..."

  return (
    <Section id="home">
      <div className="flex flex-col items-center text-center relative mb-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 pt-8 md:pt-6"
        >
          Hi there! I&apos;m Emmanuel Oye.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-xl mb-8 leading-relaxed"
        >
          Frontend & Full-Stack Web Developer. <br />
          I build Beautiful, Sleek, and Modern Websites and Web Apps.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            <a href="#contact">Get in touch</a>
          </Button>
          <div className="flex gap-4">
            {[
              { icon: Github, link: "https://github.com/iam-qwerty" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/emmanuel-oyegbile/" },
              { icon: Mail, link: `mailto:eabiodun45@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}` },
              { icon: X, link: "https://x.com/iam__qwerty" }
            ].map(({ icon: Icon, link }, index) => (
              <Link key={index} target="_blank" href={link}>
                <Button variant="ghost" size="icon" className="rounded-full hover:text-yellow-400">
                  <Icon className="h-5 w-5" />
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </Section>
  )
}