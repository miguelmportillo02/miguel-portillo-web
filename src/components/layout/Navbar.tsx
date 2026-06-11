import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#reconocimientos', label: 'Reconocimientos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-mp-navy/95 shadow-md backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5"
          aria-label="Ir al inicio"
        >
          <img
            src="/logo-mp-hero.png"
            alt="Miguel Portillo"
            className="h-9 w-auto object-contain"
          />
          <span className="font-barlow-condensed text-lg font-bold uppercase tracking-wide text-white">
            Miguel Portillo
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className="text-sm font-medium text-white/80 transition-colors hover:text-mp-orange"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-mp-navy px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className="block w-full py-3 text-left text-white/90 hover:text-mp-orange"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
