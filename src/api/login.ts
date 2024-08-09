import http from '../utils/http'


export const  reqToken = (params: any) => {
        return http.post<any,any>('/admin/acl/index/login',params)
    }
