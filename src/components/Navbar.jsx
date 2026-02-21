"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-6 left-0 w-full z-50 flex justify-center"
      >
        <div
          className="
            w-[92%] max-w-6xl
            bg-black/60 backdrop-blur-xl
            border border-white/10
            rounded-2xl
            px-6 h-16
            flex items-center justify-between
            shadow-lg shadow-black/20
          "
        >
          {/* Logo */}
          <a href="#" className="text-lg font-semibold tracking-tight">
            <span className="text-white">Yatish</span>
            <span className="text-indigo-400">.dev</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative text-white/70 hover:text-white transition-colors
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:w-0
                  after:bg-indigo-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Open menu"
          >
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md flex justify-center pt-28"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                w-[92%] max-w-md
                bg-black border border-white/10
                rounded-2xl
                p-6
                shadow-xl shadow-black/30
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg text-white/80 hover:text-white transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
