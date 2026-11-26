export interface ProductItem {
  id: 'hotel-management' | 'lawyer-diary';
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  accentBadge: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  iconName: 'Code2' | 'Globe' | 'Smartphone' | 'Palette' | 'CloudCog';
}

export const BRAND = {
  name: 'Sredatec Solutions',
  shortName: 'Sredatec',
  logoSrc: '/images/sredatec-logo.jpg',
  founderName: 'Budhan Murali',
  founderTitle: 'Founder & Chief Executive Officer',
  founderImage: '/images/budhan-murali.jpg',
  whatsappDisplay: '+91 99959 55252',
  whatsappUrl: 'https://wa.me/919995955252',
  heroHeadline: 'Technology That Moves Businesses Forward.',
  heroSubheadline:
    'Building innovative software products and delivering intelligent IT solutions that simplify business operations and accelerate digital growth.',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'hotel-management',
    name: 'Hotel Management Application',
    tagline: 'Hospitality Operations Suite',
    description:
      'An end-to-end hospitality platform unifying reservations, front-desk check-ins, live room inventory, housekeeping orchestration, and billing analytics in real time.',
    highlights: [
      'Real-time room occupancy & housekeeping board',
      'Automated check-in, invoicing & folio tracking',
      'Revenue intelligence & occupancy forecasting',
    ],
    accentBadge: 'Hospitality Cloud',
  },
  {
    id: 'lawyer-diary',
    name: 'Lawyer Diary Application',
    tagline: 'Legal Practice & Case Intelligence',
    description:
      'A purpose-built digital workspace for advocates and law firms to manage hearing schedules, case dockets, court reminders, and client documentation effortlessly.',
    highlights: [
      'Smart daily cause-list & court hearing calendar',
      'Structured case timeline & filing alerts',
      'Secure client records & instant docket search',
    ],
    accentBadge: 'LegalTech Workspace',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Tailored enterprise systems engineered around your exact operational workflows, security standards, and long-term scalability goals.',
    capabilities: ['Enterprise Architecture', 'API Ecosystems', 'Legacy Modernization'],
    iconName: 'Code2',
  },
  {
    id: 'web-applications',
    title: 'Web Application Development',
    description:
      'High-speed, responsive web platforms and SaaS portals crafted with modern frameworks, clean architecture, and seamless user journeys.',
    capabilities: ['SaaS Platforms', 'Real-time Dashboards', 'Progressive Web Apps'],
    iconName: 'Globe',
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Application Development',
    description:
      'Intuitive iOS and Android applications built for fluid performance, offline resilience, and engaging mobile-first experiences.',
    capabilities: ['iOS & Android', 'Cross-Platform Apps', 'Push & Sync Engines'],
    iconName: 'Smartphone',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Human-centered product interfaces, interactive prototypes, and cohesive design systems that elevate clarity and user adoption.',
    capabilities: ['Design Systems', 'Interactive Prototyping', 'Usability Engineering'],
    iconName: 'Palette',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description:
      'Resilient cloud infrastructure, automated CI/CD pipelines, and proactive observability ensuring zero-downtime digital delivery.',
    capabilities: ['Cloud Migration', 'CI/CD Automation', 'High-Availability Infra'],
    iconName: 'CloudCog',
  },
];

export const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Leadership', href: '#founder' },
  { label: 'Contact', href: '#contact' },
];
