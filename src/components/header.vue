<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" >To-Do-App</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Tasks</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Add task</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Register</router-link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  
  data () {
    return {
      userEmail: "",
      userPassword: ""
    }
  },

  methods: {
      onSubmit(){
        axios.post('http://127.0.0.1:8000/api/auth/login', {email: this.userEmail, password: this.userPassword})
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