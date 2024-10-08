'use client'
import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectCarousel from './components/ProjectSection';

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <div className='bg-gradient-to-b from-yellow-800'>
      <HeroSection />  
      </div>
      
      <section id="projects" className="py-20 text-center pt-40 lg:pt-0 bg-gradient-to-t from-yellow-800">
        <h2 className="text-3xl font-bold mb-10 mt-10">Projecten</h2>
        <ProjectCarousel />
      </section>
    </div>
  );
};

export default HomePage;
