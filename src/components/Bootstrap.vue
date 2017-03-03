<template>
  <div class="container">

    <notifier></notifier>

    <p>
      <date-input label-id="completed" title="Date:" v-model="date"></date-input>
    </p>

    <div>
      <button type="button" class="btn btn-default" @click="onModal">Modal</button>
      <button type="button" class="btn btn-default" @click="onNotify">Notify</button>
    </div>

    <modal ref="modal" @close="onCloseModal">
      <div slot="header">{{ modalData.name }}</div>
      <div slot="body"><div class="well">{{ modalData.surname }}</div></div>
    </modal>

  </div>
</template>

<script>
  import Modal from './Modal'
  import Notifier from './Notifier'
  import DateInput from './DateInput'
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        modalData: {},
        date: null
      }
    },
    components: { Modal, Notifier, DateInput },
    methods: {
      ...mapMutations('notification', ['notify']),
      onModal () {
        this.modalData = { name: 'Iurii', surname: 'Kyrylenko' }
        this.$refs.modal.open()
      },
      onCloseModal (result) {
        console.log(result)
      },
      onNotify () {
        this.notify({ msg: 'test notification', type: 'danger' })
      }
    }
  }
</script>
