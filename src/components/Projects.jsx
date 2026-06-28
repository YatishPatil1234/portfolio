"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { IconExternalLink, IconGitHub } from "./icons";
import { fadeInView, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const projects = [
  {
    title: "FrankRoss Pharmacy",
    type: "E-commerce Platform · Production",
    description:
      "Revamped and maintained a production-grade pharmacy e-commerce platform with Next.js and Ruby on Rails for real-world users.",
    outcome:
      "Improved SEO and performance with SSR and optimized API workflows — Lighthouse SEO score of 100.",
    tech: ["Next.js", "React", "Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq"],
    live: "https://frankrosspharmacy.com",
    image: "/projects/frankross.png",
  },
  {
    title: "PharmacyPro",
    type: "Retail Management · Production",
    description:
      "Retail pharmacy management platform used by 600+ retailers for billing, inventory, reporting, and daily operations.",
    outcome:
      "Built and enhanced React.js modules with Material UI, integrated REST APIs, and supported production across multiple modules.",
    tech: ["React", "Material UI", "Node.js", "Express.js", "PostgreSQL"],
    image: "/projects/pharmacypro.png",
  },
  {
    title: "CineScope",
    type: "Personal project",
    description:
      "Movie discovery with Next.js 14 and TMDB API — SSR, dynamic routes, watchlists, and SEO.",
    outcome: "Shows API integration and modern frontend patterns.",
    tech: ["Next.js", "React", "Tailwind", "SSR", "REST APIs"],
    live: "https://cinescope-yt.netlify.app/",
    github: "https://github.com/YatishPatil1234/Cine_Scope",
    image: "/projects/cinescope.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-tone">
      <motion.div className="page-container" {...fadeInView}>
        <SectionHeader
          label="Projects"
          title="Selected work"
          description="Production apps first — then personal projects that show how I build."
        />

        <motion.ul
          className="projects-grid list-none m-0 p-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={staggerViewport}
        >
          {projects.map((project) => (
            <motion.li key={project.title} variants={staggerItem}>
              <article className="project-card h-full card-interactive">
                <div className="project-card-media">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="project-image"
                    />
                  ) : (
                    <div className="project-card-placeholder">{project.title}</div>
                  )}
                </div>

                <div className="project-card-body flex-1">
                  <p className="project-type">{project.type}</p>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  {project.outcome && (
                    <p className="project-outcome">{project.outcome}</p>
                  )}
                  <div className="project-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <IconExternalLink className="icon-inline" aria-hidden />
                        Live site
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
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
