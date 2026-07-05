import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const industryColorMap: Record<string, { bg: string; text: string; border: string }> = {
  slate: {
    bg: "bg-slate/10",
    text: "text-slate",
    border: "border-slate/20",
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold-dark",
    border: "border-gold/20",
  },
  sage: {
    bg: "bg-sage/10",
    text: "text-sage",
    border: "border-sage/20",
  },
  blush: {
    bg: "bg-blush/40",
    text: "text-charcoal-light",
    border: "border-blush",
  },
};

export function getColorClasses(color: string) {
  return industryColorMap[color] ?? industryColorMap["slate"];
}
