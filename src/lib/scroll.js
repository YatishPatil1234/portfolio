export function clearHashFromUrl() {
  if (typeof window === "undefined") return;
  const path = window.location.pathname + window.location.search;
  window.history.replaceState(null, "", path);
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  clearHashFromUrl();
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  clearHashFromUrl();
}

export function handleSectionNav(event, id) {
  event.preventDefault();
  scrollToSection(id);
}

export function handleTopNav(event) {
  event.preventDefault();
  scrollToTop();
}
