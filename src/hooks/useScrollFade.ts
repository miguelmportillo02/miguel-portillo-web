import { useEffect, useState } from 'react'

/**
 * Devuelve un valor de opacidad (1 → 0) en función del scroll vertical.
 * Útil para desvanecer el contenido del hero al bajar.
 * @param fadeDistance distancia en px sobre la que ocurre el fade (default: viewport height)
 */
export function useScrollFade(fadeDistance?: number): number {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const distance = fadeDistance ?? window.innerHeight * 0.7

    const onScroll = () => {
      const y = window.scrollY
      const next = Math.max(0, 1 - y / distance)
      setOpacity(next)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [fadeDistance])

  return opacity
}
