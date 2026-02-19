
import { Property, Testimonial, FAQ, Service } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'DLF The Camellias',
    location: 'Sector 42, Golf Course Road, Gurgaon',
    price: '₹60 Cr - ₹100 Cr+',
    bedrooms: 4,
    layout: 'Super Luxury Apartment',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Secondary Market',
    lat: 28.4595,
    lng: 77.0266,
    brochureUrl: '#'
  },
  {
    id: '2',
    name: 'TARC Kailasa',
    location: 'Kirti Nagar, New Delhi',
    price: '₹9 Cr - ₹15 Cr',
    bedrooms: 3.5,
    layout: '3.5 & 4.5 BHK Luxury',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Under Construction',
    lat: 28.6500,
    lng: 77.1300,
    brochureUrl: '#'
  },
  {
    id: '3',
    name: 'DLF Magnolias',
    location: 'Sector 42, Golf Course Road, Gurgaon',
    price: '₹35 Cr - ₹55 Cr',
    bedrooms: 4,
    layout: 'Luxury Secondary',
    image: 'https://images.unsplash.com/photo-1600607687960-ce8746a6f4a0?auto=format&fit=crop&q=80&w=1200',
    category: 'Residential',
    subCategory: 'Handpicked Assets',
    lat: 28.4600,
    lng: 77.0900,
    brochureUrl: '#'
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
