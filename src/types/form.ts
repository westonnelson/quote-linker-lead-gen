
export type FormStep = 1 | 2 | 3 | 4;

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  smoker: 'yes' | 'no';
  coverageAmount: string;
  zipCode: string;
  insuranceKnowledge: 'yes' | 'no' | 'unsure';
}

export interface Lead extends FormData {
  id: string;
  createdAt: string;
  source?: string;
  utmParams?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
}
