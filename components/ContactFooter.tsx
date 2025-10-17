import React from 'react';
import { CONTACT_INFO } from '../constants';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">💧 Capital Flow Plumbing</h3>
            <p>Fast, Friendly, and Fully Equipped. Your 24/7 emergency plumbing solution in Pretoria.</p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Location</h4>
            <p className="flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              {CONTACT_INFO.address}
            </p>
            <p className="mt-2">Pretoria, South Africa</p>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Capital Flow Plumbing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
