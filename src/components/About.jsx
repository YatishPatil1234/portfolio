"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { IconClock, IconGauge, IconRocket, IconTarget } from "./icons";
import { fadeInView } from "@/lib/motion";

const stats = [
  { label: "Experience", value: "1.8+ Years", Icon: IconClock },
  { label: "Work", value: "Production Apps", Icon: IconRocket },
  { label: "SEO", value: "Lighthouse 100", Icon: IconGauge },
  { label: "Focus", value: "UI · Performance · APIs", Icon: IconTarget },
];

export default function About() {
  return (
    <section id="about" className="section-shell about-section">
      <motion.div className="page-container" {...fadeInView}>
        <motion.div
          className="about-layout"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-main">
            <SectionHeader
              label="About"
              title="Scalable, reliable web applications"
              description="Focused on performance, clean UI, and production systems that scale."
              align="left"
              className="!mb-6"
            />

            <div className="about-copy space-y-4">
              <p>
                With <span className="text-emphasis">1.8+ years of experience</span>, I work at{" "}
                <span className="text-emphasis">Instinct Innovations</span>, building
                production-ready applications used in real-world environments.
              </p>
              <p>
                I work with <span className="text-emphasis">React</span>,{" "}
                <span className="text-emphasis">Next.js</span>, and{" "}
                <span className="text-emphasis">Tailwind CSS</span>, along with API integration
                and scalable frontend architecture.
              </p>
              <p>
                I enjoy simplifying complex problems and building interfaces that stay maintainable
                as products grow.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="section-eyebrow about-stats-eyebrow">
              <span className="section-eyebrow-line" aria-hidden />
              <p className="section-label">Highlights</p>
            </div>
            <ul className="stats-stack list-none m-0 p-0">
              {stats.map(({ label, value, Icon }) => (
                <li key={label} className="stat-card">
                  <span className="stat-icon-wrap" aria-hidden>
                    <Icon className="w-5 h-5 shrink-0" />
                  </span>
                  <div className="stat-card-body">
                    <span className="stat-label">{label}</span>
                    <p className="stat-value">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
