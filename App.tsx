
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import Lestimate from './components/Lestimate';
import Verticals from './components/Verticals';
import LatitudeShowcase from './components/LatitudeShowcase';
import { PROPERTIES, SERVICES } from './constants';
import { searchProperties } from './services/geminiService';
import { Property } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const contactPhone = "+919811199432";
  const contactEmail = "tejasdhingra28@gmail.com";

  const filteredProperties = PROPERTIES.filter(p => {
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.developer?.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.layout.toLowerCase().includes(query)
    );
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('search');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. Our senior consultant will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#c5a059] selection:text-white relative overflow-x-hidden">
      <Navbar />

      {/* Property Modal Detail View (Brochure Style) */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-[#1a1a1a]/95 backdrop-blur-xl" onClick={() => setSelectedProperty(null)}></div>
          <div className="relative bg-white w-full max-w-7xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row rounded-lg overflow-hidden">
            <button 
              onClick={() => setSelectedProperty(null)}
              className="absolute top-6 right-6 z-20 text-white bg-black/50 p-2 rounded-full hover:bg-black transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Side Image */}
            <div className="w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden">
              <img src={selectedProperty.image} className="w-full h-full object-cover" alt={selectedProperty.name} />
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-3/5 p-8 md:p-16 bg-white overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#c5a059] font-bold text-[10px] tracking-[0.4em] uppercase">{selectedProperty.subCategory}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-300">REF: {selectedProperty.id.toUpperCase()}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold serif text-[#1a1a1a] mb-8 leading-tight">{selectedProperty.name}</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 border-y border-neutral-100 py-10">
                <div>
                  <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-2">Price Range</p>
                  <p className="text-sm font-bold">{selectedProperty.priceRange || selectedProperty.price}</p>
                </div>
                <div>
                  <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-2">Size Range</p>
                  <p className="text-sm font-bold">{selectedProperty.sizeRange || selectedProperty.layout}</p>
                </div>
                <div>
                  <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-2">Possession</p>
                  <p className="text-sm font-bold">{selectedProperty.possession || 'TBD'}</p>
                </div>
                <div>
                  <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-2">Developer</p>
                  <p className="text-sm font-bold">{selectedProperty.developer || 'DLF Ltd'}</p>
                </div>
                <div>
                  <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-2">Land Area</p>
                  <p className="text-sm font-bold">{selectedProperty.landArea || 'TBD'}</p>
                </div>
                <div>
                  <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-2">Towers</p>
                  <p className="text-sm font-bold">{selectedProperty.towers || 'TBD'}</p>
                </div>
              </div>

              {/* Investment Thesis Section */}
              <div className="mb-12">
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-[#c5a059]">Investment Thesis</h4>
                <div className="space-y-4">
                  {selectedProperty.investmentThesis?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-sm font-light leading-relaxed text-neutral-600">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-[#c5a059] flex-shrink-0"></span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Grid */}
              {selectedProperty.priceEstimates && (
                <div className="mb-12 bg-[#fcfaf7] p-8 border border-neutral-100">
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-[#1a1a1a]">Configuration & Pricing</h4>
                  <div className="space-y-4">
                    {selectedProperty.priceEstimates.map((est, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-neutral-200 pb-4 text-xs">
                        <span className="font-bold">{est.type}</span>
                        <span className="text-neutral-500">{est.size}</span>
                        <span className="text-[#c5a059] font-bold">{est.estimate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Advantage */}
              <div className="mb-12">
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-[#c5a059]">Location Advantage</h4>
                <div className="flex flex-wrap gap-4">
                  {selectedProperty.locationAdvantages?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-4 py-2 border border-neutral-100">
                      <div className="w-1 h-1 bg-black"></div>
                      <span className="text-[10px] uppercase font-bold tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-12 border-t border-neutral-100">
                <a 
                  href={`https://wa.me/${contactPhone.replace('+', '')}?text=Interested in ${selectedProperty.name}`}
                  className="flex-1 bg-[#c5a059] text-white text-center py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all"
                >
                  Download Brochure
                </a>
                <a 
                  href={`tel:${contactPhone}`}
                  className="flex-1 border border-[#1a1a1a] text-[#1a1a1a] text-center py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
                >
                  Speak to Executive
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover filter brightness-[0.35]" 
            alt="Luxury Real Estate Delhi NCR"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block animate-pulse">Delhi NCR's Premier Realty Advisory</span>
          <h1 className="text-7xl md:text-9xl font-bold mb-4 leading-tight serif tracking-tighter uppercase text-white">
            Latitude
          </h1>
          <p className="text-[#c5a059] text-sm md:text-lg font-light mb-16 tracking-[0.3em] uppercase">
            Giving Real Estate Its Coordinates Back
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
            <div className="flex bg-white/5 backdrop-blur-md border border-white/20 overflow-hidden">
              <input 
                type="text" 
                placeholder="Search by project, developer, location or config (e.g. 4 BHK)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-6 text-sm outline-none bg-transparent transition-all tracking-wider font-light text-white"
              />
              <button 
                type="submit"
                className="px-10 py-6 bg-[#c5a059] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#1a1a1a] transition-all"
              >
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Hook Line Divider */}
      <section className="py-24 bg-[#fcfaf7] border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold serif leading-tight text-[#1a1a1a] uppercase tracking-tight">
            Structured Real Estate. <br className="hidden md:block"/>No Noise. No Pressure. <br className="hidden md:block"/>Just Clarity.
          </h2>
        </div>
      </section>

      {/* The LAT Way Section */}
      <section id="buy-process" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-3xl">
              <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block italic">The LAT way</span>
              <h2 className="text-5xl font-bold serif leading-tight text-[#1a1a1a]">The LAT Way</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { letter: 'L', title: 'Logic', desc: 'Decisions backed by structured thinking, not pressure.' },
              { letter: 'A', title: 'Alignment', desc: 'Ensuring buyer, seller, opportunity, and intent are in sync.' },
              { letter: 'T', title: 'Transaction with Transparency', desc: 'Clear numbers, clear risks, clear expectations.' }
            ].map((step, idx) => (
              <div key={idx} className="group relative pt-12 border-t border-neutral-100 text-center md:text-left">
                <span className="block text-6xl font-bold serif text-[#c5a059] mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">{step.letter}</span>
                <h3 className="text-2xl font-bold mb-6 serif uppercase tracking-widest text-[#1a1a1a]">{step.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NRI Column / Section */}
      <section id="nri" className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-[600px] object-cover filter grayscale-[0.3]" 
                alt="NRI Services"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#c5a059] p-12 backdrop-blur-md bg-black/20 text-center w-full max-w-xs">
                <h3 className="text-3xl serif mb-4">Remote Management</h3>
                <p className="text-xs font-light uppercase tracking-widest text-[#c5a059]">NRI Desk India</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">NRI Investment Advisory</span>
              <h2 className="text-5xl font-bold serif mb-10 leading-tight italic">Compliant, Transparent, Global.</h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center font-bold serif text-[#c5a059]">01</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">FEMA & Legal Compliance</h4>
                    <p className="text-neutral-400 font-light text-sm leading-relaxed">Navigating legal complexities of NRI investments with expert legal counsel in India.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center font-bold serif text-[#c5a059]">02</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Remote Portfolio Oversight</h4>
                    <p className="text-neutral-400 font-light text-sm leading-relaxed">Detailed quarterly asset reports, visual inspections, and maintenance management for offshore owners.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center font-bold serif text-[#c5a059]">03</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Institutional Yield Tracking</h4>
                    <p className="text-neutral-400 font-light text-sm leading-relaxed">Identifying high-growth corridors in Delhi NCR specifically for NRI portfolio diversification.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Verticals />
      <LatitudeShowcase />
      <Lestimate />

      {/* Featured Properties Section */}
      <section id="search" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl font-bold serif mb-4 text-[#1a1a1a]">Featured Assets</h2>
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-bold">The Gold Standard Portfolio</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {filteredProperties.map((p) => (
              <PropertyCard key={p.id} property={p} onSelect={() => setSelectedProperty(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Lead Form Section */}
      <section id="contact-form" className="py-32 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Connect With Us</span>
              <h2 className="text-5xl font-bold serif mb-10 leading-tight text-[#1a1a1a]">Begin your stewardship journey.</h2>
              <p className="text-neutral-500 font-light text-lg mb-12">Connect with Delhi NCR's most trusted real estate advisors. We specialize in ultra-luxury assets and off-market primary allotments.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center"><svg className="w-5 h-5 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
                  <p className="text-sm font-bold tracking-widest text-[#1a1a1a]">{contactEmail}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center"><svg className="w-5 h-5 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
                  <p className="text-sm font-bold tracking-widest text-[#1a1a1a]">{contactPhone}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleLeadSubmit} className="bg-white p-10 md:p-16 border border-neutral-100 shadow-xl space-y-8">
              <h3 className="text-2xl font-bold serif text-[#1a1a1a] mb-2">Connect With Us</h3>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-8">Professional Advisory Desk</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Full Name</label>
                  <input required type="text" className="w-full border-b border-neutral-200 py-3 outline-none focus:border-[#c5a059] transition-all font-light text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Phone Number</label>
                  <input required type="tel" className="w-full border-b border-neutral-200 py-3 outline-none focus:border-[#c5a059] transition-all font-light text-sm" placeholder="+91" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Email Address</label>
                <input required type="email" className="w-full border-b border-neutral-200 py-3 outline-none focus:border-[#c5a059] transition-all font-light text-sm" placeholder="email@provider.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Inquiry Nature</label>
                <select className="w-full border-b border-neutral-200 py-3 outline-none focus:border-[#c5a059] transition-all font-light text-sm bg-transparent">
                  <option>Buying Luxury Residential</option>
                  <option>Selling (Latitude Showcase)</option>
                  <option>NRI Investment Desk</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Message</label>
                <textarea rows={4} className="w-full border-b border-neutral-200 py-3 outline-none focus:border-[#c5a059] transition-all font-light text-sm resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-[#c5a059] text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-black transition-all">Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
                <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Our Ethos</span>
                <h2 className="text-5xl font-bold serif mb-10 leading-tight text-[#1a1a1a]">A Founder's Perspective</h2>
             </div>
             <div className="space-y-8 text-neutral-600 font-light leading-relaxed text-lg text-left max-w-3xl mx-auto">
                <p>For most of my life, I’ve operated in high-pressure environments — from representing India at the Asian Games to working at Google, where systems, clarity, and structured thinking drive every decision.</p>
                <p>When I stepped deeper into real estate, I was surprised. People were committing significant capital with confusion. Advice varied depending on who you spoke to. There was urgency everywhere — but very little accountability.</p>
                <p>It didn’t align with how I make decisions.</p>
                <p className="italic text-[#1a1a1a] font-medium border-l-4 border-[#c5a059] pl-6">Real estate is not a small transaction. It is capital allocation. It is legacy. It is long-term wealth creation.</p>
                <p>So instead of adapting to the noise, I decided to build differently — with structure, logic, alignment, and complete transparency at the core.</p>
                
                <div className="pt-12 flex items-center gap-8">
                  <div className="bg-[#1a1a1a] p-8 text-white border border-white/5">
                    <h4 className="text-xl font-bold serif mb-1 text-[#c5a059]">Tejas Dhingra</h4>
                    <p className="text-[8px] tracking-[0.3em] font-bold uppercase opacity-50">Founder | Google Alumnus | Asian Games Athlete</p>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-2">Mentored by</p>
                    <p className="text-sm font-bold text-[#1a1a1a]">Mr. Vishal Gupta</p>
                    <p className="text-[9px] uppercase tracking-widest text-neutral-500">MD, Ashiana Housing</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a1a] text-white pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            {/* Fix: Branding size and tracking to prevent page overflow */}
            <span className="text-[10vw] md:text-[6vw] lg:text-[100px] font-bold tracking-[0.1em] md:tracking-[0.4em] serif block mb-12 uppercase leading-none overflow-hidden whitespace-nowrap">
              LATITUDE
            </span>
            <div className="w-20 h-px bg-[#c5a059] mx-auto mb-12 opacity-30"></div>
            <div className="flex flex-wrap justify-center gap-12">
              <a href={`https://wa.me/${contactPhone.replace('+', '')}`} className="text-[10px] font-bold tracking-widest uppercase hover:text-[#c5a059] transition-colors">WhatsApp</a>
              <a href={`mailto:${contactEmail}`} className="text-[10px] font-bold tracking-widest uppercase hover:text-[#c5a059] transition-colors">Email</a>
              <a href={`tel:${contactPhone}`} className="text-[10px] font-bold tracking-widest uppercase hover:text-[#c5a059] transition-colors">Call</a>
            </div>
          </div>
          <p className="mt-32 text-center text-[9px] tracking-[0.5em] uppercase text-neutral-700">
            &copy; {new Date().getFullYear()} LATITUDE REALTY (LATITUDEREALTY.IN) • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
