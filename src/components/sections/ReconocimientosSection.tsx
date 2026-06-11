import { reconocimientos } from '@/data/reconocimientos'
import { Award } from 'lucide-react'

export default function ReconocimientosSection() {
  return (
    <section id="reconocimientos" className="bg-mp-light py-20">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-mp-orange">
            Experiencia validada
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-mp-navy sm:text-4xl">
            Reconocimientos y Certificaciones
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-mp-dark/70">
            Formación técnica que respalda cada trabajo. Los reconocimientos
            hablan por sí solos.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reconocimientos.map((cert) => (
            <article
              key={cert.id}
              className="group relative overflow-hidden rounded-xl border border-mp-steel/20 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="absolute right-0 top-0 h-1 w-full bg-mp-orange" />
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-mp-navy text-mp-orange">
                  <Award className="h-6 w-6" />
                </span>
                <span className="font-barlow-condensed text-4xl font-bold text-mp-steel/30">
                  {String(cert.id).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-mp-navy">
                {cert.titulo}
              </h3>
              <p className="mt-2 text-sm text-mp-dark/70">
                Instructor: {cert.instructor}
              </p>
              {cert.emisor && (
                <p className="mt-1 text-xs text-mp-steel">{cert.emisor}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
