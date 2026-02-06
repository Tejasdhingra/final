
import { Property, Agent, Service } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'The Aralias',
    location: 'DLF Phase 5, Gurgaon',
    price: '₹12 Cr+',
    bedrooms: 4,
    layout: '4BHK + Utility',
    image: 'https://picsum.photos/seed/aralias/800/600',
    category: 'Residential',
    subCategory: 'Secondary Market',
    lat: 28.4595,
    lng: 77.0266,
    brochureUrl: '#'
  },
  {
    id: '2',
    name: 'TARC Ishva',
    location: 'Sector 63A, Gurgaon',
    price: '₹4.5 Cr onwards',
    bedrooms: 3,
    layout: '3BHK Luxury',
    image: 'https://picsum.photos/seed/tarc/800/600',
    category: 'Residential',
    subCategory: 'Under Construction',
    lat: 28.4125,
    lng: 77.0850,
    brochureUrl: '#'
  },
  {
    id: '3',
    name: 'Trump Towers',
    location: 'Sector 65, Gurgaon',
    price: '₹10.5 Cr+',
    bedrooms: 4,
    layout: '4BHK Duplex',
    image: 'https://picsum.photos/seed/trump/800/600',
    category: 'Residential',
    subCategory: 'Secondary Market',
    lat: 28.4012,
    lng: 77.0678,
    brochureUrl: '#'
  },
  {
    id: '4',
    name: 'Cyber City Hub',
    location: 'Cyber Hub, Gurgaon',
    price: '₹25 Cr+',
    bedrooms: 0,
    layout: 'Grade A Office Space',
    image: 'https://picsum.photos/seed/office/800/600',
    category: 'Commercial',
    lat: 28.4950,
    lng: 77.0878,
    brochureUrl: '#'
  }
];

export const SERVICES: Service[] = [
  { title: 'Paperwork', description: 'End-to-end documentation support for seamless transitions.', icon: 'FileText' },
  { title: 'Legal Advice', description: 'Expert legal vetting and 100% cleared properties only.', icon: 'ShieldCheck' },
  { title: 'Interiors', description: 'Curated interior design services to transform your new home.', icon: 'Layout' },
  { title: 'Vastu', description: 'Professional Vastu consultations for harmonious living.', icon: 'Compass' }
];

export const AGENTS: Agent[] = [
  {
    name: 'Tejas Dhingra',
    role: 'Founder & Managing Director',
    image: 'https://picsum.photos/seed/tejas/400/500',
    specialization: 'Strategic Investments & Luxury Residential'
  },
  {
    name: 'Tanisa Dhingra',
    role: 'Senior Advisor',
    image: 'https://picsum.photos/seed/tanisa/400/500',
    specialization: 'Secondary Market & Valuations'
  }
];
