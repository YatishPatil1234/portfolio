"use client";

import { IconGitHub, IconLinkedIn, IconMail } from "./icons";
import { handleTopNav } from "@/lib/scroll";

const links = [
  { href: "https://github.com/YatishPatil1234", label: "GitHub", Icon: IconGitHub },
  { href: "https://www.linkedin.com/in/yatish-patil-dev", label: "LinkedIn", Icon: IconLinkedIn },
  { href: "mailto:yatishp777@gmail.com", label: "Email", Icon: IconMail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="page-container site-footer-inner">
        <div className="site-footer-row">
          <div className="site-footer-brand">
            <a href="/" className="site-footer-logo" onClick={handleTopNav}>
              Yatish<span className="site-footer-logo-suffix">.dev</span>
            </a>
            <p className="site-footer-meta">© {year} Yatish Patil · Frontend developer</p>
          </div>

          <nav className="site-footer-social" aria-label="Social links">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="site-footer-social-link"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="site-footer-social-icon-wrap" aria-hidden>
                  <Icon className="w-4 h-4 shrink-0" />
                </span>
                <span className="site-footer-social-label">{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
