/**
 * Genera una versión del logo lista para fondos oscuros:
 *  - Quita el fondo blanco (flood fill desde los bordes -> transparente)
 *  - Convierte las partes navy oscuras en blanco (para que resalten)
 *  - Conserva el gris acero y el naranja de marca
 *  - Recorta al contenido para que el logo ocupe todo el lienzo
 *
 * Entrada:  public/logo-mp1.png  (fondo blanco)
 * Salida:   public/logo-mp-hero.png  (transparente, recortado, navy->blanco)
 */
const fs = require('fs')
const { PNG } = require('pngjs')

const input = process.argv[2] || 'public/logo-mp1.png'
const src = PNG.sync.read(fs.readFileSync(input))
const { width, height, data } = src

const idx = (x, y) => (y * width + x) * 4
const isBgWhite = (i) =>
  data[i] >= 230 && data[i + 1] >= 230 && data[i + 2] >= 230

// 1) Flood fill del fondo blanco desde los bordes -> alpha 0
const visited = new Uint8Array(width * height)
const stack = []
const pushIf = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return
  const p = y * width + x
  if (visited[p]) return
  if (!isBgWhite(p * 4)) return
  visited[p] = 1
  stack.push(p)
}
for (let x = 0; x < width; x++) {
  pushIf(x, 0)
  pushIf(x, height - 1)
}
for (let y = 0; y < height; y++) {
  pushIf(0, y)
  pushIf(width - 1, y)
}
while (stack.length) {
  const p = stack.pop()
  data[p * 4 + 3] = 0 // transparente
  const x = p % width
  const y = (p / width) | 0
  pushIf(x + 1, y)
  pushIf(x - 1, y)
  pushIf(x, y + 1)
  pushIf(x, y - 1)
}

// 2) Recolorear: navy oscuro -> blanco. Conservar acero y naranja.
const isDarkNavy = (r, g, b) => r < 95 && g < 95 && b < 135
for (let i = 0; i < data.length; i += 4) {
  if (data[i + 3] === 0) continue
  const r = data[i],
    g = data[i + 1],
    b = data[i + 2]
  if (isDarkNavy(r, g, b)) {
    data[i] = 255
    data[i + 1] = 255
    data[i + 2] = 255
  }
}

// 3) Bounding box del contenido opaco
let minX = width,
  minY = height,
  maxX = 0,
  maxY = 0
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (data[idx(x, y) + 3] > 10) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  }
}
const pad = 10
minX = Math.max(0, minX - pad)
minY = Math.max(0, minY - pad)
maxX = Math.min(width - 1, maxX + pad)
maxY = Math.min(height - 1, maxY + pad)
const cw = maxX - minX + 1
const ch = maxY - minY + 1

const out = new PNG({ width: cw, height: ch })
for (let y = 0; y < ch; y++) {
  for (let x = 0; x < cw; x++) {
    const s = idx(minX + x, minY + y)
    const d = (y * cw + x) * 4
    out.data[d] = data[s]
    out.data[d + 1] = data[s + 1]
    out.data[d + 2] = data[s + 2]
    out.data[d + 3] = data[s + 3]
  }
}
fs.writeFileSync('public/logo-mp-hero.png', PNG.sync.write(out))
console.log(`OK -> public/logo-mp-hero.png (${cw}x${ch})`)
