<template>
  <div id="app">
    <div class="container">
      <h1>To DO Application</h1>
      <div class="row">
        <div class="col-xs-12">
          <app-login></app-login>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>

  import Login from "./components/login.vue";

  export default {
    
    data () {
      return {
        
      }
    },

    components: {
      "app-login" : Login,
    }

  
  }
</script>

<style>

</style>
