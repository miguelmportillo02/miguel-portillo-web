import { MessageCircle, Instagram, Facebook, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ShinyLink } from '@/components/ui/shiny-button'

interface Canal {
  icon: LucideIcon
  label: string
  dato: string
  href: string
  color: string
}

const canales: Canal[] = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    dato: '+503 7854-7844',
    href: 'https://wa.me/50378547844',
    color: '#25D366',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    dato: '+503 6842-3084',
    href: 'https://wa.me/50368423084',
    color: '#25D366',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    dato: '@miguelmportillo02',
    href: 'https://instagram.com/miguelmportillo02',
    color: '#E1306C',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    dato: 'Miguel Portillo',
    href: 'https://facebook.com/share/18oDvt62hK/',
    color: '#1877F2',
  },
  {
    icon: Mail,
    label: 'Correo',
    dato: 'miguelmportillo02@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=miguelmportillo02@gmail.com&su=Solicitud%20de%20servicio',
    color: '#E85D1A',
  },
]

export default function ContactoSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-mp-navy py-20 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(232,93,26,0.10), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <header className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-mp-orange">
            Hablemos
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Contacto</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Escríbenos por WhatsApp o síguenos en redes. Te respondemos rápido.
          </p>
        </header>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Foto de Miguel */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-mp-orange/20 blur-xl" />
              <img
                src="/miguel.jpeg"
                alt="Miguel Portillo, técnico en electricidad, remodelaciones y estructuras metálicas"
                className="relative aspect-[3/4] w-64 rounded-2xl border border-white/15 object-cover shadow-2xl sm:w-72"
              />
            </div>
            <h3 className="mt-6 font-barlow-condensed text-2xl font-bold uppercase tracking-wide">
              Miguel Portillo
            </h3>
            <p className="text-sm text-white/60">
              Técnico en Electricidad · Remodelaciones · Estructuras Metálicas
            </p>
          </div>

          {/* Canales de contacto: botones compactos enmarcados con el color de cada red */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {canales.map((canal) => {
              const Icon = canal.icon
              const externo = !canal.href.startsWith('mailto:')
              return (
                <ShinyLink
                  key={canal.href}
                  href={canal.href}
                  target={externo ? '_blank' : undefined}
                  rel={externo ? 'noopener noreferrer' : undefined}
                  className="rounded-xl border p-4"
                  style={{
                    backgroundColor: `${canal.color}1f`,
                    borderColor: canal.color,
                  }}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: canal.color }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block text-base font-bold text-white">
                      {canal.label}
                    </span>
                    <span className="block truncate text-xs font-normal text-white/70">
                      {canal.dato}
                    </span>
                  </span>
                </ShinyLink>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
