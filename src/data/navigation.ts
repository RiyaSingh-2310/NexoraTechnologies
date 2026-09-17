import type { NavItem } from '@/types'

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services', description: 'Explore our full capability map' },
      { label: 'Web Development', href: '/services/web-development', description: 'High-performance web platforms' },
      { label: 'Mobile Apps', href: '/services/mobile-app-development', description: 'iOS, Android, and cross-platform' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Reliable cloud infrastructure' },
      { label: 'AI & ML', href: '/services/ai-machine-learning', description: 'Intelligent product features' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Digital Transformation', href: '/solutions#digital-transformation' },
      { label: 'Product Engineering', href: '/solutions#product-engineering' },
      { label: 'Platform Modernization', href: '/solutions#platform-modernization' },
      { label: 'Data & Analytics', href: '/solutions#data-analytics' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-app-development' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { label: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
    { label: 'Cybersecurity', href: '/services/cybersecurity' },
  ],
  industries: [
    { label: 'FinTech', href: '/industries#fintech' },
    { label: 'Healthcare', href: '/industries#healthcare' },
    { label: 'Education', href: '/industries#education' },
    { label: 'E-commerce', href: '/industries#e-commerce' },
    { label: 'Logistics', href: '/industries#logistics' },
    { label: 'Enterprise', href: '/industries#enterprise' },
  ],
  resources: [
    { label: 'Help Center', href: '/help' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
}
