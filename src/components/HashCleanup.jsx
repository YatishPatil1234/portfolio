"use client";

import { useEffect } from "react";
import { clearHashFromUrl, scrollToSection } from "@/lib/scroll";

export default function HashCleanup() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    requestAnimationFrame(() => {
      scrollToSection(hash);
      clearHashFromUrl();
    });
  }, []);

  return null;
}
