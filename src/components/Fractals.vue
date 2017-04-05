<template>
  <div class="container">
    <fdraw-r></fdraw-r>
    &nbsp;
    <fdraw-r :value="{  x: -0.7711577, y: 0.115324358, zoom: 3787675 }"></fdraw-r>
    &nbsp;
    <fdraw-r :value="{  x: -1.2524027, y: 0.0216157, zoom: 18892487677 }"></fdraw-r>
    <br/>
    <br/>
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
    <button class="btn btn-default" @click="zoom(true)">Zoom in</button>
    <button class="btn btn-default" @click="zoom(false)">Zoom out</button>
    <div class="drawing">{{ drawing }}</div>
    <fdraw-rw v-model="params" @progress="progress"></fdraw-rw>
    <br/>
    <br/>
  </div>
</template>

<script>
  import FdrawR from '@/fdraw/components/FdrawR'
  import FdrawRw from '@/fdraw/components/FdrawRw'

  export default {
    components: { FdrawR, FdrawRw },
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
      zoom (dir) {
        const zoom = dir ? this.params.zoom * 1.5 : this.params.zoom / 1.5
        this.params = { ...this.params, zoom }
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
