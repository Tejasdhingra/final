
import React, { useState } from 'react';
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
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
          <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Delhi NCR's Premier Realty Advisory</span>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight serif tracking-tighter">
            LATITUDE
          </h1>
          <p className="text-[11px] font-light mb-16 tracking-[0.4em] uppercase opacity-70">
            Trust • Transparency • Efficiency
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
            <div className="flex bg-white/5 backdrop-blur-md border border-white/20">
              <input 
                type="text" 
                placeholder="Search by location or project in Delhi NCR..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-6 text-sm outline-none bg-transparent transition-all tracking-wider font-light"
              />
              <button 
                type="submit"
                className="px-10 py-6 bg-[#c5a059] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#1a1a1a] transition-all"
              >
                {isSearching ? '...' : 'Search'}
              </button>
            </div>
          </form>

          {searchResult && (
            <div className="mt-8 bg-white p-8 text-[#1a1a1a] text-left max-h-[40vh] overflow-y-auto max-w-2xl mx-auto shadow-2xl border-l-4 border-[#c5a059]">
              <h4 className="font-bold mb-4 uppercase text-[9px] tracking-[0.2em] text-[#c5a059]">Intelligence Report</h4>
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

      {/* Buying Process: Dream Home in 3 Steps */}
      <section id="buy-process" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Buying Your Dream Home</span>
              <h2 className="text-5xl font-bold serif leading-tight text-[#1a1a1a]">3 Simple Steps.</h2>
            </div>
            <p className="text-neutral-500 font-light max-w-sm mb-2 italic">Institutionalized speed meets bespoke care.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { num: '01', title: 'Find It', desc: 'Identify institutional-grade assets in Delhi NCR through extensive tech-driven filters and 300+ rigorous checks.' },
              { num: '02', title: 'Tour It', desc: 'Curated walkthroughs assessing technical parameters—air quality index, noise mapping, and Vastu compliance.' },
              { num: '03', title: 'Secure It', desc: 'Seamless acquisition backed by data-driven pricing models and 100% legally vetted documentation.' }
            ].map((step) => (
              <div key={step.num} className="group relative pt-12 border-t border-neutral-100">
                <span className="absolute top-0 left-0 -translate-y-1/2 text-[100px] font-bold serif text-[#c5a059] opacity-10 group-hover:opacity-100 transition-opacity duration-700">{step.num}</span>
                <h3 className="text-2xl font-bold mb-6 serif uppercase tracking-widest text-[#1a1a1a]">{step.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <Verticals />

      {/* Selling Process: Latitude Showcase */}
      <LatitudeShowcase />

      {/* Lestimate Engine */}
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
                  <span className="text-[#c5a059] group-hover:text-white transition-colors">✦</span>
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

      {/* Testimonials */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold serif mb-4 italic">Client Voices</h2>
            <div className="w-16 h-px bg-[#c5a059] mx-auto opacity-30"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col justify-between">
                <div>
                  <div className="flex mb-6 text-[#c5a059]">
                    {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-neutral-300 font-light italic leading-relaxed mb-8">"{t.text}"</p>
                </div>
                <div>
                  <h4 className="font-bold serif text-lg text-white">{t.name}</h4>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6a?auto=format&fit=crop&q=80&w=800" className="w-full h-[750px] object-cover grayscale brightness-90 shadow-2xl" alt="Tejas Dhingra" />
              <div className="absolute -bottom-10 -right-10 bg-[#1a1a1a] p-12 text-white max-w-sm hidden md:block border border-white/5">
                <h4 className="text-2xl font-bold serif mb-2 text-[#c5a059]">Tejas Dhingra</h4>
                <p className="text-[9px] tracking-[0.3em] font-bold uppercase opacity-50 mb-4">Founder • Google Alumnus • Asian Games Athlete</p>
                <div className="w-12 h-px bg-[#c5a059]"></div>
              </div>
            </div>
            <div>
              <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Our Vision & Founder</span>
              <h2 className="text-5xl font-bold serif mb-10 leading-tight">Bridging the Gap in <br/>Delhi NCR.</h2>
              <div className="space-y-8 text-neutral-500 font-light leading-relaxed">
                <p className="italic text-lg text-[#1a1a1a] border-l-4 border-[#c5a059] pl-6">"Real estate in the capital has long been starved of professional stewardship. We founded Latitude to replace manual hurdles with tech-driven efficiency."</p>
                <p>Tejas Dhingra, following his sister Tanisa's path, joined Google in 2020 after graduating from Delhi University. Apart from being a high-impact professional, Tejas is an International Show Jumper, a two-time National Champion (2024-2025), and represented India at the Asian Games in 2023.</p>
                <p>Mentored by industry veterans like <span className="text-[#1a1a1a] font-bold">Mr. Vishal Gupta (MD, Ashiana Housing)</span> and <span className="text-[#1a1a1a] font-bold">Mr. Amar Sarin (MD, TARC)</span>, Latitude re-engineers how the capital buys and sells homes through trust and transparency.</p>
              </div>
              <div className="mt-16 pt-8 border-t border-neutral-100 flex gap-12">
                <div>
                  <h5 className="font-bold serif text-xl text-[#1a1a1a] mb-1">2023</h5>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400">Asian Games</p>
                </div>
                <div>
                  <h5 className="font-bold serif text-xl text-[#1a1a1a] mb-1">2x</h5>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400">National Champion</p>
                </div>
                <div>
                  <h5 className="font-bold serif text-xl text-[#1a1a1a] mb-1">Ex-Google</h5>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400">Tech Precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#fcfaf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold serif mb-4">Frequently Asked</h2>
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-bold">Expert Intelligence</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-neutral-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className="font-bold serif text-lg uppercase tracking-widest">{faq.question}</span>
                  <span className={`text-[#c5a059] transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`transition-all duration-700 ease-in-out ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 text-sm font-light text-neutral-500 leading-relaxed border-t border-neutral-50/50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
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
              <a href="https://wa.me/91XXXXXXXXXX" className="text-[10px] font-bold tracking-widest uppercase hover:text-[#c5a059] transition-colors">WhatsApp</a>
              <a href="#" className="text-[10px] font-bold tracking-widest uppercase hover:text-[#c5a059] transition-colors">LinkedIn</a>
              <a href="mailto:contact@latituderealty.in" className="text-[10px] font-bold tracking-widest uppercase hover:text-[#c5a059] transition-colors">Email</a>
              <a href="tel:+91XXXXXXXXXX" className="text-[10px] font-bold tracking-widest uppercase hover:text-[#c5a059] transition-colors">Call</a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
            <div>
              <h5 className="text-[10px] tracking-widest uppercase font-bold text-[#c5a059] mb-8">Delhi NCR HQ</h5>
              <p className="text-sm font-light text-neutral-400 leading-relaxed uppercase tracking-widest">Gurgaon • New Delhi • Noida</p>
            </div>
            <div className="md:col-span-2 text-right">
              <p className="text-xl font-light serif text-neutral-300 max-w-md ml-auto leading-relaxed italic">
                Trust, transparency, and elite stewardship in every square foot.
              </p>
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
