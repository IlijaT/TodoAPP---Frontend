<template>
  <div id="app">
    <div class="container">
      <h1>Login</h1>
      <div class="row">
        <div class="col-xs-12">
          <app-login></app-login>
        </div>
      </div>
    </div>
  <hr>
    <div id="app">
      <div class="container">
        <h1>Register</h1>
        <div class="row">
          <div class="col-xs-12">
            <app-register></app-register>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Login from "./components/login.vue";
  import Register from "./components/register.vue";

  export default {
    
    data () {
      return {
        
      }
    },

    components: {
      "app-login" : Login,
      "app-register" : Register,
    }

  
  }
</script>

<style>

</style>
