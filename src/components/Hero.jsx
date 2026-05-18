"use client";

import { motion } from "framer-motion";
import GridBackground from "./GridBackground";
import { IconExternalLink } from "./icons";
import { fadeInView } from "@/lib/motion";
import { handleSectionNav } from "@/lib/scroll";

const stack = ["React", "Next.js", "TypeScript", "Tailwind"];

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <GridBackground />

      <motion.div
        className="page-container hero-inner relative z-10"
        {...fadeInView}
      >
        <div className="hero-content">
          <p className="section-kicker">Frontend Developer · 1.8+ Years</p>

          <h1 className="hero-title text-white">
            I build <span className="text-white/80">modern web</span> applications
          </h1>

          <p className="hero-lead">
            Focused on performance, clean UI, and real-world production systems.
          </p>

          <div className="hero-tags">
            {stack.map((item) => (
              <span key={item} className="hero-tag">
                {item}
              </span>
            ))}
          </div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => handleSectionNav(e, "projects")}
            >
              View projects
            </a>
            <a
              href="/resume/Yatish_Patil_Frontend_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <IconExternalLink className="icon-inline" aria-hidden />
              Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
