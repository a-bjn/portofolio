import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import SkillsSection from "./components/sections/skills-section";
import ExperienceSection from "./components/sections/experience-section";
import EducationSection from "./components/sections/education-section";
import ProjectsSection from "./components/sections/projects-section";
import ContactSection from "./components/sections/contact-section";

export default function Home() {
  return (
    <main className="relative z-0 pt-20">
      {/* Cyan gradient: from top on mobile, from top-left on desktop, transitioning through black */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-cyan-400/[0.04] md:from-cyan-400/[0.045] via-black/[0.5] to-transparent pointer-events-none"></div>
      {/* Brown gradient: from bottom on mobile, from bottom-right on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-tl from-amber-400/[0.015] via-amber-900/[0.035] to-transparent pointer-events-none"></div>
      <div className="space-y-10 lg:space-y-40">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
