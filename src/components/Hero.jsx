"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Frontend <span className="text-indigo-400">Developer</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            I build modern, high-performance web applications with
            <span className="text-white"> React</span> &{" "}
            <span className="text-white">Next.js</span>, focused on clean UI and
            smooth user experience.
          </p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button size="lg" className="px-8">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
