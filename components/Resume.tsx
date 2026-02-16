import React from 'react';
import { Mail, Linkedin, Github, X, Printer } from 'lucide-react';
import { HERO_DATA, SKILLS_DATA, PROJECTS_DATA, SOCIAL_LINKS } from '../constants';

interface ResumeProps {
  onClose: () => void;
}

const Resume: React.FC<ResumeProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm overflow-y-auto flex justify-center py-8 print:p-0 print:bg-white print:static print:overflow-visible">
      
      {/* Toolbar - Hidden when printing */}
      <div className="fixed top-4 right-4 flex gap-4 print:hidden">
        <button 
          onClick={handlePrint}
          className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all font-medium border border-slate-600"
        >
          <Printer size={18} />
          Save as PDF
        </button>
        <button 
          onClick={onClose}
          className="bg-white text-slate-900 hover:bg-slate-200 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all font-medium"
        >
          <X size={18} />
          Close
        </button>
      </div>

      {/* A4 Resume Paper */}
      <div className="bg-white text-slate-900 w-full max-w-[210mm] min-h-[297mm] p-[15mm] md:p-[20mm] shadow-2xl print:shadow-none print:w-full print:max-w-none print:p-0">
        
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-6 mb-6">
          <h1 className="text-4xl font-bold uppercase tracking-tight text-slate-900 mb-2">{HERO_DATA.name}</h1>
          <h2 className="text-xl text-slate-700 font-semibold mb-4">{HERO_DATA.title}</h2>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            {/* Location removed */}
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>{SOCIAL_LINKS.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin size={14} />
              <span>linkedin.com/in/romysaa-mohamed</span>
            </div>
             <div className="flex items-center gap-1">
              <Github size={14} />
              <span>github.com/romysaa-mohamed</span>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 print:grid-cols-[2fr_1fr]">
          
          {/* Main Column */}
          <div className="space-y-6">
            
            {/* Summary */}
            <section>
              <h3 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 pb-1 text-slate-900">
                Professional Summary
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 text-justify">
                {HERO_DATA.description} I am a motivated engineering student interested in smart systems that combine software, data, and intelligent technologies. Currently training in Data Engineering through a national initiative.
              </p>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-lg font-bold uppercase border-b border-slate-300 mb-4 pb-1 text-slate-900">
                Key Projects
              </h3>
              <div className="space-y-4">
                {PROJECTS_DATA.map((project, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-slate-300">
                    <h4 className="font-bold text-slate-900">{project.title}</h4>
                    <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">{project.category}</div>
                    <p className="text-sm text-slate-700 mb-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tags.map(t => (
                        <span key={t} className="text-[10px] px-1.5 py-0.5 border border-slate-300 text-slate-600 rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

             {/* Education */}
             <section>
              <h3 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 pb-1 text-slate-900">
                Education
              </h3>
              <div>
                <h4 className="font-bold text-slate-900">Bachelor’s Degree in Computers & Information</h4>
                <div className="text-sm text-slate-700">Tanta University • Egypt</div>
                <div className="text-sm text-slate-600 mt-1 italic">Focus: Smart Systems & AI</div>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            
            {/* Skills */}
            <section>
              <h3 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 pb-1 text-slate-900">Skills</h3>
              <div className="space-y-4">
                {SKILLS_DATA.map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-sm mb-2 text-slate-800">{cat.title}</h4>
                    <ul className="text-sm space-y-1 text-slate-700">
                      {cat.skills.map((s, i) => (
                        <li key={i} className="flex justify-between border-b border-slate-100 pb-1 last:border-0">
                          <span>{s.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Training */}
             <section>
              <h3 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 pb-1 text-slate-900">Training</h3>
              <div className="bg-slate-50 p-3 rounded-sm border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900">Data Engineering Trainee</h4>
                <p className="text-xs text-slate-500 mb-2 font-semibold">DEPI</p>
                <p className="text-xs text-slate-700">
                  Intensive training on ETL pipelines, Data Analysis, and Big Data technologies.
                </p>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 pb-1 text-slate-900">Languages</h3>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between"><span>Arabic</span> <span className="text-slate-600">Native</span></li>
                <li className="flex justify-between"><span>English</span> <span className="text-slate-600">Good</span></li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;