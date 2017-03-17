<template>
  <ul class="nav navbar-nav">
    <li :class="{  active: isGroupActive }">
      <a href="#" @click.prevent="toggle">Dropdown Menu <span class="caret"></span></a>
      <ul :class="{ 'dropdown-menu': toggled, 'drop-hide': !toggled }">

        <router-link @click.native="toggle" tag="li" active-class="active" to="/feature1">
          <a>
            <span class="glyphicon glyphicon-book" aria-hidden="true"></span>
            &nbsp;Feature 1
          </a>
        </router-link>

        <router-link @click.native="toggle" tag="li" active-class="active" to="/feature2">
          <a>
            <span class="glyphicon glyphicon-film" aria-hidden="true"></span>
            &nbsp;Feature 2
          </a>
        </router-link>

      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      isGroupActive () {
        return this.$route.path.includes('/feature')
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
