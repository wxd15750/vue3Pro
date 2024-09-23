import { RouteRecordRaw } from 'vue-router';

// 路由表
export let constStaticRoute:RouteRecordRaw[] = [
   
    {
        path:'/login',
        component:()=>import('@/views/login/login.vue'),
        meta:{
            title:'登录',
            icon:'',
            hidden:true
        }
    },
    {
        path:'/',
        component:() => import('@/layout/index.vue'),
        meta:{
            title:'layout',
            hidden:false
        },
        children:[
            {
                path:'/home',
                component:()=>import('@/views/home/home.vue'),
                meta:{
                    title:'首页',
                    icon:'Promotion',
                    hidden:false
                },
            },
            {
                path:'/test',
                component:()=>import('@/views/home/home.vue'),
                meta:{
                    title:'测试',
                    icon:'',
                    hidden:false
                },
            }
        ]
    },
    {
        path: '/404',
        component:()=>import('@/views/404/NotFound.vue'),
        meta:{
            title:'404',
            icon:'',
            hidden:true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect:'/404',
        meta:{
            title:'任意路由',
            icon:'',
            hidden:true
        }
       
    }
]
