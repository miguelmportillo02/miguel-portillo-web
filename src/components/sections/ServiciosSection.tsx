import { useState } from 'react'
import { servicios } from '@/data/servicios'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ServiciosSection() {
  // En desktop todas abiertas; permitimos colapsar/expandir cada tarjeta.
  const [abiertos, setAbiertos] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(servicios.map((s) => [s.id, true])),
  )

  const toggle = (id: string) =>
    setAbiertos((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <section id="servicios" className="bg-mp-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-mp-orange">
            Lo que hacemos
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-mp-navy sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-mp-dark/70">
            Soluciones técnicas para tu hogar o negocio en Santa Ana y todo el
            departamento.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => {
            const Icon = servicio.icon
            const abierto = abiertos[servicio.id]
            return (
              <Card
                key={servicio.id}
                className="flex flex-col overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(servicio.id)}
                  className="flex items-center gap-4 p-6 text-left"
                  aria-expanded={abierto}
                  aria-controls={`panel-${servicio.id}`}
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: servicio.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="flex-1 text-lg font-semibold text-mp-navy">
                    {servicio.titulo}
                  </h3>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-mp-steel transition-transform',
                      abierto && 'rotate-180',
                    )}
                  />
                </button>

                <CardContent
                  id={`panel-${servicio.id}`}
                  className={cn('pt-0', !abierto && 'hidden')}
                >
                  <ul className="space-y-2 border-t border-mp-steel/15 pt-4">
                    {servicio.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-mp-dark/80"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: servicio.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
