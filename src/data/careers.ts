import type { Job } from '@/types'

export const careerBenefits = [
  {
    title: 'Meaningful ownership',
    description: 'Ship real products with clients who value craft—not endless ticket factories.',
  },
  {
    title: 'Learning budget',
    description: 'Annual stipend for courses, conferences, and certifications that sharpen your craft.',
  },
  {
    title: 'Flexible hybrid work',
    description: 'Collaborate remotely with intentional in-person moments for deep work and culture.',
  },
  {
    title: 'Health & wellness',
    description: 'Comprehensive medical coverage, wellness allowance, and generous time off.',
  },
  {
    title: 'Career pathways',
    description: 'Transparent leveling, mentorship, and opportunities to lead delivery or specialize.',
  },
  {
    title: 'Modern tooling',
    description: 'Work with contemporary stacks, strong design partners, and automated delivery systems.',
  },
]

export const jobs: Job[] = [
  {
    id: 'fe-senior',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'San Francisco / Remote (US)',
    type: 'Full-time',
    experience: '5+ years',
    description:
      'Lead frontend architecture for complex product engagements, mentor engineers, and raise the bar for UI quality.',
    responsibilities: [
      'Architect React/TypeScript applications with strong accessibility and performance',
      'Partner with design to evolve reusable component systems',
      'Review code, coach teammates, and improve delivery practices',
    ],
    requirements: [
      'Deep experience with React and TypeScript',
      'Strong CSS/layout instincts and design collaboration skills',
      'Comfort leading technical conversations with clients',
    ],
  },
  {
    id: 'be-platform',
    title: 'Platform Engineer',
    department: 'Cloud & DevOps',
    location: 'Remote (North America)',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Design cloud infrastructure and delivery pipelines that keep client products reliable under growth.',
    responsibilities: [
      'Implement IaC, CI/CD, and observability for production systems',
      'Guide teams on cost, security, and scalability trade-offs',
      'Respond to incidents and improve operational runbooks',
    ],
    requirements: [
      'Hands-on AWS or GCP experience',
      'Terraform and container platform familiarity',
      'Clear written communication for distributed teams',
    ],
  },
  {
    id: 'pd-product',
    title: 'Product Designer',
    department: 'Design',
    location: 'San Francisco / Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    description:
      'Shape end-to-end product experiences—from discovery workshops to polished interface systems.',
    responsibilities: [
      'Facilitate research and translate insights into flows and prototypes',
      'Build and maintain design systems with engineering partners',
      'Present rationale clearly to stakeholders',
    ],
    requirements: [
      'Strong Figma craft and interaction design fundamentals',
      'Portfolio showing complex B2B or consumer product work',
      'Ability to collaborate tightly with engineers',
    ],
  },
  {
    id: 'pm-delivery',
    title: 'Engagement Manager',
    department: 'Delivery',
    location: 'Remote (US/EU overlap)',
    type: 'Full-time',
    experience: '5+ years',
    description:
      'Own client outcomes across multi-squad programs—scope, communication, risk, and delivery quality.',
    responsibilities: [
      'Lead kickoffs, roadmaps, and executive reporting',
      'Remove blockers and keep cross-functional teams aligned',
      'Protect quality while meeting commercial commitments',
    ],
    requirements: [
      'Experience managing software delivery engagements',
      'Excellent stakeholder communication',
      'Comfort with technical discussions without being the implementer',
    ],
  },
]

export function getJobById(id: string) {
  return jobs.find((job) => job.id === id)
}
