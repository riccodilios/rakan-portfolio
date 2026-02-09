"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

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

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    smoothScrollToElement(el);
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass glass-strong rounded-full px-6 py-3 flex items-center justify-center gap-8">
          {[
            { id: "projects", label: "Work" },
            { id: "about", label: "About" },
            { id: "capabilities", label: "Capabilities" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-light text-gray-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
