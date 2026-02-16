import React from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { SOCIAL_LINKS, HERO_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm open to opportunities in Smart Systems Engineering and Data Engineering. 
              If you are looking for a motivated engineer who connects data with design, let's talk!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Email</h4>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-primary transition-colors">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-400">{SOCIAL_LINKS.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg text-primary">
                  <Linkedin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <a 
                    href={SOCIAL_LINKS.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/romysaa-mohamed
                  </a>
                </div>
              </div>

               <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg text-primary">
                  <Github size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">GitHub</h4>
                  <a 
                    href={SOCIAL_LINKS.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    github.com/romysaa-mohamed
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-white/5 rounded-2xl p-8 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors">
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {HERO_DATA.name}. Built with React, Tailwind & Gemini API.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;