import { useEffect, useRef } from 'react'

interface CybercoreBackgroundProps {
  /** Número de rayos de energía en pantalla. Default 70. */
  beamCount?: number
  className?: string
}

interface Beam {
  x: number
  y: number
  len: number
  speed: number
  width: number
  highlight: boolean
  alpha: number
}

/**
 * Fondo animado tipo "corriente eléctrica" para el hero.
 * Lee las variables CSS de marca:
 *   --bg-color, --light-color, --highlight-color,
 *   --glow-color-1, --glow-color-2
 */
export default function CybercoreBackground({
  beamCount = 70,
  className,
}: CybercoreBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const styles = getComputedStyle(document.documentElement)
    const bgColor = styles.getPropertyValue('--bg-color').trim() || '#0d1b3e'
    const lightColor =
      styles.getPropertyValue('--light-color').trim() || '#00c8ff'
    const highlightColor =
      styles.getPropertyValue('--highlight-color').trim() || '#e85d1a'

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let beams: Beam[] = []

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawnBeam = (atBottom = false): Beam => {
      const highlight = Math.random() < 0.22 // ~22% naranja de acento
      return {
        x: Math.random() * width,
        y: atBottom ? height + Math.random() * height : Math.random() * height,
        len: 40 + Math.random() * 160,
        speed: 0.6 + Math.random() * 2.6,
        width: highlight ? 1.4 + Math.random() * 1.6 : 0.6 + Math.random() * 1.4,
        highlight,
        alpha: 0.25 + Math.random() * 0.6,
      }
    }

    const init = () => {
      resize()
      beams = Array.from({ length: beamCount }, () => spawnBeam(false))
    }

    const drawBeam = (b: Beam) => {
      const color = b.highlight ? highlightColor : lightColor
      const grad = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.len)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(1, color)

      ctx.beginPath()
      ctx.strokeStyle = grad
      ctx.globalAlpha = b.alpha
      ctx.lineWidth = b.width
      ctx.shadowBlur = b.highlight ? 14 : 10
      ctx.shadowColor = color
      ctx.moveTo(b.x, b.y)
      ctx.lineTo(b.x, b.y + b.len)
      ctx.stroke()
    }

    const renderStatic = () => {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, width, height)
      beams.forEach(drawBeam)
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
    }

    let raf = 0
    const tick = () => {
      // estela suave: en lugar de borrar, pintamos el fondo con algo de opacidad
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      ctx.fillStyle = bgColor
      ctx.globalAlpha = 0.22
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = 1

      for (let i = 0; i < beams.length; i++) {
        const b = beams[i]
        b.y -= b.speed
        drawBeam(b)
        if (b.y + b.len < 0) {
          beams[i] = spawnBeam(true)
        }
      }

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      raf = requestAnimationFrame(tick)
    }

    init()
    if (prefersReduced) {
      renderStatic()
    } else {
      raf = requestAnimationFrame(tick)
    }

    const onResize = () => init()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [beamCount])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    />
  )
}
