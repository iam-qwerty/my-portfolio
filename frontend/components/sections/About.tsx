"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import FloatingShape from "../animated/FloatingShapes";
import { Download } from "lucide-react";

const AboutSection = () => (
  <Section id="about">
    <div className="grid lg:grid-cols-2 gap-8 items-center relative md:px-6 lg:px-16">
      <FloatingShape className="text-yellow-400 left-0 top-0" />
      <div>
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="mb-4">
          Hi there, I&apos;m a frontend developer with over a year of hands-on experience building modern, responsive, user-first websites with React, Next.js, and Tailwind. 
          I&apos;m a Computer Science graduate and passionate about software development and AI in general. I enjoy clean code, great UI, and yes, I judge websites that default to light mode lol.
          I&apos;m always learning, always building, and always down to learn and work with others.
        </p>
        {/* <p className="mb-6">
          My journey in tech is driven by curiosity and a desire to solve real-world problems through innovative solutions.
        </p> */}
        <Link href="https://docs.google.com/document/d/1h45-3YuoFLNPnmlLrwINJvo2f0pTGFG9LjQavWsqFBU/export?format=pdf">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </Link>
      </div>
      <div className="relative h-64 md:h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3408_2_-removebg-preview-1d77l2DTtaCcKLIdTmyeBvy55zZDWL.png"
          alt="Emmanuel Oye"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  </Section>
);

export default AboutSection;
