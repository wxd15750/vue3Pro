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
        redirect: '/home',
        children:[
            {
                path:'/home',
                component:()=>import('@/views/home/home.vue'),
                meta:{
                    title:'首页',
                    icon:'Promotion',
                    hidden:false
                },
            }
        ]
    },
 
    {
        path:'/screen',
        component:() => import('@/views/screen/index.vue'),
        meta:{
            title:'数据大屏',
            hidden:false
        },
    },
    {
        path:'/acls',
        component:() => import('@/layout/index.vue'),
        meta:{
            title:'权限管理',
            hidden:false
        },
        children:[
            {
                path:'/acls/role',
                component:()=>import('@/views/permission/role/index.vue'),
                meta:{
                    title:'角色管理',
                    icon:'Promotion',
                    hidden:false
                },
            },
            {
                path:'/acls/acl',
                component:()=>import('@/views/permission/acl/index.vue'),
                meta:{
                    title:'菜单管理',
                    icon:'Promotion',
                    hidden:false
                },
            },
            {
                path:'/acls/user',
                component:()=>import('@/views/permission/user/index.vue'),
                meta:{
                    title:'用户管理',
                    icon:'Promotion',
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
