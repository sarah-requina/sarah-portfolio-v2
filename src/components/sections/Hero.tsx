"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { personalInfo, stats } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // Floating animation for portrait
  useEffect(() => {
    if (!floatRef.current) return;
    gsap.to(floatRef.current, {
      y: -10,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-parchment"
      aria-label={`Hero — ${personalInfo.name}, ${personalInfo.title}`}
    >
      {/* Decorative background */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Large circle */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold/8 to-transparent" />
        {/* Bottom left accent */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-slate/6 to-transparent" />
        {/* Grid texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" aria-hidden>
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A1A2E" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="page-container w-full pt-[var(--nav-height)] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-var(--nav-height))] py-16 lg:py-0">

          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="eyebrow">{personalInfo.title}</span>
              <span className="w-8 h-px bg-gold" />
              <span className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                <MapPin size={10} className="text-gold" />
                Dubai, UAE
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="display-headline text-display-2xl mb-6 text-balance"
            >
              Projects
              <br />
              <span className="font-semibold italic text-gold-shimmer bg-clip-text">
                delivered.
              </span>
              <br />
              Always.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="body-text text-base lg:text-lg max-w-lg mb-10 leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA row */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-14">
              <button
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                <Briefcase size={15} />
                View My Work
              </button>
              <a href="/sarah-requina-cv.pdf" download className="btn-outline">
                Download CV
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-1"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="font-display text-3xl font-semibold text-charcoal tracking-tight">
                    {stat.value}
                    <span className="text-gold text-xl">{stat.suffix}</span>
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Portrait + floating card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div ref={floatRef} className="relative">
              {/* Portrait frame */}
              <div className="relative w-72 h-[420px] sm:w-80 sm:h-[480px] lg:w-96 lg:h-[560px]">
                {/* Main image container */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-parchment-dark shadow-card-hover">
                  <Image
                    src={personalInfo.heroImage}
                    alt={personalInfo.heroImageAlt}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 320px, 384px"
                    onError={(e) => {
                      // Fallback if image not present
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal/30 to-transparent" />
                </div>

                {/* Gold border accent */}
                <div className="absolute -inset-1 rounded-[2.25rem] border border-gold/20 pointer-events-none" />

                {/* Decorative corner dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold" aria-hidden />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-slate" aria-hidden />
              </div>

              {/* Floating badge: Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-6 top-8 bg-white rounded-2xl px-4 py-3 shadow-card border border-parchment-dark"
              >
                <p className="font-display text-base font-semibold text-charcoal leading-tight">{personalInfo.name}</p>
                <p className="font-mono text-[10px] tracking-wider uppercase text-gold">{personalInfo.title}</p>
              </motion.div>

              {/* Floating badge: Industry count */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -right-6 bottom-20 bg-charcoal rounded-2xl px-4 py-3 shadow-card"
              >
                <p className="font-display text-2xl font-semibold text-gold leading-none">4</p>
                <p className="font-mono text-[10px] tracking-wider uppercase text-parchment/70 mt-1">Industries</p>
              </motion.div>

              {/* Floating badge: Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-card border border-parchment-dark flex items-center gap-2 whitespace-nowrap"
              >
                <MapPin size={12} className="text-gold" />
                <span className="font-mono text-[11px] tracking-widest uppercase text-charcoal">Dubai, UAE</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-gold transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
