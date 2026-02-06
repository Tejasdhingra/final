
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import PriceCollator from './components/PriceCollator';
import { PROPERTIES } from './constants';
import { searchProperties } from './services/geminiService';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    setIsSearching(true);
    const result = await searchProperties(searchQuery);
    setSearchResult(result);
    setIsSearching(false);
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
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight serif tracking-tighter">
            LATITUDE
          </h1>
          <p className="text-[10px] md:text-xs font-bold mb-16 tracking-[0.6em] uppercase text-[#c5a059]">
            Trust • Transparency • Efficiency
          </p>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search Luxury Projects in Delhi NCR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-md border-b border-white/30 px-4 py-6 text-sm outline-none focus:border-[#c5a059] transition-all text-center tracking-widest font-light"
            />
            <button 
              type="submit"
              className="mt-8 px-12 py-4 bg-[#c5a059] text-white transition-all font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#1a1a1a]"
            >
              {isSearching ? 'Analyzing Market...' : 'Explore Portfolio'}
            </button>
          </form>

          {searchResult && (
            <div className="mt-12 bg-white p-8 text-[#1a1a1a] text-left max-h-[40vh] overflow-y-auto max-w-3xl mx-auto border-t-4 border-[#c5a059] shadow-2xl">
              <h4 className="font-bold mb-4 uppercase text-[10px] tracking-[0.3em] text-[#c5a059]">Market Intelligence</h4>
              <p className="text-sm font-light leading-relaxed mb-6 opacity-90">{searchResult.text}</p>
              {searchResult.sources?.length > 0 && (
                <div className="flex flex-wrap gap-3 border-t border-neutral-100 pt-6">
                  {searchResult.sources.map((chunk: any, i: number) => (
                    <a key={i} href={chunk.web?.uri || '#'} target="_blank" rel="noreferrer" className="text-[9px] bg-neutral-50 px-3 py-1 hover:bg-[#c5a059] hover:text-white transition-colors uppercase tracking-widest font-bold">
                      {chunk.web?.title || 'Verified Data'}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 3 Simple Steps */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold serif mb-4 text-[#1a1a1a]">Find it. Tour it. Secure it.</h2>
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-bold">The Latitude Standard</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { num: '01', title: 'Find It', desc: 'Identify high-yield assets in Delhi NCR through extensive data filters and 300+ rigorous quality checks.' },
              { num: '02', title: 'Tour It', desc: 'Evaluations that go beyond aesthetics—assessing air quality, noise mapping, and sunlight levels.' },
              { num: '03', title: 'Secure It', desc: 'Navigate with data-backed pricing and 100% legally cleared titles for a seamless acquisition.' }
            ].map((step) => (
              <div key={step.num} className="group px-8">
                <div className="text-[#c5a059] text-7xl font-bold serif mb-6 opacity-10 group-hover:opacity-100 transition-all duration-700">{step.num}</div>
                <h3 className="text-xl font-bold mb-4 serif uppercase tracking-widest text-[#1a1a1a]">{step.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals with Dual CTAs */}
      <section className="py-32 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold serif mb-4 text-[#1a1a1a]">Our Verticals</h2>
            <div className="w-24 h-px bg-[#c5a059] mx-auto opacity-30"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Under Construction */}
            <div className="bg-white p-12 border border-neutral-100 shadow-sm flex flex-col justify-between hover:border-[#c5a059] transition-all group">
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#c5a059] mb-4">Under Construction</h4>
                <h3 className="text-2xl font-bold serif mb-6 text-[#1a1a1a]">Tier-1 Developers</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed mb-8">
                  Partnering with Delhi NCR's elite developers. We ensure priority allotment at exclusive prices, with a focus on timely delivery and construction quality.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-3 text-[9px] font-bold tracking-widest uppercase border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all">Residential</button>
                <button className="flex-1 py-3 text-[9px] font-bold tracking-widest uppercase border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all">Commercial</button>
              </div>
            </div>

            {/* Handpicked Secondary Market */}
            <div className="bg-white p-12 border border-neutral-100 shadow-sm flex flex-col justify-between hover:border-[#c5a059] transition-all group">
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#c5a059] mb-4">Secondary Market</h4>
                <h3 className="text-2xl font-bold serif mb-6 text-[#1a1a1a]">Handpicked Homes</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed mb-8">
                  Every home is renovated to our exacting standards. Undergoing 300+ rigorous checks including Society Score, Safety, Quality, and Vastu.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-3 text-[9px] font-bold tracking-widest uppercase border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all">Residential</button>
                <button className="flex-1 py-3 text-[9px] font-bold tracking-widest uppercase border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all">Commercial</button>
              </div>
            </div>

            {/* Builder Floors - Development */}
            <div className="bg-[#1a1a1a] p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#c5a059] text-white text-[9px] font-bold px-4 py-1 uppercase tracking-widest">Flagship</div>
              <div className="text-white">
                <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#c5a059] mb-4">Development</h4>
                <h3 className="text-2xl font-bold serif mb-6">Builder Floors in DELHI NCR</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                  Redefining the capital's architectural silhouette. We develop the finest boutique residences in Delhi NCR, combining heritage plots with modern tech.
                </p>
              </div>
              <button className="w-full py-4 text-[9px] font-bold tracking-widest uppercase bg-[#c5a059] text-white hover:bg-white hover:text-[#1a1a1a] transition-all shadow-lg">Explore Development Now</button>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="search" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold serif mb-4 text-[#1a1a1a]">Featured Properties</h2>
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-bold">The Curated Portfolio</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROPERTIES.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Valuation Section */}
      <PriceCollator />

      {/* About Us: Origin Story & Founder Biography */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="relative sticky top-32">
              <img src="https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6a?auto=format&fit=crop&q=80&w=800" className="w-full h-[700px] object-cover grayscale brightness-90 shadow-2xl" alt="Tejas Dhingra - Founder" />
              <div className="absolute bottom-10 left-10 bg-[#1a1a1a] p-10 text-white max-w-sm border border-white/5 shadow-2xl">
                <h4 className="text-2xl font-bold serif mb-2 text-[#c5a059]">Tejas Dhingra</h4>
                <p className="text-[10px] tracking-[0.3em] font-bold uppercase mb-4 opacity-70">Founder • Google Alumnus • Asian Games Athlete</p>
                <div className="w-12 h-px bg-[#c5a059]"></div>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Genesis</span>
                <h2 className="text-5xl font-bold serif mb-10 leading-tight text-[#1a1a1a]">Bridging the Clarity Gap.</h2>
                <div className="space-y-8">
                  <p className="text-neutral-600 font-light leading-relaxed text-lg italic border-l-4 border-[#c5a059] pl-6">
                    "We identified a profound gap in the Delhi NCR real estate landscape. For far too long, the home-buying experience was opaque, troublesome, and incredibly time-consuming. We founded LATITUDE to bring efficiency, clarity, and total transparency back to the process."
                  </p>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    By merging the institutional-grade efficiency of <span className="text-[#1a1a1a] font-bold">Google</span> with the elite focus of an <span className="text-[#1a1a1a] font-bold">International Show Jumper</span> representing India, Tejas Dhingra brings a global standard of professional stewardship to the capital's real estate.
                  </p>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    We replace market friction with <span className="text-[#1a1a1a] font-bold">speed</span>, ambiguity with <span className="text-[#1a1a1a] font-bold">trust</span>, and manual hurdles with <span className="text-[#1a1a1a] font-bold">tech-driven transparency</span>. Every property we touch undergoes 300+ checks to ensure you buy with absolute confidence.
                  </p>
                </div>
              </div>

              <div className="border-t border-neutral-100 pt-12">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-10">Mentored by Industry Titans</h4>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group">
                    <h5 className="font-bold serif text-xl text-[#1a1a1a] mb-2 group-hover:text-[#c5a059] transition-colors">Mr. Vishal Gupta</h5>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed uppercase tracking-widest mb-2">MD, Ashiana Housing</p>
                    <p className="text-[11px] text-neutral-400 font-light italic">Setting the benchmark for trust and community in modern India.</p>
                  </div>
                  <div className="group">
                    <h5 className="font-bold serif text-xl text-[#1a1a1a] mb-2 group-hover:text-[#c5a059] transition-colors">Mr. Amar Sarin</h5>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed uppercase tracking-widest mb-2">MD & CEO, TARC</p>
                    <p className="text-[11px] text-neutral-400 font-light italic">Pioneering architectural excellence and luxury living in Delhi.</p>
                  </div>
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
              {['Instagram', 'LinkedIn', 'WhatsApp', 'Email'].map(link => (
                <a key={link} href="#" className="text-[10px] font-bold tracking-widest uppercase hover:text-[#c5a059] transition-colors">{link}</a>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
            <div>
              <h5 className="text-[10px] tracking-widest uppercase font-bold text-[#c5a059] mb-8">Boutique HQ</h5>
              <p className="text-sm font-light text-neutral-400 leading-relaxed uppercase tracking-widest">Gurgaon, Delhi NCR • India</p>
              <p className="text-xs font-light text-neutral-500 mt-4 italic">Clarity • Speed • Transparency</p>
            </div>
            <div className="md:col-span-2 text-right">
              <p className="text-xl font-light serif text-neutral-300 max-w-md ml-auto leading-relaxed">
                Transforming the real estate advisory landscape through radical transparency and data-backed confidence.
              </p>
            </div>
          </div>
          <p className="mt-32 text-center text-[9px] tracking-[0.5em] uppercase text-neutral-700">
            &copy; {new Date().getFullYear()} LATITUDE REALTY • DELHI NCR
          </p>
        </div>

        {/* Floating Mobile CTA */}
        <div className="fixed bottom-0 left-0 w-full bg-white md:hidden border-t border-neutral-100 grid grid-cols-2 text-center z-50">
          <a href="https://wa.me/91XXXXXXXXXX" className="py-4 text-[10px] font-bold tracking-widest uppercase text-[#1a1a1a] border-r border-neutral-100">WhatsApp</a>
          <a href="tel:+91XXXXXXXXXX" className="py-4 text-[10px] font-bold tracking-widest uppercase text-[#c5a059]">Connect Now</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
