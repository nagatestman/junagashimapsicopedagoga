/**
 * Tipos TypeScript para o site da psicopedagoga
 * Estrutura type-safe para dados do site
 */

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  mapUrl?: string;
}

export interface ProfessionalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  photo?: string;
  credentials: string[];
}

export interface SiteConfig {
  professional: ProfessionalInfo;
  services: Service[];
  contact: ContactInfo;
  location: Location;
  socialMedia: SocialMedia[];
}




