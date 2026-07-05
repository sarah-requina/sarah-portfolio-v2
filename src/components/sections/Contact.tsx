"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, MapPin, Send, Download, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { personalInfo } from "@/lib/data";

export function Contact() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [formState, setFormState] = useState({ name: "", email: "", message: "", role: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

 
const handleSubmit = async (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  setSubmitting(true);

  try {
    const response = await fetch(
      "https://formspree.io/f/mnjklbqy",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          opportunity: formState.role,
          message: formState.message,
        }),
      }
    );

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Failed to send message.");
  }

  setSubmitting(false);
};


  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80"
          alt="Dubai skyline at dusk"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/92 via-charcoal/85 to-charcoal-mid/90" />
      </div>

      <div ref={ref} className="relative z-10 section-padding">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow text-gold/70 mb-4">Get In Touch</p>
              <div className="w-12 h-[2px] bg-gold/40 mb-8" />
              <h2 className="font-display font-light text-display-xl text-white mb-6 text-balance">
                Let's talk about{" "}
                <em className="text-gold not-italic font-medium">your next project.</em>
              </h2>
              <p className="font-body text-white/60 text-base leading-relaxed mb-12 max-w-md">
                I'm currently open to remote opportunities in project management, operations, and client-
                facing roles. If you're looking for someone who brings structure, reliability, and a 
                hands-on approach to delivery, I'd love to connect.
              </p>

              {/* Contact links */}
              <div className="space-y-4 mb-12">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                    <Mail size={18} className="text-white/70 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-0.5">Email</p>
                    <p className="font-body text-white text-sm group-hover:text-gold transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                    <Linkedin size={18} className="text-white/70 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-0.5">LinkedIn</p>
                    <p className="font-body text-white text-sm group-hover:text-gold transition-colors">
                      {personalInfo.linkedin}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
                    <MapPin size={18} className="text-white/70" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-0.5">Location</p>
                    <p className="font-body text-white text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Download CV */}
              <a
                href="/sarah-requina-cv.pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-charcoal transition-all duration-300 font-body font-medium text-sm"
              >
                <Download size={15} />
                Download Full CV
              </a>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white/100 backdrop-blur-l rounded-3xl border border-white/20"
                >
                  <div className="w-16 h-16 rounded-full bg-sage/20 border border-sage/30 flex items-center justify-center mb-6">
                    <CheckCircle size={28} className="text-sage" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">Message sent.</h3>
                  <p className="font-body text-white/60 text-sm max-w-xs leading-relaxed">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <div className="bg-white/15 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
                  <h3 className="font-display text-xl text-white mb-8">Send a message</h3>

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 block mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-charcoal placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 block mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                        placeholder="jane@company.ae"
                        className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-charcoal placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200"
                      />
                    </div>

                    {/* Role context */}
                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 block mb-2">
                        Role / Opportunity (optional)
                      </label>
                      <input
                        type="text"
                        value={formState.role}
                        onChange={(e) => setFormState((p) => ({ ...p, role: e.target.value }))}
                        placeholder="e.g. Project Manager, Project Coordinator, etc"
                        className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-charcoal placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 block mb-2">
                        Message
                      </label>
                      <textarea
                        value={formState.message}
                        onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                        placeholder="Tell me about the project or opportunity..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-charcoal placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={submitting || !formState.name || !formState.email || !formState.message}
                      className="w-full btn-gold justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full inline-block"
                          />
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
