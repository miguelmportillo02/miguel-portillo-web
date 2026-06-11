import { Instagram, Facebook, MessageCircle, Mail } from 'lucide-react'

const redes = [
  { icon: MessageCircle, href: 'https://wa.me/50368423084', label: 'WhatsApp' },
  {
    icon: Instagram,
    href: 'https://instagram.com/miguelmportillo02',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://facebook.com/share/18oDvt62hK/',
    label: 'Facebook',
  },
  {
    icon: Mail,
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=miguelmportillo02@gmail.com&su=Solicitud%20de%20servicio',
    label: 'Correo',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-mp-dark py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <img
            src="/logo-mp-hero.png"
            alt="Miguel Portillo"
            className="h-11 w-auto object-contain"
          />
          <div>
            <p className="font-barlow-condensed text-lg font-bold uppercase tracking-wide">
              Miguel Portillo
            </p>
            <p className="text-xs text-white/60">
              Conectamos, construimos y transformamos
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          {redes.map((r) => {
            const Icon = r.icon
            const externo = !r.href.startsWith('mailto:')
            return (
              <a
                key={r.label}
                href={r.href}
                target={externo ? '_blank' : undefined}
                rel={externo ? 'noopener noreferrer' : undefined}
                aria-label={r.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-mp-orange"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-white/40">
        © {year} Miguel Portillo · Santa Ana, El Salvador. Todos los derechos
        reservados.
      </p>
    </footer>
  )
}
