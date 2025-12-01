"use client";

import React, { useEffect, useState } from 'react';

const ExperienceSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [allExpanded, setAllExpanded] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger card animations
            experienceData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const experienceData = [
    {
      id: 1,
      position: "Full-Stack Developer Intern",
      company: ".msg Systems",
      location: "Cluj-Napoca, Romania",
      period: "Oct 2023 - Jan 2024",
      year: "2023",
      description: "They develop innovative software products and human-inspired solutions",
      technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Spring", "JWT", "RESTful API"],
      achievements: [
        "Developed an internal bug tracking platform using React (TypeScript) and Spring Boot.",
        "Implemented secure user authentication with JWT and fine-grained role-based access control.",
        "Delivered a fully functional MVP adopted by internal QA teams, improving issue tracking efficiency by 40%."
      ],
      color: "from-zinc-700/10 to-zinc-600/10",
      borderColor: "border-zinc-700/20",
      iconBg: "bg-zinc-700/10",
      iconColor: "text-zinc-400"
    },
    {
      id: 2,
      position: "Android Developer Intern",
      company: "Yopeso",
      location: "Cluj-Napoca, Romania",
      period: "Jun 2022 - Oct 2022",
      year: "2022",
      description: "Yopeso stands for Your Personal SOftware. They design software solutions tailored to your business needs.",
      technologies: ["Jetpack Compose", "XML", "Hilt", "Retrofit", "Android"],
      achievements: [
        "Built dynamic UIs with Jetpack Compose and integrated REST APIs using Hilt and Retrofit.",
        "Contributed to new feature modules that improved user retention by enhancing app responsiveness."
      ],
      color: "from-zinc-700/10 to-zinc-600/10",
      borderColor: "border-zinc-700/20",
      iconBg: "bg-zinc-700/10",
      iconColor: "text-zinc-400"
    }
  ];

  return (
    <section id="experience" className="relative pt-20 px-6 lg:px-8 overflow-visible">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-10 lg:mb-20 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 lg:mb-6">
            <span className="animate-gradient-flow">Work Experience</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto px-4">
            My professional journey in software engineering and web development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative transition-all duration-700 ease-out ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 -ml-2 rounded-full bg-gray-700 border-4 border-black z-10 hidden md:block">
                  <div className={`absolute inset-0 rounded-full ${experience.iconBg} animate-ping`}></div>
                  <div className={`absolute inset-0 rounded-full ${experience.iconBg}`}></div>
                </div>

                {/* Card */}
                <div className="md:ml-20 group">
                  <div 
                    className={`relative bg-zinc-900/50 backdrop-blur-sm border ${experience.borderColor} rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 cursor-pointer ${
                      expandedCard === index ? 'ring-2 ring-white/10' : ''
                    }`}
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  >
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/1 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-amber-900/5 to-transparent pointer-events-none"></div>
                    
                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} blur-xl`}></div>
                    </div>

                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-3">
                            <div className={`${experience.iconBg} ${experience.iconColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                              {experience.id === 1 ? (
                                // Code/Terminal icon for Full-Stack Developer
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              ) : (
                                // Smartphone icon for Android Developer
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16zm-5-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/>
                                </svg>
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors">
                                {experience.position}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                                <span className="flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                  </svg>
                                  {experience.company}
                                </span>
                                <span className="hidden sm:block text-gray-600">•</span>
                                <span className="flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                  {experience.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-medium whitespace-nowrap">
                            {experience.period}
                          </span>
                          <div className={`p-2 rounded-lg ${experience.iconBg} ${experience.iconColor} group-hover:rotate-180 transition-transform duration-500`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d={expandedCard === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
                              style={{ 
                                animationDelay: `${techIndex * 50}ms`,
                                animation: visibleCards.includes(index) ? 'fadeInScale 0.5s ease-out forwards' : 'none'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expandable Achievements */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        allExpanded || expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-6 border-t border-white/10">
                          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Key Achievements</h4>
                          <ul className="space-y-3 list-disc list-inside">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-gray-300 leading-relaxed">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Click to expand button - hidden when all expanded */}
                      {!allExpanded && expandedCard !== index && (
                        <div className="mt-6 flex justify-center">
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 cursor-pointer animate-pulse-scale">
                            <span>View Achievements</span>
                            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 