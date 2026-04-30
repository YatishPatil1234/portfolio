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
        className="fixed top-3 sm:top-4 left-0 w-full z-50 flex justify-center"
      >
        <div
          className="
            w-[92%] max-w-6xl h-14
            flex items-center justify-between px-5
            rounded-2xl
            bg-[#0a0a0a]/85 backdrop-blur-xl
            border border-white/10
            shadow-[0_10px_30px_rgba(0,0,0,0.45)]
          "
        >
          {/* LOGO */}
          <a
            href="#top"
            className="text-sm font-medium text-[#E5E7EB] hover:opacity-80 transition"
          >
            Yatish<span className="text-[#6B7280]">.dev</span>
          </a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className="relative px-3 py-1.5 text-sm rounded-md group"
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.span
                      layoutId="navHighlight"
                      className="absolute inset-0 rounded-md bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {/* Text */}
                  <span
                    className={`
                      relative z-10 transition
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#9CA3AF] group-hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </span>

                  {/* Hover underline */}
                  <span className="absolute left-2 right-2 bottom-0 h-[1px] scale-x-0 bg-white/30 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="
              md:hidden min-h-11 min-w-11 p-2 rounded-md
              border border-white/10
              hover:bg-white/5
              transition
            "
          >
            <div className="flex flex-col gap-1">
              <span className="w-5 h-[1.5px] bg-white"></span>
              <span className="w-5 h-[1.5px] bg-white"></span>
              <span className="w-5 h-[1.5px] bg-white"></span>
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
              className="
                fixed top-0 right-0 h-full w-[82vw] max-w-[320px] overflow-y-auto
                bg-[#050505]
                border-l border-white/10
                z-50 p-6
                shadow-2xl shadow-black/60
              "
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="absolute top-5 right-5 text-white/60 hover:text-white transition"
              >
                ✕
              </button>

              <div className="space-y-6 mt-16">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={() => setOpen(false)}
                    className="
                      block text-base
                      text-[#9CA3AF]
                      hover:text-white
                      transition
                    "
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
