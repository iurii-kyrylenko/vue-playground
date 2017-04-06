<template>
  <div class="container">

    <fdraw-r></fdraw-r>
    &nbsp;
    <fdraw-r :value="{  x: -0.7711577, y: 0.115324358, zoom: 3787675 }"></fdraw-r>
    &nbsp;
    <fdraw-r :value="{  x: -1.2524027, y: 0.0216157, zoom: 18892487677 }"></fdraw-r>

    <div class="fpanel">
      <input :value="params.width" @input="pushToImmutable('width', $event)" title="Width">
      <span>&times;</span>
      <input :value="params.height" @input="pushToImmutable('height', $event)" title="Height">
      <a @click="zoom(true)" title="Zoom In">+</a>
      <a @click="zoom(false)" title="Zoom Out">-</a>
      <span class="info"><b>{{ drawing }}</b></span>
      <div class="info">x:&nbsp;&nbsp;&nbsp;&nbsp;{{ params.x }}</div>
      <div class="info">y:&nbsp;&nbsp;&nbsp;&nbsp;{{ params.y}}</div>
      <div class="info">zoom: {{ params.zoom }}</div>
    </div>

    <fdraw-rw v-model="params" @progress="progress"></fdraw-rw>
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
  .fpanel {
    margin-top: 16px;
    margin-bottom: 12px;
    width: 240px;
    height: 72px;
    background-color: #f8f8f8;
    border-color: #eee;
    border-width: 1px;
    border-style: solid;
    box-shadow: 2px 2px 1px #eee
  }
  .fpanel > input {
    margin: 2px;
    width: 34px;
    font-size: 8pt;
    outline: none;
    padding: 2px;
    border-color: #eee;
    border-radius: 8px;
    border-style: solid;
    text-align: center;
  }
  .fpanel > a {
    text-decoration: none;
    background-color: #fff;
    color: #000;
    cursor: default;
    width: 20px;
    height: 20px;
    margin: 2px;
    display: inline-block;
    text-align: center;
    font-size: 8pt;
    border-color: #eee;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
  }
  .fpanel > a:hover {
    background-color: #eee
  }
  .fpanel > .info {
    margin-left: 8px;
    font-family:Courier New;
    font-size: 8pt;
  }
</style>
