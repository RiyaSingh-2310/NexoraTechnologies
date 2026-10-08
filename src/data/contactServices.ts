import { services } from '@/data/services'

export const contactServiceOptions = [
  ...services.map((service) => ({
    value: service.slug,
    label: service.title,
  })),
  { value: 'other', label: 'Other' },
]
