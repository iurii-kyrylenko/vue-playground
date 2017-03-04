<template>
  <div>
    <slot></slot>
    <span class="label" :class="{ 'label-success': value, 'label-danger': !value }">
      {{ formatDate }}
    </span>
    <input :id="id" @input="updateDate($event.target.value)"
           placeholder="Enter date in free format..." class="form-control">
  </div>
</template>

<script>
  export default {
    props: ['value', 'id'],
    computed: {
      formatDate () {
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
        if (!this.value) return 'Invalid Date'
        const year = this.value.getFullYear()
        const month = this.value.getMonth()
        const day = this.value.getDate()
        return `${months[month]} ${day}, ${year}`
      }
    },
    methods: {
      updateDate (value) {
        const test = new Date(value)
        const date = test.toJSON() ? test : null
        this.$emit('input', date)
      }
    }
  }
</script>
