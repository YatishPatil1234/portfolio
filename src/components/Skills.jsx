"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Core",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "State & APIs",
    skills: ["Redux", "REST APIs"],
  },
  {
    title: "Tools & Other Skills",
    skills: ["Git", "GitHub", "Postman", "VS Code", "SQL", "Core Java (Basic)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Skills & <span className="text-indigo-400">Technologies</span>
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          Tools and technologies I use to build scalable, responsive, and
          production-ready frontend applications.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="
              relative rounded-2xl p-6
              bg-white/[0.03]
              border border-white/10
              backdrop-blur-sm
              transition-all duration-300
              hover:border-indigo-400/40
            "
          >
            {/* subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 hover:opacity-100 transition duration-300" />

            <h3 className="text-lg font-medium mb-5 relative z-10">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2 relative z-10">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3 py-1 text-sm rounded-full
                    bg-indigo-500/10
                    text-indigo-300
                    border border-indigo-500/20
                    transition-all duration-300
                    hover:bg-indigo-500/20
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
