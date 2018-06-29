import axios from 'axios'

export default class Auth {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api'
  }

  login(user) {
    return axios.post('/auth/login', user)
        .then((response) => {
            const token = response.data.access_token;
            localStorage.setItem('token', token);
        })
        .catch((error) => {
            console.log(error);
    });
    
  }
}

export const auth = new Auth();