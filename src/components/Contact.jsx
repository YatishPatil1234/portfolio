"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-indigo-400">Touch</span>
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Have an opportunity, project idea, or just want to connect?
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-xl mx-auto border border-white/10 rounded-xl p-6 bg-white/[0.02] space-y-4"
      >
        <Input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

        {success && (
          <p className="text-green-400 text-sm text-center">
            Message sent successfully!
          </p>
        )}
      </motion.form>

      <p className="mt-4 text-center text-sm text-white/50">
        I usually respond within 24–48 hours.
      </p>
    </section>
  );
}
