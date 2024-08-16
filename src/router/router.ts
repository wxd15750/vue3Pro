// 路由组件
import Home from "../pages/home/home.vue";
import Login from "../pages/login/login.vue";
// 路由表
export let routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/login',
        component:Login
    }
]
