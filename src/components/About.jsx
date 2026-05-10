"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-shell bg-[#050505]">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-100 h-100 bg-white/5 blur-3xl rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-14 items-start">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-7"
        >
          {/* Badge */}
          <div className="section-kicker">About Me</div>

          {/* Heading */}
          <h2 className="section-title text-4xl sm:text-5xl md:text-5xl leading-tight font-700">
            I build{" "}
            <span className="text-white font-700">scalable and reliable</span>{" "}
            web applications
          </h2>

          {/* Subtext */}
          <p className="section-copy text-sm md:text-base max-w-xl">
            Focused on performance, clean UI, and real-world production systems
            that are easy to maintain and scale.
          </p>

          {/* Divider */}
          <div className="h-px w-16 bg-white/10" />

          {/* Content */}
          <div className="space-y-4 section-copy text-sm">
            <p>
              With{" "}
              <span className="text-[#E5E7EB] font-medium">
                1.8+ years of experience
              </span>
              , I work at{" "}
              <span className="text-[#E5E7EB] font-medium">
                Instinct Innovations
              </span>
              , building production-ready applications used in real-world
              environments.
            </p>

            <p>
              I work primarily with{" "}
              <span className="text-[#E5E7EB]">React</span>,{" "}
              <span className="text-[#E5E7EB]">Next.js</span>, and{" "}
              <span className="text-[#E5E7EB]">Tailwind CSS</span>, along with
              API integration and scalable frontend architecture.
            </p>

            <p>
              I enjoy simplifying complex problems and building interfaces that
              remain maintainable as products grow.
            </p>
          </div>
        </motion.div>

        {/* RIGHT - BETTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <InfoCard label="Experience" value="1.8+ Years" />
          <InfoCard label="Work" value="Production Applications" />
          <InfoCard label="SEO Achievement" value="Lighthouse Score 100" />
          <InfoCard label="Focus" value="UI, Performance, APIs" />
        </motion.div>
      </div>
    </section>
  );
}

/* INFO CARD (MORE MODERN THAN BOX GRID) */
function InfoCard({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="surface-card"
      style={{ padding: "1.25rem", cursor: "pointer" }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {label}
        </span>
        <span
          className="text-base font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {value}
        </span>
      </div>
    </motion.div>
  );
}
