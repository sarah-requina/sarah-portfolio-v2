"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { personalInfo } from "@/lib/data";

const industries = [
  { name: "Events & Exhibitions", years: "2+ yrs", color: "bg-slate/10 text-slate border-slate/20" },
  { name: "Healthcare Operations", years: "2 yrs", color: "bg-gold/10 text-gold-dark border-gold/20" },
  { name: "Consular Operations", years: "2 yrs", color: "bg-sage/10 text-sage border-sage/20" },
  { name: "Electronics Mfg.", years: "1 yr", color: "bg-blush/50 text-charcoal-light border-blush" },
];

const values = [
  {
    label: "Clarity over complexity",
    detail: "I translate tangled requirements into structured plans stakeholders can act on.",
  },
  {
    label: "Proactive escalation",
    detail: "Problems surface in my status reports, not in post-mortems. I flag early.",
  },
  {
    label: "Cross-cultural fluency",
    detail: "Seven years in the UAE, including two in consular operations, have trained me to read any room.",
  },
];

export function About() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-parchment">
      <div className="page-container">
        <div ref={ref} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left column: Heading block */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">About</p>
              <div className="gold-rule mb-8" />
              <h2 className="display-headline text-display-xl mb-8 text-balance">
                A project & operations manager shaped by the{" "}
                <em className="text-gold not-italic">UAE's fastest-moving industries.</em>
              </h2>
            </motion.div>

            {/* Contextual image */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden h-64 lg:h-72 shadow-card"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Professional office and project planning environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-mono text-[10px] tracking-widest uppercase text-parchment/80">
                  Based in Dubai · Open to Remote Opportunities Worldwide
                </p>
              </div>
            </motion.div>

            {/* Industry tags */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {industries.map((ind) => (
                <span
                  key={ind.name}
                  className={`tag border ${ind.color}`}
                >
                  {ind.name}
                  <span className="ml-2 opacity-60">{ind.years}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column: Story + values */}
          <div className="lg:col-span-7 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 body-text text-base leading-relaxed mb-12"
            >
              <p>
                My career has been built across environments that leave little room for missed details —
                Formula 1 race weekends, live theme park activations, consular operations, and healthcare
                facility launches under regulatory scrutiny.
              </p>
              <p>
                What ties these worlds together is the fundamental discipline of project and operations
                management: knowing what needs to happen, in what order, by whom, and how to adapt when
                reality diverges from the plan. I've developed that discipline across four industries and
                two countries.
              </p>
              <p>
                I'm currently based in Dubai, working as a Project & Operations Manager, and open to
                roles where multi-stakeholder complexity is the norm, not the exception — in events,
                healthcare, or operations-heavy environments.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="eyebrow mb-6">Working Principles</p>
              <div className="space-y-5">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="mt-1 w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    </span>
                    <div>
                      <p className="font-body font-semibold text-charcoal text-sm">{v.label}</p>
                      <p className="font-body text-text-secondary text-sm mt-0.5 leading-relaxed">{v.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-10 p-5 rounded-xl bg-sage/10 border border-sage/20 flex items-start gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-sage mt-1.5 flex-shrink-0 animate-pulse-slow" />
              <div>
                <p className="font-body font-medium text-charcoal text-sm">Open to opportunities</p>
                <p className="font-body text-text-secondary text-sm mt-0.5">
                  Available for Project Manager/Coordinator opportunities globally, leading cross-functional teams across time zones and geographies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
