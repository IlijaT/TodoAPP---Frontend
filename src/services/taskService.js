import axios from "axios"

export default class Task {
  constructor () {
    axios.defaults.baseURL = "http://localhost:8000/api/";
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
  }

  addTask(todo) {
    return axios.post("tasks", todo);
  }

  getTasks() {
    return axios.get("tasks");
  }
}

export const task = new Task();