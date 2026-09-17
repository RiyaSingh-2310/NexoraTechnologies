import type { Service } from '@/types'

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Fast, accessible web platforms engineered for growth and reliability.',
    description:
      'We design and build modern web applications—marketing sites, customer portals, and complex SaaS products—with performance, security, and maintainability as first principles.',
    icon: 'globe',
    benefits: [
      'Scalable frontend architectures with React and TypeScript',
      'SEO-ready, accessible experiences across devices',
      'API-first backends and CMS integrations',
      'Continuous delivery pipelines from day one',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
    outcomes: ['Faster time-to-market', 'Higher conversion rates', 'Lower maintenance cost'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Native-quality iOS and Android apps with elegant product experiences.',
    description:
      'From MVP to multi-market launches, we craft mobile products that feel polished, perform under pressure, and integrate cleanly with your existing systems.',
    icon: 'smartphone',
    benefits: [
      'Cross-platform delivery with React Native or Flutter',
      'Native modules when performance demands it',
      'Offline-first patterns and push notification systems',
      'App Store and Play Store launch support',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    outcomes: ['Higher retention', 'Faster release cycles', 'Consistent brand experience'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'Research-led design systems that turn complexity into clarity.',
    description:
      'Our product designers partner with engineering early—mapping journeys, validating flows, and shipping interface systems that teams can scale with confidence.',
    icon: 'palette',
    benefits: [
      'User research, wireframes, and interactive prototypes',
      'Design systems aligned to engineering constraints',
      'Accessibility and inclusive interaction patterns',
      'Usability testing before expensive build cycles',
    ],
    technologies: ['Figma', 'FigJam', 'Storybook', 'Framer', 'UserTesting'],
    outcomes: ['Reduced support tickets', 'Clearer product narrative', 'Stronger brand trust'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortDescription: 'Secure cloud infrastructure with automated delivery and observability.',
    description:
      'We modernize infrastructure so teams can ship often without sacrificing reliability—covering cloud architecture, CI/CD, IaC, and production operations.',
    icon: 'cloud',
    benefits: [
      'AWS, Azure, and GCP architecture design',
      'Infrastructure as Code with Terraform',
      'Container platforms and zero-downtime deploys',
      'Monitoring, alerting, and cost optimization',
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions'],
    outcomes: ['99.9%+ uptime targets', 'Faster incident response', 'Predictable cloud spend'],
  },
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    shortDescription: 'Practical AI features grounded in real product workflows.',
    description:
      'We help teams adopt AI responsibly—prototyping models, integrating LLMs, and building evaluation loops so intelligence becomes a durable product advantage.',
    icon: 'brain',
    benefits: [
      'LLM feature design with retrieval and guardrails',
      'Predictive analytics and recommendation systems',
      'MLOps pipelines for training and monitoring',
      'Responsible AI reviews and data governance',
    ],
    technologies: ['Python', 'PyTorch', 'OpenAI', 'LangChain', 'Vertex AI', 'Hugging Face'],
    outcomes: ['Automated workflows', 'Smarter personalization', 'Measurable productivity gains'],
  },
  {
    slug: 'software-consulting',
    title: 'Software Consulting',
    shortDescription: 'Architecture guidance and delivery leadership for complex programs.',
    description:
      'When stakes are high, our consultants help you choose the right stack, untangle legacy systems, and align engineering execution with business outcomes.',
    icon: 'compass',
    benefits: [
      'Technical due diligence and architecture reviews',
      'Roadmaps tied to measurable business goals',
      'Team augmentation with senior engineers',
      'Delivery governance and risk management',
    ],
    technologies: ['Architecture', 'Agile', 'Domain Modeling', 'Security Reviews'],
    outcomes: ['Clearer roadmaps', 'Reduced delivery risk', 'Stronger engineering culture'],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    shortDescription: 'Modernize legacy systems without disrupting critical operations.',
    description:
      'We guide organizations through staged modernization—replacing brittle systems, introducing cloud platforms, and reshaping processes around digital products.',
    icon: 'refresh',
    benefits: [
      'Legacy assessment and strangler-fig migrations',
      'Process redesign paired with technology change',
      'Change management and stakeholder alignment',
      'Phased rollouts that protect revenue streams',
    ],
    technologies: ['Microservices', 'Event-Driven Design', 'APIs', 'Cloud Migration'],
    outcomes: ['Lower operational cost', 'Faster product iteration', 'Future-ready platforms'],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Security embedded into product design, delivery, and operations.',
    description:
      'Security is not a checklist at the end. We harden applications, implement zero-trust patterns, and help teams meet compliance requirements without slowing delivery.',
    icon: 'shield',
    benefits: [
      'Threat modeling and secure SDLC practices',
      'Identity, access, and secrets management',
      'Penetration testing coordination and remediation',
      'Compliance support for SOC 2 and GDPR programs',
    ],
    technologies: ['OWASP', 'Auth0', 'Vault', 'SIEM', 'Zero Trust'],
    outcomes: ['Reduced breach risk', 'Audit-ready controls', 'Customer trust'],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
