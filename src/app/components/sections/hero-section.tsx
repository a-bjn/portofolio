"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative flex justify-center items-center lg:h-[80vh] w-full overflow-visible px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white text-center lg:text-left">
            <div className="space-y-4">
              <p 
                className={`text-2xl sm:text-3xl lg:text-4xl text-gray-400 transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                Hello, I'm Andrei Bejan
              </p>
                <h1 
                 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ease-out ${
                   isVisible 
                     ? 'opacity-100 translate-y-0' 
                     : 'opacity-0 translate-y-8'
                 }`}
                 style={{ transitionDelay: '0.4s' }}
               >
                 <span className="animate-gradient-flow">
                   Full-Stack Engineer
                 </span>
                 <br />
                 <span className="animate-gradient-flow">
                   Next.js / Spring Boot
                 </span>
               </h1>
              <p 
                className={`text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 font-base max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                 Designing scalable web applications with modern frontend interfaces and robust backend APIs. Passionate about clean architecture and delivering value.
               </p>
            </div>
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 text-sm transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <a 
                href="https://github.com/a-bjn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r border-1 border-zinc-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden w-full sm:w-auto justify-center"
              >
                {/* Neon glow effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-white/60 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="relative z-10">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/andrei-bejan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r border-1 border-zinc-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden w-full sm:w-auto justify-center"
              >
                {/* Neon glow effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-white/60 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="relative z-10">LinkedIn</span>
              </a>
              
              <a 
                href="/Andrei Bejan CV.pdf" 
                download
                className="relative flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-black font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden w-full sm:w-auto justify-center"
              >
                {/* Neon glow effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-white/60 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  <path d="M13 3v6a1 1 0 001 1h6" />
                  <path d="M12 11v6m-3-3l3 3 3-3" />
                </svg>
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>
          </div>
          <div 
            className={`hidden lg:block relative w-full max-w-xs sm:max-w-sm mx-auto transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="w-full h-[24rem] sm:h-[28rem] flex items-center justify-center relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden rounded-3xl animate-float">
              <Image
                src="/poza.jpeg"
                alt="Andrei Bejan - Professional Photo"
                width={640}
                height={1024}
                className="w-full h-full object-cover rounded-3xl"
                priority
                quality={100}
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/100 via-black/95 to-transparent pointer-events-none"></div>
              <div 
                className={`absolute bottom-6 left-6 right-6 text-white pointer-events-none transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1.2s' }}
              >
                <h3 className="text-4xl text-gray-200 font-bold">Andrei Bejan</h3>
                <p className="text-2xl text-gray-400 mb-4">Full Stack Developer</p>
                <div className="flex items-center text-xl gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Cluj-Napoca, Romania</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 