import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceSection from './components/Experience';
import EducationSection from './components/Education';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Skills />
      <Projects />
      <ExperienceSection />
      <EducationSection />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;