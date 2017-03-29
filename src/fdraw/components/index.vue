<template>
  <canvas tabindex="0"
          :width="value.width"
          :height="value.height">
  </canvas>
</template>

<script>
  import mapPoint from '../services/mapPoint'
  import iterations from '../services/iterations'
  import getColor from '../services/getColor'
  import interactions from '../services/interactions'

  export default {
    props: ['value'],
    methods: {
      draw (params) {
        const context = this.$el.getContext('2d')

        const width = params.width
        const height = params.height
        const halfWidth = Math.floor(width / 2)
        const halfHeight = Math.floor(height / 2)
        const imgData = context.createImageData(width, height)
        const maxIter = 300

        for (let j = 0; j < height; j++) {
          for (let i = 0; i < width; i++) {
            const ii = 4 * (j * width + i)
            const cPoint = mapPoint.map(i - halfWidth, j - halfHeight, params)
            const nIter = iterations.mandelbrot(cPoint, maxIter)
            const c = getColor.wb(nIter / maxIter)
            imgData.data[ii + 0] = c.r
            imgData.data[ii + 1] = c.g
            imgData.data[ii + 2] = c.b
            imgData.data[ii + 3] = c.a
          }
        }
        context.putImageData(imgData, 0, 0)
      },
      changeValue (cb) {
        const target = this.$props.value
        const newValue = {
          ...target,
          ...cb(target)
        }
        this.$emit('input', newValue)
      }
    },
    watch: {
      value (value) {
        this.$nextTick(() => this.draw(value))
      }
    },
    mounted () {
      interactions.bind(this.$el, {
        move: (dx, dy) => {
          this.changeValue(({ x, y, zoom: z }) => ({ x: x - dx / z, y: y + dy / z }))
        },
        zoomIn: () => {
          this.changeValue(({ zoom }) => ({ zoom: zoom * 1.5 }))
        },
        zoomOut: () => {
          this.changeValue(({ zoom }) => ({ zoom: zoom / 1.5 }))
        }
      })
      this.draw(this.$props.value)
    }
  }
</script>

<style scoped>
  canvas {
    display: block;
    border: 1px solid #ddd;
  }
</style>
