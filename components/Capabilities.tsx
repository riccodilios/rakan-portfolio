"use client";

import { motion } from "framer-motion";
import { Code, Brain, Shield, Briefcase, Palette, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Code,
    title: "Full SaaS Platforms",
    description: "End-to-end SaaS development from architecture to deployment",
  },
  {
    icon: Brain,
    title: "AI-Powered Products",
    description: "Building intelligent systems with modern AI capabilities",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Secure systems and cybersecurity research & implementation",
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description: "Decentralized & classified consulting for high-value systems",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "From concept to launch—complete product design & development",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Operational dashboards, financial reporting, and insight systems",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 text-gradient">
            Capabilities
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Building systems that matter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-hover glass-reflection rounded-2xl p-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <capability.icon className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-light mb-3">{capability.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
