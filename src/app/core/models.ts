export type Localized = Record<string, string>;

export type ProjectCategory = 'public' | 'company' | 'private' | 'abroad';

export interface Product {
  id: string;
  icon?: string;
  title: Localized;
  summary: Localized;
  description: Localized;
  images: string[];
}

export interface Project {
  id: string;
  category: ProjectCategory;
  title: Localized;
  location: Localized;
  summary: Localized;
  description: Localized;
  images: string[];
}

export interface Person {
  name: string;
  role: Localized;
  phone: string;
  email: string;
}

export interface ContactData {
  company: string;
  address: string[];
  people: Person[];
}

export interface DetailItem {
  title: string;
  subtitle?: string;
  tag?: string;
  description: string;
  images: string[];
}
