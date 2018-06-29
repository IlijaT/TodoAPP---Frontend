<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <app-header></app-header>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Login from "./components/login.vue";
  import Header from "./components/header.vue";

  export default {

    components: {
      "app-login" : Login,
      "app-header" : Header,
    }

  
  }
</script>

<style>

</style>
