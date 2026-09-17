import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    slug: 'fintech',
    title: 'FinTech',
    shortDescription: 'Secure banking, payments, and wealth platforms built for regulatory rigor.',
    challenges: [
      'Strict compliance and audit requirements',
      'Real-time transaction reliability',
      'Fraud detection without friction',
    ],
    approach:
      'We design financial products with defense-in-depth security, clear audit trails, and interfaces that keep complex money flows understandable for end users.',
    technologies: ['PCI-aware architectures', 'Event streaming', 'Open banking APIs', 'Risk engines'],
    outcomes: ['Faster onboarding', 'Lower fraud loss', 'Audit-ready systems'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    shortDescription: 'Patient-centered platforms that protect sensitive clinical data.',
    challenges: [
      'Interoperability across EHR systems',
      'Privacy and HIPAA-aligned controls',
      'Clinician workflows that cannot afford friction',
    ],
    approach:
      'Our healthcare programs combine careful UX research with secure data exchange patterns so care teams spend less time on software and more time on patients.',
    technologies: ['HL7/FHIR', 'Encrypted data stores', 'Telehealth stacks', 'Identity verification'],
    outcomes: ['Improved care coordination', 'Reduced admin load', 'Stronger patient trust'],
  },
  {
    slug: 'education',
    title: 'Education',
    shortDescription: 'Learning platforms that engage students and empower educators.',
    challenges: [
      'Diverse learner needs and devices',
      'Content delivery at scale',
      'Measuring outcomes beyond completion rates',
    ],
    approach:
      'We build learning products with adaptive experiences, accessible design, and analytics that help institutions understand what actually improves outcomes.',
    technologies: ['LMS integrations', 'Video streaming', 'Analytics', 'Mobile-first design'],
    outcomes: ['Higher engagement', 'Better completion rates', 'Actionable insights'],
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce',
    shortDescription: 'Conversion-focused commerce experiences across web and mobile.',
    challenges: [
      'Cart abandonment and checkout friction',
      'Inventory and fulfillment complexity',
      'Personalization without creepy UX',
    ],
    approach:
      'We optimize the full purchase journey—catalog performance, checkout reliability, and post-purchase experiences that turn first-time buyers into loyal customers.',
    technologies: ['Headless commerce', 'Search & merchandising', 'Payments', 'CDP integrations'],
    outcomes: ['Higher conversion', 'Faster page loads', 'Improved AOV'],
  },
  {
    slug: 'agriculture',
    title: 'Agriculture',
    shortDescription: 'Field-ready software for agritech operations and supply chains.',
    challenges: [
      'Offline field conditions',
      'Sensor and IoT data volume',
      'Seasonal operational peaks',
    ],
    approach:
      'We create durable agritech systems that sync reliably offline, visualize farm data clearly, and help operators make timely decisions across seasons.',
    technologies: ['IoT pipelines', 'Geospatial maps', 'Mobile offline sync', 'Forecasting'],
    outcomes: ['Better yield planning', 'Lower waste', 'Operational visibility'],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    shortDescription: 'Real-time visibility platforms for modern supply chains.',
    challenges: [
      'Multi-carrier orchestration',
      'Live tracking accuracy',
      'Exception handling at scale',
    ],
    approach:
      'Our logistics solutions unify shipment data, automate exception workflows, and give operations teams the clarity needed to keep goods moving.',
    technologies: ['Event-driven APIs', 'Route optimization', 'Fleet telematics', 'Control towers'],
    outcomes: ['Fewer delays', 'Lower cost-to-serve', 'Higher on-time delivery'],
  },
  {
    slug: 'saas',
    title: 'SaaS',
    shortDescription: 'Multi-tenant products engineered for growth and retention.',
    challenges: [
      'Tenant isolation and security',
      'Feature velocity under scale',
      'Usage-based packaging and billing',
    ],
    approach:
      'We help SaaS teams ship durable platform foundations—auth, billing, observability, and UX patterns that support rapid experimentation.',
    technologies: ['Multi-tenancy', 'Subscription billing', 'Feature flags', 'Product analytics'],
    outcomes: ['Faster feature release', 'Lower churn', 'Clearer monetization'],
  },
  {
    slug: 'enterprise',
    title: 'Enterprise',
    shortDescription: 'Mission-critical systems with governance and long-term maintainability.',
    challenges: [
      'Legacy integration debt',
      'Cross-team stakeholder complexity',
      'Security and compliance mandates',
    ],
    approach:
      'Enterprise engagements emphasize architecture clarity, phased delivery, and documentation so platforms remain operable years after launch.',
    technologies: ['SOA/microservices', 'Identity federation', 'Data lakes', 'ITSM integrations'],
    outcomes: ['Reduced tech debt', 'Predictable delivery', 'Enterprise-grade resilience'],
  },
]

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug)
}
