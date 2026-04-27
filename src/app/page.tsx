
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Process } from '@/components/Process'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { SocialProof } from '@/components/SocialProof'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground scroll-smooth">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
