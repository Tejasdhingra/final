
import { Property, Testimonial, FAQ, Service } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'dlf-arbour',
    name: 'DLF The Arbour',
    location: 'Sector 63, Golf Course Extension Road, Gurgaon',
    price: '₹9.3 Cr onwards',
    bedrooms: 4,
    layout: '4 BHK + Staff + Study',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Ultra Luxury High-Rise',
    lat: 28.4012,
    lng: 77.0654,
    brochureUrl: '#',
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
    amenities: ['Concierge Service', 'Temperature Controlled Pool', 'Private Elevator Lobbies', 'Business Center'],
    locationAdvantages: ['Connected to Golf Course Extn Road', 'Near Rapid Metro', 'Proximity to Cyber City']
  },
  {
    id: 'privana-south',
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
    amenities: ['Forest Trails', 'Sports Complex', 'Fine Dining', 'Wellness Spa'],
    locationAdvantages: ['Direct Access to NH-8', 'Close to Manesar Industrial Hub', 'Future Growth Corridor']
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
    priceRange: '₹ 6 Cr Onwards',
    sizeRange: '2,850 - 3,900 Sq. Ft.',
    developer: 'TARC',
    landArea: '7 Acres',
    towers: '5 Towers',
    units: '400 residences',
    investmentThesis: [
      'TARC Ishva sets the standard for majestic white high-rise living in Sector 63A.',
      'Experience serene living with 70% open space and 4-side open apartments in each tower.',
      'Nestled against the tranquil Aravalli Hills, this newly launched residential gem offers ultra-luxurious living.',
      'IGBC Platinum Certified',
      'Private Lifts With Direct Apartment Access'
    ],
    priceEstimates: [
      { type: '3 BHK', size: '2,850 Sq. Ft.', estimate: '₹ 6 Cr onwards' },
      { type: '4 BHK', size: '3,900 Sq. Ft.', estimate: 'Inquire' }
    ],
    amenities: ['Grand Clubhouse', 'Private Lifts', 'Low-Density Living', '70% Open Space'],
    locationAdvantages: ['5 Mins To Golf Course Road', '15 Mins To Rapid Metro', '40 Mins To IGI Airport']
  },
  {
    id: 'ashiana-aaroham',
    name: 'Ashiana Aaroham',
    location: 'Sector 80, Dwarka Expressway, Gurugram',
    price: '₹2.99 Cr onwards',
    bedrooms: 3,
    layout: '3 & 4 BHK Luxury',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Kid Centric Homes',
    lat: 28.3750,
    lng: 76.9250,
    brochureUrl: '#',
    priceRange: '₹ 2.99 - 4.19 Cr',
    sizeRange: '1,341 - 1,919 Sq. Ft.',
    possession: 'October 2033',
    developer: 'Ashiana Housing',
    landArea: '10.8 Acres',
    towers: '6 Towers',
    units: '542 Units',
    investmentThesis: [
      'Ashiana Aaroham is a premier "Kid Centric" white high-rise project on Dwarka Expressway.',
      'Designed specifically for holistic child development with specialized sports academies and creative play zones.',
      'The project features majestic white towers offering a calm and low-density living experience for families.',
      'Residents will enjoy dedicated kids’ play zones, specialized coaching, and 24x7 security.'
    ],
    priceEstimates: [
      { type: '3 BHK', size: '1341 SQ.FT', estimate: '₹ 2.99 - 3.08 Cr' },
      { type: '3 BHK', size: '1569 SQ.FT', estimate: '₹ 3.46 - 3.56 Cr' },
      { type: '4 BHK', size: '1919 SQ.FT', estimate: '₹ 4.08 - 4.19 Cr' }
    ],
    amenities: ['Green Open Areas', 'Kids Play Zone', '24x7 Security', 'Community Spaces'],
    locationAdvantages: ['10 Mins To Dwarka', '10 Mins To Ansal Plaza', '20 Mins To IGI Airport', '20 Mins To Taj Vivanta']
  }
];

export const SERVICES: Service[] = [
  { title: 'Paperwork', description: 'End-to-end documentation management and seamless registration processes.', icon: 'DOCS' },
  { title: 'Legal Advice', description: '100% Legally cleared titles with extensive vetting by veteran real estate lawyers.', icon: 'LAW' },
  { title: 'Interiors', description: 'Renovating to our high standards of quality and sophisticated aesthetics.', icon: 'DESIGN' },
  { title: 'Vastu', description: 'Expert spatial harmony consultation for peace and prosperity in your new home.', icon: 'VASTU' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Malhotra',
    location: 'Vasant Vihar, New Delhi',
    text: 'Latitude Showcase is a game changer. They staged my home at no cost and found a buyer within 6 months. Absolute transparency throughout.',
    rating: 5
  },
  {
    id: '2',
    name: 'Anjali Gupta',
    location: 'Magnolias, Gurgaon',
    text: 'Tejas and his team are professional athletes in the real estate world. Their 300+ checks gave us the confidence to buy without overpaying.',
    rating: 5
  },
  {
    id: '3',
    name: 'Siddharth Khanna',
    location: 'Civil Lines, Delhi',
    text: 'The Lestimate tool is remarkably accurate. It helped me understand the true value of my kothi before listing it for sale.',
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How do you ensure I never overpay?',
    answer: 'We use data-backed pricing models and deep market intelligence to compare historical transactions, ensuring you buy at a fair institutional price.'
  },
  {
    question: 'What does "100% Legally Cleared" actually mean?',
    answer: 'Every property in our secondary market goes through a title search, encumbrance check, and regulatory compliance audit before being listed.'
  },
  {
    question: 'Is the home staging really free?',
    answer: 'Yes, for our Latitude Showcase partners, we stage the house for you at no cost to ensure it sells within our 6-12 month fixed timeline.'
  }
];
