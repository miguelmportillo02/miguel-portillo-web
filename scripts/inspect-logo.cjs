const fs = require('fs')
const { PNG } = require('pngjs')

const file = process.argv[2] || 'public/logo-mp1.png'
const png = PNG.sync.read(fs.readFileSync(file))
const { width, height, data } = png
console.log('size', width, 'x', height)

const at = (x, y) => {
  const i = (y * width + x) * 4
  return [data[i], data[i + 1], data[i + 2], data[i + 3]]
}

console.log('corner TL', at(0, 0))
console.log('corner TR', at(width - 1, 0))
console.log('corner BL', at(0, height - 1))
console.log('center', at((width / 2) | 0, (height / 2) | 0))

// Histograma simple de buckets de color
const buckets = {}
for (let y = 0; y < height; y += 4) {
  for (let x = 0; x < width; x += 4) {
    const [r, g, b] = at(x, y)
    const key = `${(r >> 5) << 5},${(g >> 5) << 5},${(b >> 5) << 5}`
    buckets[key] = (buckets[key] || 0) + 1
  }
}
const top = Object.entries(buckets)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
console.log('top colors (r,g,b => count):')
top.forEach(([k, v]) => console.log('  ', k, '=>', v))
