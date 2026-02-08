"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-indigo-400">Me</span>
          </h2>

          <p className="text-white/70 leading-relaxed">
            I’m a frontend developer with{" "}
            <span className="text-white">
              1.5 years of professional experience
            </span>{" "}
            building clean, responsive, and user-friendly web applications in
            real-world production environments.
          </p>

          <p className="text-white/70 leading-relaxed">
            I work extensively with <span className="text-white">HTML</span>,{" "}
            <span className="text-white">CSS</span>,{" "}
            <span className="text-white">JavaScript</span>,{" "}
            <span className="text-white">React</span>,{" "}
            <span className="text-white">Next.js</span>, and{" "}
            <span className="text-white">Tailwind CSS</span> to build scalable
            UI components and maintain production-ready codebases.
          </p>

          <p className="text-white/70 leading-relaxed">
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
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          <Highlight title="1.5+" subtitle="Years of Experience" />
          <Highlight title="Frontend" subtitle="Development Focus" />
          <Highlight title="React" subtitle="Primary Framework" />
          <Highlight title="Web Apps" subtitle="Production-ready Interfaces" />
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable highlight card */
function Highlight({ title, subtitle }) {
  return (
    <div className="border border-white/10 rounded-lg p-6 text-center">
      <p className="text-2xl font-semibold text-indigo-400 whitespace-nowrap">
        {title}
      </p>
      <p className="text-sm text-white/70 mt-1">{subtitle}</p>
    </div>
  );
}
