import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F7F6F2",
        "parchment-dark": "#EDECEA",
        charcoal: "#1A1A2E",
        "charcoal-mid": "#2D2D44",
        "charcoal-light": "#4A4A6A",
        gold: "#C9A96E",
        "gold-light": "#E0C898",
        "gold-dark": "#A8884A",
        slate: "#3D5A80",
        "slate-light": "#5A7FA8",
        sage: "#8BAF9A",
        "sage-light": "#B5CFC3",
        blush: "#E8D5C4",
        "text-primary": "#1A1A2E",
        "text-secondary": "#4A4A6A",
        "text-muted": "#8A8AAA",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "clamp(5rem, 10vw, 9rem)",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A96E 0%, #E0C898 50%, #A8884A 100%)",
        "parchment-gradient": "linear-gradient(180deg, #F7F6F2 0%, #EDECEA 100%)",
        "charcoal-gradient": "linear-gradient(180deg, #1A1A2E 0%, #2D2D44 100%)",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(26,26,46,0.06), 0 8px 24px rgba(26,26,46,0.08)",
        "card-hover": "0 4px 12px rgba(26,26,46,0.1), 0 20px 48px rgba(26,26,46,0.12)",
        "gold": "0 4px 24px rgba(201,169,110,0.25)",
        "inset-top": "inset 0 1px 0 rgba(255,255,255,0.8)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
