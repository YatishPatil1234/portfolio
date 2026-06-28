"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import {
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconSparkles,
} from "./icons";
import { fadeInView, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Instinct Innovations",
    period: "Sep 2024 – Present",
    location: "Mumbai, India",
    highlight: "Frontend-focused full-stack on FrankRoss Pharmacy",
    points: [
      "Contributed on FrankRoss Pharmacy, a production-grade pharmacy e-commerce platform serving real-world users.",
      "Developed and maintained frontend features with React.js, Next.js, and TypeScript; contributed to Ruby on Rails backend enhancements and bug fixes.",
      "Built authentication workflows, role-based access control, API integrations, and application security improvements.",
      "Worked with PostgreSQL, Redis, and Sidekiq for backend workflows, background job processing, and enterprise data handling.",
      "Used Docker-based development environments and contributed to deployment workflows, infrastructure setup, and AWS-based processes.",
      "Handled production bug fixes, client-requested enhancements, and performance optimizations while collaborating with clients and internal teams.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Ruby on Rails",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell section-tone">
      <motion.div className="page-container" {...fadeInView}>
        <SectionHeader
          label="Experience"
          title="Professional experience"
          description="Nearly 2 years delivering production features across frontend and backend."
        />

        <motion.div
          className="experience-block"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={staggerViewport}
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.company}
              variants={staggerItem}
              className="card card-pad experience-card card-interactive"
            >
              <div className="experience-header">
                <span className="experience-role-icon" aria-hidden>
                  <IconBriefcase className="w-4 h-4" />
                </span>
                <div className="experience-header-text min-w-0 flex-1">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-meta">{exp.company}</p>
                  <p className="experience-meta">
                    <IconMapPin className="meta-icon" aria-hidden />
                    {exp.location}
                  </p>
                </div>
                <p className="experience-date">
                  <IconCalendar className="meta-icon" aria-hidden />
                  {exp.period}
                </p>
              </div>

              <div className="experience-highlight">
                <span className="badge badge-accent">
                  <IconSparkles className="w-3.5 h-3.5 shrink-0" aria-hidden />
                  {exp.highlight}
                </span>
              </div>

              <ul className="experience-list list-disc">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="experience-tech">
                <div className="section-eyebrow experience-tech-eyebrow">
                  <span className="section-eyebrow-line" aria-hidden />
                  <p className="section-label">Technologies</p>
                </div>
                <div className="tech-badge-row">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
