import type { Solution } from '@/types'

export const solutions: Solution[] = [
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    shortDescription: 'Move from legacy constraints to cloud-ready product organizations.',
    challenges: [
      'Aging systems that slow innovation',
      'Fragmented customer journeys',
      'Change fatigue across teams',
    ],
    approach:
      'We map value streams, prioritize high-impact modernization bets, and deliver in stages so operations stay stable while capability grows.',
    technologies: ['Cloud migration', 'API platforms', 'Process automation', 'Change programs'],
    outcomes: ['Shorter release cycles', 'Lower ops overhead', 'Unified customer experience'],
  },
  {
    slug: 'product-engineering',
    title: 'Product Engineering',
    shortDescription: 'End-to-end squads that own discovery through production.',
    challenges: [
      'Unclear product priorities',
      'Engineering capacity gaps',
      'Quality slipping under deadline pressure',
    ],
    approach:
      'Cross-functional Nexora squads embed with your team—owning UX, engineering, QA, and delivery metrics as if the product were ours.',
    technologies: ['React/TypeScript', 'Node services', 'Design systems', 'CI/CD'],
    outcomes: ['Predictable velocity', 'Higher product quality', 'Stronger roadmaps'],
  },
  {
    slug: 'platform-modernization',
    title: 'Platform Modernization',
    shortDescription: 'Rebuild core platforms without a risky big-bang rewrite.',
    challenges: [
      'Monoliths that resist change',
      'Brittle integrations',
      'Limited observability',
    ],
    approach:
      'We use strangler patterns, contract testing, and incremental cutovers to modernize platforms while protecting revenue-critical flows.',
    technologies: ['Microservices', 'Event buses', 'Kubernetes', 'Observability stacks'],
    outcomes: ['Safer deploys', 'Independent scaling', 'Faster onboarding for engineers'],
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    shortDescription: 'Trusted data foundations that power decisions and AI.',
    challenges: [
      'Inconsistent source-of-truth data',
      'Slow reporting cycles',
      'AI experiments without clean pipelines',
    ],
    approach:
      'We establish governed pipelines, semantic models, and self-serve analytics so leaders and product teams act on shared facts.',
    technologies: ['Warehouses', 'ELT', 'BI tools', 'Feature stores'],
    outcomes: ['Trusted metrics', 'Faster insights', 'Ready-to-use ML data'],
  },
  {
    slug: 'customer-experience',
    title: 'Customer Experience Platforms',
    shortDescription: 'Unified journeys across marketing, product, and support.',
    challenges: [
      'Disconnected touchpoints',
      'Inconsistent brand voice',
      'Support teams lacking context',
    ],
    approach:
      'We design CX platforms that connect identity, content, and service data—so every interaction feels informed and intentional.',
    technologies: ['CDP', 'CMS', 'Support tooling', 'Personalization engines'],
    outcomes: ['Higher NPS', 'Lower support cost', 'Increased loyalty'],
  },
  {
    slug: 'secure-by-design',
    title: 'Secure-by-Design Delivery',
    shortDescription: 'Ship faster by baking security into every sprint.',
    challenges: [
      'Late-stage security surprises',
      'Compliance pressure from enterprise buyers',
      'Secrets sprawl across environments',
    ],
    approach:
      'Threat modeling, automated scanning, and secure defaults become part of the delivery system—not a separate project after launch.',
    technologies: ['SAST/DAST', 'IAM', 'Secrets management', 'Policy as code'],
    outcomes: ['Fewer critical findings', 'Smoother audits', 'Buyer confidence'],
  },
]

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug)
}
