
export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  bedrooms: number;
  layout: string;
  image: string;
  category: 'Residential' | 'Commercial' | 'Plot';
  subCategory?: string;
  lat: number;
  lng: number;
  brochureUrl: string;
  // Detailed fields for high-end advisory
  priceRange?: string;
  sizeRange?: string;
  possession?: string;
  developer?: string;
  landArea?: string;
  towers?: string;
  units?: string;
  investmentThesis?: string[];
  amenities?: string[];
  locationAdvantages?: string[];
  priceEstimates?: { type: string; size: string; estimate: string }[];
  // LAT Match Metadata
  ticketSizeCr: number;
  expectedYield: number; // percentage
  exitLiquidityScore: number; // 1-10
  pricePerSqFt: number;
  marketMomentumScore: number; // 1-10
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface MatchAnswers {
  intent: string;
  budget: string;
  assetType: string;
  holdingPeriod: string;
}
