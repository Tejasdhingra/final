
import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onSelect?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  return (
    <div 
      className="group bg-white border border-neutral-100 overflow-hidden hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 cursor-pointer rounded-lg"
      onClick={onSelect}
    >
      <div className="relative h-96 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-[#1a1a1a]/80 backdrop-blur-sm px-4 py-2 text-[8px] font-bold tracking-[0.2em] uppercase text-white border border-white/10">
            {property.subCategory || property.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
           <p className="text-[#c5a059] text-[9px] font-bold tracking-[0.3em] uppercase mb-2">Portfolio Asset</p>
           <h3 className="text-3xl font-bold serif text-white leading-tight">{property.name}</h3>
        </div>
      </div>
      <div className="p-10 pt-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-neutral-400 text-[10px] tracking-widest uppercase truncate max-w-[200px]">
            {property.location}
          </p>
          <span className="text-[#1a1a1a] font-bold text-sm tracking-tight">{property.price}</span>
        </div>
        <div className="flex justify-between items-center text-[#1a1a1a] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 pb-8 border-b border-neutral-50">
          <div className="flex items-center gap-2">
            <span className="text-neutral-300">CONFIG.</span>
            <span>{property.bedrooms > 0 ? `${property.bedrooms} BHK` : 'Commercial'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-neutral-300">TYPE.</span>
            <span>{property.layout.split('+')[0]}</span>
          </div>
        </div>
        <button className="w-full py-5 text-[10px] font-bold tracking-[0.5em] border border-[#1a1a1a] text-[#1a1a1a] uppercase group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-300">
          View Detailed Thesis
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
