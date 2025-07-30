import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-4">
                <span className="inline-block text-white">Hello, my name is</span>
                <br />
                <span className="font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                  Andrei Bejan
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 opacity-90">
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
              </p>
            </div>
            {/* Skills Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border border-white/10 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 hover:border-green-500/40 bg-green-500/10 text-green-400 border-green-500/20">
                <span className="text-base">💻</span>
                Frontend
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border border-white/10 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 bg-blue-500/10 text-blue-400 border-blue-500/20">
                <span className="text-base">⚙️</span>
                Backend
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border border-white/10 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/40 bg-purple-500/10 text-purple-400 border-purple-500/20">
                <span className="text-base">📱</span>
                Mobile
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border border-white/10 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/40 bg-orange-500/10 text-orange-400 border-orange-500/20">
                <span className="text-base">☁️</span>
                Cloud
              </span>
            </div>
          </div>
          {/* Right Content - Photo */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="w-full h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl border-2 border-white/10 backdrop-blur-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <span className="text-3xl font-bold text-white">YN</span>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-300">Your Professional Photo</p>
                  <p className="text-sm text-gray-500">Replace with your image</p>
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