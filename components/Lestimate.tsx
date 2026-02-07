
import React, { useState } from 'react';

const Lestimate: React.FC = () => {
  const [formData, setFormData] = useState({
    location: '',
    size: '',
    unit: 'sqft',
    propertyType: '',
    bedrooms: '',
    age: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Valuation request received for " + formData.location + ". Our analysts will contact you shortly.");
  };

  return (
    <section id="lestimate" className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <span className="text-[20vw] font-bold serif text-[#c5a059]">VALUE</span>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#c5a059] text-white px-3 py-1 text-[9px] font-bold tracking-[0.3em] uppercase mb-4">Market Intelligence Tool</div>
          <h2 className="text-5xl font-bold serif mb-4 italic">Lestimate</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-bold">
            Know Your Home's Real-Time Market Value • Data-Backed Intelligence
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 p-12 border border-white/10 backdrop-blur-sm">
          <div className="space-y-6">
            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold">Exact Location</span>
              <input 
                type="text" 
                placeholder="DLF Phase / Sector / Society"
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light placeholder-neutral-600"
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </label>

            <div className="grid grid-cols-3 gap-4 items-end">
              <label className="col-span-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Property Size</span>
                <input 
                  type="number" 
                  placeholder="Area"
                  className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                  onChange={(e) => setFormData({...formData, size: e.target.value})}
                />
              </label>
              <select 
                className="block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light cursor-pointer"
                onChange={(e) => setFormData({...formData, unit: e.target.value})}
              >
                <option value="sqft" className="bg-[#1a1a1a]">sqft</option>
                <option value="sqyd" className="bg-[#1a1a1a]">sqyd</option>
              </select>
            </div>

            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Property Configuration</span>
              <select 
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light cursor-pointer"
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
              >
                <option value="" className="bg-[#1a1a1a]">Select Type</option>
                <option value="Apartment" className="bg-[#1a1a1a]">Luxury Apartment</option>
                <option value="Villa" className="bg-[#1a1a1a]">Independent Villa</option>
                <option value="Floor" className="bg-[#1a1a1a]">Bespoke Builder Floor</option>
                <option value="Commercial" className="bg-[#1a1a1a]">Grade-A Commercial</option>
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
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Property Age</span>
                <input 
                  type="number" 
                  placeholder="Years"
                  className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Contact No.</span>
              <input 
                type="tel" 
                placeholder="+91"
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Email</span>
              <input 
                type="email" 
                placeholder="Professional Email"
                className="mt-2 block w-full bg-transparent border-b border-white/20 py-3 focus:border-[#c5a059] outline-none transition-colors text-sm font-light"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </label>
          </div>

          <div className="md:col-span-2 pt-6">
            <button 
              type="submit"
              className="w-full bg-[#c5a059] hover:bg-white hover:text-[#1a1a1a] text-white font-bold py-5 tracking-[0.4em] transition-all uppercase text-[10px] shadow-2xl"
            >
              Calculate Valuation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Lestimate;
