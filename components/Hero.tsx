"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const smoothScrollToElement = (element: HTMLElement) => {
  const targetY = window.scrollY + element.getBoundingClientRect().top - 80;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 800;
  const startTime = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const loop = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    smoothScrollToElement(el);
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        style={{ y, opacity }}
        className="max-w-5xl w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gradient">Rakan Alhakim</span>
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            SaaS product engineer, AI builder, and digital systems strategist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="glass glass-hover glass-reflection px-8 py-4 rounded-full text-lg font-light flex items-center gap-3 mx-auto group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">View Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform relative z-10" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
