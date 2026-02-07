"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "State & Data",
    skills: ["Redux", "REST APIs"],
  },
  {
    title: "Backend Basics",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Skills & <span className="text-indigo-400">Tools</span>
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable, and
          user-focused web applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
          >
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
