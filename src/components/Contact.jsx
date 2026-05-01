"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-20 pb-8 sm:pb-12 md:pb-12 bg-[#050505] overflow-x-clip scroll-mt-28"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px] bg-white/5 blur-3xl rounded-full opacity-40" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-14 text-center"
      >
        {/* Badge */}
        <div className="inline-flex px-3 py-1 text-xs text-[#9CA3AF] border border-[var(--border)] bg-white/5 rounded-full mb-4">
          Contact
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-[#E5E7EB]">
          Let’s Work Together
        </h2>

        <p className="mt-3 text-[#9CA3AF] text-base max-w-xl mx-auto">
          Have a project or opportunity? Feel free to reach out.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="
          max-w-lg mx-auto
          bg-[#0a0a0a]/85 backdrop-blur-sm
          border border-[var(--border)]
          rounded-xl
          p-5 sm:p-6
          space-y-5
        "
      >
        {/* Inputs */}
        {["name", "email"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "email" ? "email" : "text"}
            placeholder={field === "email" ? "Email address" : "Your name"}
            value={form[field]}
            onChange={handleChange}
            required
            className="
              w-full px-4 py-3
              text-base sm:text-sm
              bg-[#050505]
              border border-[var(--border)]
              rounded-md
              text-[#E5E7EB]
              placeholder:text-[#6B7280]
              focus:outline-none
              focus:border-[var(--border-strong)]
              focus:ring-2 focus:ring-white/10
              transition-all
            "
          />
        ))}

        {/* Message */}
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3
            text-base sm:text-sm
            bg-[#050505]
            border border-[var(--border)]
            rounded-md
            text-[#E5E7EB]
            placeholder:text-[#6B7280]
            focus:outline-none
            focus:border-[var(--border-strong)]
            focus:ring-2 focus:ring-white/10
            transition-all
            resize-none
          "
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            modern-btn
            w-full
            active:scale-[0.98]
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Feedback */}
        {success && (
          <p className="text-green-400 text-xs text-center">
            Message sent successfully
          </p>
        )}

        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
      </motion.form>

      {/* Alternative Contact */}
      <div className="mt-8 text-center text-sm text-[#6B7280]">
        Or email me at{" "}
        <a
          href="mailto:yatishp777@gmail.com"
          className="text-[#E5E7EB] hover:underline"
        >
          yatishp777@gmail.com
        </a>
      </div>
    </section>
  );
}
