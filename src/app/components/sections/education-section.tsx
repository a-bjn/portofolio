"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const courses = [
  "Algorithms & Data Structures",
  "Object-Oriented Programming",
  "Software Engineering",
  "Databases & SQL",
  "Operating Systems",
  "Computer Networks",
  "Web Development",
  "Mobile App Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Graphics",
  "Distributed Systems",
];

const highlights = [
  {
    label: "Degree",
    value: "B.Sc. Computer Science",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6.055" />
      </svg>
    ),
  },
  {
    label: "Period",
    value: "Oct 2022 – Jun 2025",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Cluj-Napoca, Romania",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const EducationSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("education");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -3, y: x * 3 });
  };

  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="education" className="relative px-6 lg:px-8 overflow-visible">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div
          className={`text-center mb-6 lg:mb-14 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-gray-200 via-white to-gray-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-flow">
              Education
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto px-4">
            Where the foundation was built — and where the curiosity took off.
          </p>
        </div>

        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
          className={`relative group rounded-3xl border border-zinc-700/20 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-out hover:bg-zinc-900/60 hover:border-zinc-600/30 hover:shadow-2xl hover:shadow-black/50 hover:scale-[1.01] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Enhanced gradient overlays with more visible cyan and amber */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tl from-amber-600/6 via-transparent to-transparent pointer-events-none" />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* University Building Image Container */}
              <div 
                className="relative flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-2 border-zinc-700/30"
                style={{
                  transform: `translateZ(20px) rotateY(${tilt.y * 0.5}deg) rotateX(${tilt.x * -0.5}deg)`,
                }}
              >
                <Image
                  src="/Universitatea-Babes-Bolyai-UBB.jpg"
                  alt="Babeș-Bolyai University Building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/35 via-transparent to-transparent pointer-events-none" />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 mb-1">Babeș-Bolyai University</h3>
                <p className="text-base lg:text-lg text-gray-300 mb-5">Faculty of Mathematics and Informatics</p>

                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {highlights.map((h, i) => (
                    <div
                      key={h.label}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${200 + i * 100}ms` }}
                    >
                      <div className="text-zinc-400 flex-shrink-0">{h.icon}</div>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">{h.label}</div>
                        <div className="text-sm text-gray-200 font-medium truncate">{h.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                  Three years of computer science fundamentals — from low-level memory layouts to high-level architectural
                  patterns — paired with hands-on projects in web, mobile, and AI. The kind of place that taught me{" "}
                  <span className="text-gray-200 font-semibold">how</span> to learn, not just{" "}
                  <span className="text-gray-200 font-semibold">what</span> to learn.
                </p>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>{expanded ? "Hide Coursework" : "View Coursework"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="pt-5 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {courses.map((course, i) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-gray-200 hover:scale-105 transition-all duration-200 cursor-default"
                          style={{
                            animation: expanded ? `fadeInScale 0.4s ease-out ${i * 40}ms both` : "none",
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
