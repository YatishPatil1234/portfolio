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
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Let’s Work <span className="text-indigo-400">Together</span>
        </h2>

        <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm sm:text-base">
          Open to frontend roles, freelance opportunities, or meaningful
          collaboration.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="
          relative max-w-xl mx-auto
          rounded-2xl p-8
          bg-gradient-to-b from-white/[0.04] to-white/[0.02]
          border border-white/10
          backdrop-blur-sm
          space-y-5
        "
      >
        {/* Input Field Component */}
        {["name", "email"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "email" ? "email" : "text"}
            placeholder={field === "email" ? "Email Address" : "Your Name"}
            value={form[field]}
            onChange={handleChange}
            required
            className="
              w-full px-4 py-3 rounded-lg
              bg-black/40
              border border-white/10
              text-white
              placeholder:text-white/40
              focus:outline-none
              focus:ring-2 focus:ring-indigo-500/40
              focus:border-indigo-400
              transition
            "
          />
        ))}

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3 rounded-lg
            bg-black/40
            border border-white/10
            text-white
            placeholder:text-white/40
            focus:outline-none
            focus:ring-2 focus:ring-indigo-500/40
            focus:border-indigo-400
            transition resize-none
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 rounded-lg
            bg-indigo-500 hover:bg-indigo-600
            text-white font-medium
            shadow-lg shadow-indigo-500/20
            transition-all duration-300
            disabled:opacity-60
            cursor-pointer
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-sm text-center"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm text-center"
          >
            {error}
          </motion.p>
        )}
      </motion.form>

      {/* Direct Email */}
      <p className="mt-8 text-center text-sm text-white/50">
        Or email me directly at{" "}
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="text-indigo-400 hover:text-indigo-300 transition"
        >
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
        </a>
      </p>

      <p className="mt-3 text-center text-xs text-white/40">
        I typically respond within 24–48 hours.
      </p>
    </section>
  );
}
