import iterations from '../fdraw/services/iterations'

self.onmessage = (e) => {
  const color = iterations.mandelbrot({ x: -0.5, y: 1.6 }, 300)
  postMessage({ msg: e.data.msg + ' | ' + color })
}
