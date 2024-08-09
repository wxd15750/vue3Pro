// 路由导航守卫
import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 路由前置守卫
router.beforeEach((to,from,next)=>{
    console.log(to,456);
    
    NProgress.start();
    next()
})

router.afterEach(()=>{
    NProgress.done();
})
