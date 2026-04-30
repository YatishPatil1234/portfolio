"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Core Java", "SQL"],
  },
  {
    title: "Web Technologies",
    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "REST APIs",
      "Component Architecture",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js (SSR)",
      "Redux Toolkit",
      "Tailwind CSS",
      "CSS Modules",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools", "npm"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16 bg-[#050505] overflow-x-clip scroll-mt-28"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] md:w-[450px] md:h-[450px] bg-white/5 blur-3xl rounded-full opacity-40" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        {/* Badge */}
        <div className="inline-flex px-3 py-1 text-xs text-[#9CA3AF] border border-white/10 bg-white/5 rounded-full mb-4">
          Skills
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#E5E7EB]">
          Skills & Technologies
        </h2>

        <p className="mt-3 text-[#9CA3AF] text-base max-w-xl mx-auto">
          Technologies and tools I use in real-world development
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="
              rounded-xl p-5
              bg-[#0a0a0a]/85 backdrop-blur-sm
              border border-white/10
              hover:border-white/20
              transition
            "
          >
            {/* Title */}
            <h3 className="text-sm font-semibold text-[#E5E7EB] mb-4 tracking-wide">
              {group.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3 py-1.5
                    text-xs font-medium
                    rounded-md
                    bg-[#0f0f0f]
                    border border-white/10
                    text-[#E5E7EB]
                    hover:border-white/30
                    hover:-translate-y-[1px]
                    transition
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
