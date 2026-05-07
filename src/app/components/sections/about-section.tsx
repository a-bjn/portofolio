"use client";

import React, { useEffect, useState } from "react";

const expertise = [
  {
    number: "01",
    title: "Web Applications",
    desc: "End-to-end interfaces with Next.js, React, and TypeScript. From e-commerce checkouts to interactive dashboards.",
    accent: "rgba(6, 182, 212, 0.6)",
  },
  {
    number: "02",
    title: "Backend & APIs",
    desc: "REST and authenticated services with Spring Boot, Node.js, and PostgreSQL. Designed to scale and stay maintainable.",
    accent: "rgba(245, 158, 11, 0.6)",
  },
  {
    number: "03",
    title: "Cloud & Deployment",
    desc: "Containerized apps with Docker, deployed on AWS. CI/CD pipelines that ship reliably and recover gracefully.",
    accent: "rgba(139, 92, 246, 0.6)",
  },
];

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative px-6 lg:px-8 overflow-visible">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-6 lg:mb-10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-gray-200 via-white to-gray-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-flow">
              About Me
            </span>
          </h2>
          <p className="text-lg lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto px-4">
            The story behind the code, and what fuels the keystrokes.
          </p>
        </div>

        {/* Manifesto-style intro */}
        <div
          className={`relative max-w-3xl mx-auto mb-8 lg:mb-14 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="absolute -left-3 lg:-left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <p className="text-base lg:text-xl text-gray-300 leading-relaxed lg:leading-loose font-light">
            I&apos;m driven by the craft of building software that matters. From interactive
            frontends to scalable backend systems, I work across the entire stack to turn ideas
            into real products. I care deeply about the experience of using software — both for
            the people who use it and the engineers who maintain it.
          </p>
        </div>

        {/* Areas of expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {expertise.map((p, i) => (
            <div
              key={p.number}
              className={`group relative p-5 lg:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Accent line on top */}
              <div
                className="absolute top-0 left-5 right-5 lg:left-7 lg:right-7 h-px opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: p.accent }}
              />

              {/* Number */}
              <div className="flex items-baseline justify-between mb-3 lg:mb-4">
                <span
                  className="text-4xl lg:text-5xl font-bold tracking-tighter"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: `1px ${p.accent}`,
                  }}
                >
                  {p.number}
                </span>
                <h3 className="text-base lg:text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm lg:text-[15px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300 leading-relaxed">
                {p.desc}
              </p>

              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-500 -z-10 blur-3xl"
                style={{ backgroundColor: p.accent.replace("0.6", "0.1") }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
