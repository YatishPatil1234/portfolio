"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mt-16 sm:mt-20 bg-[#050505] overflow-x-clip"
    >
      {/* 🔥 Top Glow Line (better than plain divider) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Subtle Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] h-[180px] sm:w-[420px] sm:h-[220px] md:w-[500px] md:h-[250px] bg-white/5 blur-3xl rounded-full opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-7">
        {/* LEFT */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm text-[#E5E7EB]">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Yatish</span>
            <span className="text-[#6B7280]">.dev</span>
          </p>

          <p className="text-xs text-[#6B7280]">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <FooterIconLink
            href="https://github.com/YatishPatil1234"
            label="GitHub"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.6.11.82-.26.82-.58v-2.17c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.2 1.8 1.2 1.04 1.8 2.72 1.28 3.38.98.1-.76.4-1.28.72-1.57-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.64.24 2.86.12 3.16.74.82 1.2 1.86 1.2 3.14 0 4.52-2.75 5.5-5.36 5.8.42.36.8 1.08.8 2.18v3.23c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            }
          />

          <FooterIconLink
            href="https://www.linkedin.com/in/yatish-patil-dev"
            label="LinkedIn"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
              </svg>
            }
          />

          <FooterIconLink
            href="mailto:yatishp777@gmail.com"
            label="Email"
            icon={
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" />
                <path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            }
          />
        </div>
      </div>
    </motion.footer>
  );
}

/* ICON */
function FooterIconLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        group
        flex items-center justify-center
        w-10 h-10
        rounded-lg
        border border-white/10
        text-[#9CA3AF]
        hover:text-[#E5E7EB]
        hover:border-white/30
        hover:-translate-y-[3px]
        hover:bg-white/5
        transition-all duration-200
      "
      aria-label={label}
    >
      {icon}
    </a>
  );
}
