import { SEO } from '@/components/common/SEO'
import { FinalCta } from '@/components/sections/FinalCta'
import { AboutPreview } from '@/components/sections/home/AboutPreview'
import { CaseStudiesSection } from '@/components/sections/home/CaseStudiesSection'
import { FaqPreview } from '@/components/sections/home/FaqPreview'
import { HomeHero } from '@/components/sections/home/HomeHero'
import { IndustriesPreview } from '@/components/sections/home/IndustriesPreview'
import { ProcessSection } from '@/components/sections/home/ProcessSection'
import { ServicesSection } from '@/components/sections/home/ServicesSection'
import { StatsSection } from '@/components/sections/home/StatsSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { TrustedCompanies } from '@/components/sections/home/TrustedCompanies'
import { WhyChooseUs } from '@/components/sections/home/WhyChooseUs'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Engineering Digital Products That Scale"
        description="Nexora Technologies builds scalable software, cloud platforms, and digital products for ambitious companies worldwide."
      />
      <HomeHero />
      <TrustedCompanies />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesPreview />
      <ProcessSection />
      <CaseStudiesSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqPreview />
      <FinalCta />
    </>
  )
}
