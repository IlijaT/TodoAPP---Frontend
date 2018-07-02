import axios from "axios"

export default class Task {
  constructor () {
    axios.defaults.baseURL = "http://localhost:8000/api/"
  }

  addTask(todo) {
    return axios({ method: "POST", url: "tasks", headers: {autorizacion: localStorage.getItem("token")}, data: { todo } });
  }

}

export const task = new Task();