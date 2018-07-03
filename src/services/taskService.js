import axios from "axios"

export default class TaskService {
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

  deleteTask(id) {
    return axios.delete("tasks/" + id);
  }
}

export const taskService = new TaskService();