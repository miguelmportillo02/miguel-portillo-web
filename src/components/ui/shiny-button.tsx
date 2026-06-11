import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Animación del destello: una variable CSS --x se desplaza de 100% a -100%
 * en bucle, y la usamos para mover un brillo diagonal sobre el botón.
 */
const animationProps = {
  initial: { '--x': '100%' },
  animate: { '--x': '-100%' },
  whileTap: { scale: 0.97 },
  transition: {
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
    type: 'spring',
    stiffness: 20,
    damping: 15,
    mass: 2,
  },
} as HTMLMotionProps<'button'>

const baseClass =
  'relative isolate overflow-hidden rounded-lg font-medium text-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg cursor-pointer'

/** Capa de brillo que barre el botón usando la variable --x. */
function Shine() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 block"
      style={{
        background:
          'linear-gradient(-75deg, rgba(255,255,255,0) calc(var(--x) + 20%), rgba(255,255,255,0.55) calc(var(--x) + 25%), rgba(255,255,255,0) calc(var(--x) + 35%))',
      }}
    />
  )
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  Omit<HTMLMotionProps<'button'>, 'children'> & { children?: React.ReactNode }
>(({ children, className, ...props }, ref) => (
  <motion.button
    ref={ref}
    {...animationProps}
    {...props}
    className={cn(baseClass, 'px-6 py-3 text-sm uppercase tracking-wide', className)}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
    <Shine />
  </motion.button>
))
ShinyButton.displayName = 'ShinyButton'

export const ShinyLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<HTMLMotionProps<'a'>, 'children'> & { children?: React.ReactNode }
>(({ children, className, ...props }, ref) => (
  <motion.a
    ref={ref}
    {...(animationProps as HTMLMotionProps<'a'>)}
    {...props}
    className={cn(baseClass, className)}
  >
    <span className="relative z-10 flex w-full items-center gap-4">
      {children}
    </span>
    <Shine />
  </motion.a>
))
ShinyLink.displayName = 'ShinyLink'

export default ShinyButton
