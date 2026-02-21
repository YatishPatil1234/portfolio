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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* Subtle Glow */}
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
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Get In <span className="text-indigo-400">Touch</span>
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
          Have an opportunity, project idea, or just want to connect? I’d love
          to hear from you.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="
          relative max-w-xl mx-auto
          rounded-2xl p-8
          bg-white/[0.03]
          border border-white/10
          backdrop-blur-sm
          space-y-5
        "
      >
        {/* Inputs */}
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3 rounded-lg
            bg-black/40
            border border-white/10
            text-white
            placeholder:text-white/40
            focus:outline-none
            focus:border-indigo-400
            transition
          "
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3 rounded-lg
            bg-black/40
            border border-white/10
            text-white
            placeholder:text-white/40
            focus:outline-none
            focus:border-indigo-400
            transition
          "
        />

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
            focus:border-indigo-400
            transition resize-none
          "
        />

        {/* Button */}
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
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-sm text-center"
          >
            Message sent successfully!
          </motion.p>
        )}
      </motion.form>

      {/* Trust Line */}
      <p className="mt-6 text-center text-xs sm:text-sm text-white/40">
        I usually respond within 24–48 hours.
      </p>
    </section>
  );
}
