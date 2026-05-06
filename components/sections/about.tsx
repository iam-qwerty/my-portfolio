"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Section from "../section";
import FloatingShape from "../animated/floating-shapes";
import { Download } from "lucide-react";

const AboutSection = () => (
  <Section id="about">
    <div className="grid lg:grid-cols-2 gap-8 items-center relative md:px-6 lg:px-16">
      <FloatingShape className="text-yellow-400 left-0 top-0" />
      <div>
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="mb-4">
          Hi there, I&apos;m a web developer with 2+ years of experience delivering production web apps and client sites.
          I have a proven track record of shipping projects end-to-end using Next.js, TypeScript, and Supabase.
          I studied Computer Science and graduated with a Second Class Upper degree, and I&apos;m passionate about software development and system design.
          I&apos;m comfortable with both client-facing freelance work and collaborative team environments, and I&apos;m always learning and building.
        </p>
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
          style={{ background: 'radial-gradient(circle at center, rgba(255,200,0,0.15), transparent)' }}
        />
      </div>
    </div>
  </Section>
);

export default AboutSection;
