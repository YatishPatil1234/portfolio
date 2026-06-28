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
import { fadeInView, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const skillGroups = [
  {
    title: "Languages",
    Icon: IconCode,
    skills: ["JavaScript", "TypeScript", "SQL", "Core Java", "Ruby (Basic)"],
  },
  {
    title: "Frontend",
    Icon: IconGlobe,
    skills: [
      "React.js",
      "Next.js (SSR, App Router)",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "ShadCN UI",
      "CSS Modules",
      "HTML5",
      "CSS3",
      "Core Web Vitals",
    ],
  },
  {
    title: "Backend & Databases",
    Icon: IconDatabase,
    skills: [
      "Ruby on Rails",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "JWT Authentication",
      "Sidekiq",
    ],
  },
  {
    title: "DevOps & Cloud",
    Icon: IconLayers,
    skills: ["Docker", "AWS (Basics)"],
  },
  {
    title: "Developer Tools",
    Icon: IconWrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Chrome DevTools", "Linux", "npm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.div className="page-container" {...fadeInView}>
        <SectionHeader
          label="Skills"
          title="Skills & technologies"
          description="Technologies from my resume — frontend, backend, and tooling."
        />

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={staggerViewport}
        >
          {skillGroups.map(({ title, Icon, skills }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="skill-card card card-pad card-interactive"
            >
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
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
