import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Github, Maximize2, X, ChevronRight, ChevronLeft, ArrowRight, ImageOff } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Refs to manage scrolling for each project gallery independently
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (index: number, direction: 'left' | 'right') => {
    const container = scrollRefs.current[index];
    if (container) {
      // Calculate container center position relative to the scroll view
      const containerCenter = container.scrollLeft + (container.clientWidth / 2);
      
      // Find the child element closest to the center
      let closestElement: HTMLElement | null = null;
      let minDistance = Infinity;
      
      Array.from(container.children).forEach((child) => {
        const childHtml = child as HTMLElement;
        // Calculate child center position
        const childCenter = childHtml.offsetLeft + (childHtml.offsetWidth / 2);
        const distance = Math.abs(childCenter - containerCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestElement = childHtml;
        }
      });
      
      if (closestElement) {
        // Determine target element based on direction
        const targetElement = direction === 'left' 
          ? (closestElement as HTMLElement).previousElementSibling 
          : (closestElement as HTMLElement).nextElementSibling;
          
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }
  };

  // Helper to handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Prevent infinite loop
    e.currentTarget.src = "https://placehold.co/600x400/1e293b/FFF?text=Image+Unavailable";
  };

  return (
    <section id="projects" className="py-20 bg-darker relative z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">My Projects</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl">
             Here is a showcase of my technical journey. I've built interfaces, designed systems, and now I'm diving into data engineering.
          </p>
        </div>

        {/* Projects List - Vertical Layout */}
        <div className="space-y-24 pb-20">
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-card/30 border border-white/5 rounded-3xl shadow-2xl backdrop-blur-sm relative"
            >
              <div className="p-8 md:p-10">
                {/* Header: Title & Tags */}
                <div className="mb-6">
                  <div className="relative">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-bold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-lg leading-relaxed mb-6 border-l-2 border-white/10 pl-4 relative">
                  {project.description}
                </p>

                {/* Standard Links Section - Moved here for better clickability */}
                <div className="flex flex-wrap gap-6 mb-8 relative z-50">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-medium hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-0.5"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-medium hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-0.5"
                      >
                        <ExternalLink size={18} />
                        <span>Live Preview</span>
                      </a>
                    )}
                </div>

                {/* Image Gallery with Navigation */}
                <div className="relative group">
                  {/* Left Scroll Button - Visible on mobile, hover on desktop */}
                  <button 
                    onClick={() => scroll(index, 'left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/70 text-white rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity disabled:opacity-0 cursor-pointer hover:bg-primary shadow-lg backdrop-blur-sm"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div 
                    ref={(el) => { if(el) scrollRefs.current[index] = el; }}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth rounded-xl relative z-10 px-0.5"
                  >
                    {project.images.map((img, imgIdx) => (
                      <div 
                        key={imgIdx} 
                        className="flex-shrink-0 w-full md:w-[400px] aspect-video relative rounded-xl overflow-hidden border border-white/10 snap-center cursor-pointer bg-slate-800"
                        onClick={() => setSelectedImage(img)}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${imgIdx + 1}`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={handleImageError}
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center group/img">
                          <Maximize2 className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity drop-shadow-lg" size={32} />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Scroll Button - Visible on mobile, hover on desktop */}
                  <button 
                    onClick={() => scroll(index, 'right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/70 text-white rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity disabled:opacity-0 cursor-pointer hover:bg-primary shadow-lg backdrop-blur-sm"
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Visual hint that it's scrollable (Mobile only) */}
                  <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-card to-transparent pointer-events-none md:hidden z-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-[10000]"
            onClick={(e) => {
               e.stopPropagation();
               setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Project Preview" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
            onError={handleImageError} 
          />
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;