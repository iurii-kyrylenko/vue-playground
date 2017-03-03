<template>
  <div id="app">
    <div class="head">
      <h3>Vue.js Playground</h3>
      <img src="./assets/logo.png">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/bootstrap">Bootstrap</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
.head {
  margin: 20px;
  text-align: center;
}
</style>
