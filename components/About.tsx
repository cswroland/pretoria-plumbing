import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-800 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Trusted Pretoria Plumbers
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 mb-6">
            At Capital Flow Plumbing, we understand that plumbing emergencies don’t wait for business hours—and neither do we. Proudly serving Pretoria and surrounding areas, our team of licensed, experienced plumbers is available 24/7, including weekends and public holidays.
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Whether it's a burst pipe in the middle of the night, a blocked drain on a Sunday, or a leaking geyser just before a holiday, we've got you covered.
          </p>
          <p className="text-lg text-gray-300 font-semibold">
            Our reputation is built on trust, transparency, and top-quality workmanship. When water goes where it shouldn’t, we’re the ones to call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
