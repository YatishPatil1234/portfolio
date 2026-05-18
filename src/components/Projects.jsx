"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { IconExternalLink, IconGitHub } from "./icons";
import { fadeInView } from "@/lib/motion";

const projects = [
  {
    title: "CineScope",
    description:
      "Movie discovery platform with Next.js 14 and TMDB API. SSR, dynamic routing, SEO, and watchlist with a responsive UI.",
    tech: ["Next.js", "React", "Tailwind", "SSR", "REST APIs"],
    live: "https://cinescope-yt.netlify.app/",
    github: "https://github.com/YatishPatil1234/Cine_Scope",
    image: "/projects/cinescope.png",
  },
  {
    title: "FrankRoss Pharmacy",
    description:
      "Pharmacy e-commerce with Next.js (SSR). Improved SEO and performance. Lighthouse SEO score of 100.",
    tech: ["Next.js", "React", "TypeScript", "Redux", "Tailwind"],
    live: "https://frankrosspharmacy.com",
    image: "/projects/frankross.png",
  },
  {
    title: "PharmacyPro",
    description:
      "Pharmacy management for billing, inventory, and reporting. GST E-Invoice and API integrations.",
    tech: ["React", "JavaScript", "REST APIs", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <motion.div className="page-container" {...fadeInView}>
        <SectionHeader
          label="Projects"
          title="Featured work"
          description="Real-world applications focused on performance and usability."
        />

        <ul className="projects-grid list-none m-0 p-0">
          {projects.map((project) => (
            <li key={project.title}>
              <article className="project-card h-full">
                <div className="project-card-media">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="project-image"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[var(--text-muted)]">
                      No preview
                    </div>
                  )}
                </div>

                <div className="project-card-body flex-1">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <IconExternalLink className="icon-inline" aria-hidden />
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <IconGitHub className="icon-inline" aria-hidden />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
