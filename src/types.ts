export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
//   icon: React.ReactNode;
  icon: any;
  title: string;
  description: string;
  detailedDescription: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

export interface Feature {
    // icon: React.ReactNode;
  icon: any;
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
    linkedinUrl: string;
}

export interface LinkedInPost {
    imageUrl: string;
    text: string;
    postUrl: string;
}

// export interface BlogPost {
//   id: string;
//   title: string;
//   imageUrl: string;
//   briefDescription: string;
//   author: string;
//   date: string;
//   content: React.ReactNode;
// }

export interface FAQ {
  question: string;
  answer: string;
}