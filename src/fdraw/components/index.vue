<template>
  <div>
    <div class="drawing"><span v-if="drawing">Drawing...</span></div>
    <canvas ref="canvas"
            tabindex="0"
            :width="value.width"
            :height="value.height">
    </canvas>
  </div>
</template>

<script>
  import canvas from '../services/canvas'
  import interactions from '../services/interactions'

  export default {
    props: ['value'],
    data: () => ({ drawing: false }),
    methods: {
      changeValue (cb) {
        const target = this.$props.value
        const newValue = {
          ...target,
          ...cb(target)
        }
        this.$emit('input', newValue)
      },
      draw () {
        this.drawing = true
        interactions.unbind()
        setTimeout(() => {
          canvas.draw(this.$refs.canvas, this.$props.value)
          setTimeout(() => {
            interactions.bind()
            this.drawing = false
          }, 0)
        }, 0)
      }
    },
    watch: {
      value (value) {
        this.$nextTick(() => this.draw())
      }
    },
    mounted () {
      interactions.setup(this.$refs.canvas, {
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
      this.draw()
    }
  }
</script>

<style scoped>
  canvas {
    display: block;
    border: 1px solid #ddd;
  }
  .drawing {
    height: 40px;
  }
</style>
