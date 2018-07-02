import axios from 'axios'

export default class Auth {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api'
  }

  login(user) {
    return axios.post('/auth/login', user)
        .then((response) => {
          localStorage.setItem('token', response.data.access_token);
        });
  }

  register(user) {
    return axios.post('/auth/register', user)
        .then((response) => {
          localStorage.setItem('token', response.data.access_token);
        });
  }
}

export const auth = new Auth();