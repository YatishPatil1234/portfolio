"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconArrowUp } from "./icons";
import { scrollToTop } from "@/lib/scroll";

const FOOTER_CLEARANCE = 160;

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      const { scrollY } = window;
      const viewportBottom = scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;
      const nearFooter = viewportBottom >= pageBottom - FOOTER_CLEARANCE;
      setShow(scrollY > 400 && !nearFooter);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!mounted || !show) return null;

  return createPortal(
    <button
      type="button"
      aria-label="Back to top"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className="back-to-top"
    >
      <IconArrowUp aria-hidden />
    </button>,
    document.body
  );
}
