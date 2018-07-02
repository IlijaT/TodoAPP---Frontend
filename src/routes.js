import HomeComponent from "./components/home.vue"
import LoginComponent from "./components/login.vue"
import RegisterComponent from "./components/register.vue"
import AddTaskComponent from "./components/addTask.vue"
import GetTasksComponent from "./components/getTasks.vue"


export default [
    {path:"/", component: HomeComponent, name: "home"},
    {path:"/login", component: LoginComponent, name: "login"},
    {path:"/register", component: RegisterComponent, name: "register"},
    {path:"/add-task", component: AddTaskComponent, name: "add-task"},
    {path:"/get-tasks", component: GetTasksComponent, name: "get-tasks"},
]