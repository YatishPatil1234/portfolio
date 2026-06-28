"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { IconClock, IconGauge, IconRocket, IconTarget } from "./icons";
import { fadeInView, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const stats = [
  { label: "Experience", value: "Nearly 2 years", Icon: IconClock },
  { label: "Company", value: "Instinct Innovations", Icon: IconRocket },
  { label: "Performance", value: "Lighthouse SEO 100", Icon: IconGauge },
  { label: "Focus", value: "Full-stack · Production", Icon: IconTarget },
];

export default function About() {
  return (
    <section id="about" className="section-shell about-section">
      <motion.div className="page-container" {...fadeInView}>
        <div className="about-layout">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={staggerViewport}
            transition={{ duration: 0.45 }}
          >
            <SectionHeader
              label="About"
              title="Production-focused engineer"
              description="Professional summary — what I build and how I work."
              align="left"
              className="!mb-6"
            />

            <motion.div
              className="about-copy space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={staggerViewport}
            >
              <motion.p variants={staggerItem}>
                Associate Software Engineer with nearly 2 years of experience building scalable,
                production-ready web applications using React.js, Next.js, and TypeScript. I work on
                frontend architecture, REST API integration, SSR, App Router, authentication workflows,
                and enterprise application development.
              </motion.p>
              <motion.p variants={staggerItem}>
                At{" "}
                <span className="text-emphasis">Instinct Innovations</span> in Mumbai, I contribute
                across the stack — Ruby on Rails, PostgreSQL, Redis, Docker, and AWS — while shipping
                features on pharmacy e-commerce and retail management platforms used in production.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={staggerViewport}
          >
            <motion.div variants={staggerItem} className="section-eyebrow about-stats-eyebrow">
              <span className="section-eyebrow-line" aria-hidden />
              <p className="section-label">Highlights</p>
            </motion.div>
            <ul className="stats-stack list-none m-0 p-0">
              {stats.map(({ label, value, Icon }) => (
                <motion.li
                  key={label}
                  variants={staggerItem}
                  className="stat-card card-interactive"
                >
                  <span className="stat-icon-wrap" aria-hidden>
                    <Icon className="w-5 h-5 shrink-0" />
                  </span>
                  <div className="stat-card-body">
                    <span className="stat-label">{label}</span>
                    <p className="stat-value">{value}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
