"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const featuredWork = [
  { number: "01", title: "Caring Patient", type: "Healthcare / On-demand", description: "A home healthcare platform connecting patients and families with verified professionals for compassionate care at home.", metric: "Healthcare at home", image: "/playstore_apps/caring_patient/screenshots/01.jpg", accent: "ochre", href: "/projects" },
  { number: "02", title: "Aajeevansang", type: "Matrimony / Real-time", description: "A Flutter rebuild with modular architecture, BLoC/Cubit, and video calling through Agora and WebRTC.", metric: "10K+ concurrent users", image: "/playstore_apps/aajeevansangcom_-_shaadi_app/screenshots/01.png", accent: "blue", href: "/projects/matrimony-platform" },
  { number: "03", title: "DriverGill", type: "On-demand / Mobility", description: "A driver booking platform where live location, payments, and operational workflows have to agree in real time.", metric: "Razorpay + live tracking", image: "/playstore_apps/drivergill/screenshots/01.png", accent: "coral", href: "/projects/drivergill" },
];

const capabilityGroups = [
  { label: "Mobile", items: "Native Android · Flutter · iOS" },
  { label: "Systems", items: "Real-time · Payments · Offline-first" },
  { label: "Intelligence", items: "AI / ML · Camera · Device integration" },
  { label: "Delivery", items: "Architecture · Reliability · CI/CD" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <section className="hero-section section-frame">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>SENIOR MOBILE APPLICATION ENGINEER</span>
            <span className="eyebrow-rule" />
            <span>VARANASI, INDIA</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I build<br />
            mobile<br />
            products<br />
            that <em>survive</em><br />
            production.
          </motion.h1>
          <motion.p
            className="hero-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.summary}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#work" className="button-white">
              SEE SELECTED WORK <ArrowRight size={15} />
            </Link>
            <a
              href="/Gaurav_Shukla_Senior_Mobile_Application_Engineer.pdf"
              download
              className="action-download-link"
            >
              DOWNLOAD CV <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero-portrait-stage"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Main Portrait Image */}
          <div className="portrait-image-wrap">
            <Image
              src="/gaurav-hero.jpg"
              alt="Gaurav Shukla - Senior Mobile Application Engineer"
              width={540}
              height={522}
              priority
              className="portrait-img"
            />
          </div>

          {/* Floating Badge (Top Right) */}
          <motion.div
            className="hero-badge-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="badge-name">Gaurav Shukla</div>
            <div className="badge-role">Sr. SDE III</div>
          </motion.div>

          {/* Bottom Floating Stats Bar */}
          <motion.div
            className="hero-stats-card"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="stat-block">
              <span className="stat-value">6+</span>
              <span className="stat-desc">YEARS EXPERIENCE</span>
            </div>
            <div className="stat-separator" />
            <div className="stat-block">
              <span className="stat-value">20+</span>
              <span className="stat-desc">PRODUCTION APPS</span>
            </div>
            <div className="stat-separator" />
            <div className="stat-block stat-block-wide">
              <span className="stat-tech-title">MOBILE</span>
              <span className="stat-tech-desc">ANDROID &nbsp;|&nbsp; FLUTTER &nbsp;|&nbsp; iOS</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="proof-strip section-frame"><p className="section-kicker">01 / Proof of work</p><div className="proof-intro"><h2>Useful software,<br /><em>measured honestly.</em></h2><p>Not every project needs a dramatic headline. The useful numbers are the ones that explain what changed after the work shipped.</p></div><div className="metrics-row">{profile.metrics.slice(0, 5).map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>

      <section id="work" className="work-section section-frame"><div className="section-heading"><div><p className="section-kicker">02 / Selected work</p><h2>Products with<br /><em>something at stake.</em></h2></div><p className="heading-note">Gaming, education, mobility, matrimony and the engineering underneath them.</p></div><div className="work-list">{featuredWork.map((project) => <Link href={project.href} className={`work-item ${project.accent}`} key={project.number}><div className="work-meta"><span>{project.number}</span><span>{project.type}</span></div><div className="work-image"><Image src={project.image} alt={`${project.title} mobile app`} fill sizes="(max-width: 768px) 90vw, 42vw" /></div><div className="work-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="work-result">{project.metric} <ArrowUpRight size={15} /></div><span className="case-link">Read case study</span></div></Link>)}</div><div className="center-link"><Link href="/projects" className="text-link">Browse the full app library <ArrowUpRight size={15} /></Link></div></section>

      <section className="engineering-section section-frame"><div className="engineering-copy"><p className="section-kicker">03 / The engineering</p><h2>The interesting part is <em>underneath.</em></h2><p>{profile.shortAbout}</p></div><div className="capability-list">{capabilityGroups.map((group, index) => <div className="capability" key={group.label}><span>0{index + 1}</span><div><h3>{group.label}</h3><p>{group.items}</p></div></div>)}</div></section>

      <section className="career-section section-frame"><div className="career-header"><div><p className="section-kicker">04 / Experience</p><h2>Six+ years of<br /><em>shipping mobile software.</em></h2></div><Link href="/experience" className="text-link">See full experience <ArrowUpRight size={15} /></Link></div><div className="career-line"><div><span>2025 — now</span><h3>Celestial IT Verse</h3><p>Senior Mobile Application Developer</p></div><div><span>2022 — 2024</span><h3>Inventics Software</h3><p>Senior Software Development Engineer</p></div><div><span>2020 — 2021</span><h3>CODEAIR</h3><p>Android Developer</p></div></div></section>

      <section className="contact-section section-frame"><div><p className="section-kicker">05 / Start a conversation</p><h2>Building something<br /><em>difficult?</em></h2></div><div className="contact-side"><p>If you are hiring, building a mobile product, or solving a technically demanding real-time, payment, AI or device-integration problem, let&apos;s talk.</p><a href={`mailto:${profile.email}`} className="button button-dark">Email Gaurav <Mail size={16} /></a><div className="contact-details"><span><MapPin size={14} /> {profile.location}</span><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a></div></div></section>
    </div>
  );
}
