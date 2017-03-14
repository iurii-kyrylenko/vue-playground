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
            <button type="button" class="btn btn-default" @click="onModal1">Modal 1</button>
          </div>
          <div class="panel-body">
            <button type="button" class="btn btn-default" @click="onModal2">Modal 2</button>
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
            <p>
              <date-input id="completed" v-model="date">
                <label for="completed">Completed on&nbsp;</label>
              </date-input>
            </p>
            <p>
              <date-input id="completed2" v-model="date2">
                <label for="completed2">Completed on&nbsp;</label>
              </date-input>
            </p>
          </div>
        </div>
      </div>
    </div>

    <modal ref="modal1" @close="onCloseModal1">
      <div slot="header">{{ modalData1.name }}</div>
      <div slot="body"><div class="well">{{ modalData1.surname }}</div></div>
    </modal>

    <modal ref="modal2" @close="onCloseModal2">
      <div slot="header">{{ modalData2.author }}</div>
      <div slot="body"><div class="well">{{ modalData2.title }}</div></div>
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
        modalData1: {},
        modalData2: {},
        date: new Date(),
        date2: null
      }
    },
    components: { Modal, Notifier, DateInput },
    methods: {
      ...mapMutations('notification', ['notify']),
      onModal1 () {
        this.modalData1 = { name: 'Iurii', surname: 'Kyrylenko' }
        this.$refs.modal1.open()
      },
      onModal2 () {
        this.modalData2 = { author: 'Stephen King', title: 'Dark Tower' }
        this.$refs.modal2.open()
      },
      onCloseModal1 (result) {
        console.log(result)
      },
      onCloseModal2 (result) {
        console.log(result)
      },
      onNotify () {
        this.notify({ msg: 'test notification', type: 'danger' })
      }
    }
  }
</script>
