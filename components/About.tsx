import React from 'react';
import { ABOUT_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="bg-card/50 border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="prose prose-invert max-w-none">
            {ABOUT_DATA.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-lg text-slate-300 mb-6 leading-relaxed last:mb-0">
                {paragraph.split('**').map((part, i) => 
                  i % 2 === 1 ? <span key={i} className="text-primary font-semibold">{part}</span> : part
                )}
              </p>
            ))}
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-1">DEPI</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Trainee</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-1">3</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Web Projects</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-1">FCI</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Education</div>
            </div>
             <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-1">Smart</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
