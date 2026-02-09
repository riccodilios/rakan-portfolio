"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  category: "featured" | "mid-age" | "older";
  buildTime: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

export default function ProjectCard({
  project,
  index,
  hoveredId,
  setHoveredId,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    setHoveredId(null);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredId(project.id);
      }}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="perspective-1000"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        <div className="glass glass-hover glass-reflection rounded-2xl p-6 h-full cursor-pointer relative overflow-hidden group">
        {/* Browser window mockup */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 h-6 rounded bg-white/5 backdrop-blur-sm border border-white/10 px-3 flex items-center">
              <div className="text-xs text-gray-500 font-light truncate">
                {project.name.toLowerCase()}.com
              </div>
            </div>
          </div>
          
          {/* Landing page screenshot */}
          <div className="aspect-video rounded-lg border border-white/10 backdrop-blur-sm relative overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.name} landing page`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority={project.category === "featured"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Project info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-light mb-1">{project.name}</h3>
              <p className="text-sm text-gray-400 font-light">{project.description}</p>
            </div>
            <motion.div
              animate={isHovered ? { scale: 1.1, rotate: 45 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="w-5 h-5 text-gray-500" />
            </motion.div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500 font-light">
            <span>Built in {project.buildTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={
            isHovered
              ? {
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)",
                  ],
                  opacity: 1,
                }
              : {
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0), transparent)",
                  ],
                  opacity: 0,
                }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={
            isHovered
              ? {
                  opacity: [0, 0.3, 0],
                  x: ["-100%", "100%"],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2" />
        </motion.div>
      </div>
      </a>
    </motion.div>
  );
}
