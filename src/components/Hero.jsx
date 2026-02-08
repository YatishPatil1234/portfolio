"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Intro */}
          <p className="text-sm uppercase tracking-widest text-white/50">
            Hi, I’m <span className="text-white">Yatish</span>
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Frontend <span className="text-indigo-400">Developer</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            I build clean, scalable, and production-ready web interfaces using{" "}
            <span className="text-white">React</span> and{" "}
            <span className="text-white">Next.js</span>, with a strong focus on
            usability, performance, and modern UI practices.
          </p>

          {/* CTAs */}
          <div className="flex justify-center gap-4 pt-4">
            {/* Primary CTA */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="
                  px-8 py-5
                  bg-indigo-500 hover:bg-indigo-600
                  text-white
                  transition-all duration-300
                "
              >
                View Projects
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="
                  px-8 py-5
                  border-white/20
                  text-white/70
                  hover:text-white
                  hover:bg-white/5
                  transition-all duration-300
                "
              >
                Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
