
import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white border border-neutral-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700">
      <div className="relative h-80 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-[#1a1a1a] px-4 py-2 text-[9px] font-bold tracking-[0.2em] uppercase text-white border border-white/10">
            {property.subCategory || property.category}
          </span>
        </div>
      </div>
      <div className="p-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold serif text-[#1a1a1a] leading-tight">{property.name}</h3>
          <span className="text-[#c5a059] font-bold text-xs tracking-widest">{property.price}</span>
        </div>
        <p className="text-neutral-400 text-[10px] tracking-widest uppercase mb-8 pb-4 border-b border-neutral-100">
          {property.location}
        </p>
        <div className="flex justify-between items-center text-[#1a1a1a] text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
          <span>{property.bedrooms > 0 ? `${property.bedrooms} BHK` : 'Commercial'}</span>
          <span className="w-1.5 h-1.5 bg-[#c5a059] rotate-45"></span>
          <span>{property.layout}</span>
        </div>
        <button className="w-full py-4 text-[10px] font-bold tracking-[0.4em] border border-[#1a1a1a] text-[#1a1a1a] uppercase hover:bg-[#1a1a1a] hover:text-white transition-all">
          View Asset
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
