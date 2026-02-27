
import React from 'react';

const LatitudeShowcase: React.FC = () => {
  const steps = [
    { title: 'Data Consultation', desc: 'Analyzing 10+ years of transaction data to set a target price that guarantees a sale.' },
    { title: 'Free Staging', desc: 'Our in-house design team transforms your space at no cost to you, making it HNI-ready.' },
    { title: 'Global Marketing', desc: 'Bypassing common channels for elite placement in our private, high-net-worth networks.' },
    { title: 'Secure Exit', desc: 'Finalizing the legal transfer and ensuring funds are secured in record time.' }
  ];

  return (
    <section id="showcase" className="py-32 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Latitude Showcase</span>
            <h2 className="text-5xl font-bold serif mb-10 leading-tight">Sell your home in a <br/><span className="italic text-[#c5a059]">fixed 6-12 month</span> timeline.</h2>
            <p className="text-neutral-400 font-light mb-12 text-lg">We stage the house for you at no cost to ensure peak presentation and maximum ROI.</p>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="group flex gap-8 p-6 hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/5">
                  <span className="text-3xl font-bold serif text-[#c5a059] opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-[0.2em] text-sm mb-2">{step.title}</h4>
                    <p className="text-neutral-500 font-light text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="mailto:tejasdhingra28@gmail.com?subject=Latitude Showcase Inquiry"
              className="mt-16 inline-block w-full md:w-auto px-12 py-5 bg-[#c5a059] text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#1a1a1a] transition-all text-center"
            >
              Start Your Showcase
            </a>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#c5a059]/30"></div>
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-[700px] object-cover filter brightness-75 grayscale-[0.3]" 
              alt="Staged Home"
            />
            <div className="absolute bottom-10 right-10 bg-[#c5a059] p-8 text-white max-w-xs shadow-2xl">
              <h4 className="font-bold serif text-xl mb-2">Free Staging Included</h4>
              <p className="text-xs font-light leading-relaxed opacity-90">Maximize your property's value without the upfront renovation costs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatitudeShowcase;
