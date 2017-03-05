<template>
  <div class="container">
    <div class="row">

      <div class="col-sm-4">
          <h4>[vuelidate]</h4>
      </div>

      <div class="col-sm-4">
          <form @submit.prevent="validateBeforeSubmit">
            <div class="form-group" :class="{ 'has-error': $v.title.$error }">
              <label class="control-label" for="title">Title</label>
              <input id="title"
                     v-model.trim="title"
                     @input="$v.title.$touch()"
                     class="form-control" type="text" placeholder="Enter title...">
              <p class="text-danger" v-show="$v.title.$error">{{ vmsgTitle }}</p>
            </div>

            <div class="form-group" :class="{ 'has-error': $v.completed.$error }">
              <date-input id="completed"
                     v-model="completed"
                     @input="$v.completed.$touch()">
                <label class="control-label" for="completed">Completed on&nbsp;</label>
              </date-input>
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
          </form>
      </div>

    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'
  import DateInput from './DateInput'

  export default {
    mixins: [validationMixin],
    components: { DateInput },
    data () {
      return {
        title: '',
        completed: null
      }
    },
    validations: {
      title: {
        required,
        minLength: minLength(3)
      },
      completed: {
        required
      }
    },
    computed: {
      vmsgTitle () {
        if (!this.$v.title.required) { return 'Title is required' }
        if (!this.$v.title.minLength) { return 'Title must be longer than 2 letters' }
      }
    },
    methods: {
      validateBeforeSubmit () {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.submitForm()
      },
      submitForm () {
        console.log('Submitted data:', { ...this.$data })
      }
    }
  }
</script>
