<template>
  <canvas tabindex="0"
          :width="value.width"
          :height="value.height">
  </canvas>
</template>

<script>
  import canvas from '../services/canvas'
  import interactions from '../services/interactions'

  export default {
    props: ['value'],
    methods: {
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
        this.$nextTick(() => canvas.draw(this.$el, this.$props.value))
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
      canvas.draw(this.$el, this.$props.value)
    }
  }
</script>

<style scoped>
  canvas {
    display: block;
    border: 1px solid #ddd;
  }
</style>
