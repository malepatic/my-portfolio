import React from 'react';
import Header from './components/Header';
import AboutMe from './components/Aboume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white scroll-smooth">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;