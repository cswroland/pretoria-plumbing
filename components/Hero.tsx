import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-black">
      {/* Background Image Placeholder */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40" 
        style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')` }}
        // NOTE: For local assets, replace the above with something like:
        // style={{ backgroundImage: `url('/assets/hero-image.jpg')` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          <span className="text-blue-500">Capital Flow</span> Plumbing
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
          24/7 Emergency Plumbing Experts in Pretoria
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Reliable. Fast. Always On Call.
        </p>
        <a 
          href="#contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Call For Emergency Service
        </a>
      </div>
    </section>
  );
};

export default Hero;
