
import React, { useState } from 'react';

const PriceCollator: React.FC = () => {
  const [formData, setFormData] = useState({
    location: '',
    infraGrowth: '',
    propertyType: '',
    bedrooms: '',
    age: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Valuation request received. Our data analysts are preparing your report.");
  };

  return (
    <section id="collator" className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold serif mb-4">Market Valuation Engine</h2>
          <p className="text-[#c5a059] max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-bold">
            Data-backed Pricing • Never Overpay • Buy With Confidence
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 p-10 border border-white/10">
          <div className="space-y-6">
            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Exact Location</span>
              <input 
                type="text" 
                placeholder="Sector / Society Name"
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Infrastructure Growth Potential</span>
              <select 
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                onChange={(e) => setFormData({...formData, infraGrowth: e.target.value})}
              >
                <option value="" className="bg-[#1a1a1a]">Select Outlook</option>
                <option value="High" className="bg-[#1a1a1a]">High (Upcoming Metro/Expressway)</option>
                <option value="Stable" className="bg-[#1a1a1a]">Stable (Mature Locality)</option>
                <option value="Developing" className="bg-[#1a1a1a]">Developing (New Infrastructure)</option>
              </select>
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Property Type</span>
              <select 
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
              >
                <option value="" className="bg-[#1a1a1a]">Select Type</option>
                <option value="Apartment" className="bg-[#1a1a1a]">Luxury Apartment</option>
                <option value="Villa" className="bg-[#1a1a1a]">Villa / Kothi</option>
                <option value="Floor" className="bg-[#1a1a1a]">Builder Floor</option>
              </select>
            </label>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <label className="block">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Bedrooms</span>
                <input 
                  type="number" 
                  placeholder="BHK"
                  className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                  onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Age</span>
                <input 
                  type="number" 
                  placeholder="Years"
                  className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Phone Number</span>
              <input 
                type="tel" 
                placeholder="+91"
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Email Address</span>
              <input 
                type="email" 
                placeholder="name@email.com"
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </label>
          </div>

          <div className="md:col-span-2 pt-6">
            <button 
              type="submit"
              className="w-full bg-[#c5a059] hover:bg-white hover:text-[#1a1a1a] text-white font-bold py-5 tracking-[0.4em] transition-all uppercase text-[10px]"
            >
              Analyze Value
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PriceCollator;
