"use client";
import Image from "next/image";
import Section from "../section";
import FloatingShape from "../animated/floating-shapes";
import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

const SkillsSection = () => (
  <Section id="skills">
    <div className="relative md:px-6 lg:px-16">
      <FloatingShape className="text-yellow-400 left-0 bottom-0" />
      <h3 className="text-3xl font-bold mb-8 text-center">Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-4 relative">
              <Image
                src={tech.logo}
                alt={tech.name}
                layout="fill"
                objectFit="contain"
                className={tech.class}
              />
            </div>
            <span className="font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default SkillsSection;
