<template>
  <canvas tabindex="0"
          :width="state.width"
          :height="state.height">
  </canvas>
</template>

<script>
  import canvas from './canvas'
  import Interactions from './interactions'

  export default {
    props: ['value'],
    data: () => ({
      state: { width: 300, height: 300, x: -0.5, y: 0, zoom: 100 }
    }),
    watch: {
      value (value) {
        this.state = { ...this.state, ...value }
        this.draw()
      }
    },
    methods: {
      changeState (cb) {
        this.state = { ...this.state, ...cb(this.state) }
        this.draw()
        this.$emit('input', this.state)
      },
      draw () {
        this.$emit('progress', true)
        this.interactions.unbind()
        setTimeout(() => {
          canvas.draw(this.$el, this.state)
          setTimeout(() => {
            this.interactions.bind()
            this.$emit('progress', false)
          }, 0)
        }, 0)
      }
    },
    created () {
      this.state = { ...this.state, ...this.value }
    },
    mounted () {
      this.interactions = Interactions.create(this.$el, {
        move: (dx, dy) => {
          this.changeState(({ x, y, zoom: z }) => ({ x: x - dx / z, y: y + dy / z }))
        },
        zoomIn: () => {
          this.changeState(({ zoom }) => ({ zoom: zoom * 1.5 }))
        },
        zoomOut: () => {
          this.changeState(({ zoom }) => ({ zoom: zoom / 1.5 }))
        }
      })
      this.draw()
    }
  }
</script>

<style scoped>
  canvas {
    border: 1px solid #ddd;
    cursor: pointer;
  }
</style>
