
import { Property, Testimonial, FAQ, Service } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'dlf-the-arbour',
    name: 'DLF The Arbour',
    location: 'Sector 63, Gurgaon',
    price: '₹ 9.3 Cr - ₹ 9.5 Cr',
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
    priceRange: '₹ 9.3 Cr - ₹ 9.5 Cr',
    sizeRange: '3,900+ Sq. Ft.',
    possession: 'March 2030',
    developer: 'DLF Ltd',
    landArea: '25 Acres',
    towers: '5 Towers | G+38',
    investmentThesis: [
      'A masterpiece of low-density luxury living defined by expansive decks and state-of-the-art white-toned architecture.',
      'The Arbour represents the pinnacle of institutional-grade development in New Gurgaon with just 2 apartments per core.',
      'Low Density Living',
      'Expansive Decks',
      '1.25 Lakh Sq.Ft. Clubhouse',
      'High Appreciation Potential'
    ],
    priceEstimates: [
      { type: '4 BHK + Staff', size: '3,900+ Sq. Ft.', estimate: '₹ 9.3 Cr onwards' }
    ],
    locationAdvantages: [
      'Connected to Golf Course Extn Road',
      'Near Rapid Metro',
      'Proximity to Cyber City'
    ]
  },
  {
    id: 'dlf-privana',
    name: 'DLF Privana',
    location: 'Sector 76-77, SPR, Gurgaon',
    price: '₹ 7.5 Cr Onwards',
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
    priceRange: '₹ 7.5 Cr Onwards',
    sizeRange: '3,577 - 5,472 Sq. Ft.',
    possession: 'July 2029',
    developer: 'DLF Ltd',
    landArea: '25 Acres',
    towers: '7 Towers | G+40',
    investmentThesis: [
      'Overlooking the Aravallis, DLF Privana is a sanctuary of nature and white-themed architectural luxury.',
      'Designed for the discerning investor looking for long-term value creation in an emerging micro-market.',
      'Aravalli Views',
      'Integrated Township',
      'Sustainable Design',
      'Strategic Connectivity'
    ],
    priceEstimates: [
      { type: '4 BHK', size: '3,577 Sq. Ft.', estimate: '₹ 7.5 Cr*' },
      { type: 'Penthouse', size: '5,472 Sq. Ft.', estimate: '₹ 11.5 Cr*' }
    ],
    locationAdvantages: [
      'Direct Access to NH-8',
      'Close to Manesar Industrial Hub',
      'Future Growth Corridor'
    ]
  },
  {
    id: 'tarc-ishva',
    name: 'TARC Ishva',
    location: 'Sector 63A, Gurgaon',
    price: '₹ 6 Cr Onwards',
    bedrooms: 3,
    layout: '3 & 4 BHK Luxury',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Luxury High-Rise',
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
    priceRange: '₹ 6 Cr Onwards',
    sizeRange: '2,850 - 3,900 Sq. Ft.',
    possession: 'TBD',
    developer: 'TARC',
    landArea: '7 Acres',
    towers: '5 Towers',
    investmentThesis: [
      'TARC Ishva sets the standard for high-rise luxury living in Sector 63A.',
      'Experience serene living with 70% open space and 4-side open apartments in each tower.',
      'Nestled against the tranquil Aravalli Hills, this newly launched residential gem offers ultra-luxurious living.',
      'IGBC Platinum Certified',
      'Private Lifts With Direct Apartment Access'
    ],
    priceEstimates: [
      { type: '3 BHK', size: '2,850 Sq. Ft.', estimate: '₹ 6 Cr onwards' },
      { type: '4 BHK', size: '3,900 Sq. Ft.', estimate: 'Inquire' }
    ],
    locationAdvantages: [
      '5 mins to Golf Course Road',
      '15 mins to Rapid Metro',
      '40 mins to IGI Airport'
    ]
  },
  {
    id: 'ashiana-aaroham',
    name: 'Ashiana Aaroham',
    location: 'Sector 80, Dwarka Expressway',
    price: '₹ 2.99 - 4.19 Cr',
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
    priceRange: '₹ 2.99 - 4.19 Cr',
    sizeRange: '1,341 - 1,919 Sq. Ft.',
    possession: 'October 2033',
    developer: 'Ashiana Housing',
    landArea: '10.8 Acres',
    towers: '6 Towers',
    investmentThesis: [
      'Ashiana Aaroham is a premier Kid Centric high-rise project on Dwarka Expressway.',
      'Designed specifically for holistic child development with specialized sports academies and creative play zones.',
      'The project features majestic towers offering calm and low-density living for families.',
      'Residents enjoy dedicated kids’ play zones, specialized coaching, and 24x7 security.'
    ],
    priceEstimates: [
      { type: '3 BHK', size: '1341 Sq.Ft', estimate: '₹ 2.99 - 3.08 Cr' },
      { type: '3 BHK', size: '1569 Sq.Ft', estimate: '₹ 3.46 - 3.56 Cr' },
      { type: '4 BHK', size: '1919 Sq.Ft', estimate: '₹ 4.08 - 4.19 Cr' }
    ],
    locationAdvantages: [
      '10 mins to Dwarka',
      '10 mins to Ansal Plaza',
      '20 mins to IGI Airport',
      '20 mins to Taj Vivanta'
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
