import type { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'orbitpay-treasury',
    title: 'OrbitPay Treasury Platform',
    industry: 'FinTech',
    client: 'OrbitPay',
    summary:
      'A real-time treasury dashboard that helped a digital payments company scale multi-currency operations across 12 markets.',
    challenge:
      'Finance teams were stitching together spreadsheets and delayed bank feeds, creating reconciliation gaps and slow decision cycles during peak volume days.',
    solution:
      'Nexora designed a secure treasury console with live balances, policy-driven approvals, and automated reconciliation pipelines connected to banking partners.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Kafka', 'AWS'],
    results: [
      { label: 'Reconciliation time', value: '−68%' },
      { label: 'Ops productivity', value: '+41%' },
      { label: 'Markets launched', value: '12' },
    ],
    accent: '#0f766e',
  },
  {
    slug: 'carelink-telehealth',
    title: 'CareLink Telehealth Suite',
    industry: 'Healthcare',
    client: 'CareLink Health',
    summary:
      'A clinician-friendly telehealth product that reduced no-shows and streamlined virtual visit workflows for regional care networks.',
    challenge:
      'Existing tooling forced clinicians through cluttered screens and unreliable video sessions, increasing administrative burden and patient drop-off.',
    solution:
      'We rebuilt scheduling, intake, and visit rooms around clinician research, with resilient media quality and HIPAA-aligned access controls.',
    technologies: ['React Native', 'WebRTC', 'Node.js', 'FHIR APIs', 'Azure'],
    results: [
      { label: 'No-show rate', value: '−32%' },
      { label: 'Visit setup time', value: '−55%' },
      { label: 'Clinician CSAT', value: '4.8/5' },
    ],
    accent: '#2563a8',
  },
  {
    slug: 'northlane-commerce',
    title: 'Northlane Commerce Engine',
    industry: 'E-commerce',
    client: 'Northlane',
    summary:
      'A headless commerce rebuild that improved conversion and cut page load times for a multi-brand retail group.',
    challenge:
      'A monolithic storefront could not support seasonal campaigns without downtime, and mobile conversion lagged far behind desktop.',
    solution:
      'Nexora delivered a headless architecture with edge caching, modular merchandising, and a rebuilt checkout focused on speed and clarity.',
    technologies: ['Next.js', 'Shopify Hydrogen', 'GraphQL', 'Cloudflare', 'Algolia'],
    results: [
      { label: 'Mobile conversion', value: '+27%' },
      { label: 'LCP improvement', value: '−44%' },
      { label: 'Campaign launch time', value: '−60%' },
    ],
    accent: '#c27803',
  },
  {
    slug: 'freightwise-control',
    title: 'FreightWise Control Tower',
    industry: 'Logistics',
    client: 'FreightWise',
    summary:
      'An operations control tower that unified shipment exceptions and carrier events for a global 3PL provider.',
    challenge:
      'Dispatchers monitored dozens of carrier portals, leading to delayed exception handling and inconsistent customer updates.',
    solution:
      'We built an event-driven control tower with smart alerting, playbooks, and customer-facing tracking experiences fed by a single data model.',
    technologies: ['React', 'Go', 'EventBridge', 'TimescaleDB', 'Mapbox'],
    results: [
      { label: 'Exception MTTR', value: '−51%' },
      { label: 'On-time delivery', value: '+9 pts' },
      { label: 'Support tickets', value: '−23%' },
    ],
    accent: '#16324d',
  },
  {
    slug: 'learnsphere-platform',
    title: 'LearnSphere Adaptive LMS',
    industry: 'Education',
    client: 'LearnSphere',
    summary:
      'An adaptive learning platform that helped universities personalize coursework and measure skill mastery at scale.',
    challenge:
      'Static courseware left instructors blind to student struggle points until grades arrived—often too late to intervene.',
    solution:
      'Nexora introduced adaptive pathways, instructor insight dashboards, and accessibility-first content experiences across web and tablet.',
    technologies: ['React', 'Python', 'PostgreSQL', 'TensorFlow', 'AWS'],
    results: [
      { label: 'Course completion', value: '+18%' },
      { label: 'Instructor time saved', value: '6 hrs/wk' },
      { label: 'Accessibility score', value: '98' },
    ],
    accent: '#0f766e',
  },
  {
    slug: 'fieldharvest-ops',
    title: 'FieldHarvest Operations App',
    industry: 'Agriculture',
    client: 'FieldHarvest',
    summary:
      'A field operations suite with offline sync that helped agritech crews coordinate harvest logistics across remote regions.',
    challenge:
      'Crews worked with unreliable connectivity, causing lost task updates and inventory mismatches between warehouses and fields.',
    solution:
      'We shipped a mobile-first operations app with conflict-aware offline sync, geospatial tasking, and warehouse integrations.',
    technologies: ['Flutter', 'SQLite', 'Node.js', 'PostGIS', 'GCP'],
    results: [
      { label: 'Data sync failures', value: '−74%' },
      { label: 'Crew coordination time', value: '−35%' },
      { label: 'Inventory accuracy', value: '+22%' },
    ],
    accent: '#2563a8',
  },
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
