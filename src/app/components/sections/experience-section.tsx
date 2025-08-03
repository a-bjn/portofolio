"use client";

import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
      period: "10/2023 - 12/2023",
      year: "2023",
      description: "They develop innovative software products and human-inspired solutions",
      technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Spring", "JWT", "RESTful API"],
      achievements: [
        "Led a team of 4 developers",
        "Designed a full-stack app that tracked the management of bugs within dev teams",
        "Built a ReactJS frontend with TypeScript and styled it using Tailwind CSS",
        "Developed a Spring-based backend with JWT security and integrated RESTful API"
      ]
    },
    {
      id: 2,
      position: "Android Developer Intern",
      company: "Yopeso",
      location: "Cluj-Napoca, Romania",
      period: "06/2022 - 09/2022",
      year: "2022",
      description: "Yopeso stands for Your Personal SOftware. They design software solutions tailored to your business needs.",
      technologies: ["Jetpack Compose", "XML", "Hilt", "Retrofit", "Android"],
      achievements: [
        "Learned the basics of Jetpack Compose and traditional XML-based layouts",
        "Designed Native UI components enhanced by various animations",
        "Built a robust API integration using Hilt and Retrofit",
        "Adapted to working within a team of developers"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-6 lg:px-8 overflow-visible max-w-5xl mx-auto">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="animate-gradient-flow">Work Experience</span>
          </h2>
          <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            My professional journey in web development and software engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <VerticalTimeline
          lineColor="rgba(128, 128, 128, 0.3)"
          className="custom-timeline"
          layout="1-column"
        >
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.id}
              className="vertical-timeline-element--work group"
              contentStyle={{
                background: 'rgb(8, 8, 8)',
                border: '1px solid rgba(39, 39, 42, 0.5)',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                marginLeft: '60px',
                transition: 'all 0.3s ease',
                transform: 'scale(1)',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgba(255, 255, 255, 0.1)',
              }}

              iconStyle={{
                background: 'linear-gradient(135deg,rgb(39, 90, 75) 0%,rgb(104, 78, 44) 100%)',
                color: '#fff',
                boxShadow: '0 0 0 4px rgba(0, 0, 0, 0), 0 0 20px rgba(39, 90, 75, 0.5)',
              }}
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              }
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-amber-500/5 opacity-40 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              
              {/* Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-gray-100">
                    {experience.position}
                  </h3>
                  <span className="text-lg text-gray-400 font-semibold">
                    {experience.period}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                    {experience.company}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {experience.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <style jsx>{`
        .custom-timeline .vertical-timeline-element {
          margin-bottom: 2rem;
        }
        
        .custom-timeline .vertical-timeline-element-content {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          margin-left: 50px !important;
          position: relative;
          overflow: hidden;
        }
        
        .custom-timeline .vertical-timeline-element-content:hover {
          background: rgba(39, 39, 42, 0.5) !important;
          transform: scale(1.02) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }
        
        .custom-timeline .vertical-timeline-element-date {
          color: #9ca3af;
          font-weight: 600;
        }
        
        .custom-timeline .vertical-timeline-element-icon {
          box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.2);
        }
        
        .custom-timeline .vertical-timeline-element:nth-child(even) .vertical-timeline-element-content {
          margin-left: 50px !important;
        }
        
        .custom-timeline .vertical-timeline-element:nth-child(odd) .vertical-timeline-element-content {
          margin-left: 50px !important;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection; 