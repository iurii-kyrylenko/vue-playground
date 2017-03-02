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
      <button type="button" class="btn btn-default" @click="onTestModal">Modal</button>
    </div>

    <modal ref="modal" @close="onCloseModal">
      <div slot="header">{{ modalData.name }}</div>
      <div slot="body"><div class="well">{{ modalData.surname }}</div></div>
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
        modalData: {}
      }
    },
    components: { Modal },
    methods: {
      onTestModal () {
        this.modalData = { name: 'Iurii', surname: 'Kyrylenko' }
        this.$refs.modal.open()
      },
      onCloseModal (result) {
        console.log(result)
      }
    }
  }
</script>
