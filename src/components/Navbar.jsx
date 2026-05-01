"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      navItems.forEach((item) => {
        const section = document.getElementById(item.href);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActive(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-0 w-full z-50 flex justify-center"
      >
        <div
          className="
            w-[92%] max-w-6xl h-12
            flex items-center justify-center md:justify-between px-5
            rounded-xl
            bg-[#0a0a0a]/80 backdrop-blur-lg
            border border-[var(--border)]
            shadow-[0_8px_24px_rgba(0,0,0,0.3)]
          "
        >
          {/* LOGO - CENTERED ON MOBILE, LEFT ON DESKTOP */}
          <a
            href="#top"
            className="inline-flex items-center text-base font-bold text-[#E5E7EB] hover:text-white transition-colors leading-[1] h-full"
          >
            Yatish<span className="text-[#6B7280]">.dev</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className="relative px-2 py-1 text-sm group"
                >
                  <span
                    className={`
                      transition-colors
                      ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-[#9CA3AF] group-hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden ml-auto -mr-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="
                fixed top-0 right-0 h-full w-[80vw] max-w-sm overflow-y-auto
                bg-gradient-to-b from-[#0a0a0a] to-[#050505]
                border-l border-[var(--border)]
                z-50 p-6
                shadow-2xl shadow-black/60
              "
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border)] hover:border-white/30 text-white/70 hover:text-white transition-all duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-2 mt-12">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="
                      block px-4 py-3 rounded-lg text-base font-medium
                      text-[#9CA3AF]
                      hover:text-white hover:bg-white/5
                      border border-transparent hover:border-[var(--border)]
                      transition-all duration-200
                    "
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
