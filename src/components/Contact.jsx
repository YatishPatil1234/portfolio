"use client";

import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { IconGitHub, IconLinkedIn, IconMail } from "./icons";
import { fadeInView } from "@/lib/motion";

const contactLinks = [
  { label: "Email", value: "yatishp777@gmail.com", href: "mailto:yatishp777@gmail.com", Icon: IconMail },
  { label: "LinkedIn", value: "yatish-patil-dev", href: "https://www.linkedin.com/in/yatish-patil-dev", Icon: IconLinkedIn },
  { label: "GitHub", value: "YatishPatil1234", href: "https://github.com/YatishPatil1234", Icon: IconGitHub },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent!", { description: `Thanks ${form.name}, I'll get back to you soon.` });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong", { description: "Try again or email yatishp777@gmail.com" });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section-shell">
      <motion.div className="page-container" {...fadeInView}>
        <SectionHeader
          label="Contact"
          title="Let's work together"
          description="Have a project or opportunity? Get in touch."
        />

        <div className="contact-grid">
          <div className="contact-col">
            <p className="text-body-sm mb-6">
              I&apos;m open to freelance work, full-time roles, and collaborations.
            </p>
            <div className="contact-cards flex-1">
              {contactLinks.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact-link contact-link-row"
                >
                  <span className="contact-link-icon-wrap" aria-hidden>
                    <Icon className="contact-link-icon" />
                  </span>
                  <span className="min-w-0">
                    <span className="contact-link-label">{label}</span>
                    <span className="contact-link-value block truncate">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form card card-pad space-y-5">
            <div>
              <label htmlFor="name" className="input-label">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="email" className="input-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="message" className="input-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className="input-field resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
