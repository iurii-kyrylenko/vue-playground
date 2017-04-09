<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <form @submit.prevent="worker.postMessage({ msg: message })">
          <div class="form-group">
            <label class="control-label" for="message">Message</label>
            <input id="message" v-model.trim="message" class="form-control">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default">Send</button>
          </div>
          <div class="form-group">
            <label class="control-label">Response</label>
            <div class="well">{{ response }}</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import MyWorker from 'worker-loader!./worker.js'

  export default {
    data: () => ({
      message: 'test',
      response: ''
    }),
    created () {
      this.worker = new MyWorker()
      this.worker.onmessage = (e) => {
        this.response = e.data.msg
      }
    },
    beforeDestroy () {
      this.worker.terminate()
    }
  }
</script>
