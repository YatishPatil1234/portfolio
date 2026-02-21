"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            About <span className="text-indigo-400">Me</span>
          </h2>

          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            I’m a frontend developer with{" "}
            <span className="text-white">
              1.5 years of professional experience
            </span>{" "}
            building clean, responsive, and user-friendly web applications in
            real-world production environments.
          </p>

          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            I work extensively with <span className="text-white">HTML</span>,{" "}
            <span className="text-white">CSS</span>,{" "}
            <span className="text-white">JavaScript</span>,{" "}
            <span className="text-white">React</span>,{" "}
            <span className="text-white">Next.js</span>, and{" "}
            <span className="text-white">Tailwind CSS</span> to build scalable
            UI components and maintain production-ready codebases.
          </p>

          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            I also work with <span className="text-white">Redux</span>,{" "}
            <span className="text-white">REST APIs</span>,{" "}
            <span className="text-white">Git</span>,{" "}
            <span className="text-white">Postman</span>,{" "}
            <span className="text-white">SQL</span>, and{" "}
            <span className="text-white">VS Code</span>, with a basic
            understanding of <span className="text-white">Core Java</span>.
          </p>
        </motion.div>

        {/* Right: Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          <Highlight title="1.5+" subtitle="Years Experience" />
          <Highlight title="Frontend" subtitle="Primary Focus" />
          <Highlight title="React" subtitle="Core Framework" />
          <Highlight title="Web Apps" subtitle="Production Ready" />
        </motion.div>
      </div>
    </section>
  );
}

/* Premium Highlight Card */
function Highlight({ title, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        relative rounded-xl p-6 text-center
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-sm
        transition-all duration-300
        hover:border-indigo-400/40
      "
    >
      <div className="absolute inset-0 rounded-xl bg-indigo-500/5 opacity-0 hover:opacity-100 transition duration-300" />

      <p className="relative z-10 text-2xl md:text-3xl font-semibold text-indigo-400 whitespace-nowrap">
        {title}
      </p>
      <p className="relative z-10 text-sm text-white/70 mt-2">{subtitle}</p>
    </motion.div>
  );
}
