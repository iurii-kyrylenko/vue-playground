<template>
  <div class="container">

    <notifier></notifier>

    <div class="row">
      <div class="col-sm-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">Modal component</div>
          </div>
          <div class="panel-body">
            <button type="button" class="btn btn-default" @click="onModal">Modal</button>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">Notifier component</div>
          </div>
          <div class="panel-body">
            <button type="button" class="btn btn-default" @click="onNotify">Notify</button>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">DateInput component</div>
          </div>
          <div class="panel-body">
            <date-input id="completed" v-model="date">
              <label for="completed">Completed on:&nbsp;</label>
            </date-input>
          </div>
        </div>
      </div>
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
        date: new Date()
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
