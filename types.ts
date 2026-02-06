
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
}

export interface Agent {
  name: string;
  role: string;
  image: string;
  specialization: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
