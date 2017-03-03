<template>
  <div>
    <label :for="labelId">
        {{ title }}
        <span class="label label-default">{{ formatDate }}</span>
    </label>
    <input :id="labelId" ref="dateInput" @input="updateDate()"
           placeholder="Free date format" class="form-control">
  </div>
</template>

<script>
  export default {
    props: ['title', 'value', 'labelId'],
    computed: {
      formatDate () {
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
        if (!this.value) return null
        const year = this.value.getFullYear()
        const month = this.value.getMonth()
        const day = this.value.getDate()
        return `${months[month]} ${day}, ${year}`
      }
    },
    methods: {
      updateDate () {
        const v = this.$refs.dateInput.value
        const test = new Date(v)
        const date = test.toJSON() ? test : null
        this.$emit('input', date)
      }
    }
  }
</script>
