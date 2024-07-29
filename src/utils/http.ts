import axios from 'axios'

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
return err
    }
)

export default request

