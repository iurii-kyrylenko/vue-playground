<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <input :value="params.width" @input="pushToImmutable('width', $event)" class="form-control">
      </div>
      <div class="col-sm-2">
        <input :value="params.height" @input="pushToImmutable('height', $event)" class="form-control">
      </div>
        <div class="col-sm-8">
          {{ params }}
        </div>
    </div>
    <br/>
    <fdraw v-model="params"></fdraw>
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
        height: 540,
        x: -0.6,
        y: 0,
        zoom: 100
      }
    }),
    methods: {
      pushToImmutable (key, event) {
        const n = +event.target.value
        if (!isNaN(n) && n > 0) {
          this.params = { ...this.params, [key]: n }
        }
      }
    }
  }
</script>
