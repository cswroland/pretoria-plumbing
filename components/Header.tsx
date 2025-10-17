import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const WaterDropIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        <path d="M192 512C86 384 0 274 0 192 0 86 86 0 192 0s192 86 192 192c0 82-86 192-192 192zM96 192c0 53 43 96 96 96s96-43 96-96-43-96-96-96-96 43-96 96z"/>
    </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300">
            <WaterDropIcon className="w-6 h-6 text-blue-500" />
            <span className="text-xl md:text-2xl font-bold tracking-wider">Capital Flow Plumbing</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                    {link.label}
                </a>
            ))}
             <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
                Get a Quote
            </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                 {isMenuOpen ? (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                 ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                 )}
            </button>
        </div>
      </nav>

       {/* Mobile Menu */}
       <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="flex flex-col items-center space-y-6 py-8">
                {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-300 hover:text-blue-400 transition-colors duration-300">
                        {link.label}
                    </a>
                ))}
                 <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
                    Get a Quote
                </a>
            </div>
       </div>
    </header>
  );
};

export default Header;
