'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import DownloadButton from './PdfDownload';

const HeroSection: React.FC = () => {
  return (
    <>
      <section className='container mx-auto px-6 lg:px-12 h-screen flex items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          <div className='col-span-12 lg:col-span-7 flex flex-col justify-center'>
            <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
              <span>Hey, Ik ben {""}</span>
              <TypeAnimation
                sequence={[
                  'Rachad Bouhjar',
                  2000,
                  'een Junior Web Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ color: "#ffeb3b" }}
                repeat={Infinity}
              />
            </h1>
            <p className='text-[#f0f4f8] text-lg mb-6 lg:text-xl'>
              Welkom in mijn bescheiden portfolio! Als junior webontwikkelaar ben ik enthousiast om mijn eerste stappen te delen in de wereld van creatieve digitale oplossingen. Neem gerust een kijkje en ontdek mijn groeiende verzameling ontwerpen. Geniet van de reis en voel je vrij om te browsen! 🚀
            </p>
            <div className='gap-4 mt-4'>
              <a href="https://www.linkedin.com/in/rachad-bouhjar/" className='text-white hover:text-red-400 transition duration-300'>
                <FaLinkedin size={24} />
              </a>
              <DownloadButton />
            </div>
            <a
              href="#projects"
              className="mt-8 px-8 py-4 border-2 border-transparent rounded-full text-white text-lg font-semibold bg-gray-500 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <span className="mr-2">Projecten</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
            <div className='rounded-full overflow-hidden bg-[#3a7763] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto relative shadow-lg'>
              <Image
                src="/logo.jpg"
                alt='Logo'
                layout="fill"
                objectFit="cover"
                className='object-center object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;