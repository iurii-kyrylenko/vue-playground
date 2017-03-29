
const colorPalette = (c, maxIter) => {
  if (c.x < 0 || c.x > 1 || c.y < 0 || c.y > 1) {
    return 0
  }
  return c.x * maxIter
}

const mandelbrot = (c, maxIter) => {
  let z = { x: 0, y: 0 }
  for (let i = 0; i < maxIter; i++) {
    const zz = {
      x: z.x * z.x - z.y * z.y + c.x,
      y: 2 * z.x * z.y + c.y
    }
    if (zz.x * zz.x + zz.y * zz.y > 4) {
      return i
    }
    z = zz
  }
  return maxIter
}

export default {
  colorPalette,
  mandelbrot
}
