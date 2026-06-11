import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import SectionTransition from '@/components/layout/SectionTransition'
import HeroSection from '@/components/sections/HeroSection'
import ServiciosSection from '@/components/sections/ServiciosSection'
import CoberturaSection from '@/components/sections/CoberturaSection'
import ReconocimientosSection from '@/components/sections/ReconocimientosSection'
import ContactoSection from '@/components/sections/ContactoSection'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiciosSection />
        <SectionTransition direction="light-to-navy" glow={30} />
        <CoberturaSection />
        <SectionTransition direction="navy-to-light" glow={30} />
        <ReconocimientosSection />
        <SectionTransition direction="light-to-navy" glow={30} />
        <ContactoSection />
        <SectionTransition direction="navy-to-dark" glow={15} />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
