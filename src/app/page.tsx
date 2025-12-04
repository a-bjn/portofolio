import HeroSection from "./components/sections/hero-section";
import ExperienceSection from "./components/sections/experience-section";
import ProjectsSection from "./components/sections/projects-section";

export default function Home() {
  return (
    <main className="relative z-0 pt-20">
      {/* Cyan gradient from top-left (135deg) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.025] via-cyan-500/[0.008] to-transparent pointer-events-none"></div>
      {/* Brown gradient from top-right (225deg) */}
      <div className="absolute inset-0 bg-gradient-to-bl from-amber-900/[0.075] via-amber-900/[0.025] to-transparent pointer-events-none"></div>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
