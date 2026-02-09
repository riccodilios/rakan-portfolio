"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 text-gradient">
            Contact
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Let's discuss your next project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass glass-reflection rounded-3xl p-8 sm:p-12 md:p-16"
        >
          <div className="space-y-8">
            <motion.a
              href="mailto:rakanalhakim@proton.me"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="glass glass-hover flex items-center gap-4 p-6 rounded-2xl group relative overflow-hidden"
            >
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1 font-light">Email</div>
                <div className="text-xl font-light">rakanalhakim@proton.me</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+966559978463"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="glass glass-hover flex items-center gap-4 p-6 rounded-2xl group relative overflow-hidden"
            >
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                <Phone className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1 font-light">Phone</div>
                <div className="text-xl font-light">+966 55 997 8463</div>
              </div>
            </motion.a>

            <div className="pt-8 border-t border-white/10">
              <div className="text-sm text-gray-500 font-light space-y-2">
                <div>Riyadh, Saudi Arabia</div>
                <div>Lebanese</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
