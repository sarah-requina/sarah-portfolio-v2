# Sarah Requina — Portfolio Website

Premium personal portfolio for Sarah Requina, Project & Operations Manager, Dubai UAE.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion + GSAP with ScrollTrigger
- **Fonts**: Cormorant Garamond (display) + DM Sans (body) + DM Mono (utility)
- **Images**: Next.js Image optimization + Unsplash (contextual) + personal portrait

## Sections

1. **Navigation** — Fixed header with scroll spy, mobile menu, CV download
2. **Hero** — Split layout with portrait, animated headline, floating stat badges
3. **About** — Editorial layout with industry tags and working principles
4. **Career Timeline** — Interactive accordion with GSAP-animated timeline line
5. **Case Studies** — Grid cards + full dossier modal (F1, Theme Parks, Consulate, Mena Labs)
6. **PM Framework** — 5-phase process on dark background with scroll-triggered progress
7. **Skills Ecosystem** — Tabbed category browser + tool grid
8. **Achievements Dashboard** — Animated stat counters + achievement cards
9. **Contact** — Cinematic Dubai skyline background + contact form + links

## Setup & Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

1. Push this folder to a GitHub repo
2. Connect the repo to [vercel.com](https://vercel.com)
3. Deploy — zero configuration needed

Or via Vercel CLI:
```bash
npx vercel --prod
```

## Customisation Checklist

- [x] **Hero portrait**: `/public/sarah-portrait.jpg` in place
- [x] **Email**: Set in `src/lib/data.ts`
- [x] **LinkedIn**: Set in `src/lib/data.ts`
- [x] **Phone**: Set in `src/lib/data.ts`
- [x] **CV file**: `/public/sarah-requina-cv.pdf` in place
- [x] **Contact form**: Live via Formspree
- [ ] **OG image**: Add `/public/og-image.jpg` (1200×630) for social sharing
- [ ] **Domain**: Configure `sarahrequina.com` in Vercel dashboard

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `parchment` | `#F7F6F2` | Page background |
| `charcoal` | `#1A1A2E` | Primary text, dark sections |
| `gold` | `#C9A96E` | Accent, highlights, CTAs |
| `slate` | `#3D5A80` | Events industry accent |
| `sage` | `#8BAF9A` | Healthcare/diplomatic accent |
| Display font | Cormorant Garamond | Headlines, hero text |
| Body font | DM Sans | Body copy, UI |
| Mono font | DM Mono | Labels, eyebrows, stats |

## Contact Form Integration

The form submits live to Formspree from `handleSubmit` in `src/components/sections/Contact.tsx`. To point it at a different Formspree form, update the endpoint URL in that function.
