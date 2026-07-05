"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { careerTimeline } from "@/lib/data";
import { getColorClasses, cn } from "@/lib/utils";

export function CareerTimeline() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [expandedId, setExpandedId] = useState<string | null>("marshes-2025");

  return (
    <section id="timeline" className="section-padding bg-parchment-dark">
      <div className="page-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Career Path</p>
          <div className="gold-rule mb-8" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="display-headline text-display-xl text-balance">
              Eight-plus years.{" "}
              <em className="text-gold not-italic">Five organisations.</em>
              <br />
              One throughline.
            </h2>
            <p className="body-text text-sm max-w-xs text-right hidden sm:block">
              Tap each role to see the full story.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" aria-hidden />

          <div className="space-y-2 pl-12">
            {careerTimeline.map((item, i) => {
              const colorClasses = getColorClasses(item.industryColor);
              const isExpanded = expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute -left-12 top-6 w-[10px] h-[10px] rounded-full border-2 border-parchment-dark transition-all duration-300",
                      isExpanded ? "bg-gold border-gold w-4 h-4 -ml-[3px] -mt-[3px]" : "bg-parchment-dark border-gold/40"
                    )}
                    aria-hidden
                  />

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className={cn(
                      "w-full text-left p-5 rounded-2xl border transition-all duration-300",
                      isExpanded
                        ? "bg-white shadow-card border-gold/20"
                        : "bg-white/50 border-transparent hover:bg-white hover:border-parchment-dark hover:shadow-card"
                    )}
                    aria-expanded={isExpanded}
                  >
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted">
                            {item.period}
                          </span>
                          <span
                            className={`tag border ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border}`}
                          >
                            {item.industry}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <h3 className="font-display text-display-sm font-semibold text-charcoal">
                            {item.role}
                          </h3>
                          <span className="hidden sm:inline text-text-muted text-sm">·</span>
                          <p className="font-body text-text-secondary font-medium text-sm">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <MapPin size={11} className="text-text-muted" />
                          <span className="font-mono text-[10px] text-text-muted">{item.location}</span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex-shrink-0 mt-1 text-text-muted"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 mt-5 border-t border-parchment-dark">
                            <p className="body-text text-sm mb-5 leading-relaxed">
                              {item.description}
                            </p>
                            <ul className="space-y-2">
                              {item.highlights.map((h, j) => (
                                <li key={j} className="flex items-start gap-3">
                                  <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", colorClasses.text.replace("text-", "bg-"))} aria-hidden />
                                  <span className="font-body text-sm text-text-secondary leading-relaxed">{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
