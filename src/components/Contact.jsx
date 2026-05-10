"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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

      if (!res.ok) throw new Error("Something went wrong");

      toast.success("Message sent successfully! ✅", {
        description: `Thanks ${form.name}! I'll review your message and get back to you soon.`,
        duration: 5000,
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Oops! Something went wrong", {
        description: "Please try again or email yatishp777@gmail.com directly.",
        duration: 5000,
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-shell bg-[#050505]">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-95 sm:h-95 md:w-112.5 md:h-112.5 bg-white/5 blur-3xl rounded-full opacity-40" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-14 text-center"
      >
        {/* Badge */}
        <div className="section-kicker mb-4">Contact</div>

        <h2 className="section-title text-4xl sm:text-5xl md:text-5xl">
          Let’s Work Together
        </h2>

        <p className="section-copy mt-3 text-base max-w-xl mx-auto">
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
          surface-card
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
              border border-white/12
              rounded-md
              text-[#E5E7EB]
              placeholder:text-[#4B5563]
              focus:outline-none
              focus:border-white/25
              focus:ring-1 focus:ring-white/15
              transition-all duration-200
              hover:border-white/15
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
            border border-white/12
            rounded-md
            text-[#E5E7EB]
            placeholder:text-[#4B5563]
            focus:outline-none
            focus:border-white/25
            focus:ring-1 focus:ring-white/15
            transition-all duration-200
            hover:border-white/15
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
