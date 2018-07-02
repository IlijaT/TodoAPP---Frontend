import axios from 'axios'

export default class Task {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api'
  }

  addTask(todo) {

    return axios.post('/taks/' + todo + '?token=' + localStorage.getItem('token'))
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          alert("Something went wrong!");
        });
  }

}

export const task = new Task();