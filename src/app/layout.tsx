import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title} — Dubai, UAE`,
  description:
    "Project & Operations Manager with 8+ years coordinating complex, multi-stakeholder projects across events, healthcare, consular operations, and manufacturing. Based in Dubai, UAE.",
  keywords: [
    "Project Manager Dubai",
    "Operations Manager Dubai",
    "Project & Operations Manager UAE",
    "Events Project Coordinator",
    "Sarah Requina",
    "F1 Abu Dhabi",
    "Project Coordination UAE",
    "Monday.com Asana Jira ClickUp",
  ],
  authors: [{ name: "Sarah Requina" }],
  creator: "Sarah Requina",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://sarahrequina.com",
    title: `${personalInfo.name} | ${personalInfo.title} — Dubai, UAE`,
    description:
      "8+ years coordinating complex, multi-stakeholder projects into delivered outcomes. F1 Abu Dhabi, Ferrari World, Warner Bros. World, and more.",
    siteName: "Sarah Requina Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — ${personalInfo.title}, Dubai`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title} — Dubai, UAE`,
    description: "8+ years coordinating complex, multi-stakeholder projects into delivered outcomes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-parchment text-text-primary font-body antialiased">{children}</body>
    </html>
  );
}
