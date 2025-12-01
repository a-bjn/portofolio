"use client";

import React, { useEffect, useState } from 'react';
import ProjectCard from '../project-card';

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate projects one by one
            [0, 1, 2, 3].forEach((index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "MoonSol",
      description: "MoonSol is an app that allows users to create solana tokens, create liquidity pools, promote their tokens on telegram, generate a website for their token, and manage their own solana wallets.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Web3.js", "Pinata"],
      githubUrl: "https://github.com/a-bjn/ms",
      liveUrl: "https://www.moonsol.io",
      image: "/moonsol.png"
    },
    {
      id: 2,
      title: "Sudexpert",
      description: "Sudexpert is a platform that aims to reach a broader audience to sell their welding products.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "EmailJS"],
      githubUrl: "https://github.com/a-bjn/sudexpert",
      liveUrl: "https://www.sudexpertbraila.com/",
      image: "/sudexpert.png"
    },
    {
      id: 3,
      title: "Reparatii TV Braila",
      description: "A fast, SEO‑optimized Next.js website for a TV repair service in Brăila, featuring clear service pages, brand coverage, customer reviews, and one‑tap WhatsApp/call contact—built for conversions and local search visibility.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/a-bjn/reparatii-tv-braila",
      liveUrl: "https://www.reparatiitvbraila.com/",
      image: "/reparatii.png"
    },
    {
      id: 4,
      title: "Social Melody",
      description: "Social Melody is a map‑driven social music app for Android: connect your Spotify account to discover what nearby users are playing in real time, like and queue tracks, create/join live DJ sessions, and get personalized recommendations with integrated playback.",
      technologies: ["Android Studio", "Jetpack Compose", "Kotlin", "Google Maps API", "Spotify API"],
      githubUrl: "https://github.com/a-bjn/social-melody",
      image: "/socialmelody.png"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 lg:px-8 overflow-visible">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-10 lg:mb-20 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 lg:mb-6">
            <span className="animate-gradient-flow">Featured Projects</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto px-4">
            Here are some of my recent projects showcasing my skills and experience in full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ease-out flex ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
