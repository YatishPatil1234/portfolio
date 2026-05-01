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
    <section
      id="experience"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-20 pb-8 sm:pb-12 bg-[#050505] overflow-x-clip scroll-mt-28"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] md:w-[450px] md:h-[450px] bg-white/5 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-[#E5E7EB]">
          Experience
        </h2>

        <p className="mt-2 text-[#9CA3AF] text-sm md:text-base max-w-xl mx-auto">
          Real-world experience building scalable production applications.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative ml-2">
        {/* Line */}
        <div
          className="absolute left-0 top-0 h-full w-[1px]"
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
              className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />

            {/* Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#0a0a0a]/85 backdrop-blur-sm border border-[var(--border)] rounded-xl p-5 sm:p-6 hover:border-[var(--border-strong)] transition-all duration-300"
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
              <div className="mt-4 inline-flex px-3 py-1.5 text-xs rounded-full bg-[#0f0f0f] border border-white/10 text-[#E5E7EB]">
                {exp.highlight}
              </div>

              {/* Points */}
              <ul className="mt-4 space-y-2">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#9CA3AF] leading-relaxed flex gap-2"
                  >
                    <span className="text-white/30 mt-[6px] text-[10px]">
                      •
                    </span>
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
                      hover:-translate-y-[1px]
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
