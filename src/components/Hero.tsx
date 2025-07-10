import React from 'react';
import { FileText, ArrowDown, Download } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Replace this URL with your actual Google Drive resume link
    window.open('https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view?usp=sharing', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Particle Network Background */}
      <ParticleNetwork />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-300/10 rounded-full blur-2xl animate-ping" style={{ animationDelay: '2000ms' }}></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto relative">
        {/* logo and profile photo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-500 hover:rotate-12 animate-bounce overflow-hidden" style={{ animationDuration: '3s' }}>
            <img 
              src="/public/imge.jpg" 
              alt="Pramod Lohra" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">PL</div>';
              }}
            />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Pramod Lohra</span>
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="inline-block hover:scale-110 transition-transform duration-300">S</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '100ms' }}>o</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '200ms' }}>f</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '300ms' }}>t</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '400ms' }}>w</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '500ms' }}>a</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '600ms' }}>r</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '700ms' }}>e</span>
          <span className="inline-block mx-4"></span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '800ms' }}>D</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '900ms' }}>e</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1000ms' }}>v</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1100ms' }}>e</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1200ms' }}>l</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1300ms' }}>o</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1400ms' }}>p</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1500ms' }}>e</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1600ms' }}>r</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-semibold">
            3+ Years
          </span> of Experience Building Amazing Digital Solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <FileText size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            View My Work
          </button>
          <button 
            onClick={handleResumeDownload}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Download size={20} className="group-hover:bounce transition-transform duration-300" />
            Download Resume
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-indigo-400 text-indigo-400 rounded-full font-semibold hover:bg-indigo-400 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <ArrowDown size={24} className="text-white/60 hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;