<template>
    <form @submit.prevent = "onSubmit">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" class="form-control" v-model="email">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>


<script>
import { auth } from "../services/authService";

export default {
  
  data () {
    return {
      email: "",
      password: ""
    }
  },

  methods: {
      onSubmit(){
        auth.login({email: this.email, password: this.password})
          .then((response) => {
            this.email = "";
            this.password = "";
          });
      }
  }
}
</script>