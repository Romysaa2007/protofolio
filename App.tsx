import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Resume from './components/Resume';

const App: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-darker text-slate-200 font-sans">
      {showResume ? (
        <Resume onClose={() => setShowResume(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero onOpenResume={() => setShowResume(true)} />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <ChatWidget />
        </>
      )}
    </div>
  );
};

export default App;
