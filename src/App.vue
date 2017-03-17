<template>
  <div id="app">
    <div class="head">
      <h4>Vue.js Playground</h4>
      <img src="./assets/logo.png">
      <div class="container">
        <nav class="navbar navbar-default">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <router-link tag="li" active-class="active" to="/" exact><a>Home</a></router-link>
            <router-link tag="li" active-class="active" to="/bootstrap"><a>Components</a></router-link>
            <router-link tag="li" active-class="active" to="/form-validation"><a>Form Validation</a></router-link>
          </ul>

          <dropdown-menu></dropdown-menu>

        </div>
        </nav>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import DropdownMenu from '@/components/DropdownMenu'
  export default {
    components: { DropdownMenu }
  }
</script>

<style>
  .head {
    text-align: center;
  }
</style>
