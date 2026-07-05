import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { PMFramework } from "@/components/sections/PMFramework";
import { SkillsEcosystem } from "@/components/sections/SkillsEcosystem";
import { AchievementsDashboard } from "@/components/sections/AchievementsDashboard";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <CareerTimeline />
        <CaseStudies />
        <PMFramework />
        <SkillsEcosystem />
        <AchievementsDashboard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
