import {defineStore}  from 'pinia'
import { getToken, setToken } from '../utils/storage';
import { reqToken } from '../api/login';


let useUserStore = defineStore('userStore',{
    state:()=>{
        return {
            token: getToken() || '',
            userInfo:{

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
        async userInfo(){

        }
      },
      getters:{

      }
})

export default useUserStore
