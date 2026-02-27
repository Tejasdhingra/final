
import { Property, Testimonial, FAQ, Service } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'dlf-arbour',
    name: 'DLF The Arbour',
    location: 'Sector 63, Gurgaon',
    price: '₹9.3 Cr onwards',
    bedrooms: 4,
    layout: '4 BHK + Staff',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Ultra Luxury High-Rise',
    lat: 28.4012,
    lng: 77.0654,
    brochureUrl: '#',
    ticketSizeCr: 9.3,
    expectedYield: 3.5,
    expectedCAGR: 12,
    riskRating: 'Balanced',
    exitLiquidityScore: 9,
    pricePerSqFt: 24000,
    marketMomentumScore: 9,
    investmentThesis: [
      'Masterpiece of low-density luxury living.',
      'Institutional-grade development with high appreciation potential.',
      '1.25 Lakh Sq.Ft. Clubhouse'
    ]
  },
  {
    id: 'dlf-privana',
    name: 'DLF Privana',
    location: 'Sector 76-77, SPR, Gurgaon',
    price: '₹7.5 Cr onwards',
    bedrooms: 4,
    layout: '4 BHK / Penthouse',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Luxury High-Rise',
    lat: 28.3850,
    lng: 76.9950,
    brochureUrl: '#',
    ticketSizeCr: 7.5,
    expectedYield: 4.0,
    expectedCAGR: 15,
    riskRating: 'Aggressive',
    exitLiquidityScore: 8,
    pricePerSqFt: 18500,
    marketMomentumScore: 10,
    investmentThesis: [
      'Overlooking the Aravallis.',
      'Strategic growth corridor on SPR.',
      'Integrated township ecosystem.'
    ]
  },
  {
    id: 'tarc-ishva',
    name: 'TARC Ishva',
    location: 'Sector 63A, Gurgaon',
    price: '₹6 Cr onwards',
    bedrooms: 3,
    layout: '3 & 4 BHK Luxury',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'White-Stone High-Rise',
    lat: 28.3950,
    lng: 77.0750,
    brochureUrl: '#',
    ticketSizeCr: 6.0,
    expectedYield: 3.2,
    expectedCAGR: 11,
    riskRating: 'Conservative',
    exitLiquidityScore: 7,
    pricePerSqFt: 21000,
    marketMomentumScore: 7,
    investmentThesis: [
      'Nestled against tranquil Aravallis.',
      'Exclusive community of 400 residences.',
      'IGBC Platinum Certified.'
    ]
  },
  {
    id: 'ashiana-aaroham',
    name: 'Ashiana Aaroham',
    location: 'Sector 80, Dwarka Expressway',
    price: '₹2.99 Cr onwards',
    bedrooms: 3,
    layout: '3 & 4 BHK Luxury',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Kid Centric Homes',
    lat: 28.3750,
    lng: 76.9250,
    brochureUrl: '#',
    ticketSizeCr: 3.0,
    expectedYield: 4.5,
    expectedCAGR: 18,
    riskRating: 'Aggressive',
    exitLiquidityScore: 6,
    pricePerSqFt: 14000,
    marketMomentumScore: 8,
    investmentThesis: [
      'Strategic Dwarka Expressway location.',
      'Focused child development infrastructure.',
      'Strong growth corridor potential.'
    ]
  }
];

export const SERVICES: Service[] = [
  { title: 'Paperwork', description: 'End-to-end documentation management.', icon: 'DOCS' },
  { title: 'Legal Advice', description: '100% Legally cleared titles.', icon: 'LAW' },
  { title: 'Interiors', description: 'High standards of sophisticated aesthetics.', icon: 'DESIGN' },
  { title: 'Vastu', description: 'Expert spatial harmony consultation.', icon: 'VASTU' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Malhotra',
    location: 'Vasant Vihar',
    text: 'Latitude is a game changer. found a buyer within 6 months.',
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How do you ensure I never overpay?',
    answer: 'We use data-backed pricing models and deep market intelligence.'
  }
];
