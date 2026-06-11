import { MapPin, Car, Clock } from 'lucide-react'

export default function CoberturaSection() {
  return (
    <section id="cobertura" className="relative overflow-hidden bg-mp-navy py-20 text-white">
      {/* Brillo naranja interno sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(232,93,26,0.10), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <header className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-mp-orange">
            Dónde trabajamos
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Zona de Cobertura
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-mp-orange">
              <MapPin className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Sede principal</h3>
            <p className="mt-2 text-white/70">Santa Ana, El Salvador</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-mp-orange">
              <Car className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Desplazamiento</h3>
            <p className="mt-2 text-white/70">
              Disponible para cualquier zona próxima del departamento de Santa
              Ana (cuenta con vehículo propio).
            </p>
          </div>

          <div className="rounded-xl border border-mp-orange/30 bg-mp-orange/10 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-mp-orange">
              <Clock className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Horario de atención</h3>
            <p className="mt-2 text-2xl font-bold text-mp-orange">24/7</p>
            <p className="mt-1 text-white/70">
              Disponibles a cualquier hora, todos los días de la semana.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
