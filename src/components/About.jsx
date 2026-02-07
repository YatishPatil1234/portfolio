"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-indigo-400">Me</span>
          </h2>

          <p className="text-white/70 leading-relaxed">
            I’m a frontend developer who enjoys building clean, responsive, and
            user-focused web interfaces. I care deeply about writing
            maintainable code and creating smooth user experiences.
          </p>

          <p className="text-white/70 leading-relaxed">
            My primary stack includes <span className="text-white">React</span>,{" "}
            <span className="text-white">Next.js</span>, and{" "}
            <span className="text-white">Tailwind CSS</span>. I focus on
            performance, accessibility, and modern UI patterns.
          </p>

          <p className="text-white/70 leading-relaxed">
            Currently, I’m focused on improving my frontend architecture skills
            and building production-ready applications.
          </p>
        </motion.div>

        {/* Right: Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="border border-white/10 rounded-lg p-6">
            <p className="text-3xl font-bold text-indigo-400">1+</p>
            <p className="text-sm text-white/70 mt-1">Years Experience</p>
          </div>

          <div className="border border-white/10 rounded-lg p-6">
            <p className="text-3xl font-bold text-indigo-400">10+</p>
            <p className="text-sm text-white/70 mt-1">Projects Built</p>
          </div>

          <div className="border border-white/10 rounded-lg p-6">
            <p className="text-3xl font-bold text-indigo-400">React</p>
            <p className="text-sm text-white/70 mt-1">Primary Focus</p>
          </div>

          <div className="border border-white/10 rounded-lg p-6">
            <p className="text-3xl font-bold text-indigo-400">UI</p>
            <p className="text-sm text-white/70 mt-1">Clean & Responsive</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
