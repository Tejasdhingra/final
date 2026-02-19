
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import Lestimate from './components/Lestimate';
import Verticals from './components/Verticals';
import LatitudeShowcase from './components/LatitudeShowcase';
import { PROPERTIES, SERVICES, TESTIMONIALS, FAQS } from './constants';
import { searchProperties } from './services/geminiService';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const contactPhone = "+919811199432";
  const contactEmail = "tejasdhingra28@gmail.com";

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    setIsSearching(true);
    try {
      const result = await searchProperties(searchQuery);
      setSearchResult(result);
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#c5a059] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687960-ce8746a6f4a0?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover filter brightness-[0.35]" 
            alt="Luxury Real Estate Delhi NCR"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block animate-pulse">Delhi NCR's Premier Realty Advisory</span>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight serif tracking-tighter uppercase">
            LATITUDE
          </h1>
          <p className="text-[11px] font-light mb-16 tracking-[0.4em] uppercase opacity-70">
            Trust | Transparency | Efficiency
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
            <div className="flex bg-white/5 backdrop-blur-md border border-white/20 overflow-hidden">
              <input 
                type="text" 
                placeholder="Search by location or project (e.g. Golf Course Road)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-6 text-sm outline-none bg-transparent transition-all tracking-wider font-light"
              />
              <button 
                type="submit"
                disabled={isSearching}
                className="px-10 py-6 bg-[#c5a059] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#1a1a1a] transition-all disabled:opacity-50"
              >
                {isSearching ? 'ANALYZING...' : 'SEARCH'}
              </button>
            </div>
          </form>

          {searchResult && (
            <div className="mt-8 bg-white p-8 text-[#1a1a1a] text-left max-h-[40vh] overflow-y-auto max-w-2xl mx-auto shadow-2xl border-l-4 border-[#c5a059]">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold uppercase text-[9px] tracking-[0.2em] text-[#c5a059]">Intelligence Report</h4>
                <button onClick={() => setSearchResult(null)} className="text-neutral-400 hover:text-black">✕</button>
              </div>
              <p className="text-sm font-light leading-relaxed mb-6">{searchResult.text}</p>
              {searchResult.sources?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                  {searchResult.sources.map((chunk: any, i: number) => (
                    <a key={i} href={chunk.web?.uri || '#'} target="_blank" rel="noreferrer" className="text-[8px] bg-neutral-100 px-3 py-1 uppercase tracking-widest hover:bg-[#c5a059] hover:text-white transition-all">
                      {chunk.web?.title?.slice(0, 20) || 'Market Link'}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Buying Process: The LAT Way */}
      <section id="buy-process" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-3xl">
              <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block italic">The LAT way</span>
              <h2 className="text-5xl font-bold serif leading-tight text-[#1a1a1a]">Transforming buying and selling <br/>real estate in 3 steps.</h2>
            </div>
            <p className="text-neutral-500 font-light max-w-sm mb-2 italic">Precision-engineered stewardship for HNIs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { letter: 'L', title: 'Look', desc: 'Browse our handpicked portfolio of elite residences, filtered through 300+ rigorous technical and legal checks.' },
              { letter: 'A', title: 'Access', desc: 'Gain deep-dive access to asset technicals, air quality mapping, and expert-led spatial tours.' },
              { letter: 'T', title: 'Transact', desc: 'Seamlessly close deals with data-driven pricing models and 100% legally vetted documentation.' }
            ].map((step) => (
              <div key={step.letter} className="group relative pt-12 border-t border-neutral-100">
                <span className="absolute top-0 left-0 -translate-y-1/2 text-[100px] font-bold serif text-[#c5a059] opacity-10 group-hover:opacity-100 transition-opacity duration-700">{step.letter}</span>
                <h3 className="text-2xl font-bold mb-6 serif uppercase tracking-widest text-[#1a1a1a]">{step.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Verticals />
      <LatitudeShowcase />
      <Lestimate />

      {/* Services Grid */}
      <section id="services" className="py-32 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold serif mb-4">Our Core Services</h2>
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-bold">Taking Care of Everything In-Between</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-white p-12 border border-neutral-100 hover:border-[#c5a059] transition-all group shadow-sm text-center">
                <div className="w-12 h-12 bg-[#fcfaf7] border border-neutral-100 flex items-center justify-center mb-8 mx-auto group-hover:bg-[#c5a059] transition-colors">
                  <span className="text-[#c5a059] group-hover:text-white transition-colors text-[10px] font-bold tracking-tighter uppercase">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-4 serif uppercase tracking-widest text-[#1a1a1a]">{service.title}</h3>
                <p className="text-neutral-500 font-light text-xs leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="search" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl font-bold serif mb-4">Featured Assets</h2>
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-bold">Delhi NCR Portfolio</p>
            </div>
            <button className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] border-b border-[#c5a059] pb-1">View Full Portfolio</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROPERTIES.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Our Vision & Founder</span>
              <h2 className="text-5xl font-bold serif mb-10 leading-tight">Bridging the Gap in <br/>Delhi NCR.</h2>
              <div className="space-y-8 text-neutral-500 font-light leading-relaxed">
                <p className="italic text-lg text-[#1a1a1a] border-l-4 border-[#c5a059] pl-6 text-left">"Real estate in the capital has long been starved of professional stewardship. We founded Latitude to replace manual hurdles with tech-driven efficiency."</p>
                <div className="text-left space-y-6">
                  <p>Tejas Dhingra joined Google in 2020 after graduating from Delhi University. Apart from being a high-impact professional, Tejas is an International Show Jumper, a two-time National Champion (2024-2025), and represented India at the Asian Games in 2023.</p>
                  <p>Mentored by industry veterans like <span className="text-[#1a1a1a] font-bold">Mr. Vishal Gupta (MD, Ashiana Housing)</span> and <span className="text-[#1a1a1a] font-bold">Mr. Amar Sarin (MD, TARC)</span>, Latitude re-engineers how the capital buys and sells assets through trust and transparency.</p>
                </div>
                
                <div className="pt-12 inline-block bg-[#1a1a1a] p-12 text-white text-left border border-white/5">
                  <h4 className="text-2xl font-bold serif mb-2 text-[#c5a059]">Tejas Dhingra</h4>
                  <p className="text-[9px] tracking-[0.3em] font-bold uppercase opacity-50 mb-4">Founder | Google Alumnus | Asian Games Athlete</p>
                  <div className="w-12 h-px bg-[#c5a059]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a1a] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-5xl font-bold tracking-[0.5em] serif block mb-12">LATITUDE</span>
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
