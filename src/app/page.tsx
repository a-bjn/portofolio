import HeroSection from "./components/sections/hero-section";
import ExperienceSection from "./components/sections/experience-section";
import ProjectsSection from "./components/sections/projects-section";

export default function Home() {
  return (
    <main className="relative z-0 pt-20">
      <div className="absolute inset-0 bg-gradient-cyan-tl pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-brown-tr pointer-events-none"></div>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
