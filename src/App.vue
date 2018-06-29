<template>
  <div id="app">
    <div class="container">
          <app-header></app-header>
          <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import Login from "./components/login.vue";
  import Header from "./components/header.vue";
  import Register from "./components/register.vue";

  export default {

    components: {
      "app-login" : Login,
      "app-header" : Header,
      "app-register" : Register,
    }

  
  }
</script>

<style>

</style>
