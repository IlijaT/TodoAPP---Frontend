<template>
    <form @submit.prevent = "onSubmit">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" class="form-control" v-model="userName">
            <label for="email">Email</label>
            <input type="text" name="email" class="form-control" v-model="userEmail">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" v-model="userPassword">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>


<script>
import axios from 'axios';

export default {
  
  data () {
    return {
        userName: "",
        userEmail: "",
        userPassword: ""
    }
  },

  methods: {
      onSubmit(){
        axios.post('http://127.0.0.1:8000/api/auth/register', {name: this.userName, email: this.userEmail,password: this.userPassword})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      }
  }
}
</script>