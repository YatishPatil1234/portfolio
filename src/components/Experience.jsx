"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Instinct Innovations",
    period: "Sep 2024 – Present",
    location: "Mumbai, India",
    highlight: "Lighthouse SEO Score 100",
    points: [
      "Built a production-grade pharmacy e-commerce platform (FrankRoss) using Next.js (SSR), improving SEO and performance.",
      "Integrated REST APIs across product, cart, checkout, and billing for seamless data flow.",
      "Developed reusable UI components, improving scalability and maintainability.",
      "Worked on PharmacyPro system handling sales, billing, inventory, and reporting workflows.",
      "Implemented GST-compliant E-Invoice and E-Way Bill features.",
    ],
    tech: [
      "React",
      "Next.js (SSR)",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "REST APIs",
      "Axios",
      "PostgreSQL",
      "HTML5",
      "CSS3",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-[#050505]">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-97.5 sm:h-97.5 md:w-112.5 md:h-112.5 bg-white/5 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="section-title text-4xl sm:text-5xl md:text-5xl">
          Experience
        </h2>

        <p className="section-copy mt-2 text-sm md:text-base max-w-xl mx-auto">
          Real-world experience building scalable production applications.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative ml-2">
        {/* Line */}
        <div
          className="absolute left-0 top-0 h-full w-px"
          style={{ background: "var(--border)" }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 pb-12"
          >
            {/* Dot */}
            <span
              className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />

            {/* Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="surface-card p-5 sm:p-6"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-[#E5E7EB]">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-[#9CA3AF] mt-1">
                    {exp.company} • {exp.location}
                  </p>
                </div>

                <span className="text-xs text-[#6B7280] md:text-right">
                  {exp.period}
                </span>
              </div>

              {/* Highlight */}
              <div className="mt-4 surface-chip text-xs">{exp.highlight}</div>

              {/* Points */}
              <ul className="mt-4 space-y-2">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#9CA3AF] leading-relaxed flex gap-2"
                  >
                    <span className="text-white/30 mt-1.5 text-[10px]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      px-3 py-1.5
                      text-xs
                      rounded-md
                      bg-[#0f0f0f]
                      border border-white/10
                      text-[#E5E7EB]
                      hover:border-white/20
                      hover:-translate-y-px
                      transition
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
