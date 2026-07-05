"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Shield, Globe, Users, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { achievements, stats } from "@/lib/data";
import { getColorClasses, cn } from "@/lib/utils";
import { useCounter } from "@/hooks/useCounter";

const iconMap = {
  Award,
  TrendingUp,
  Shield,
  Globe,
  Users,
  Zap,
} as const;

function StatCounter({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const prefix = value.replace(/[\d%+]/g, "").trim();
  const count = useCounter(isNaN(numeric) ? 0 : numeric, 1600, isInView);

  return (
    <div ref={ref} className="text-center p-6">
      <p className="font-display text-display-xl font-semibold text-charcoal leading-none">
        {prefix}
        {isNaN(numeric) ? value : count}
        <span className="text-gold">{suffix || (value.includes("+") ? "+" : value.includes("%") ? "%" : "")}</span>
      </p>
      <p className="font-mono text-[11px] tracking-widest uppercase text-text-muted mt-3 leading-tight">{label}</p>
    </div>
  );
}

export function AchievementsDashboard() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="achievements" className="section-padding bg-parchment">
      <div className="page-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-4">Track Record</p>
          <div className="gold-rule mx-auto mb-8" />
          <h2 className="display-headline text-display-xl max-w-2xl mx-auto text-balance">
            The numbers{" "}
            <em className="text-gold not-italic">behind the work.</em>
          </h2>
        </motion.div>

        {/* Stats counter bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-parchment-dark bg-white rounded-2xl shadow-card border border-parchment-dark mb-10 overflow-hidden"
        >
          {stats.map((stat, i) => (
            <StatCounter key={i} value={stat.value} label={stat.label} suffix={stat.suffix} />
          ))}
        </motion.div>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const Icon = 
              iconMap[ach.icon as keyof typeof iconMap] ?? Award;
            const colorClasses = getColorClasses(ach.color);

            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="card p-6 flex flex-col gap-4"
              >
                {/* Icon + year */}
                <div className="flex items-start justify-between">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colorClasses.bg)}>
                    <Icon size={18} className={colorClasses.text} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted">
                    {ach.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-body font-semibold text-charcoal text-sm mb-2 leading-snug">
                    {ach.title}
                  </h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={cn("h-0.5 w-8 rounded-full mt-auto", colorClasses.bg.replace("/10", ""))} style={{
                  background: ach.color === "gold" ? "#C9A96E" : ach.color === "slate" ? "#3D5A80" : "#8BAF9A"
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
