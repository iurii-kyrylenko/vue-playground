<template>
  <ul class="nav navbar-nav">
    <li :class="{  active: isGroupActive }">
      <a href="#" @click.prevent="toggle">
        Dropdown Menu&nbsp;
        <span class="caret"></span>
      </a>
      <ul :class="{ 'dropdown-menu': toggled, 'drop-hide': !toggled }">
        <router-link v-for="item in content"
                     v-bind:key="item.title"
                     @click.native="toggle"
                     tag="li" active-class="active"
                     :to="item.path">
          <a>
            <span class="glyphicon" :class="[item.icon]" aria-hidden="true"></span>
            &nbsp;{{ item.title }}
          </a>
        </router-link>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['content'],
    computed: {
      isGroupActive () {
        return this.$props.content.reduce((a, x) =>
          a || this.$route.path.includes(x.path), false)
      }
    },
    methods: {
      toggle () { this.toggled = !this.toggled }
    },
    data: () => ({ toggled: false })
  }
</script>

<style scoped>
  .dropdown-menu {
    display: block !important;
  }
  .drop-hide {
    display: none;
  }
</style>
