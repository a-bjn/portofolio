import HeroSection from "./components/sections/hero-section";
import ExperienceSection from "./components/sections/experience-section";
import ProjectsSection from "./components/sections/projects-section";

export default function Home() {
  return (
    <main className="relative z-0 pt-20">
      {/* Cyan gradient from top-left, transitioning through black */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.045] via-black/[0.5] to-transparent pointer-events-none"></div>
      {/* Brown gradient from bottom-right */}
      <div className="absolute inset-0 bg-gradient-to-tl from-amber-400/[0.015] via-amber-900/[0.035] to-transparent pointer-events-none"></div>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
