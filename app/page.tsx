"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Capabilities />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
