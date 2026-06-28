"use client";

import { useEffect, useMemo, useState } from "react";

function normalizeItems(items) {
  return items.map((item) =>
    typeof item === "string" ? { label: item, color: "#f5f5f5" } : item
  );
}

export default function RotatingText({ items, interval = 2800, className = "" }) {
  const roles = useMemo(() => normalizeItems(items), [items]);
  const [index, setIndex] = useState(0);

  const longestLabel = useMemo(
    () =>
      roles.reduce(
        (longest, role) => (role.label.length >= longest.length ? role.label : longest),
        ""
      ),
    [roles]
  );

  useEffect(() => {
    if (roles.length <= 1) return undefined;

    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? interval * 1.5
      : interval;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, delay);

    return () => window.clearInterval(id);
  }, [roles.length, interval]);

  if (!roles.length) return null;

  const active = roles[index] ?? roles[0];

  return (
    <span className={`hero-role-text ${className}`.trim()} aria-live="polite">
      <span className="hero-role-text-sizer" aria-hidden>
        {longestLabel}
      </span>
      <span className="hero-role-text-active" style={{ color: active.color }}>
        {active.label}
      </span>
    </span>
  );
}
