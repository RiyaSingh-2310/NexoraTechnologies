import { useEffect } from 'react'
import { company } from '@/data/company'

type Props = {
  title: string
  description?: string
}

export function SEO({ title, description }: Props) {
  useEffect(() => {
    document.title = `${title} | ${company.shortName}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) {
      meta.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
