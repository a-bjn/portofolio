"use client";

import React from 'react';
import ProjectCard from '../project-card';

const ProjectsSection: React.FC = () => {
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
      title: "Reparatii TV Braila",
      description: "NewsNugget, powered by HuggingFace AI, condenses Times of India articles into 60-word summaries for quick and easy updates.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/a-bjn/reparatii-tv-braila",
      liveUrl: "https://www.reparatiitvbraila.com/",
      image: "/image.png"
    },
    {
      id: 3,
      title: "Sudexpert",
      description: "Sudexpert is a platform that aims to reach a broader audience to sell their welding products.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "EmailJS"],
      githubUrl: "https://github.com/a-bjn/sudexpert",
      liveUrl: "https://www.sudexpertbraila.ro/",
      image: "/sudexpert.png"
    },
    {
      id: 4,
      title: "Epic-Energize",
      description: "Epic-Energize is a fitness app with a comprehensive exercise database and rapidAPI integration, providing structured workouts.",
      technologies: ["React", "Tailwind", "RapidAPI"],
      githubUrl: "https://github.com/yourusername/epic-energize",
      liveUrl: "https://epic-energize.vercel.app",
      image: "/project-images/epic-energize.jpg"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 lg:px-8 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="animate-gradient-flow">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
