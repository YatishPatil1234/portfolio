"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Core Java", "SQL"],
    icon: CodeIcon,
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
    icon: GlobeIcon,
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
    icon: LayersIcon,
  },
  {
    title: "Databases",
    skills: ["PostgreSQL"],
    icon: DatabaseIcon,
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools", "npm"],
    icon: ToolsIcon,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-[#050505]">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-97.5 sm:h-97.5 md:w-112.5 md:h-112.5 bg-white/5 blur-3xl rounded-full opacity-40" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        {/* Badge */}
        <div className="section-kicker mb-4">Skills</div>

        <h2 className="section-title text-4xl sm:text-5xl md:text-5xl">
          Skills & Technologies
        </h2>

        <p className="section-copy mt-3 text-base max-w-xl mx-auto">
          Technologies and tools I use in real-world development
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="rounded-xl p-5 surface-card cursor-pointer"
          >
            {/* Title */}
            <div className="mb-4 flex items-center gap-2 text-[#E5E7EB]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/90">
                <group.icon />
              </span>
              <h3 className="text-sm font-semibold tracking-wide">
                {group.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="surface-chip px-3 py-1.5 text-xs font-medium hover:-translate-y-px transition"
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

function CodeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 2 10 6-10 6L2 8l10-6Z" />
      <path d="m2 16 10 6 10-6" />
      <path d="m2 12 10 6 10-6" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18v3h3l6.1-6.1a4 4 0 0 0 2.2-2.2l4.4 4.4a2 2 0 0 0 2.8-2.8l-4.4-4.4a4 4 0 0 0-2.2-2.2Z" />
    </svg>
  );
}
