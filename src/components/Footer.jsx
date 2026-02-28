"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-32 overflow-hidden"
    >
      {/* Subtle Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-indigo-600/5 blur-3xl rounded-full" />
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left space-y-3">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">Yatish</span>
              <span className="text-indigo-400">.dev</span>
            </p>

            <p className="text-xs text-white/40">
              Designed & built using Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-10 text-sm">
            <FooterLink
              href="https://github.com/YatishPatil1234"
              label="GitHub"
            />
            <FooterLink
              href="https://www.linkedin.com/in/yatish-patil-dev"
              label="LinkedIn"
            />
            <FooterLink href="#contact" label="Contact" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

function FooterLink({ href, label }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        relative text-white/60 hover:text-white transition-colors duration-300
        after:absolute after:-bottom-1 after:left-0
        after:h-[2px] after:w-0
        after:bg-indigo-400
        after:transition-all after:duration-300
        hover:after:w-full
      "
    >
      {label}
    </a>
  );
}
