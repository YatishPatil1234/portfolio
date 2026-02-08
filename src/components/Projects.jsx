"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CineScope",
    description:
      "A responsive movie discovery web application where users can search movies, view detailed information, and explore ratings using a public movie API. Focused on clean UI, API integration, and reusable React components.",
    tech: ["React", "Tailwind CSS", "REST API"],
    link: "#",
  },
  {
    title: "Fake News Detection UI",
    description:
      "A frontend web interface built to interact with a fake news detection system. I focused on UI design, form handling, API integration, and presenting results in a clear and user-friendly manner.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
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
          A selection of frontend projects that demonstrate my experience with
          UI development, API integration, and building real-world web
          interfaces.
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
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

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
