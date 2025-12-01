
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Background from './components/Background';
import { translations } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  const currentData = translations[language];

  return (
    <div className="min-h-screen text-gray-100 selection:bg-purple-500/30 selection:text-purple-200">
      <Background />
      <Navbar 
        navData={currentData.nav} 
        language={language} 
        setLanguage={setLanguage} 
      />
      <main>
        <Hero data={currentData.home} />
        <About data={currentData.about} />
        <Projects data={currentData.projects} />
        <Gallery data={currentData.gallery} />
        <Contact data={currentData.contact} />
      </main>
    </div>
  );
};

export default App;
