<template>
  <div class="container">

    <div class="well">WELL</div>

    <div v-if="alert" class="alert alert-success" role="alert">
      <button type="button" class="close" @click="alert = null">
        <span aria-hidden="true">&times;</span>
      </button>
      {{ alert }}
    </div>

    <div>
      <button type="button" class="btn btn-default" @click="alert='TEST ALERT'">Alert</button>
      <button type="button" class="btn btn-default" @click="showModal = true">Modal</button>
    </div>

    <modal v-if="showModal" @close="showModal = false">
      <div slot="header">Header</div>
      <div slot="body">Body</div>
    </modal>

  </div>
</template>

<script>
  import Modal from './Modal'

  export default {
    name: 'bootstrap',
    data () {
      return {
        alert: null,
        showModal: false
      }
    },
    components: { Modal }
  }
</script>
