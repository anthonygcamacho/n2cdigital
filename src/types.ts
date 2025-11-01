export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
//   icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

export interface Feature {
    // icon: React.ReactNode;
    title: string;
    description: string;
}

export interface CaseStudy {
    logoUrl: string;
    alt: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    imageUrl: string;
}

export interface TeamMember {
    imageUrl: string;
    name: string;
    role: string;
}
