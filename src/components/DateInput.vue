<template>
  <div>
    <slot></slot>
    <span class="label" :class="{ 'label-my-success': value, 'label-my-error': !value }">
      {{ value | date }}
    </span>
    <input v-once :value="value | date(null)" :id="id" @input="updateDate"
           placeholder="Enter date in free format..." class="form-control">
  </div>
</template>

<script>
  export default {
    filters: {
      date (date, error = 'Invalid date') {
        if (!date) return error

        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]

        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()

        return `${months[month]} ${day}, ${year}`
      }
    },
    props: ['value', 'id'],
    methods: {
      updateDate (event) {
        const test = new Date(event.target.value)
        const date = test.toJSON() ? test : null
        this.$emit('input', date)
      }
    }
  }
</script>

<style scoped>
  .label {
    padding-top: .3em !important;
    border-radius: .4em !important;
  }
  .label-my-success {
    background-color: #008000;
  }
  .label-my-error {
    background-color: #a94442;
  }
</style>
