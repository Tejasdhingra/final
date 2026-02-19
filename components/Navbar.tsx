
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Portfolio', href: '#search' },
    { name: 'NRI Advisory', href: '#nri' },
    { name: 'Sell', href: '#showcase' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact-form' },
  ];

  const contactPhone = "+919811199432";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-neutral-100 backdrop-blur-md bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-[0.3em] serif text-[#1a1a1a] uppercase cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              LATITUDE
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8 mr-4 border-r border-neutral-100 pr-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold text-neutral-500 hover:text-[#1a1a1a] transition-colors uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <a
                href="#lestimate"
                className="group flex items-center space-x-2 bg-[#fcfaf7] border border-[#c5a059] px-4 py-2.5 transition-all hover:bg-[#c5a059]"
              >
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#c5a059] uppercase group-hover:text-white transition-colors">LESTIMATE</span>
              </a>

              <a
                href={`https://wa.me/${contactPhone.replace('+', '')}`}
                className="bg-[#c5a059] text-white px-6 py-2.5 rounded-none text-[9px] font-bold tracking-[0.2em] hover:bg-white hover:text-[#c5a059] transition-all border border-[#c5a059]"
              >
                CONNECT
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1a1a1a] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 py-6 px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xs font-bold tracking-[0.2em] text-neutral-600 hover:text-[#1a1a1a] uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3">
            <a href="#lestimate" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-[0.2em] text-[#c5a059] uppercase">Lestimate</a>
            <a href={`https://wa.me/${contactPhone.replace('+', '')}`} className="text-xs font-bold tracking-[0.2em] text-[#c5a059] uppercase">Connect on WhatsApp</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
