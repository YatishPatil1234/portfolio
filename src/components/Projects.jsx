"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CineScope",
    description:
      "Production-ready movie discovery platform built with Next.js 14 and TMDB API. Implemented SSR, dynamic routing, SEO optimization, and watchlist functionality with a fully responsive UI.",
    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "SSR",
      "Dynamic Routing",
      "REST APIs",
    ],
    live: "https://cinescope-yt.netlify.app/",
    github: "https://github.com/YatishPatil1234/Cine_Scope",
    image: "/projects/cinescope.png",
  },
  {
    title: "FrankRoss Pharmacy",
    description:
      "Production-grade pharmacy e-commerce platform built with Next.js (SSR), improving SEO, performance, and scalable UI architecture. Achieved Lighthouse SEO score of 100.",
    tech: ["Next.js", "React", "TypeScript", "Redux", "Tailwind", "REST APIs"],
    live: "https://frankrosspharmacy.com",
    image: "/projects/frankross.png",
  },
  {
    title: "PharmacyPro",
    description:
      "Retail pharmacy management system handling billing, inventory, and reporting workflows. Implemented GST E-Invoice, API integrations, and improved system stability.",
    tech: ["React", "Next.js", "JavaScript", "REST APIs", "PostgreSQL", "SQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-[#050505]">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-95 h-95 sm:w-125 sm:h-125 md:w-150 md:h-150 bg-white/5 blur-3xl rounded-full opacity-40" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="section-kicker mb-4">Projects</div>

        <h2 className="section-title text-4xl sm:text-5xl md:text-5xl">
          Featured Work
        </h2>

        <p className="section-copy mt-3 max-w-xl mx-auto text-sm md:text-base">
          Real-world applications focused on performance and usability
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-xl overflow-hidden surface-card"
          >
            {/* IMAGE */}
            <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-black">
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-[#6B7280] text-sm">
                  No Preview
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#E5E7EB]">
                {project.title}
              </h3>

              <p className="section-copy text-sm leading-relaxed">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="surface-chip px-3 py-1.5 text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-3 pt-3 flex-wrap">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      min-h-10 px-4 py-2
                      text-xs font-semibold
                      rounded-md
                      bg-white text-[#050505]!
                      hover:bg-white/90
                      active:scale-[0.97]
                      transition
                    "
                  >
                    <svg
                      className="text-[#050505]"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 3h7v7" />
                      <path d="M10 14L21 3" />
                      <path d="M21 14v7h-7" />
                      <path d="M3 10v11h11" />
                    </svg>
                    Live
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      min-h-10 px-4 py-2
                      text-xs font-medium
                      rounded-md
                      border border-white/10
                      text-[#9CA3AF]
                      hover:text-white
                      hover:border-white/30
                      active:scale-[0.97]
                      transition
                    "
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.6.11.82-.26.82-.58v-2.17c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.2 1.8 1.2 1.04 1.8 2.72 1.28 3.38.98.1-.76.4-1.28.72-1.57-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.64.24 2.86.12 3.16.74.82 1.2 1.86 1.2 3.14 0 4.52-2.75 5.5-5.36 5.8.42.36.8 1.08.8 2.18v3.23c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
