"use client";

import React, { useEffect, useState } from "react";

type Experience = {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  year: string;
  description: string;
  technologies: string[];
  achievements: string[];
  accent: string;
};

const experienceData: Experience[] = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Electronic Professional Design",
    location: "Brăila, Romania",
    period: "Sep 2025 — Dec 2025",
    year: "2025",
    description: "Specialized digital and business solutions provider.",
    technologies: ["React", "Next.js", "Tailwind CSS", "JWT", "HTTP-only Cookies", "Stripe"],
    achievements: [
      "Built responsive applications with React, Next.js, and Tailwind CSS.",
      "Implemented authentication using JWT, HTTP-only cookies, and role-based access control.",
      "Integrated Stripe payments, developing checkout and transaction flows.",
    ],
    accent: "rgba(6, 182, 212, 1)",
  },
  {
    id: 2,
    position: "Fullstack Developer Intern",
    company: ".msg Systems",
    location: "Cluj-Napoca, Romania",
    period: "Oct 2023 — Jan 2024",
    year: "2023",
    description: "Develops innovative software products and human-inspired solutions.",
    technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Spring", "JWT", "RESTful API"],
    achievements: [
      "Developed an internal bug tracking platform using React (TypeScript) and Spring Boot.",
      "Implemented secure user authentication with JWT and role-based access control.",
      "Delivered a fully functional MVP adopted by internal QA teams.",
    ],
    accent: "rgba(245, 158, 11, 1)",
  },
  {
    id: 3,
    position: "Android Developer Intern",
    company: "Yopeso",
    location: "Cluj-Napoca, Romania",
    period: "Jun 2022 — Oct 2022",
    year: "2022",
    description: "Designs software solutions tailored to client business needs.",
    technologies: ["Jetpack Compose", "XML", "Hilt", "Retrofit", "Android"],
    achievements: [
      "Built dynamic UIs with Jetpack Compose and integrated REST APIs using Hilt and Retrofit.",
      "Contributed to new feature modules that improved user retention by enhancing app responsiveness.",
    ],
    accent: "rgba(168, 85, 247, 1)",
  },
];

const getRoleIcon = (position: string) => {
  if (position.toLowerCase().includes("android")) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    );
  }
  if (position.toLowerCase().includes("frontend")) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25h16.5M7 6h.01M9.5 6h.01M12 6h.01" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
};

const ExperienceSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            experienceData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 180);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("experience");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative px-6 lg:px-8 overflow-visible">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-6 lg:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-gray-200 via-white to-gray-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-flow">
              Work Experience
            </span>
          </h2>
          <p className="text-lg lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto px-4">
            My professional journey in software engineering and web development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[18px] lg:left-[22px] top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 8%, rgba(255,255,255,0.15) 92%, transparent 100%)",
            }}
          />

          <div className="space-y-8 lg:space-y-12">
            {experienceData.map((exp, index) => {
              const cardVisible = visibleCards.includes(index);
              return (
                <div
                  key={exp.id}
                  className={`relative pl-12 lg:pl-16 transition-all duration-700 ease-out ${
                    cardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                >
                  {/* Timeline node — colored dot with ring */}
                  <div className="absolute left-0 top-4 lg:top-6">
                    <div
                      className="relative w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.6)",
                        boxShadow: `0 0 0 1px ${exp.accent.replace("1)", "0.32)")}`,
                      }}
                    >
                      {/* Pulsing outer ring */}
                      <div
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ backgroundColor: exp.accent.replace("1)", "0.07)") }}
                      />
                      {/* Inner colored core */}
                      <div
                        className="relative w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full"
                        style={{
                          backgroundColor: exp.accent,
                          boxShadow: `0 0 5px ${exp.accent.replace("1)", "0.32)")}`,
                        }}
                      />
                    </div>
                    {/* Year label below dot */}
                    <div
                      className="absolute -left-2 lg:-left-3 top-full mt-2 text-[10px] lg:text-xs uppercase tracking-widest font-medium"
                      style={{ color: exp.accent.replace("1)", "0.7)") }}
                    >
                      {exp.year}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
                    {/* Accent edge */}
                    <div
                      className="absolute left-0 top-6 bottom-6 w-[2px] opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(to bottom, transparent, ${exp.accent.replace("1)", "0.45)")}, transparent)`,
                      }}
                    />

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10 blur-2xl"
                      style={{ backgroundColor: exp.accent.replace("1)", "0.035)") }}
                    />

                    <div className="relative p-5 lg:p-7">
                      {/* Top row: icon + title block + period */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-4 mb-4 lg:mb-5">
                        <div className="flex items-start gap-3 lg:gap-4 flex-1">
                          <div
                            className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: exp.accent.replace("1)", "0.08)"),
                              color: exp.accent.replace("1)", "0.9)"),
                            }}
                          >
                            {getRoleIcon(exp.position)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 mb-1">
                              {exp.position}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-gray-400">
                              <span
                                className="font-medium"
                                style={{ color: exp.accent.replace("1)", "0.85)") }}
                              >
                                {exp.company}
                              </span>
                              <span className="text-gray-700">·</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Period chip */}
                        <span className="self-start lg:self-auto inline-flex items-center px-3 py-1.5 rounded-lg text-xs lg:text-sm text-gray-400 bg-white/[0.04] border border-white/[0.08] font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements with colored bullets */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                              style={{
                                backgroundColor: exp.accent.replace("1)", "0.75)"),
                                boxShadow: `0 0 4px ${exp.accent.replace("1)", "0.28)")}`,
                              }}
                            />
                            <span className="text-sm lg:text-[15px] text-gray-400 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-1.5 lg:gap-2 pt-4 border-t border-white/[0.05]">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] lg:text-xs font-medium text-gray-400 bg-white/[0.03] border border-white/[0.06] hover:text-gray-200 hover:border-white/[0.12] transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
