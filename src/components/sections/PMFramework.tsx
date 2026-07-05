"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, LayoutGrid, Zap, Activity, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { pmFramework } from "@/lib/data";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  Search,
  LayoutGrid,
  Zap,
  Activity,
  CheckCircle,
} as const;

export function PMFramework() {
  const { ref: headerRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const progressRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "center 40%",
            scrub: 0.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="framework"
      ref={sectionRef}
      className="section-padding bg-charcoal overflow-hidden"
    >
      <div className="page-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow text-gold/70 mb-4">How I Work</p>
          <div className="w-12 h-[2px] bg-gold/40 mb-8" />
          <h2 className="font-display font-light text-display-xl text-white mb-6 text-balance">
            A framework built from the{" "}
            <em className="text-gold not-italic font-medium">field, not the textbook.</em>
          </h2>
          <p className="font-body text-white/60 leading-relaxed text-base">
            Every project I've managed has refined this five-phase approach. The phases don't change
            — but how I weight them shifts based on stakeholder complexity, industry, and risk profile.
          </p>
        </motion.div>

        {/* Horizontal progress line (desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="w-full h-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute top-0 left-0 w-full h-px bg-gold/50 origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Phases grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0">
          {pmFramework.map((phase, i) => {
            const Icon = 
              iconMap[phase.icon as keyof typeof iconMap] ?? Search;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="relative group"
              >
                {/* Connector line between phases (desktop) */}
                {i < pmFramework.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-6 w-px h-12 bg-white/10 z-10" aria-hidden />
                )}

                <div className="lg:border-r lg:border-white/8 lg:pr-6 lg:pl-0 p-4 sm:p-5 lg:py-0 h-full flex flex-col gap-4">
                  {/* Phase number + icon */}
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-gold/60">
                      Phase {phase.phase}
                    </span>
                  </div>

                  {/* Phase name */}
                  <h3 className="font-display text-lg font-medium text-white leading-snug">
                    {phase.name}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-white/50 text-sm leading-relaxed flex-1">
                    {phase.description}
                  </p>

                  {/* Tool tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/8">
                    {phase.tools.map((tool) => (
                      <span
                        key={tool}
                        className="tag text-[10px] bg-white/5 text-white/50 border border-white/8"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom visual strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-3 h-40 rounded-2xl overflow-hidden"
        >
          {[
            {
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
              alt: "Team planning session",
            },
            {
              src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
              alt: "Project dashboard and planning",
            },
            {
              src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
              alt: "Collaborative team meeting",
            },
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover opacity-40 hover:opacity-60 transition-opacity duration-300"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
