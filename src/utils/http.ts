import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
    baseURL:'http://sph-api.atguigu.cn',
    timeout:1000 * 1000
})

// 请求拦截器
request.interceptors.request.use((config) => {
    return config
})
// 响应拦截器
request.interceptors.response.use(
    
    (res)=>{
      return res.data
       
    },
    (err)=>{
        let message = ''
        let status = err.response.status

        switch(status){
            case 401:
               message = "TOKEN过期"
               break;
            case 403:
                message = "无权访问"
                break;
            case 404:
                message = "请求地址错误";
                break;
            case 500:
                message = "服务器出现问题"
                break;
            default:
                message = "网络出现问题";
                break;
            }
            //提示错误信息
        ElMessage({
            type: 'error',
            message
        })
        return Promise.reject(err)
    }
)

export default request

