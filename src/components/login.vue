<template>
    <form @submit.prevent = "onSubmit">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" class="form-control" v-model="emal">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>


<script>
import axios from 'axios';

export default {
  
  data () {
    return {
      emal: "",
      password: ""
    }
  },

  methods: {
      onSubmit(){
        axios.post('http://127.0.0.1:8000/api/auth/login', {email: this.emal, password: this.password})
        .then((response) => {
            const token = response.data.access_token;
            localStorage.setItem('token', token);
        })
        .catch(function (error) {
            
        });
      }
  }
}
</script>