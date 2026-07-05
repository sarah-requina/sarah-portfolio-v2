"use client";

import { personalInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5 py-8">
      <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-widest uppercase text-white/30">
          © {year} {personalInfo.name} · Dubai, UAE
        </p>
        <p className="font-mono text-[10px] tracking-widest uppercase text-white/20">
          {personalInfo.title} · Open to Opportunities
        </p>
      </div>
    </footer>
  );
}
