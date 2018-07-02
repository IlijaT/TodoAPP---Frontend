import HomeComponent from "./components/home.vue"
import LoginComponent from "./components/login.vue"
import RegisterComponent from "./components/register.vue"


export default [
    {path:"/", component: HomeComponent, name: "home"},
    {path:"/login", component: LoginComponent, name: "login"},
    {path:"/register", component: RegisterComponent, name: "register"},
]