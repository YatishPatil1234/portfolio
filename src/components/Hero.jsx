"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh flex items-center justify-center bg-[#050505] overflow-x-clip overflow-y-hidden pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-130 h-130 sm:w-175 sm:h-175 md:w-225 md:h-225 bg-white/5 blur-3xl rounded-full opacity-60" />
      </div>

      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center surface-card"
        style={{
          background: "var(--bg-main)",
          boxShadow: "none",
          border: "none",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-5 sm:space-y-6 md:space-y-7"
        >
          {/* Badge */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="section-kicker mx-auto"
          >
            <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            Frontend Developer • 1.8+ Years
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="section-title text-5xl xs:text-6xl sm:text-7xl md:text-8xl max-w-4xl mx-auto font-800 leading-tight"
          >
            I build <span className="text-white font-800">modern web</span>
            <br />
            applications
          </motion.h1>

          {/* Supporting */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="section-copy text-sm sm:text-base md:text-lg max-w-xl mx-auto"
          >
            Focused on performance, clean UI, and real-world production systems
          </motion.p>

          {/* Tech */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-sm text-[#6B7280]"
          >
            React • Next.js • Tailwind • REST APIs
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="w-16 h-px bg-white/10 mx-auto"
          />

          {/* CTA */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex justify-center gap-3 sm:gap-4 pt-3 flex-wrap"
          >
            <a href="#projects" className="modern-btn">
              View Projects
            </a>

            <a
              href="/resume/Yatish_Patil_Frontend_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-btn"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                border: "1.5px solid var(--border)",
              }}
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
