<template>
  <div class="container">
    <div class="row">

      <div class="col-sm-4">
          <h4>Form validation</h4>
      </div>

      <div class="col-sm-4">
          <form @submit.prevent="validateBeforeSubmit">
            <div class="form-group" :class="{'has-error': fields.dirty('title') && errors.has('title') }">
              <label class="control-label" for="title">Title</label>
              <input id="title"
                     name="title"
                     v-model.trim="title"
                     v-validate="'required|alpha_spaces|min:3'"
                     class="form-control" type="text" placeholder="Enter title...">
              <p class="text-danger" v-show="errors.has('title')">
                {{ errors.first('title') }}
              </p>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    data () {
      return {
        title: ''
      }
    },
    methods: {
      validateBeforeSubmit () {
        this.$validator.validateAll()
          .then(this.submitForm)
          .catch(this.reportErrors)
      },
      submitForm () {
        console.log('title:', this.title)
      },
      reportErrors () {
        console.log(this.errors.all())
      }
    }
  }
</script>
