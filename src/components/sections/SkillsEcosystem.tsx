"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { skillsData } from "@/lib/data";
import { getColorClasses, cn } from "@/lib/utils";

const toolLogos = [
  { name: "Monday.com", abbr: "MO" },
  { name: "Asana", abbr: "AS" },
  { name: "Jira", abbr: "JI" },
  { name: "SAP B1", abbr: "SA" },
  { name: "Slack", abbr: "SL" },
  { name: "Google WS", abbr: "GW" },
  { name: "MS Office", abbr: "MS" },
  { name: "Notion", abbr: "NO" },
];

export function SkillsEcosystem() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState(0);

  const active = skillsData.categories[activeCategory];
  const colorClasses = getColorClasses(active.color);

  return (
    <section id="skills" className="section-padding bg-parchment-dark">
      <div className="page-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Expertise</p>
          <div className="gold-rule mb-8" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="display-headline text-display-xl text-balance">
              Skills built across{" "}
              <em className="text-gold not-italic">eight-plus years of delivery.</em>
            </h2>
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillsData.categories.map((cat, i) => {
            const cc = getColorClasses(cat.color);
            const isActive = i === activeCategory;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`skills-panel-${i}`}
                id={`skills-tab-${i}`}
                className={cn(
                  "tag border transition-all duration-200 cursor-pointer text-xs",
                  isActive
                    ? `${cc.bg} ${cc.text} ${cc.border} shadow-sm font-semibold`
                    : "bg-white text-text-secondary border-parchment-dark hover:border-gold/30"
                )}
              >
                {cat.name}
                {isActive && (
                  <span className={cn("ml-2 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center", cc.bg, cc.text)}>
                    {cat.skills.length}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id={`skills-panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${activeCategory}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-16"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className={cn(
                  "p-4 rounded-xl border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card",
                  colorClasses.border
                )}
              >
                <div className={cn("w-1.5 h-1.5 rounded-full mb-3", colorClasses.bg.replace("bg-", "bg-").replace("/10", ""))} style={{
                  background: active.color === "gold" ? "#C9A96E" : active.color === "slate" ? "#3D5A80" : active.color === "sage" ? "#8BAF9A" : "#E8D5C4"
                }} />
                <p className="font-body text-sm font-medium text-charcoal leading-tight">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tools strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="eyebrow mb-6">Primary Tools</p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {toolLogos.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white border border-parchment-dark shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-charcoal flex items-center justify-center">
                  <span className="font-mono text-[11px] font-bold text-gold">{tool.abbr}</span>
                </div>
                <span className="font-mono text-[9px] tracking-widest uppercase text-text-muted text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
