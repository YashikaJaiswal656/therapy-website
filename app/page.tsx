import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Specialties from '@/components/Specialties'
import PainPoints from '@/components/PainPoints'
import About from '@/components/About'
import Office from '@/components/Office'
import ProfessionalBG from '@/components/ProfessionalBG'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Specialties />
      <PainPoints />
      <About />
      <Office />
      <ProfessionalBG />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
