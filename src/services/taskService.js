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

  getTasks(todo){
    const token = localStorage.getItem("token");

    axios.post('http://127.0.0.1:8000/api/tasks?token' + token, {title: this.title, description: this.description, priority: this.priority})
    .then((response) => {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

}

export const task = new Task();