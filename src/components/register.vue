<template>
    <form @submit.prevent = "onSubmit">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" class="form-control" v-model="name">
            <label for="email">Email</label>
            <input type="email" name="email" class="form-control" v-model="email">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import { auth } from '../services/authService';

export default {
  
  data () {
    return {
        name: "",
        email: "",
        password: ""
    }
  },

  methods: {
      onSubmit(){
        auth.register({name: this.name, email: this.email, password: this.password});
      }
  }
}
</script>