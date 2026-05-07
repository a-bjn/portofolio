"use client";

import React, { useEffect, useRef, useState } from "react";

type Category = "all" | "frontend" | "backend" | "database" | "devops" | "mobile" | "tools";

type Skill = {
  name: string;
  icon: string;
  category: Exclude<Category, "all">;
  glow: string;
};

const skills: Skill[] = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", category: "frontend", glow: "rgba(200,200,200,0.35)" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "frontend", glow: "rgba(97,218,251,0.35)" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", category: "frontend", glow: "rgba(49,120,198,0.35)" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "frontend", glow: "rgba(247,223,30,0.3)" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "frontend", glow: "rgba(56,189,248,0.35)" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "frontend", glow: "rgba(228,77,38,0.35)" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", category: "frontend", glow: "rgba(21,114,182,0.35)" },

  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", category: "backend", glow: "rgba(109,179,63,0.35)" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "backend", glow: "rgba(248,152,32,0.35)" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", category: "backend", glow: "rgba(104,160,99,0.35)" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "backend", glow: "rgba(55,118,171,0.35)" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", category: "backend", glow: "rgba(104,33,122,0.35)" },

  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "database", glow: "rgba(51,103,145,0.35)" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", category: "database", glow: "rgba(77,175,80,0.35)" },

  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", category: "devops", glow: "rgba(29,136,213,0.35)" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", category: "devops", glow: "rgba(255,153,0,0.35)" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "devops", glow: "rgba(240,80,50,0.35)" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", category: "devops", glow: "rgba(200,200,200,0.3)" },

  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", category: "mobile", glow: "rgba(127,82,229,0.35)" },
  { name: "Jetpack Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg", category: "mobile", glow: "rgba(66,133,244,0.35)" },
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg", category: "mobile", glow: "rgba(164,255,175,0.3)" },

  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", category: "tools", glow: "rgba(0,120,215,0.35)" },
  { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg", category: "tools", glow: "rgba(254,98,40,0.35)" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", category: "tools", glow: "rgba(255,108,55,0.35)" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "tools", glow: "rgba(162,89,255,0.35)" },
];

const categoryMeta: Record<Category, { label: string; color: string; ring: string; glow: string }> = {
  all: {
    label: "All",
    color: "from-gray-500/20 to-gray-500/5 border-gray-500/30 text-gray-200",
    ring: "ring-gray-400/30",
    glow: "rgba(156,163,175,0.45)",
  },
  frontend: {
    label: "Frontend",
    color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-300",
    ring: "ring-cyan-400/40",
    glow: "rgba(34,211,238,0.45)",
  },
  backend: {
    label: "Backend",
    color: "from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-300",
    ring: "ring-amber-400/40",
    glow: "rgba(245,158,11,0.45)",
  },
  database: {
    label: "Database",
    color: "from-violet-500/20 to-violet-500/5 border-violet-500/30 text-violet-300",
    ring: "ring-violet-400/40",
    glow: "rgba(167,139,250,0.45)",
  },
  devops: {
    label: "DevOps",
    color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-300",
    ring: "ring-emerald-400/40",
    glow: "rgba(52,211,153,0.45)",
  },
  mobile: {
    label: "Mobile",
    color: "from-rose-500/20 to-rose-500/5 border-rose-500/30 text-rose-300",
    ring: "ring-rose-400/40",
    glow: "rgba(251,113,133,0.45)",
  },
  tools: {
    label: "Tools",
    color: "from-sky-500/20 to-sky-500/5 border-sky-500/30 text-sky-300",
    ring: "ring-sky-400/40",
    glow: "rgba(56,189,248,0.45)",
  },
};

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState<Category>("all");
  const gridInnerRef = useRef<HTMLDivElement>(null);
  const [gridHeight, setGridHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!gridInnerRef.current) return;
    const update = () => {
      if (gridInnerRef.current) {
        setGridHeight(gridInnerRef.current.scrollHeight);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(gridInnerRef.current);
    return () => ro.disconnect();
  }, [active]);

  useEffect(() => {
    setIsTransitioning(true);
    const t = setTimeout(() => setIsTransitioning(false), 550);
    return () => clearTimeout(t);
  }, [active]);

  const filtered = active === "all" ? skills : skills.filter((s) => s.category === active);
  const categories: Category[] = ["all", "frontend", "backend", "database", "devops", "mobile", "tools"];

  return (
    <section id="skills" className="relative px-6 lg:px-8 overflow-visible">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`text-center mb-6 lg:mb-10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-gray-200 via-white to-gray-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-flow">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto px-4">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 lg:gap-3 mb-6 lg:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isActive
                    ? "bg-white/10 text-gray-100"
                    : "bg-white/5 text-gray-400 hover:text-gray-200 hover:bg-white/10"
                }`}
              >
                {meta.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid — borderless floating icons */}
        <div
          className={`${isTransitioning ? "overflow-hidden" : "overflow-visible"} transition-[height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}
          style={{ height: gridHeight }}
        >
        <div
          ref={gridInnerRef}
          key={active}
          className="flex flex-wrap justify-center gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-10 py-4 lg:py-6"
        >
          {filtered.map((skill, i) => {
            return (
            <div
              key={`${active}-${skill.name}`}
              className="group relative flex flex-col items-center gap-2 cursor-default w-16 lg:w-24"
              style={{
                animation: `skillPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 50}ms both`,
              }}
            >
              {/* Per-icon brand color glow on hover */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-20 lg:h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: skill.glow }}
              />

              {/* Icon with floating effect */}
              <div
                className="relative w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2"
                style={{
                  animation: `skillIconBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 50 + 100}ms both`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.08)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-[filter] duration-300"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <span
                className="text-xs lg:text-sm font-medium text-gray-500 group-hover:text-gray-200 transition-colors duration-300 text-center leading-tight"
                style={{
                  animation: `skillNameSlide 0.4s ease-out ${i * 50 + 250}ms both`,
                }}
              >
                {skill.name}
              </span>
            </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
