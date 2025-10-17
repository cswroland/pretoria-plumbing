import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactFooter from './components/ContactFooter';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <ContactFooter />
      <WhatsAppButton phoneNumber="+27792894934" />
    </div>
  );
};

export default App;
