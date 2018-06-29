<template>
    <div>
        <h1>TO-DO Application</h1>
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