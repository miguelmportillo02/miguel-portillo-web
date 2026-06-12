import { servicios } from '@/data/servicios'
import { GlowCard } from '@/components/ui/spotlight-card'

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-mp-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* ¿Quién soy? — bloque SEO */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-mp-orange">
            ¿Quién soy?
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-mp-navy sm:text-4xl">
            Miguel Portillo: Servicios Técnicos en Santa Ana, El Salvador
          </h2>
          <p className="mt-4 text-mp-dark/75">
            Soy Miguel Portillo, técnico especialista en{' '}
            <strong className="font-semibold text-mp-navy">
              electricidad, remodelaciones y estructuras metálicas
            </strong>{' '}
            con base en Santa Ana, El Salvador. Ofrezco soluciones residenciales
            e industriales que garantizan resultados seguros, duraderos y a la
            medida de tus necesidades.
          </p>
          <p className="mt-4 text-mp-dark/75">
            Mi compromiso es transformar y proteger tus espacios. Cuento con una
            amplia experiencia que va desde instalaciones eléctricas complejas y
            diagnóstico de fallas, hasta la fabricación de estructuras metálicas
            avanzadas, pintura y remodelación de ambientes. Atiendo cada proyecto
            con calidad garantizada y disponibilidad de atención 24/7 en todo el
            departamento de Santa Ana.
          </p>
        </div>

        {/* Nuestros Servicios */}
        <header className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-mp-orange">
            Lo que hacemos
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-mp-navy sm:text-4xl">
            Nuestros Servicios
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => {
            const Icon = servicio.icon
            return (
              <GlowCard
                key={servicio.id}
                glowColor="orange"
                customSize
                className="w-full !gap-4 text-mp-dark"
              >
                {/* Encabezado */}
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: servicio.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-mp-navy">
                    {servicio.titulo}
                  </h3>
                </div>

                {/* Recuadro de imagen (con texto alt SEO) */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${servicio.color}33, ${servicio.color}11)`,
                  }}
                >
                  <img
                    src={servicio.image}
                    alt={servicio.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>

                {/* Lista de servicios */}
                <ul className="space-y-2">
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
              </GlowCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
