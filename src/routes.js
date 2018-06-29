import home from './components/home.vue'
import login from './components/login.vue'
import register from './components/register.vue'

export default [
    {path:'/', component: home},
    {path:'/login', component: login},
    {path:'/register', component: register}
]