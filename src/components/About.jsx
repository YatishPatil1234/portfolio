"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="text-indigo-400">Me.</span>
          </h2>

          {/* Strong Positioning Line */}
          <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
            I build scalable, maintainable, and production-ready frontend
            applications with clean architecture and performance-first thinking.
          </p>

          {/* Divider */}
          <div className="h-px w-16 bg-white/10" />

          {/* Paragraphs */}
          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            With{" "}
            <span className="text-white font-medium">
              1.5 years of professional experience
            </span>
            , I’ve worked in real-world environments delivering responsive
            interfaces, integrating APIs, and contributing to structured
            frontend systems.
          </p>

          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            My core stack includes <span className="text-white">React</span>,{" "}
            <span className="text-white">Next.js</span>, and{" "}
            <span className="text-white">Tailwind CSS</span>, along with
            experience in <span className="text-white">Redux</span>,{" "}
            <span className="text-white">REST APIs</span>,{" "}
            <span className="text-white">Git</span>, and modern development
            workflows.
          </p>

          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            I focus on reusable component systems, UI consistency, and writing
            clean code that scales as products grow.
          </p>
        </motion.div>

        {/* RIGHT HIGHLIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-6"
        >
          <Highlight title="1.5+" subtitle="Years Experience" />
          <Highlight title="Production" subtitle="Real-world Projects" />
          <Highlight title="Component" subtitle="Architecture Focus" />
          <Highlight title="Performance" subtitle="UI Optimization" />
        </motion.div>
      </div>
    </section>
  );
}

/* PREMIUM HIGHLIGHT CARD */
function Highlight({ title, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        group relative rounded-2xl p-6 text-center
        bg-gradient-to-b from-white/[0.04] to-white/[0.02]
        border border-white/10
        backdrop-blur-sm
        transition-all duration-300
        hover:border-indigo-400/50
      "
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

      <p className="relative z-10 text-3xl font-bold text-indigo-400 tracking-tight">
        {title}
      </p>

      <p className="relative z-10 text-xs uppercase tracking-wide text-white/60 mt-2">
        {subtitle}
      </p>
    </motion.div>
  );
}
