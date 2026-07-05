"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronRight, Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { caseStudies } from "@/lib/data";
import { getColorClasses, cn } from "@/lib/utils";

export function CaseStudies() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const activeCaseData = caseStudies.find((c) => c.id === activeCase);

  return (
    <section id="case-studies" className="section-padding bg-parchment">
      <div className="page-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Selected Work</p>
          <div className="gold-rule mb-8" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="display-headline text-display-xl text-balance">
              Projects that{" "}
              <em className="text-gold not-italic">shaped the work.</em>
            </h2>
            <p className="body-text text-sm max-w-xs sm:text-right">
              Four case studies across the defining projects of my career.
            </p>
          </div>
        </motion.div>

        {/* Case study cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => {
            const colorClasses = getColorClasses(cs.color);
            return (
              <motion.article
                key={cs.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                <button
                  onClick={() => setActiveCase(cs.id)}
                  className="w-full text-left group card overflow-hidden"
                  aria-label={`Open case study: ${cs.title}`}
                >
                  {/* Image header */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`tag border ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} backdrop-blur-sm`}>
                        {cs.sector}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-mono text-[10px] tracking-widest uppercase text-parchment/70 mb-1">
                        {cs.eyebrow} · {cs.year}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-display-sm font-semibold text-charcoal mb-1 group-hover:text-gold transition-colors duration-200">
                      {cs.title}
                    </h3>
                    <p className="font-body text-text-muted text-sm mb-3">{cs.subtitle}</p>
                    <p className="body-text text-sm line-clamp-2 mb-5">{cs.overview}</p>

                    {/* Mini metrics */}
                    <div className="grid grid-cols-4 gap-3 pt-4 border-t border-parchment-dark">
                      {cs.metrics.map((m, j) => (
                        <div key={j} className="text-center">
                          <p className="font-display text-lg font-semibold text-charcoal leading-none">
                            {m.value}
                          </p>
                          <p className="font-mono text-[9px] tracking-wider uppercase text-text-muted mt-1 leading-tight">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 mt-5 text-gold font-medium text-sm group-hover:gap-3 transition-all duration-200">
                      <span>Read full case study</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case study modal / dossier */}
      <AnimatePresence>
        {activeCase && activeCaseData && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50"
              onClick={() => setActiveCase(null)}
              aria-hidden
            />

            {/* Dossier panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto rounded-t-3xl bg-parchment shadow-card-hover md:inset-4 md:rounded-3xl"
              role="dialog"
              aria-modal="true"
              aria-label={`Case study: ${activeCaseData.title}`}
            >
              {/* Modal header image */}
              <div className="relative h-56 md:h-72 overflow-hidden rounded-t-3xl md:rounded-t-3xl">
                <Image
                  src={activeCaseData.image}
                  alt={activeCaseData.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-6 left-8 right-16">
                  <p className="eyebrow text-gold mb-2">{activeCaseData.eyebrow}</p>
                  <h2 className="font-display text-display-lg font-semibold text-white mb-1">
                    {activeCaseData.title}
                  </h2>
                  <p className="font-body text-parchment/80 text-sm">{activeCaseData.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveCase(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close case study"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-6 md:p-10 max-w-4xl mx-auto">
                {/* Metrics row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-parchment-dark mb-8">
                  {activeCaseData.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <p className="font-display text-3xl font-semibold text-charcoal">{m.value}</p>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted mt-1">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Content sections */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target size={14} className="text-gold" />
                        <h3 className="font-mono text-xs tracking-widest uppercase text-gold">Overview</h3>
                      </div>
                      <p className="body-text text-sm leading-relaxed">{activeCaseData.overview}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp size={14} className="text-slate" />
                        <h3 className="font-mono text-xs tracking-widest uppercase text-slate">The Challenge</h3>
                      </div>
                      <p className="body-text text-sm leading-relaxed">{activeCaseData.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb size={14} className="text-sage" />
                        <h3 className="font-mono text-xs tracking-widest uppercase text-sage">Lessons</h3>
                      </div>
                      <p className="body-text text-sm leading-relaxed italic border-l-2 border-sage/30 pl-4">
                        {activeCaseData.lessons}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target size={14} className="text-gold" />
                        <h3 className="font-mono text-xs tracking-widest uppercase text-gold">My Role</h3>
                      </div>
                      <p className="body-text text-sm leading-relaxed">{activeCaseData.myRole}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Users size={14} className="text-charcoal" />
                        <h3 className="font-mono text-xs tracking-widest uppercase text-charcoal">Stakeholders</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeCaseData.stakeholders.map((s) => (
                          <span key={s} className="tag bg-parchment-dark text-charcoal border border-charcoal/10">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp size={14} className="text-gold-dark" />
                        <h3 className="font-mono text-xs tracking-widest uppercase text-gold-dark">Outcome</h3>
                      </div>
                      <div className="p-4 rounded-xl bg-gold/8 border border-gold/15">
                        <p className="body-text text-sm leading-relaxed">{activeCaseData.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={() => setActiveCase(null)}
                    className="btn-outline"
                  >
                    <X size={14} />
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
