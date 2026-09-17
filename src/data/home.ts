import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Nexora felt like an extension of our product team. They shipped a treasury platform that our finance operators actually trust on busy settlement days.',
    name: 'Amelia Chen',
    role: 'VP of Product',
    company: 'OrbitPay',
  },
  {
    id: 't2',
    quote:
      'The redesign cut clinician friction dramatically. What impressed us most was how carefully they balanced UX ambition with healthcare compliance realities.',
    name: 'Dr. Marcus Hale',
    role: 'Chief Medical Officer',
    company: 'CareLink Health',
  },
  {
    id: 't3',
    quote:
      'We needed velocity without rewriting everything overnight. Nexora’s modernization plan was pragmatic, measurable, and executed with discipline.',
    name: 'Sofia Alvarez',
    role: 'CTO',
    company: 'Northlane',
  },
  {
    id: 't4',
    quote:
      'Their control tower work transformed how our dispatchers handle exceptions. Communication quality with customers improved within the first quarter.',
    name: 'Jonah Reed',
    role: 'Head of Operations',
    company: 'FreightWise',
  },
]

export const trustedBrands = [
  'OrbitPay',
  'CareLink',
  'Northlane',
  'FreightWise',
  'LearnSphere',
  'FieldHarvest',
  'Atlas Cloud',
  'LumenStack',
]

export const differentiators = [
  {
    title: 'Experienced Engineering',
    description: 'Senior practitioners who have shipped production systems across regulated and high-growth environments.',
    icon: 'users',
  },
  {
    title: 'Scalable Architecture',
    description: 'Designs that hold up as traffic, teams, and feature surface area expand.',
    icon: 'layers',
  },
  {
    title: 'Modern Technology',
    description: 'Contemporary stacks chosen for maintainability, talent availability, and long-term value.',
    icon: 'cpu',
  },
  {
    title: 'Security First',
    description: 'Threat modeling, secure defaults, and compliance-minded delivery from the first sprint.',
    icon: 'shield',
  },
  {
    title: 'Agile Delivery',
    description: 'Transparent cadences, demo-driven progress, and decisions grounded in working software.',
    icon: 'zap',
  },
  {
    title: 'Long-Term Support',
    description: 'Post-launch partnerships for reliability, iteration, and platform evolution.',
    icon: 'heartHandshake',
  },
]

export const processSteps = [
  { step: 1, title: 'Discover', description: 'Align on goals, constraints, users, and success metrics.' },
  { step: 2, title: 'Strategize', description: 'Shape the roadmap, architecture bets, and delivery plan.' },
  { step: 3, title: 'Design', description: 'Prototype journeys and interface systems with stakeholders.' },
  { step: 4, title: 'Develop', description: 'Build iteratively with quality gates and continuous integration.' },
  { step: 5, title: 'Test', description: 'Validate functionality, performance, accessibility, and security.' },
  { step: 6, title: 'Launch', description: 'Ship confidently with runbooks, monitoring, and rollout plans.' },
  { step: 7, title: 'Scale', description: 'Optimize, expand features, and support growth over time.' },
]
