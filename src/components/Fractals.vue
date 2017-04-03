<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <input :value="params.width" @input="pushToImmutable('width', $event)" class="form-control">
      </div>
      <div class="col-sm-2">
        <input :value="params.height" @input="pushToImmutable('height', $event)" class="form-control">
      </div>
      <div class="col-sm-8 small">
        {{ params }}
      </div>
    </div>
    <div class="drawing">{{ drawing }}</div>
    <fdraw v-model="params" @progress="progress"></fdraw>
    <br/>
  </div>
</template>

<script>
  import Fdraw from '@/fdraw/components'

  export default {
    components: { Fdraw },
    data: () => ({
      params: {
        width: 340,
        height: 340,
        x: -0.5,
        y: 0,
        zoom: 150
      },
      drawing: ''
    }),
    methods: {
      pushToImmutable (key, event) {
        const n = +event.target.value
        if (!isNaN(n) && n > 0) {
          this.params = { ...this.params, [key]: n }
        }
      },
      progress (event) {
        this.drawing = event ? 'Drawing...' : ''
      }
    }
  }
</script>

<style scoped>
  .drawing {
    height: 30px;
  }
</style>
