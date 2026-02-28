"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Core Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "UI Systems",
    skills: ["Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "State & Data",
    skills: ["Redux", "REST APIs", "SQL"],
  },
  {
    title: "Tooling & Workflow",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/3 w-[320px] h-[320px] md:w-[520px] md:h-[520px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-22 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Skills & <span className="text-indigo-400">Technologies</span>
        </h2>

        <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm sm:text-base">
          Technologies I use to build scalable and production-ready frontend
          systems.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="
              group relative rounded-2xl p-5
              bg-gradient-to-b from-white/[0.05] to-white/[0.02]
              border border-white/10
              backdrop-blur-sm
              transition-all duration-300
              hover:border-indigo-400/40
            "
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

            <div className="relative z-10 space-y-7">
              {/* Category Title */}
              <h3 className="text-xl font-semibold tracking-tight">
                {group.title}
              </h3>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1.5 text-sm rounded-full
                      bg-white/5
                      text-white/80
                      border border-white/10
                      transition-all duration-300
                      hover:bg-indigo-500/20
                      hover:border-indigo-400/40
                      hover:text-indigo-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
