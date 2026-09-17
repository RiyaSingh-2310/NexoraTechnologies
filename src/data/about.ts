import type { HelpTopic, TeamMember, TimelineEvent } from '@/types'

export const aboutContent = {
  intro:
    'Nexora Technologies was founded to close the gap between ambitious product vision and dependable engineering execution. We partner with companies that need more than freelancers and more focus than oversized agencies.',
  mission:
    'To engineer digital products and platforms that help organizations move faster with confidence—securely, accessibly, and at scale.',
  vision:
    'A world where every company can ship software with the clarity of a product studio and the reliability of an enterprise platform team.',
  values: [
    {
      title: 'Craft over theater',
      description: 'We measure success by working software and clear outcomes, not slide volume.',
    },
    {
      title: 'Clarity in complexity',
      description: 'We translate technical trade-offs into decisions leaders can act on.',
    },
    {
      title: 'Partnership mindset',
      description: 'We embed with your teams, share context openly, and protect long-term maintainability.',
    },
    {
      title: 'Responsible ambition',
      description: 'We push for modern approaches while respecting risk, compliance, and operational reality.',
    },
  ],
}

export const team: TeamMember[] = [
  {
    name: 'Elena Voss',
    role: 'CEO & Co-Founder',
    bio: 'Former product leader at two scaled SaaS companies. Focused on client outcomes and company culture.',
  },
  {
    name: 'Nathan Okoye',
    role: 'CTO & Co-Founder',
    bio: 'Cloud architect and engineering leader specializing in platform modernization and secure delivery.',
  },
  {
    name: 'Priya Raman',
    role: 'Head of Design',
    bio: 'Design systems advocate who bridges research, interaction craft, and engineering collaboration.',
  },
  {
    name: 'Marcus Bell',
    role: 'VP of Delivery',
    bio: 'Program leader with a track record of multi-squad enterprise launches and predictable governance.',
  },
]

export const journey: TimelineEvent[] = [
  {
    year: '2016',
    title: 'Nexora founded',
    description: 'Started as a specialist product engineering studio for early SaaS teams in San Francisco.',
  },
  {
    year: '2018',
    title: 'Cloud practice launched',
    description: 'Expanded into DevOps and cloud architecture to support clients through rapid growth phases.',
  },
  {
    year: '2020',
    title: 'Enterprise programs',
    description: 'Began multi-year modernization engagements across FinTech, healthcare, and logistics.',
  },
  {
    year: '2023',
    title: 'AI product studio',
    description: 'Formalized applied AI delivery with evaluation frameworks and responsible deployment patterns.',
  },
  {
    year: '2026',
    title: 'Global delivery network',
    description: 'Operate as a distributed product organization serving clients across 28 countries.',
  },
]

export const expertise = [
  'React & TypeScript product engineering',
  'Cloud-native architecture on AWS, Azure, and GCP',
  'Design systems and accessibility',
  'Data platforms and applied AI',
  'Secure SDLC and compliance enablement',
  'Agile program leadership',
]

export const helpTopics: HelpTopic[] = [
  {
    id: 'start',
    title: 'Getting started with Nexora',
    description: 'How engagements begin, what to prepare, and what the first two weeks look like.',
    href: '/faq',
    icon: 'rocket',
  },
  {
    id: 'billing',
    title: 'Billing & proposals',
    description: 'Understand estimate types, retainers, and how commercial agreements are structured.',
    href: '/faq',
    icon: 'receipt',
  },
  {
    id: 'security',
    title: 'Security & compliance',
    description: 'Learn how we handle data protection, access control, and audit collaboration.',
    href: '/faq',
    icon: 'shield',
  },
  {
    id: 'support',
    title: 'Support after launch',
    description: 'Maintenance plans, incident response expectations, and enhancement workflows.',
    href: '/contact',
    icon: 'lifeBuoy',
  },
  {
    id: 'careers',
    title: 'Careers & recruiting',
    description: 'Application process, interview loops, and what we look for in candidates.',
    href: '/careers',
    icon: 'briefcase',
  },
  {
    id: 'press',
    title: 'Partnership inquiries',
    description: 'Agency, technology, and channel partnership introductions.',
    href: '/contact',
    icon: 'handshake',
  },
]

export const popularHelpLinks = [
  { label: 'How long does a typical project take?', href: '/faq' },
  { label: 'Do you offer dedicated teams?', href: '/faq' },
  { label: 'View open positions', href: '/careers' },
  { label: 'Contact sales', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]
