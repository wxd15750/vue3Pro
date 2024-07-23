import { createRouter,createWebHistory } from "vue-router";
// 路由组件
import Home from "../pages/home/home.vue";
import Login from "../pages/login/login.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/login',
            component:Login
        }
    ]
})

export default router
