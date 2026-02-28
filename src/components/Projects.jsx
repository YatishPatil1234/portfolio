"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CineScope",
    description:
      "A movie discovery web application featuring search functionality, dynamic routing, and detailed movie views powered by a public API. Focused on reusable React components, clean UI architecture, and efficient API integration.",
    tech: ["React", "Next.js", "Tailwind CSS", "REST API"],
    live: "https://cinescope-yt.vercel.app", // replace later
    github: "https://github.com/YatishPatil1234/Cine_Scope", // replace later
    image: "/projects/cinescope.png",
  },
  {
    title: "Fake News Detection UI",
    description:
      "A responsive frontend interface designed to interact with a news classification system. Implemented form handling, API integration, and structured result presentation with a clean and user-friendly layout.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    live: "#", // replace later
    github: "#", // replace later
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Featured <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
          Frontend projects demonstrating UI architecture, API integration, and
          production-ready development practices.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="
              group relative rounded-2xl p-7
              bg-gradient-to-b from-white/[0.04] to-white/[0.02]
              border border-white/10
              backdrop-blur-sm
              transition-all duration-300
              hover:border-indigo-400/40
              "
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Screenshot Placeholder (Improved) */}
              {/* Project Preview */}
              <div className="relative mb-6 aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/60">
                {project?.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                      className="
          object-contain
          transition-transform duration-500
          group-hover:scale-105
        "
                    />

                    {/* soft cinematic overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/30 text-sm bg-gradient-to-br from-indigo-500/10 to-indigo-500/5">
                    Project Preview
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-tight mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                px-3 py-1 text-xs rounded-full
                bg-white/5
                text-white/80
                border border-white/10
              "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Links */}
              <div className="mt-auto flex items-center gap-6 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
