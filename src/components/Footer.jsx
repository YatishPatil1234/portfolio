"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-white/10 mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Yatish</span>
          <span className="text-indigo-400">.dev</span>
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="text-white/60 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
