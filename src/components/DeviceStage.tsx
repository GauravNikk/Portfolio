"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, ExternalLink } from "lucide-react";
import { featuredProjects, CaseStudy } from "@/data/projects";
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function DeviceStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scroll progress in container to link rotation/state
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rotate device slightly based on scroll position
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 10, 15]);

  // Track scroll and update index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 3 projects: split into ranges
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  // Main projects to feature in the stage
  const stageProjects = featuredProjects.slice(0, 3);
  const activeProject = stageProjects[activeIndex];

  return (
    <div ref={containerRef} className="relative w-full min-h-[300vh] bg-background">
      {/* Sticky Stage Layout */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 overflow-hidden">
        {/* Left: Project Metadata Column */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center z-20 relative pointer-events-none">
          <div className="max-w-md pointer-events-auto">
            {stageProjects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isActive
                      ? { opacity: 1, y: 0, display: "block" }
                      : { opacity: 0, y: -30, transitionEnd: { display: "none" } }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="font-mono text-xs text-accent tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Featured Work &middot; 0{idx + 1}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-white leading-none">
                    {project.title}
                  </h2>
                  
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-full uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Metrics Highlight */}
                  {project.scale && (
                    <div className="pt-2 border-l-2 border-accent pl-4">
                      <div className="text-2xl font-mono font-bold text-accent">{project.scale}</div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        Production Scale
                      </div>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex items-center gap-6 pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 text-sm font-mono text-white hover:text-accent transition-colors group"
                    >
                      VIEW CASE STUDY
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        PLAY STORE
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Sticky Device Mockup Showcase */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative py-12 md:py-0">
          <div className="absolute inset-0 bg-radial-gradient from-accent/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
          
          <motion.div
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
            className="relative w-[280px] h-[580px] md:w-[300px] md:h-[610px] bg-zinc-950 rounded-[48px] border-[8px] border-zinc-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col items-center p-2.5"
          >
            {/* Camera notch / dynamic island */}
            <div className="absolute top-4 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-end px-4">
              <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full border border-zinc-800/30" />
            </div>

            {/* Screen Inner Container */}
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-zinc-900 relative z-10 border border-zinc-900/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={activeProject?.screenshots?.[0]}
                    alt={`${activeProject?.title} Screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Reflections on screen */}
            <div className="absolute inset-0 pointer-events-none rounded-[48px] border border-white/5 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 z-20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
