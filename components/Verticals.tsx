
import React from 'react';

const Verticals: React.FC = () => {
  const verticals = [
    {
      title: 'Residential: Under Construction',
      desc: 'Working with the best developers across Delhi NCR ensuring priority allotment at best prices.',
      tags: ['Safety', 'Growth', 'Tier-1']
    },
    {
      title: 'Residential: Secondary Market',
      desc: 'Handpicked homes that meet our extensive filters. Considering parameters like Society score, Amenities, Locality, Safety, Quality of Construction, View, Sunlight, Noise levels, Air Quality, Vastu, etc.',
      checks: '300+ CHECKS DONE',
      highlight: 'NEVER OVERPAY. BUY WITH CONFIDENCE.',
      footer: '100% Legally cleared. Renovated to our high standards.'
    },
    {
      title: 'Commercial',
      desc: 'Dealing with only A grade buildings ensuring maximum ROI and ROE.',
      tags: ['Yield', 'Security', 'A-Grade']
    },
    {
      title: 'Development',
      desc: 'Building the best builder floors in the capital. Radically transparent construction with boutique design.',
      tags: ['Bespoke', 'Luxury', 'Boutique']
    },
    {
      title: 'Plots',
      desc: 'Sourcing the best land parcels for long-term wealth creation and custom home building.',
      tags: ['Ownership', 'Equity', 'Land']
    }
  ];

  return (
    <section id="verticals" className="py-32 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Verticals</span>
          <h2 className="text-4xl font-bold serif text-[#1a1a1a]">Transforming Home Buying</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((v, i) => (
            <div key={i} className="bg-white p-10 border border-neutral-100 hover:border-[#c5a059] transition-all group relative overflow-hidden flex flex-col justify-between h-full shadow-sm">
              <div>
                {v.checks && <span className="inline-block bg-[#c5a059] text-white text-[8px] font-bold px-3 py-1 uppercase tracking-widest mb-6">{v.checks}</span>}
                <h3 className="text-xl font-bold serif mb-6 text-[#1a1a1a]">{v.title}</h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">{v.desc}</p>
                {v.highlight && <p className="text-[#c5a059] font-bold text-[10px] tracking-widest uppercase mb-4">{v.highlight}</p>}
                {v.footer && <p className="text-neutral-400 text-[10px] font-light italic mb-8">{v.footer}</p>}
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-50">
                {(v.tags || []).map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest text-neutral-400 border border-neutral-100 px-2 py-1">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
