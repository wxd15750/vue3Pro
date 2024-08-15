// 路由导航守卫
import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from "./store";
import useUserStore from "./store/userInfo";
let userStore = useUserStore(pinia);
let {userInfo,userInfos,userLayout} = userStore
// 路由前置守卫
router.beforeEach(async (to,from,next)=>{
    NProgress.start();

    // 判断用户是否携带token
    let tokens = userStore.token
    let {username} = userStore.userInfo
    // 如果token存在
    if(tokens){
        if(to.path == '/login'){
            next({path:'/'})
        }else{
            // 判断用户信息是否存在
            if(username){
                next()
            }else{
                // 获取用户信息
                try {
                    await userInfos()
                    next({...to})
                } catch (error) {
                    // token过期
                    await userLayout()
                }
                

            }
        }
        
    }
    // token不存在，重新登录
    else{
        if(to.path == '/login'){
            next()
        }else{
            next({ path: '/login', query: { redirect: to.path } });
        }
    }
})

router.afterEach(()=>{
    NProgress.done();
})


