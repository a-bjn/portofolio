"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  accent: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "MoonSol",
    tagline: "Solana token launchpad",
    description:
      "An app for creating Solana tokens, launching liquidity pools, generating token landing pages, and managing on-chain wallets — all in one place.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Web3.js", "Pinata"],
    githubUrl: "https://github.com/a-bjn/ms",
    liveUrl: "https://www.moonsol.io",
    image: "/moonsol.png",
    accent: "rgba(99, 102, 241, 0.4)",
  },
  {
    id: 2,
    title: "Sudexpert",
    tagline: "E-commerce for welding products",
    description:
      "A modern, conversion-focused e-commerce platform that helps a local welding business reach a broader audience and showcase their full product catalog.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "EmailJS"],
    githubUrl: "https://github.com/a-bjn/sudexpert",
    liveUrl: "https://www.sudexpert.ro/",
    image: "/sudexpert.png",
    accent: "rgba(245, 158, 11, 0.4)",
  },
  {
    id: 3,
    title: "Reparatii TV Braila",
    tagline: "SEO-driven local service site",
    description:
      "A fast, SEO-optimized Next.js website for a local TV repair service, featuring brand coverage, customer reviews, and one-tap call/WhatsApp contact for maximum conversion.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/a-bjn/reparatii-tv-braila",
    liveUrl: "https://www.reparatiitvbraila.com/",
    image: "/reparatii.png",
    accent: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: 4,
    title: "Social Melody",
    tagline: "Map-driven music social app",
    description:
      "An Android app that connects to Spotify and shows what nearby users are listening to in real time. Includes live DJ sessions, queue sharing, and music recommendations.",
    technologies: ["Android Studio", "Jetpack Compose", "Kotlin", "Google Maps API", "Spotify API"],
    githubUrl: "https://github.com/a-bjn/social-melody",
    image: "/socialmelody.png",
    accent: "rgba(34, 197, 94, 0.4)",
  },
];

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative px-6 lg:px-8 overflow-visible">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-6 lg:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-gray-200 via-white to-gray-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-flow">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto px-4">
            A selection of recent work spanning web, blockchain, and mobile.
          </p>
        </div>

        {/* Project rows */}
        <div className="space-y-12 lg:space-y-24">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const isCardVisible = visibleProjects.includes(index);

            return (
              <div
                key={project.id}
                className={`group/project relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-6 lg:p-0 lg:rounded-none lg:border-0 lg:bg-transparent transition-all duration-700 ease-out ${
                  isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {/* Subtle row background — inside card bounds */}
                <div
                  className="absolute inset-0 -z-10 rounded-2xl lg:rounded-3xl pointer-events-none"
                  style={{
                    background: isReversed
                      ? "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(160,160,170,0.1) 25%, rgba(160,160,170,0.08) 55%, rgba(160,160,170,0.03) 100%)"
                      : "linear-gradient(to right, rgba(160,160,170,0.03) 0%, rgba(160,160,170,0.08) 45%, rgba(160,160,170,0.1) 75%, rgba(255,255,255,0) 100%)",
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-[2]">
                {/* Image side */}
                <div
                  className={`relative z-[2] lg:col-span-7 transition-transform duration-500 ease-out will-change-transform group-hover/project:scale-[1.008] lg:group-hover/project:scale-[1.015] ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/image relative block rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-900/50 transition-all duration-500 hover:border-white/[0.15]"
                  >
                    {/* Accent glow on hover */}
                    <div
                      className="absolute -inset-1 rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-700 -z-10 blur-3xl"
                      style={{ backgroundColor: project.accent }}
                    />

                    {project.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover"
                          unoptimized
                        />
                        {/* Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                      </div>
                    )}
                  </a>
                </div>

                {/* Content side */}
                <div
                  className={`relative z-[2] lg:col-span-5 transition-transform duration-500 ease-out will-change-transform group-hover/project:scale-[1.008] lg:group-hover/project:scale-[1.015] ${
                    isReversed ? "lg:order-1 lg:text-right" : "lg:order-2 lg:text-left"
                  } text-left`}
                >
                  {/* Number */}
                  <div
                    className={`flex items-center gap-3 mb-3 lg:mb-4 ${
                      isReversed ? "lg:justify-end" : ""
                    }`}
                  >
                    <span
                      className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <span
                      className="h-px flex-1 max-w-[60px]"
                      style={{
                        background: `linear-gradient(to right, ${project.accent.replace("0.4", "0.5")}, transparent)`,
                      }}
                    />
                  </div>

                  {/* Tagline */}
                  <p
                    className="text-xs lg:text-sm uppercase tracking-widest font-medium mb-2"
                    style={{ color: project.accent.replace("0.4", "0.9") }}
                  >
                    {project.tagline}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-4xl font-bold text-gray-100 mb-3 lg:mb-4 group-hover/project:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-gray-400 leading-relaxed mb-5 lg:mb-6">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div
                    className={`flex flex-wrap gap-1.5 lg:gap-2 mb-5 lg:mb-6 ${
                      isReversed ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] lg:text-xs font-medium text-gray-400 bg-white/[0.04] border border-white/[0.06] hover:text-gray-200 hover:border-white/[0.12] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div
                    className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 w-full max-w-full ${
                      isReversed ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 lg:px-5 lg:py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2] text-sm text-gray-100 font-medium transition-all duration-300 w-full sm:w-auto shrink-0"
                      >
                        <span>View Live</span>
                        <svg
                          className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 lg:px-5 lg:py-2.5 rounded-lg text-sm text-gray-400 hover:text-gray-100 font-medium transition-colors duration-300 border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] w-full sm:w-auto shrink-0"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Source</span>
                    </a>
                  </div>
                </div>
                </div>

                {/* Speed trails — desktop only; sibling of grid, not a grid cell */}
                <div
                  className="hidden lg:block absolute inset-0 z-[1] pointer-events-none overflow-visible opacity-0 transition-opacity duration-500 group-hover/project:opacity-100 rounded-3xl"
                  style={{
                    WebkitMaskImage: isReversed
                      ? "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.2) 8%, rgba(0,0,0,0.9) 16%, #000 24%, #000 91%, transparent 100%)"
                      : "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, rgba(0,0,0,0.9) 16%, #000 24%, #000 91%, transparent 100%)",
                    maskImage: isReversed
                      ? "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.2) 8%, rgba(0,0,0,0.9) 16%, #000 24%, #000 91%, transparent 100%)"
                      : "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, rgba(0,0,0,0.9) 16%, #000 24%, #000 91%, transparent 100%)",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                  }}
                >
                  {Array.from({ length: 12 }).map((_, i) => {
                    const widths = [55, 42, 68, 48, 60, 38, 52, 65, 45, 58, 50, 62];
                    const baseAlphas = [0.2, 0.12, 0.22, 0.16, 0.18, 0.13, 0.21, 0.15, 0.19, 0.14, 0.23, 0.17];
                    const yPositions = [10, 18, 28, 35, 44, 52, 60, 68, 76, 82, 88, 14];
                    const depths = [
                      { edge: -16, alphaMul: 0.45, blur: 1.4, scaleY: 0.4, durMul: 1.18 },
                      { edge: -10, alphaMul: 0.62, blur: 0.9, scaleY: 0.55, durMul: 1.08 },
                      { edge: -4, alphaMul: 0.78, blur: 0.45, scaleY: 0.72, durMul: 1.02 },
                      { edge: 4, alphaMul: 0.95, blur: 0.15, scaleY: 0.88, durMul: 0.98 },
                      { edge: 12, alphaMul: 1.12, blur: 0, scaleY: 1.15, durMul: 0.9 },
                      { edge: -12, alphaMul: 0.55, blur: 1.1, scaleY: 0.48, durMul: 1.12 },
                      { edge: 0, alphaMul: 0.85, blur: 0.35, scaleY: 0.8, durMul: 1 },
                      { edge: 8, alphaMul: 1.05, blur: 0, scaleY: 1.05, durMul: 0.94 },
                      { edge: -8, alphaMul: 0.68, blur: 0.75, scaleY: 0.6, durMul: 1.06 },
                      { edge: 6, alphaMul: 1, blur: 0.08, scaleY: 0.95, durMul: 0.96 },
                      { edge: -14, alphaMul: 0.5, blur: 1.25, scaleY: 0.42, durMul: 1.15 },
                      { edge: 14, alphaMul: 1.08, blur: 0, scaleY: 1.22, durMul: 0.88 },
                    ];
                    const depth = depths[i];
                    const baseDur = 1.9;
                    const duration = baseDur * depth.durMul;
                    const delay = (i * baseDur) / 12;
                    const a = Math.min(0.28, baseAlphas[i] * depth.alphaMul);
                    /* Positions as % of full row — streaks start in image/gap zone, cross into text */
                    const rowWidthPct = Math.round(widths[i] * 0.52);
                    const edgePct = 50 + depth.edge * 0.22;
                    const pos = isReversed
                      ? { right: `${edgePct}%` as const }
                      : { left: `${edgePct}%` as const };
                    return (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${yPositions[i]}%`,
                          width: `${rowWidthPct}%`,
                          ...pos,
                          transform: `scaleY(${depth.scaleY})`,
                          transformOrigin: "center",
                        }}
                      >
                        <div
                          className="h-px w-full"
                          style={{
                            background: `linear-gradient(${
                              isReversed ? "to left" : "to right"
                            }, transparent, rgba(255,255,255,${a}), transparent)`,
                            filter: depth.blur > 0 ? `blur(${depth.blur}px)` : undefined,
                            animation: `${
                              isReversed ? "speedTrailReverse" : "speedTrail"
                            } ${duration}s linear ${delay}s infinite`,
                            willChange: "transform, opacity",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
