import http from '../utils/http'


export const  reqToken = (params: any) => {
        return http.post('/admin/acl/index/login',params)
    }
