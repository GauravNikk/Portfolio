"use client";

import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <div className="experience-page">
      <header className="experience-header">
        <p className="experience-kicker"><span /> Career history</p>
        <h1>6+ years of building software people <em>actually use.</em></h1>
        <p className="experience-intro">My experience spans Native Android, Flutter, and iOS, with production work across gaming, education, matrimony, healthcare, on-demand applications, AI, and connected devices.</p>
      </header>

      <div className="experience-layout">
        <main className="career-rail">
          {experiences.map((experience, index) => (
            <motion.article key={`${experience.company}-${experience.period}`} className="career-entry" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .45 }}>
              <div className="career-marker"><span>0{index + 1}</span></div>
              <div className="career-entry-head">
                <div><p className="career-period">{experience.period}</p><h2>{experience.role}</h2><a href={experience.companyUrl} target="_blank" rel="noreferrer">{experience.company} <ArrowUpRight size={13} /></a></div>
              </div>
              <div className="career-focus">{experience.focus.map((focus) => <span key={focus}>{focus}</span>)}</div>
              {experience.mentoring && <div className="mentoring-note"><Users size={16} /><span>{experience.mentoring}</span></div>}
              <div className="deliverables"><p className="deliverables-label">Key deliverables</p>{experience.projects.map((project) => <div className="deliverable" key={project.title}><div className="deliverable-heading"><h3>{project.title}</h3>{project.slug && <Link href={`/projects/${project.slug}`}>Case study <ArrowUpRight size={13} /></Link>}</div><p>{project.description}</p><div className="deliverable-results">{project.scale && <span><b>Scale</b>{project.scale}</span>}{project.result && <span><b>Result</b>{project.result}</span>}</div></div>)}</div>
            </motion.article>
          ))}
        </main>

        <aside className="experience-aside">
          <section className="aside-panel"><h2><Award size={16} /> Leadership & method</h2><p>Cross-functional alignment with UI designers, QA teams, product managers, and backend engineers.</p><div className="process-list">{["Agile", "Scrum", "Sprint planning", "Code review", "Technical docs"].map((item) => <span key={item}>{item}</span>)}</div></section>
          <section className="aside-panel"><h2><GraduationCap size={16} /> Education</h2><div className="education-list">{profile.education.map((education) => <div key={education.degree}><h3>{education.degree}</h3><p>{education.institution}</p><small>{education.location}</small></div>)}</div></section>
          <Link href="/projects" className="experience-aside-link">Browse selected work <ArrowUpRight size={15} /></Link>
        </aside>
      </div>

      <section className="skills-section">
        <div className="skills-heading"><div><p className="experience-kicker"><span /> Skills and working practice</p><h2>What I use to move<br /><em>work forward.</em></h2></div><p>Tools matter, but production work also depends on communication, judgment, and the ability to help a team ship.</p></div>
        <div className="skills-groups">
          <SkillGroup title="Languages" items={profile.skills.languages} />
          <SkillGroup title="Mobile" items={profile.skills.mobile} />
          <SkillGroup title="Architecture" items={profile.skills.architecture} />
          <SkillGroup title="State management" items={profile.skills.state} />
          <SkillGroup title="Android" items={profile.skills.android} />
          <SkillGroup title="Flutter" items={profile.skills.flutter} />
          <SkillGroup title="Real-time" items={profile.skills.realtime} />
          <SkillGroup title="APIs and AI" items={profile.skills.apis} />
          <SkillGroup title="Payments" items={profile.skills.payments} />
          <SkillGroup title="iOS" items={profile.skills.ios} />
          <SkillGroup title="IoT and devices" items={profile.skills.iot} />
          <SkillGroup title="DevOps and tools" items={profile.skills.devops} />
          <SkillGroup title="Delivery and process" items={profile.skills.delivery} />
          <SkillGroup title="Team management" items={profile.skills.teamManagement} />
        </div>
      </section>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return <div className="skill-group"><h3>{title}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></div>;
}
