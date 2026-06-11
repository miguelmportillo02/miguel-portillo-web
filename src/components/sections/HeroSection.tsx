import CybercoreBackground from '@/components/ui/cybercore-section-hero'
import { ShinyButton } from '@/components/ui/shiny-button'
import { Button } from '@/components/ui/button'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { useScrollFade } from '@/hooks/useScrollFade'

const WHATSAPP_PRINCIPAL = 'https://wa.me/50378547844'

export default function HeroSection() {
  const opacity = useScrollFade()

  const scrollToServicios = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Fondo animado con fade-out hacia el contenido */}
      <div className="absolute inset-0 hero-fade-mask">
        <CybercoreBackground beamCount={70} />
      </div>

      {/* Contenido centrado */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        style={{ opacity }}
      >
        {/* Solo el ícono MP */}
        <img
          src="/logo-mp-hero.png"
          alt="Logo Miguel Portillo"
          className="h-28 w-auto object-contain drop-shadow-2xl sm:h-36"
        />

        {/* Nombre y profesiones como texto */}
        <h1 className="mt-6 font-barlow-condensed text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
          Miguel Portillo
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mp-steel sm:text-sm">
          Electricidad · Remodelaciones · Estructuras Metálicas
        </p>

        <p className="mt-5 text-lg italic text-white/80">
          "Conectamos, construimos y transformamos"
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href={WHATSAPP_PRINCIPAL} target="_blank" rel="noopener noreferrer">
            <ShinyButton className="bg-mp-orange">
              <MessageCircle className="h-5 w-5" />
              Contáctanos por WhatsApp
            </ShinyButton>
          </a>

          <Button
            variant="ghost"
            size="lg"
            className="text-white"
            onClick={scrollToServicios}
          >
            Ver servicios
            <ChevronDown className="ml-1 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  )
}
