import type { FaqItem } from '@/types'

export const faqCategories = [
  'General',
  'Services',
  'Development',
  'Pricing',
  'Process',
  'Support',
  'Security',
] as const

export const faqs: FaqItem[] = [
  {
    id: 'g1',
    category: 'General',
    question: 'What does Nexora Technologies specialize in?',
    answer:
      'We specialize in product engineering, cloud platforms, UI/UX design, AI-assisted features, and digital transformation for mid-market and enterprise organizations.',
  },
  {
    id: 'g2',
    category: 'General',
    question: 'Where is Nexora based?',
    answer:
      'Our headquarters is in San Francisco, with distributed delivery teams collaborating across North America and Europe. We work with clients globally.',
  },
  {
    id: 'g3',
    category: 'General',
    question: 'Do you work with startups as well as enterprises?',
    answer:
      'Yes. We partner with funded startups that need senior product teams, and with enterprises modernizing platforms or launching new digital products.',
  },
  {
    id: 's1',
    category: 'Services',
    question: 'Can you take over an existing codebase?',
    answer:
      'Absolutely. We begin with a technical assessment, document risks, and propose a stabilization plan before accelerating feature delivery.',
  },
  {
    id: 's2',
    category: 'Services',
    question: 'Do you offer dedicated teams?',
    answer:
      'Yes. Many clients engage cross-functional squads—product design, engineering, QA, and DevOps—embedded into their delivery rhythm.',
  },
  {
    id: 's3',
    category: 'Services',
    question: 'Is UI/UX included with engineering projects?',
    answer:
      'Most product engagements include design partnership. Pure engineering support is also available when a mature design system already exists.',
  },
  {
    id: 'd1',
    category: 'Development',
    question: 'Which technology stacks do you prefer?',
    answer:
      'We commonly deliver with React, TypeScript, Node.js, Python, cloud-native services on AWS/Azure/GCP, and mobile via React Native or Flutter—chosen for product fit, not fashion.',
  },
  {
    id: 'd2',
    category: 'Development',
    question: 'How do you handle quality assurance?',
    answer:
      'Quality is continuous: automated tests, code review standards, staging environments, and release checklists tailored to your risk profile.',
  },
  {
    id: 'd3',
    category: 'Development',
    question: 'Will we own the intellectual property?',
    answer:
      'Yes. Upon payment under our standard agreements, clients own the custom work product created for their project.',
  },
  {
    id: 'p1',
    category: 'Pricing',
    question: 'How is pricing structured?',
    answer:
      'We offer fixed-scope discovery and delivery packages, as well as monthly dedicated-team retainers. Pricing depends on scope, seniority mix, and timeline.',
  },
  {
    id: 'p2',
    category: 'Pricing',
    question: 'Do you provide free estimates?',
    answer:
      'We provide complimentary introductory consultations and high-level estimates after understanding goals, constraints, and success metrics.',
  },
  {
    id: 'pr1',
    category: 'Process',
    question: 'What does your delivery process look like?',
    answer:
      'Discover → Strategize → Design → Develop → Test → Launch → Scale. Each phase has clear artifacts, demos, and decision gates.',
  },
  {
    id: 'pr2',
    category: 'Process',
    question: 'How often will we communicate?',
    answer:
      'Typical cadences include weekly demos, async updates in shared channels, and a dedicated engagement lead for escalations.',
  },
  {
    id: 'su1',
    category: 'Support',
    question: 'Do you offer post-launch support?',
    answer:
      'Yes. We provide maintenance retainers covering monitoring, bug fixes, iterative enhancements, and planned upgrades.',
  },
  {
    id: 'su2',
    category: 'Support',
    question: 'What are support response times?',
    answer:
      'Response SLAs depend on the plan. Critical production issues are prioritized immediately for clients on active support agreements.',
  },
  {
    id: 'se1',
    category: 'Security',
    question: 'How do you approach application security?',
    answer:
      'We use threat modeling, secure coding standards, dependency scanning, secrets management, and staged reviews before production releases.',
  },
  {
    id: 'se2',
    category: 'Security',
    question: 'Can you help with SOC 2 readiness?',
    answer:
      'We support engineering controls and evidence collection for SOC 2 programs and collaborate with your compliance partners as needed.',
  },
]

export const faqPreviewIds = ['g1', 's1', 'p1', 'pr1', 'se1']
