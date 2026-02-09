"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  name: string;
  category: "featured" | "mid-age" | "older";
  buildTime: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: "finora",
    name: "Finora",
    category: "featured",
    buildTime: "10 days",
    description: "Full SaaS platform for financial operations",
    tags: ["SaaS", "Finance", "Full-stack"],
    image: "/projects/finora.png",
  },
  {
    id: "gearvo",
    name: "Gearvo",
    category: "featured",
    buildTime: "2 days",
    description: "Advanced product management system",
    tags: ["SaaS", "Product", "AI"],
    image: "/projects/gearvo.png",
  },
  {
    id: "pulse",
    name: "Pulse",
    category: "featured",
    buildTime: "3 days",
    description: "Real-time analytics and monitoring platform",
    tags: ["SaaS", "Analytics", "Real-time"],
    image: "/projects/pulse.png",
  },
  {
    id: "sakinah",
    name: "Sakinah",
    category: "featured",
    buildTime: "1 day",
    description: "Elegant digital experience platform",
    tags: ["Design", "Product", "Web"],
    image: "/projects/sakinah.png",
  },
  {
    id: "nk-arch",
    name: "NK Arch Design",
    category: "mid-age",
    buildTime: "4 days",
    description: "Architecture portfolio and design showcase",
    tags: ["Design", "Portfolio", "Web"],
    image: "/projects/nk-arch.png",
  },
  {
    id: "codesync",
    name: "CodeSync",
    category: "mid-age",
    buildTime: "3 days",
    description: "Web agency platform and client management",
    tags: ["Agency", "SaaS", "Web"],
    image: "/projects/codesync.png",
  },
  {
    id: "futroball",
    name: "Futroball",
    category: "older",
    buildTime: "6 days",
    description: "Sports platform and community",
    tags: ["Sports", "Community", "Web"],
    image: "/projects/futroball.png",
  },
  {
    id: "yazeed-blog",
    name: "Yazeed Personal Blog",
    category: "older",
    buildTime: "1 day",
    description: "Personal blog and content platform",
    tags: ["Blog", "Content", "Web"],
    image: "/projects/yazeed-blog.png",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const featuredProjects = projects.filter((p) => p.category === "featured");
  const midAgeProjects = projects.filter((p) => p.category === "mid-age");
  const olderProjects = projects.filter((p) => p.category === "older");

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 text-gradient">
            Recent Work
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Building serious technology with precision and speed
          </p>
        </motion.div>

        <div className="space-y-24">
          {featuredProjects.length > 0 && (
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-light text-gray-400 mb-8"
              >
                Featured
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                  />
                ))}
              </div>
            </div>
          )}

          {midAgeProjects.length > 0 && (
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-light text-gray-400 mb-8"
              >
                Mid-Age Work
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {midAgeProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + featuredProjects.length}
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                  />
                ))}
              </div>
            </div>
          )}

          {olderProjects.length > 0 && (
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-light text-gray-400 mb-8"
              >
                Older Projects
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {olderProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + featuredProjects.length + midAgeProjects.length}
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm font-light">
            Also experienced in blogs, restaurants, e-commerce, AI chatbots with reporting,
            cybersecurity research, and decentralized & classified consulting concepts
          </p>
        </motion.div>
      </div>
    </section>
  );
}
