"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 
          w-[350px] h-[350px] 
          md:w-[600px] md:h-[600px] 
          bg-indigo-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block px-4 py-1 text-xs md:text-sm tracking-wide text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
          >
            1.5 Years Experience • Frontend Developer
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            Hi, I’m <span className="text-white">Yatish</span>
            <br />I build{" "}
            <span className="text-indigo-400">modern web interfaces</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-white/70 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Specializing in <span className="text-white">React</span>,{" "}
            <span className="text-white">Next.js</span>, and{" "}
            <span className="text-white">Tailwind CSS</span>, I build scalable,
            production-ready applications focused on performance and clean UI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4 md:pt-6 w-full"
          >
            {/* View Projects */}
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-5 bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <a
                href="/resume/Yatish_Patil_Frontend_Developer_1.5YOE.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-5 border-white/20 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
