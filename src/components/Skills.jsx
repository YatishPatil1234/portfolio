"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import {
  IconCode,
  IconDatabase,
  IconGlobe,
  IconLayers,
  IconWrench,
} from "./icons";
import { fadeInView } from "@/lib/motion";

const skillGroups = [
  {
    title: "Languages",
    Icon: IconCode,
    skills: ["JavaScript", "TypeScript", "Core Java", "SQL"],
  },
  {
    title: "Web",
    Icon: IconGlobe,
    skills: ["HTML5", "CSS3", "Responsive Design", "REST APIs", "Component Architecture"],
  },
  {
    title: "Frameworks",
    Icon: IconLayers,
    skills: ["React.js", "Next.js (SSR)", "Redux Toolkit", "Tailwind CSS", "CSS Modules"],
  },
  {
    title: "Databases",
    Icon: IconDatabase,
    skills: ["PostgreSQL"],
  },
  {
    title: "Tools",
    Icon: IconWrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools", "npm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.div className="page-container" {...fadeInView}>
        <SectionHeader
          label="Skills"
          title="Skills & technologies"
          description="Technologies I use in day-to-day development."
        />

        <div className="skills-grid">
          {skillGroups.map(({ title, Icon, skills }) => (
            <article key={title} className="skill-card card card-pad">
              <div className="skill-card-header">
                <span className="skill-card-icon" aria-hidden>
                  <Icon className="w-4 h-4" />
                </span>
                <h3 className="skill-group-title">{title}</h3>
              </div>
              <div className="badge-row skill-badges">
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
