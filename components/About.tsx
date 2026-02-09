"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass glass-reflection rounded-3xl p-8 sm:p-12 md:p-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-light mb-8 text-gradient"
          >
            About
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-300 font-light leading-relaxed"
          >
            <p>
              I build SaaS platforms, AI-powered products, and digital systems that solve real problems 
              for businesses and organizations. Based in Riyadh, Saudi Arabia, I focus on end-to-end 
              product development—from initial design concepts to production launches.
            </p>
            
            <p>
              My work centers on systems thinking: understanding how components interact, how data flows, 
              and how users experience products. I specialize in finance & operations software, 
              cybersecurity applications, and decentralized concepts that require both technical depth 
              and product intuition.
            </p>
            
            <p>
              Speed and precision matter. I've built full platforms in days, not months—not by cutting 
              corners, but by understanding what truly matters and executing with clarity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
