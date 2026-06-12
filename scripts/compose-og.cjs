/**
 * Genera public/og-image.png (1200x630) para previsualización en redes:
 * fondo navy MP + logo (versión blanca) centrado, escalado 2x.
 */
const fs = require('fs')
const { PNG } = require('pngjs')

const W = 1200
const H = 630
const NAVY = [13, 27, 62] // #0D1B3E

const logo = PNG.sync.read(fs.readFileSync('public/logo-mp-hero.png'))
const scale = 2
const lw = logo.width * scale
const lh = logo.height * scale

const out = new PNG({ width: W, height: H })

// Fondo navy
for (let i = 0; i < out.data.length; i += 4) {
  out.data[i] = NAVY[0]
  out.data[i + 1] = NAVY[1]
  out.data[i + 2] = NAVY[2]
  out.data[i + 3] = 255
}

// Posición centrada
const offX = ((W - lw) / 2) | 0
const offY = ((H - lh) / 2) | 0

// Composición (nearest-neighbor 2x + alpha blend sobre navy)
for (let y = 0; y < lh; y++) {
  const sy = (y / scale) | 0
  for (let x = 0; x < lw; x++) {
    const sx = (x / scale) | 0
    const s = (sy * logo.width + sx) * 4
    const a = logo.data[s + 3] / 255
    if (a === 0) continue
    const dx = offX + x
    const dy = offY + y
    if (dx < 0 || dy < 0 || dx >= W || dy >= H) continue
    const d = (dy * W + dx) * 4
    out.data[d] = Math.round(logo.data[s] * a + NAVY[0] * (1 - a))
    out.data[d + 1] = Math.round(logo.data[s + 1] * a + NAVY[1] * (1 - a))
    out.data[d + 2] = Math.round(logo.data[s + 2] * a + NAVY[2] * (1 - a))
    out.data[d + 3] = 255
  }
}

fs.writeFileSync('public/og-image.png', PNG.sync.write(out))
console.log(`OK -> public/og-image.png (${W}x${H})`)
