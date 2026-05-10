"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0, 1]);
  const y = useTransform(scrollY, [0, 500], [24, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setVisible(value > 420);
    });

    return () => unsubscribe();
  }, [scrollY]);

  if (!visible) return null;

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      style={{ opacity, y }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-black/80 text-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:-translate-y-1 hover:border-(--border-strong) hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </motion.button>
  );
}
