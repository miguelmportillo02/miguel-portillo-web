import { cn } from '@/lib/utils'

type Direction = 'light-to-navy' | 'navy-to-light' | 'navy-to-dark'

interface SectionTransitionProps {
  /** Dirección del degradado entre la sección anterior y la siguiente. */
  direction: Direction
  /** Intensidad del destello naranja en la costura (0–100). Default 25. */
  glow?: number
  className?: string
}

/**
 * Banda de transición que difumina el color de una sección hacia la otra,
 * atravesando un destello del naranja de marca que se intensifica al centro.
 * Esto evita los cortes secos de color entre secciones.
 */
export default function SectionTransition({
  direction,
  glow = 25,
  className,
}: SectionTransitionProps) {
  const base: Record<Direction, string> = {
    'light-to-navy': 'from-mp-light to-mp-navy',
    'navy-to-light': 'from-mp-navy to-mp-light',
    'navy-to-dark': 'from-mp-navy to-mp-dark',
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative h-24 w-full bg-gradient-to-b',
        base[direction],
        className,
      )}
    >
      {/* Destello naranja que se intensifica al centro de la costura */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 100% at 50% 50%, rgba(232,93,26,${
            glow / 100
          }), transparent 70%)`,
        }}
      />
    </div>
  )
}
