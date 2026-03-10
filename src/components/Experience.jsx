"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Instinct Innovations",
    period: "Sep 2024 – Present",
    points: [
      "Revamped the frontend of a pharmacy e-commerce platform using Next.js with SSR, improving SEO visibility and performance.",
      "Developed reusable UI components and scalable page structures for production applications.",
      "Integrated REST APIs and collaborated with backend teams to ensure reliable data rendering.",
      "Enhanced enterprise retail management modules including sales, billing, and inventory workflows.",
    ],
    tech: ["React", "Next.js", "Redux", "REST APIs", "CSS Modules"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative max-w-6xl mx-auto px-6 pt-28 pb-0 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Work <span className="text-indigo-400">Experience</span>
        </h2>

        <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm sm:text-base">
          My professional experience building real-world frontend systems.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-white/10 ml-3 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative md:pl-10 pl-6"
          >
            {/* Dot */}
            <span className="absolute left-[-6px] top-2 w-3 h-3 bg-indigo-400 rounded-full" />

            {/* Card */}
            <div
              className="
              group relative rounded-2xl p-6
              bg-gradient-to-b from-white/[0.04] to-white/[0.02]
              border border-white/10
              backdrop-blur-sm
              transition-all duration-300
              hover:border-indigo-400/40
              "
            >
              <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>

                <p className="text-indigo-400 text-sm mt-1">
                  {exp.company} • {exp.period}
                </p>

                <ul className="text-white/70 mt-4 text-sm space-y-2 list-disc list-inside">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        px-3 py-1 text-xs rounded-full
                        bg-white/5
                        text-white/80
                        border border-white/10
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
