"use client";
import { motion } from "framer-motion";
import FloatingTriangle from "../animated/floating-traingle";
import Section from "../section";
import { services } from "@/lib/data";

const ServicesSection = () => (
  <Section id="services">
    <div className="relative md:px-6 lg:px-16">
      <FloatingTriangle className="text-yellow-400 right-0 top-0" />
      <h3 className="text-3xl font-bold mb-8 text-center">My Services</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700"
          >
            <div className="text-yellow-400 mb-4">
              <service.icon size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default ServicesSection;
