<template>
  <div id="app">
    <div class="head">
      <h4>Vue.js Playground</h4>
      <img src="./assets/logo.png">
      <div class="container">
        <nav class="navbar navbar-default">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/bootstrap">Components</router-link></li>
            <li><router-link to="/my-form">Forms</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
.head {
  text-align: center;
}
</style>
