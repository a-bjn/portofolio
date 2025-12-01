"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section for navigation highlighting
      const sections = ['hero', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for header height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2 transition-all duration-300"
          >
            <span className="font-bold text-gray-200 text-xl tracking-tight">
              a-bjn<span className="text-gray-500">.dev</span>
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-gray-200 bg-white/5'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                const nav = document.getElementById('mobile-nav');
                if (nav) {
                  nav.classList.toggle('hidden');
                }
              }}
              className="md:hidden p-2.5 text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Resume Download Button */}
            <a
              href="/Andrei Bejan CV.pdf"
              download
              className="hidden sm:flex items-center gap-2.5 px-5 py-2.5 text-base rounded-lg bg-white/5 border border-white/10 text-gray-200 font-medium hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-nav"
          className="hidden md:hidden mt-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  document.getElementById('mobile-nav')?.classList.add('hidden');
                }}
                className={`px-5 py-3 rounded-lg text-left text-base font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-white/5 text-gray-200'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/Andrei Bejan CV.pdf"
              download
              className="sm:hidden flex items-center justify-center gap-2.5 px-5 py-3 mt-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 text-base font-medium hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 