"use client";

import { motion } from "framer-motion";
import GridBackground from "./GridBackground";
import RotatingText from "./RotatingText";
import { IconChevronDown, IconExternalLink } from "./icons";
import { handleSectionNav } from "@/lib/scroll";
import { siteConfig } from "@/lib/site";
import { heroIntro, staggerItem } from "@/lib/motion";

const heroStackChips = ["React", "Next.js", "TypeScript", "Tailwind"];

export default function Hero() {
  return (
    <section id="top" className="hero-section" aria-label="Introduction">
      <GridBackground />

      <motion.div className="page-container hero-inner relative z-10">
        <motion.div
          className="hero-layout"
          variants={heroIntro}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-content">
            <motion.p variants={staggerItem} className="hero-greeting">
              Hi, I&apos;m
            </motion.p>

            <motion.h1 variants={staggerItem} className="hero-title">
              {siteConfig.name}
              <span className="hero-title-accent">.</span>
            </motion.h1>

            <motion.div variants={staggerItem} className="hero-role-line">
              <span className="hero-role-prefix">I&apos;m a</span>
              <RotatingText items={siteConfig.heroRoles} />
            </motion.div>

            <motion.p variants={staggerItem} className="hero-lead">
              {siteConfig.heroLead}
            </motion.p>

            <motion.p variants={staggerItem} className="hero-meta">
              {siteConfig.experience} · {siteConfig.company} · {siteConfig.location}
            </motion.p>

            <motion.ul
              variants={staggerItem}
              className="hero-chips"
              aria-label="Core technologies"
            >
              {heroStackChips.map((skill) => (
                <li key={skill}>
                  <span className="hero-chip">{skill}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={staggerItem} className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => handleSectionNav(e, "projects")}
              >
                View projects
              </a>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <IconExternalLink className="icon-inline" aria-hidden />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.aside
            variants={staggerItem}
            className="hero-aside"
            aria-label="Developer stack preview"
          >
            <div className="hero-code-window">
              <div className="hero-code-toolbar" aria-hidden>
                <span className="hero-code-dot hero-code-dot--close" />
                <span className="hero-code-dot hero-code-dot--minimize" />
                <span className="hero-code-dot hero-code-dot--maximize" />
                <span className="hero-code-filename">developer.ts</span>
              </div>
              <pre className="hero-code">
                <code>
                  <span className="hero-code-kw">const</span>{" "}
                  <span className="hero-code-key">developer</span>
                  <span className="hero-code-punct"> = </span>
                  <span className="hero-code-punct">{"{"}</span>
                  {"\n  "}
                  <span className="hero-code-key">role</span>
                  <span className="hero-code-punct">: </span>
                  <span className="hero-code-str">&quot;{siteConfig.role}&quot;</span>
                  <span className="hero-code-punct">,</span>
                  {"\n  "}
                  <span className="hero-code-key">stack</span>
                  <span className="hero-code-punct">: [</span>
                  {"\n    "}
                  <span className="hero-code-str">&quot;React&quot;</span>
                  <span className="hero-code-punct">,</span>
                  {"\n    "}
                  <span className="hero-code-str">&quot;Next.js&quot;</span>
                  <span className="hero-code-punct">,</span>
                  {"\n    "}
                  <span className="hero-code-str">&quot;TypeScript&quot;</span>
                  {"\n  "}
                  <span className="hero-code-punct">],</span>
                  {"\n  "}
                  <span className="hero-code-key">focus</span>
                  <span className="hero-code-punct">: </span>
                  <span className="hero-code-str">&quot;full-stack apps&quot;</span>
                  {"\n"}
                  <span className="hero-code-punct">{"};"}</span>
                </code>
              </pre>
              <div className="hero-code-glow" aria-hidden />
            </div>
          </motion.aside>
        </motion.div>
      </motion.div>

      <button
        type="button"
        className="hero-scroll-cue"
        aria-label="Scroll to about"
        onClick={(e) => handleSectionNav(e, "about")}
      >
        <IconChevronDown className="hero-scroll-cue-icon" aria-hidden />
      </button>
    </section>
  );
}
