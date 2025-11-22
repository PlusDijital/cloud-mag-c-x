import { HeroSection } from '@/components/home/hero-section'
import { FeaturesSection } from '@/components/home/features-section'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { DashboardPreviewSection } from '@/components/home/dashboard-preview-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { Footer } from '@/components/home/footer'
import { Navbar } from '@/components/home/navbar'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DashboardPreviewSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
