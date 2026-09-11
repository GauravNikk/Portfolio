"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronDown, ChevronUp, Cpu, Server, Shield, Smartphone } from "lucide-react";
import { featuredProjects, CaseStudy } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

// Accordion item for technical decisions
function DecisionRow({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-accent transition-colors"
      >
        <span className="font-mono text-sm md:text-base font-bold">{question}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-accent" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-zinc-400 leading-relaxed font-sans font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const projectIndex = featuredProjects.findIndex((p) => p.slug === params.slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = featuredProjects[projectIndex];
  
  // Find next project index
  const nextProjectIndex = (projectIndex + 1) % featuredProjects.length;
  const nextProject = featuredProjects[nextProjectIndex];

  return (
    <div className="case-study-page relative min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      {/* Back button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-white transition-colors mb-12 uppercase group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to projects
      </Link>

      {/* Hero Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
        <div className="md:col-span-8 space-y-6">
          <div className="font-mono text-xs text-accent tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-300 font-sans font-light leading-relaxed">
            {project.oneSentence}
          </p>

          <div className="flex gap-4 pt-2">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                Google Play Store
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.adminUrl && (
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all"
              >
                View Admin Panel
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Fact rail */}
        <div className="md:col-span-4 bg-zinc-950/40 border border-zinc-900 p-6 rounded-2xl space-y-6 font-mono text-xs">
          <h3 className="text-zinc-650 uppercase tracking-widest border-b border-zinc-900 pb-2">Project Facts</h3>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-zinc-500 block uppercase">Role</span>
              <span className="text-white text-sm font-sans">{project.role.split(" — ")[0]}</span>
            </div>
            
            <div className="space-y-1">
              <span className="text-zinc-500 block uppercase">Platforms</span>
              <span className="text-white text-sm">{project.platforms.join(" · ")}</span>
            </div>
            
            <div className="space-y-1">
              <span className="text-zinc-500 block uppercase">Industry</span>
              <span className="text-white text-sm">{project.industry}</span>
            </div>

            {project.scale && (
              <div className="space-y-1">
                <span className="text-zinc-500 block uppercase">Scale</span>
                <span className="text-accent text-sm font-bold">{project.scale}</span>
              </div>
            )}

            {project.result && (
              <div className="space-y-1">
                <span className="text-zinc-500 block uppercase">Result</span>
                <span className="text-accent text-sm font-bold">{project.result}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main visual - screenshot showcase */}
      {project.screenshots?.length > 0 && (
        <div className="w-full h-[400px] md:h-[550px] bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden mb-16 relative flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-grid opacity-[0.02]" />
          {/* Centralized mock image */}
          <div className="relative w-[280px] h-[500px] bg-zinc-950 rounded-[40px] border-[6px] border-zinc-800 shadow-2xl overflow-hidden p-2">
            <div className="absolute top-3 w-20 h-4 bg-black rounded-full z-20" />
            <div className="w-full h-full rounded-[30px] overflow-hidden bg-zinc-900 relative">
              <img
                src={project.screenshots[0]}
                alt={`${project.title} Primary Screenshot`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      )}

      {/* Sections layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-8 space-y-10 font-sans leading-relaxed">
          {/* Section 03 - Context */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs text-accent tracking-widest uppercase">01. The Product</h2>
            <h3 className="text-2xl font-mono font-bold text-white">Product Context</h3>
            <p className="text-zinc-400 font-light text-base leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Section 04 - My Role */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs text-accent tracking-widest uppercase">02. Ownership</h2>
            <h3 className="text-2xl font-mono font-bold text-white">What I Worked On</h3>
            <p className="text-zinc-400 font-light text-base leading-relaxed">
              {project.role}
            </p>
          </section>

          {/* Section 05 - Challenge */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs text-accent tracking-widest uppercase">03. Challenge</h2>
            <h3 className="text-2xl font-mono font-bold text-white">The Engineering Problem</h3>
            <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-xl text-zinc-400 font-light text-base leading-relaxed flex items-start gap-4">
              <Smartphone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{project.challenge}</span>
            </div>
          </section>

          {/* Section 06 - Solution */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs text-accent tracking-widest uppercase">04. Solution</h2>
            <h3 className="text-2xl font-mono font-bold text-white">How it was built</h3>
            <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-xl text-zinc-400 font-light text-base leading-relaxed flex items-start gap-4">
              <Server className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{project.solution}</span>
            </div>

            {/* Simulated architecture line diagram */}
            <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-xl space-y-4 font-mono text-xs text-zinc-500 text-center">
              <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-white font-bold">UI VIEW Layer</span>
                <span>&rarr;</span>
                <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-accent font-bold">STATE Manager</span>
                <span>&rarr;</span>
                <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-white">DOMAIN Logic</span>
                <span>&rarr;</span>
                <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-white">REPOSITORY</span>
                <span>&rarr;</span>
                <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-white">API / WS Stream</span>
              </div>
              <div className="text-[10px] text-zinc-600">
                Representative architecture pipeline &mdash; exact implementation patterns differ based on device frameworks.
              </div>
            </div>
          </section>

          {/* Section 07 - Technical Decisions (Accordions) */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs text-accent tracking-widest uppercase">05. Deep Dive</h2>
            <h3 className="text-2xl font-mono font-bold text-white">Technical Decisions</h3>
            <div className="border-t border-zinc-900 mt-4">
              {project.decisions.map((dec, idx) => (
                <DecisionRow key={idx} question={dec.question} answer={dec.answer} />
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-4 space-y-8">
          {/* Tech stack side strip */}
          <div className="glass-card border border-zinc-900 p-6 rounded-2xl space-y-6">
            <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent" />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          {/* Screenshot side gallery */}
          {project.screenshots?.length > 1 && (
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Interface Assets</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.screenshots.slice(1).map((s, idx) => (
                  <div key={idx} className="border border-zinc-900 bg-zinc-950 p-1.5 rounded-xl overflow-hidden">
                    <img src={s} alt="App screen thumbnail" className="w-full h-auto object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section 12 - Next Project Footer Link */}
      <div className="border-t border-zinc-900 pt-16 mt-16 flex justify-between items-center">
        <div>
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">PREVIOUS PAGE</span>
          <Link href="/projects" className="block font-mono text-sm text-zinc-400 hover:text-white mt-1">
            &larr; All Projects Archive
          </Link>
        </div>

        <div className="text-right">
          <span className="font-mono text-[10px] text-zinc-650 uppercase tracking-widest">NEXT CASE STUDY</span>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 font-mono text-lg font-bold text-white hover:text-accent transition-colors mt-1 group"
          >
            {nextProject.title}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
