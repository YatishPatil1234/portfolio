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
        className="fixed left-0 w-full z-50 flex justify-center"
        style={{ top: "1.5rem" }}
      >
        <div className="w-[92%] max-w-6xl h-14 flex items-center justify-center md:justify-between px-6 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-lg border border-white/12 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* LOGO - CENTERED ON MOBILE, LEFT ON DESKTOP */}
          <a
            href="#top"
            className="inline-flex items-center text-base font-bold text-[#E5E7EB] hover:text-white transition-colors leading-none h-full"
          >
            Yatish<span className="text-[#6B7280]">.dev</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center h-full gap-8 relative">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className="relative flex items-center h-full px-3 text-sm group"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBadge"
                      className="absolute inset-y-2 left-1 right-1 flex items-center justify-center rounded-md border border-[#23272b] bg-[#181b1e] shadow-[0_2px_8px_rgba(0,0,0,0.18)] z-0"
                      style={{ borderRadius: "0.5rem" }}
                      transition={{
                        type: "spring",
                        stiffness: 430,
                        damping: 34,
                      }}
                    />
                  )}
                  <span
                    className={`transition-colors ${isActive ? "text-white font-semibold" : "text-[#9CA3AF] group-hover:text-white"}`}
                    style={{
                      lineHeight: "1.8",
                      position: "relative",
                      zIndex: 10,
                    }}
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
            aria-expanded={open}
            aria-controls="mobile-menu"
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
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="
                fixed top-0 right-0 h-full w-[88vw] max-w-88 overflow-y-auto
                bg-linear-to-b from-[#0a0a0a] to-[#050505]
                border-l border-(--border)
                z-50 p-5 sm:p-6
                shadow-2xl shadow-black/60
              "
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="ml-auto flex items-center justify-center w-11 h-11 rounded-lg border border-white/12 hover:border-white/30 text-white/70 hover:text-white transition-all duration-200"
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

              <div className="space-y-2 mt-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="
                      flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium
                      text-[#9CA3AF]
                      hover:text-white hover:bg-white/5
                      border border-transparent hover:border-(--border)
                      transition-all duration-200
                    "
                  >
                    <span>{item.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="modern-btn w-full"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
