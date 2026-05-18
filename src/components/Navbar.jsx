"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./icons";
import { handleSectionNav, handleTopNav } from "@/lib/scroll";

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
    const onScroll = () => {
      const pos = window.scrollY + 120;
      navItems.forEach((item) => {
        const el = document.getElementById(item.href);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(item.href);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-[var(--nav-height)] border-b border-[var(--border)] bg-black/90 backdrop-blur-sm">
        <motion.div
          className="page-container h-full flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="/" className="nav-logo" onClick={handleTopNav}>
            Yatish<span className="nav-logo-suffix">.dev</span>
          </a>

          <div className="nav-end">
            <nav className="hidden md:flex items-center gap-1" aria-label="Main">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className={`nav-link ${active === item.href ? "active" : ""}`}
                  onClick={(e) => handleSectionNav(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="nav-menu-btn md:hidden"
            >
              {open ? (
                <IconClose className="nav-menu-icon" aria-hidden />
              ) : (
                <IconMenu className="nav-menu-icon" aria-hidden />
              )}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/90 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mobile-nav-panel md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    handleSectionNav(e, item.href);
                    setOpen(false);
                  }}
                  className={`mobile-nav-link ${active === item.href ? "active" : ""}`}
                >
                  {item.name}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
