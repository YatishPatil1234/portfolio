"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconClose, IconExternalLink, IconMenu } from "./icons";
import { handleSectionNav, handleTopNav } from "@/lib/scroll";
import { siteConfig } from "@/lib/site";

const navItems = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const RESUME = siteConfig.links.resume;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const pos = window.scrollY + 120;
      let current = "";
      navItems.forEach((item) => {
        const el = document.getElementById(item.href);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          current = item.href;
        }
      });
      setActive(current);
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
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="page-container site-header-inner">
          <a href="/" className="nav-logo" onClick={handleTopNav}>
            Yatish<span className="nav-logo-suffix">.dev</span>
          </a>

          <div className="nav-end">
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className={`nav-link${active === item.href ? " active" : ""}`}
                  onClick={(e) => handleSectionNav(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn hidden sm:inline-flex"
            >
              Resume
            </a>

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
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
              className="mobile-nav-backdrop md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mobile-nav-panel md:hidden"
              aria-label="Mobile"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    handleSectionNav(e, item.href);
                    setOpen(false);
                  }}
                  className={`mobile-nav-link${active === item.href ? " active" : ""}`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-resume"
                onClick={() => setOpen(false)}
              >
                <IconExternalLink className="icon-inline" aria-hidden />
                Resume
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
