"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh flex items-center justify-center bg-[#050505] overflow-x-clip overflow-y-hidden pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-white/5 blur-3xl rounded-full opacity-60" />
      </div>

      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center modern-card"
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
          className="space-y-6 sm:space-y-7 md:space-y-8"
        >
          {/* Badge */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs text-[#9CA3AF] bg-white/5 border border-[var(--border)] rounded-full"
          >
            <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            Frontend Developer • 1.8+ Years
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-[#E5E7EB] max-w-4xl mx-auto"
          >
            I build <span className="text-white">modern web</span>
            <br />
            applications
          </motion.h1>

          {/* Supporting */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-sm sm:text-base md:text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed"
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
            className="w-16 h-[1px] bg-white/10 mx-auto"
          />

          {/* CTA */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex justify-center gap-3 sm:gap-4 pt-4 flex-wrap"
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
