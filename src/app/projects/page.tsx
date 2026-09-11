"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { featuredProjects, CaseStudy } from "@/data/projects";
import { appsData } from "@/data/apps";

// Unified type for both featured case studies and other apps
interface ProjectItem {
  id: string;
  name: string;
  category: string;
  summary: string;
  tech: string[];
  metric?: string;
  playStoreUrl?: string;
  caseStudySlug?: string;
  icon?: string;
  screenshot?: string;
  filters: string[];
}

const featuredAssets: Record<string, string> = {
  "real-money-gaming": "/playstore_apps/aag_play_games_win_coins/icon/icon.png",
  "matrimony-platform": "/playstore_apps/aajeevansangcom_-_shaadi_app/icon/icon.png",
  "ekal-acharya": "/playstore_apps/ekal_acharya/icon/icon.png",
  drivergill: "/playstore_apps/drivergill/icon/icon.png",
  snapvisionary: "/playstore_apps/snapvisionary/icon/icon.png",
  filekavach: "/playstore_apps/filekavach/icon/icon.png",
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filters = [
    "ALL",
    "ANDROID",
    "FLUTTER",
    "REAL-TIME",
    "AI",
    "EDUCATION",
    "GAMING",
    "HEALTHCARE",
    "ON-DEMAND",
    "BUSINESS",
  ];

  // Map featured projects and other apps to a single list
  const projectList: ProjectItem[] = [
    // 01. Featured Projects (Case Studies)
    ...featuredProjects.map((p, idx) => ({
      id: `0${idx + 1}`,
      name: p.title,
      category: p.category,
      summary: p.oneSentence,
      tech: p.tech,
      metric: p.scale || p.result,
      playStoreUrl: p.playStoreUrl,
      caseStudySlug: p.slug,
      icon: featuredAssets[p.slug] || appsData.find(a => a.slug === p.slug || a.package.includes(p.slug))?.icon,
      screenshot: p.screenshots[0],
      filters: [
        "FEATURED",
        p.platforms.map(pl => pl.toUpperCase()),
        p.tech.map(t => t.toUpperCase()),
        p.category.split(" · ").map(c => c.toUpperCase())
      ].flat()
    })),
    // 02. Additional Apps (from Apps data that aren't featured yet)
    ...appsData
      .filter(app => !featuredProjects.some(fp => fp.slug === app.slug || app.name.toLowerCase().includes(fp.title.toLowerCase().split(" ")[0])))
      .map((app, idx) => {
        const num = featuredProjects.length + idx + 1;
        const idStr = num < 10 ? `0${num}` : `${num}`;
        
        // Infer filters based on package names / descriptions
        const filterSet = ["APP"];
        const desc = app.description.toLowerCase();
        const pkg = app.package.toLowerCase();
        
        if (pkg.includes("flutter") || desc.includes("flutter")) filterSet.push("FLUTTER");
        else filterSet.push("ANDROID"); // default to Android since most are Play Store
        
        if (desc.includes("socket") || desc.includes("realtime") || desc.includes("live") || desc.includes("chat")) filterSet.push("REAL-TIME");
        if (desc.includes("ai") || desc.includes("vision") || desc.includes("model")) filterSet.push("AI");
        if (desc.includes("school") || desc.includes("education") || desc.includes("teacher") || desc.includes("acharya")) filterSet.push("EDUCATION");
        if (desc.includes("game") || desc.includes("play") || desc.includes("coin") || desc.includes("ludo")) filterSet.push("GAMING");
        if (desc.includes("patient") || desc.includes("doctor") || desc.includes("caregiver") || desc.includes("health")) filterSet.push("HEALTHCARE");
        if (desc.includes("cab") || desc.includes("driver") || desc.includes("booking") || desc.includes("on-demand")) filterSet.push("ON-DEMAND");
        if (desc.includes("business") || desc.includes("slip") || desc.includes("employer") || desc.includes("employee")) filterSet.push("BUSINESS");

        return {
          id: idStr,
          name: app.name,
          category: app.summary || "Android Application",
          summary: app.summary || app.description.slice(0, 100) + "...",
          tech: pkg.includes("flutter") ? ["Flutter", "Dart"] : ["Android", "Kotlin"],
          metric: app.installs + " Installs",
          playStoreUrl: app.playStoreUrl,
          icon: app.icon,
          screenshot: app.screenshots?.[0],
          filters: filterSet
        };
      })
  ];

  // Filter projects list
  const filteredProjects = projectList.filter((project) => {
    if (selectedFilter === "ALL") return true;
    return project.filters.some(f => f.includes(selectedFilter) || selectedFilter.includes(f));
  });

  return (
    <div className="projects-page">
      {/* Header */}
      <div className="projects-header">
        <div className="projects-kicker"><span /> Selected production work</div>
        <h1>
          Products, systems and applications.
        </h1>
        <p>
          A selection of mobile products I&apos;ve built, shipped, maintained, or architected across gaming, education, healthcare, on-demand services, AI, and business platforms.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="projects-filters">
        <Filter size={15} />
        <div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`project-filter ${
                selectedFilter === filter
                  ? "active"
                  : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="project-card"
            >
              {/* Card visual elements */}
              <div className="project-card-body">
                <div className="project-card-top">
                  <span className="project-number">
                    {project.id}
                  </span>
                  
                  {project.icon && (
                    <div className="project-icon">
                      <img src={project.icon} alt={project.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="project-copy">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>
                    {project.name}
                  </h3>
                  <p>
                    {project.summary}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="project-tags">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="project-tag"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons footer */}
              <div className="project-card-footer">
                {project.metric && (
                  <div className="project-metric">
                    <span>Scale:</span> {project.metric}
                  </div>
                )}

                <div className="flex gap-4 items-center">
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-external"
                      title="Google Play"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.caseStudySlug ? (
                    <Link
                      href={`/projects/${project.caseStudySlug}`}
                      className="project-case-study"
                    >
                      Case Study
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="project-no-case">
                      NO CASE STUDY
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
