import Home from "./components/home.vue"
import Login from "./components/login.vue"
import Register from "./components/register.vue"
import AddTask from "./components/addTask.vue"
import Tasks from "./components/getTasks.vue"


export default [
    {path:"/", component: Home, name: "home"},
    {path:"/login", component: Login, name: "login"},
    {path:"/register", component: Register, name: "register"},
    {path:"/add-task", component: AddTask, name: "add-task"},
    {path:"/tasks", component: Tasks, name: "tasks"},
]