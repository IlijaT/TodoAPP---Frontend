import axios from 'axios'

export default class Auth {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api'
  }

  login(user) {
    return axios.post('/auth/login', user)
        .then((response) => {
          localStorage.setItem('token', response.data.access_token);
          alert("You are successfully logged in");
        })
        .catch((error) => {
          alert("Something went wrong!");
        });
  }

  register(user) {
    return axios.post('/auth/register', user)
        .then((response) => {
          localStorage.setItem('token', response.data.access_token);
          alert("You are successfully registered");
        })
        .catch((error) => {
          alert("Something went wrong!");
        });
  }
}

export const auth = new Auth();