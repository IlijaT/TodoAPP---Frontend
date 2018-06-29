import axios from 'axios'

export default class Task {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api'
  }

  addTask(task) {

    return axios.post('/taks?token' + localStorage.getItem('token') , task)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          alert("Something went wrong!");
        });
  }

}

export const auttask = new Task();