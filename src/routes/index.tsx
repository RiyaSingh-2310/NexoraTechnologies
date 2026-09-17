import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'

const HomePage = lazy(() => import('@/pages/Home/HomePage'))
const AboutPage = lazy(() => import('@/pages/About/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/Services/ServicesPage'))
const ServiceDetailPage = lazy(() => import('@/pages/Services/ServiceDetailPage'))
const SolutionsPage = lazy(() => import('@/pages/Solutions/SolutionsPage'))
const IndustriesPage = lazy(() => import('@/pages/Industries/IndustriesPage'))
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudies/CaseStudiesPage'))
const CaseStudyDetailPage = lazy(() => import('@/pages/CaseStudies/CaseStudyDetailPage'))
const CareersPage = lazy(() => import('@/pages/Careers/CareersPage'))
const FaqPage = lazy(() => import('@/pages/FAQ/FaqPage'))
const HelpPage = lazy(() => import('@/pages/Help/HelpPage'))
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('@/pages/Legal/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('@/pages/Legal/TermsPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'))

function PageLoader() {
  return (
    <div className="container-page flex min-h-[40vh] items-center justify-center py-20" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-teal/30 border-t-teal" />
      <span className="sr-only">Loading page</span>
    </div>
  )
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
