import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../constants';

interface HeroProps {
  onOpenResume: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradients - Added pointer-events-none to prevent blocking clicks */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Open to Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
                {HERO_DATA.name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-400 font-light">
              {HERO_DATA.title}
            </h2>
            
            <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
              {HERO_DATA.description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 relative z-30">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 cursor-pointer relative"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform pointer-events-none" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-all cursor-pointer relative"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-white/10 relative z-30">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} className="pointer-events-none" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} className="pointer-events-none" />
              </a>
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email Me"
              >
                <Mail size={24} className="pointer-events-none" />
              </a>
              <div className="h-6 w-px bg-white/10 mx-2"></div>
              <button 
                onClick={onOpenResume}
                className="flex items-center text-sm font-medium text-slate-400 hover:text-primary transition-colors cursor-pointer"
              >
                <Download size={16} className="mr-2 pointer-events-none" />
                Download CV
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative z-10">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Abstract Code Visual */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-3 opacity-20 blur-sm"></div>
              <div className="absolute inset-0 bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-xs text-slate-500 font-mono">portfolio_v1.tsx</div>
                </div>
                <div className="flex-1 font-mono text-sm space-y-2 text-slate-400 overflow-hidden">
                  <p><span className="text-purple-400">class</span> <span className="text-yellow-300">FutureEngineer</span> <span className="text-purple-400">extends</span> <span className="text-yellow-300">Human</span> {'{'}</p>
                  <p className="pl-4"><span className="text-purple-400">constructor</span>() {'{'}</p>
                  <p className="pl-8"><span className="text-blue-400">this</span>.skills = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Data Eng'</span>, <span className="text-green-400">'AI'</span>];</p>
                  <p className="pl-8"><span className="text-blue-400">this</span>.passion = <span className="text-green-400">'Building the Future'</span>;</p>
                  <p className="pl-4">{'}'}</p>
                  <p className="pl-4 text-slate-600">// Loading neural networks...</p>
                  <p className="pl-4"><span className="text-blue-400">async</span> <span className="text-yellow-300">learn</span>() {'{'}</p>
                  <p className="pl-8"><span className="text-purple-400">await</span> <span className="text-blue-400">this</span>.ingest(bigData);</p>
                  <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-blue-400">new</span> Innovation();</p>
                  <p className="pl-4">{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;