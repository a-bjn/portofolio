"use client";

import React from 'react';
import Image from 'next/image';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    image?: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const getTechIcon = (tech: string) => {
    // For the moonsol project, show specific icons
    if (project.title.toLowerCase().includes('moonsol')) {
      switch (tech.toLowerCase()) {
        case 'react':
          return (
            <Image
              src="/react.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(97,218,251,0.3)] hover:animate-spin"
            />
          );
        case 'web3.js':
        case 'web3js':
          return (
            <Image
              src="/web3js.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,165,0,0.3)] hover:animate-bounce"
            />
          );
        case 'next.js':
        case 'nextjs':
          return (
            <Image
              src="/nextjs.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-16 h-16 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] hover:animate-pulse"
            />
          );
        case 'tailwind':
        case 'tailwindcss':
          return (
            <Image
              src="/tailwind.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-14 h-14 flex-shrink-0 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] hover:animate-pulse"
            />
          );
        case 'typescript':
        case 'ts':
          return (
            <Image
              src="/typescript.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(49,120,198,0.3)] hover:animate-bounce"
            />
          );
        case 'pinata':
          return (
            <Image
              src="/pinata.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-11 h-14 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,165,0,0.3)] hover:animate-bounce"
            />
          );
      }
    }
    
    // For the reparatii tv braila project, show specific icons
    if (project.title.toLowerCase().includes('reparatii tv braila')) {
      switch (tech.toLowerCase()) {
        case 'react':
          return (
            <Image
              src="/react.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(97,218,251,0.3)] hover:animate-spin"
            />
          );
        case 'next.js':
        case 'nextjs':
          return (
            <Image
              src="/nextjs.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-16 h-16 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:animate-pulse"
            />
          );
        case 'tailwind':
        case 'tailwindcss':
          return (
            <Image
              src="/tailwind.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-14 h-14 flex-shrink-0 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] hover:animate-pulse"
            />
          );
        case 'typescript':
        case 'ts':
          return (
            <Image
              src="/typescript.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(49,120,198,0.3)] hover:animate-bounce"
            />
          );
      }
    }
    if (project.title.toLowerCase().includes('sudexpert')) {
      switch (tech.toLowerCase()) {
        case 'react':
          return (
            <Image
              src="/react.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(97,218,251,0.3)] hover:animate-spin"
            />
          );
        case 'next.js':
        case 'nextjs':
          return (
            <Image
              src="/nextjs.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-16 h-16 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:animate-pulse"
            />
          );
        case 'tailwind':
        case 'tailwindcss':
          return (
            <Image
              src="/tailwind.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-14 h-14 flex-shrink-0 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] hover:animate-pulse"
            />
          );
        case 'typescript':
        case 'ts':
          return (
            <Image
              src="/typescript.svg"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(49,120,198,0.3)] hover:animate-bounce"
            />
          );
        case 'emailjs':
          return (
            <Image
              src="/emailjs.jpeg"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 rounded-lg drop-shadow-[0_0_8px_rgba(255,165,0,0.3)] hover:animate-bounce"
            />
          );
      }
    }
    
    // For the Social Melody project, show specific icons
    if (project.title.toLowerCase().includes('social melody')) {
      switch (tech.toLowerCase()) {
        case 'android studio':
          return (
            <Image
              src="/android.png"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(164,255,175,0.3)] hover:animate-pulse"
            />
          );
        case 'jetpack compose':
          return (
            <Image
              src="/compose.png"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(0,150,136,0.3)] hover:animate-pulse"
            />
          );
        case 'kotlin':
          return (
            <Image
              src="/kotlin.png"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(127,62,255,0.3)] hover:animate-pulse"
            />
          );
        case 'google maps api':
          return (
            <Image
              src="/maps.png"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(66,133,244,0.3)] hover:animate-pulse"
            />
          );
        case 'spotify api':
          return (
            <Image
              src="/spotify.png"
              alt={tech}
              width={64}
              height={64}
              className="w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(30,215,96,0.3)] hover:animate-pulse"
            />
          );
      }
    }
    // For other projects, don't show any icons until specified
    return null;
  };

  return (
    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden flex flex-col">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Project Image - Full Width with Extended Bottom */}
      {project.image && (
        <div className="relative w-full h-80 overflow-hidden bg-zinc-800">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
            onError={(e) => {
              // Hide image container if image fails to load
              e.currentTarget.parentElement!.style.display = 'none';
            }}
          />
        
          {/* Gradient overlay on the image itself */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/80"></div>
        </div>
      )}

      {/* Additional subtle color bleed */}
      {project.image && (
        <div className="absolute top-80 left-0 right-0 h-6 bg-gradient-to-b from-zinc-800/20 to-transparent"></div>
      )}

      <div className="relative z-10 p-8 flex flex-col flex-1">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-8 flex-grow">
          <h4 className="text-2xl font-base text-gray-100 mb-8">Tech Stack</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:scale-110 group flex flex-col items-center justify-center gap-2 animate-tech-float hover:animate-tech-pulse"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationDuration: `${3 + index * 0.2}s`
                }}
                title={tech}
              >
                {getTechIcon(tech)}
                <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg border border-zinc-700 transition-all duration-200 hover:scale-105 flex-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          
          <a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 flex-1 ${
              project.liveUrl 
                ? 'bg-emerald-600 hover:bg-emerald-500' 
                : 'bg-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
