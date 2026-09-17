export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export type Service = {
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  benefits: string[]
  technologies: string[]
  outcomes: string[]
}

export type Industry = {
  slug: string
  title: string
  shortDescription: string
  challenges: string[]
  approach: string
  technologies: string[]
  outcomes: string[]
}

export type Solution = {
  slug: string
  title: string
  shortDescription: string
  challenges: string[]
  approach: string
  technologies: string[]
  outcomes: string[]
}

export type CaseStudy = {
  slug: string
  title: string
  industry: string
  client: string
  summary: string
  challenge: string
  solution: string
  technologies: string[]
  results: { label: string; value: string }[]
  accent: string
}

export type Job = {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

export type FaqItem = {
  id: string
  category: string
  question: string
  answer: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export type HelpTopic = {
  id: string
  title: string
  description: string
  href: string
  icon: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export type TimelineEvent = {
  year: string
  title: string
  description: string
}
