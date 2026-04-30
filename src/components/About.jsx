"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 bg-[#050505] overflow-x-clip scroll-mt-28"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-white/5 blur-3xl rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex px-3 py-1 text-xs text-[#9CA3AF] border border-white/10 bg-white/5 rounded-full">
            About Me
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#E5E7EB] leading-snug max-w-xl">
            I build <span className="text-white">scalable and reliable</span>{" "}
            web applications
          </h2>

          {/* Subtext */}
          <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed max-w-xl">
            Focused on performance, clean UI, and real-world production systems
            that are easy to maintain and scale.
          </p>

          {/* Divider */}
          <div className="h-px w-16 bg-white/10" />

          {/* Content */}
          <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
            <p>
              With{" "}
              <span className="text-[#E5E7EB] font-medium">
                1.7+ years of experience
              </span>
              , I work at{" "}
              <span className="text-[#E5E7EB] font-medium">
                Instinct Innovations
              </span>
              , building production-ready applications used in real-world
              environments.
            </p>

            <p>
              I work primarily with{" "}
              <span className="text-[#E5E7EB]">React</span>,{" "}
              <span className="text-[#E5E7EB]">Next.js</span>, and{" "}
              <span className="text-[#E5E7EB]">Tailwind CSS</span>, along with
              API integration and scalable frontend architecture.
            </p>

            <p>
              I enjoy simplifying complex problems and building interfaces that
              remain maintainable as products grow.
            </p>
          </div>
        </motion.div>

        {/* RIGHT - BETTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <InfoCard label="Experience" value="1.7+ Years" />
          <InfoCard label="Work" value="Production Applications" />
          <InfoCard label="SEO Achievement" value="Lighthouse Score 100" />
          <InfoCard label="Focus" value="UI, Performance, APIs" />
        </motion.div>
      </div>
    </section>
  );
}

/* INFO CARD (MORE MODERN THAN BOX GRID) */
function InfoCard({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="
        flex items-center justify-between
        px-5 py-4
        rounded-xl
        bg-[#0a0a0a]/85 backdrop-blur-sm
        border border-white/10
        hover:border-white/20
        transition-all
      "
    >
      <span className="text-sm text-[#6B7280]">{label}</span>
      <span className="text-sm text-[#E5E7EB] font-medium">{value}</span>
    </motion.div>
  );
}
