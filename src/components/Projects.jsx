"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CineScope",
    description:
      "A modern movie discovery application with search, detailed movie pages, and dark mode support.",
    tech: ["React", "Tailwind CSS", "OMDB API"],
    link: "#",
  },
  {
    title: "Fake News Detection System",
    description:
      "A machine learning–based system to classify news articles as real or fake with a clean web interface.",
    tech: ["Python", "Flask", "Machine Learning"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          A selection of projects that showcase my frontend skills,
          problem-solving approach, and attention to detail.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <Card className="group h-full bg-white/[0.02] border border-white/10 hover:border-indigo-400/40 transition-colors">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-indigo-500/10 text-indigo-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="group-hover:border-indigo-400 group-hover:text-indigo-400"
                  >
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
