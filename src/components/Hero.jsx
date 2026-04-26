"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/5 blur-3xl rounded-full opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs text-[#9CA3AF] bg-white/5 border border-white/10 rounded-full"
          >
            <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            Frontend Developer • 1.7+ Years
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] text-[#E5E7EB] max-w-3xl mx-auto"
          >
            I build <span className="text-white">modern web</span>
            <br />
            applications
          </motion.h1>

          {/* Supporting */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-base md:text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed"
          >
            Focused on performance, clean UI, and real-world production systems
          </motion.p>

          {/* Tech */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-sm text-[#6B7280]"
          >
            React • Next.js • Tailwind • REST APIs
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="w-16 h-[1px] bg-white/10 mx-auto"
          />

          {/* CTA */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex justify-center gap-4 pt-2 flex-wrap"
          >
            <Button
              className="px-7 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition shadow-lg hover:shadow-white/10 cursor-pointer"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>

            <Button
              variant="outline"
              className="px-7 py-3 text-[#E5E7EB] border border-white/10 hover:bg-white/5 text-sm transition cursor-pointer"
              asChild
            >
              <a
                href="/resume/Yatish_Patil_Frontend_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
