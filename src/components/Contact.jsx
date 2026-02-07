"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-indigo-400">Touch</span>
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Have an opportunity, project idea, or just want to connect? Feel free
          to reach out — I’m always open to meaningful conversations.
        </p>
      </motion.div>

      {/* Form Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="max-w-xl mx-auto"
      >
        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" />
          <Textarea placeholder="Your Message" rows={4} />

          <Button className="w-full">Send Message</Button>
        </div>

        {/* Trust Line */}
        <p className="mt-4 text-center text-sm text-white/50">
          I usually respond within 24–48 hours.
        </p>
      </motion.div>
    </section>
  );
}
