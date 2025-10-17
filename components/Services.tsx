import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-900 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="mb-6 inline-block p-4 bg-gray-700 rounded-full">
                <span className="text-blue-400 w-10 h-10 flex items-center justify-center">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
