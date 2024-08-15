import {defineStore}  from 'pinia'
import { getToken, removeToken, setToken } from '../utils/storage';
import { reqLayout, reqToken, reqUserInfo } from '../api/login';


let useUserStore = defineStore('userStore',{
    state:()=>{
        return {
            token: getToken() || '',
            userInfo:{
                username:'',
                avator:''
            }
        }
      },
      actions:{
        // 获取token
        async userLogin(params:any){
            let res = await reqToken(params)
            if(res.code == 200){
                this.token = res.data
                setToken(res.data)
            }
        },
        // 获取用户信息
        async userInfos(){
            const res = await reqUserInfo()
            if(res.code == 200){
                this.userInfo.username = res.data.name
                this.userInfo.avator = res.data.avatar
            }
            
        },
        // 退出登录
        async userLayout(){
            await reqLayout()
            this.token = ''
            this.userInfo = Object.assign(this.userInfo,{
                username:'',
                avator:''
            })
            removeToken()
        }
      },
      getters:{

      }
})

export default useUserStore
