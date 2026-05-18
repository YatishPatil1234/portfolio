"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import {
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconSparkles,
} from "./icons";
import { fadeInView } from "@/lib/motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Instinct Innovations",
    period: "Sep 2024 – Present",
    location: "Mumbai, India",
    highlight: "Lighthouse SEO Score 100",
    points: [
      "Built a production-grade pharmacy e-commerce platform (FrankRoss) using Next.js (SSR), improving SEO and performance.",
      "Integrated REST APIs across product, cart, checkout, and billing for seamless data flow.",
      "Developed reusable UI components, improving scalability and maintainability.",
      "Worked on PharmacyPro system handling sales, billing, inventory, and reporting workflows.",
      "Implemented GST-compliant E-Invoice and E-Way Bill features.",
    ],
    tech: ["React", "Next.js (SSR)", "TypeScript", "Redux Toolkit", "REST APIs", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <motion.div className="page-container" {...fadeInView}>
        <SectionHeader
          label="Experience"
          title="Work experience"
          description="Building scalable production applications in real-world environments."
        />

        <div className="experience-block">
          {experiences.map((exp) => (
            <article key={exp.company} className="card card-pad experience-card">
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
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
