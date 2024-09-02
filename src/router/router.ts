// 路由组件
import Layout from "@/layout/index.vue";
import Login from "../pages/login/login.vue";
// 路由表
export let routes = [
    {
        path:'/',
        component:Layout
    },
    {
        path:'/login',
        component:Login
    }
]
