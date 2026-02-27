
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
      <div className="relative h-[500px] overflow-hidden">
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
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
           <div className="flex justify-between items-end">
             <div>
               <p className="text-[#c5a059] text-[9px] font-bold tracking-[0.3em] uppercase mb-2 italic">Institutional Grade</p>
               <h3 className="text-4xl font-bold serif text-white leading-tight">{property.name}</h3>
             </div>
           </div>
        </div>
      </div>
      <div className="p-10 pt-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-neutral-400 text-[10px] tracking-widest uppercase truncate max-w-[200px]">
            {property.location}
          </p>
          <span className="text-[#1a1a1a] font-bold text-sm tracking-tight">{property.price}</span>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="p-4 bg-neutral-50 border border-neutral-100">
            <p className="text-[8px] text-neutral-400 uppercase tracking-widest mb-1">Entry Value</p>
            <p className="text-[10px] font-bold uppercase">₹{property.pricePerSqFt}/ft²</p>
          </div>
        </div>

        <button className="w-full py-5 text-[10px] font-bold tracking-[0.5em] border border-[#1a1a1a] text-[#1a1a1a] uppercase group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
