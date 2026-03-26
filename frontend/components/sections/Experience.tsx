"use client";
import { motion } from "framer-motion";
import FloatingTriangle from "../animated/floating-traingle";
import Section from "../section";
import { experience } from "@/lib/data";
import Link from "next/link";

const ExperienceSection = () => (
  <Section id="experience">
    <div className="relative max-w-3xl mx-auto px-1 md:px-12 lg:px-16">
      <FloatingTriangle className="text-yellow-400 right-0 top-0" />
      <h3 className="text-3xl font-bold mb-8 text-center">Work Experience</h3>
      <div className="space-y-8">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative pl-8 border-l-2 border-yellow-400"
          >
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-[-9px] top-0" />
            <span className="text-yellow-400 text-sm">{exp.period}</span>
            <h4 className="text-xl font-semibold mt-1">{exp.role}</h4>
            <Link href={exp.link} className="text-gray-400 mt-1">{exp.company}</Link>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default ExperienceSection;
