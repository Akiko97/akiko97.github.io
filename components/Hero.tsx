
import React from 'react';
import { HomeContent } from '../types';
import { Terminal } from 'lucide-react';

interface HeroProps {
  data: HomeContent;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-2">
                <Terminal size={14} />
                <span>Full-Stack & Security</span>
            </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {(() => {
              const parts = data.welcome.split(/([,，、])/);
              if (parts.length >= 3) {
                return (
                  <>
                    <span className="block mb-2">{parts[0]}{parts[1]}</span>
                    <span className="block">{parts.slice(2).join('').trim()}</span>
                  </>
                );
              }
              return data.welcome;
            })()}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-light">
            {data.subtitle}
          </h2>
          
          <div className="relative mt-8 p-6 rounded-2xl glass-card">
            <div className="absolute -top-3 -left-3 text-6xl text-purple-500/20 font-serif">"</div>
            <p className="text-gray-300 whitespace-pre-line italic relative z-10 leading-relaxed">
              {data.quote}
            </p>
          </div>
        </div>

        {/* Visual / Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-orange-500 rounded-full blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                    <img 
                        src="https://avatars.githubusercontent.com/u/37476779?v=4" 
                        alt="Profile" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                
                {/* Online Indicator */}
                <div className="absolute bottom-5 right-5 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full z-20 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
            </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
