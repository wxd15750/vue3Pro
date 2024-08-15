import http from '../utils/http'


export const  reqToken = (params: any) => {
    return http.post<any,any>('/admin/acl/index/login',params)
}

export const reqUserInfo = () => {
    return http.get<any,any>('/admin/acl/index/info')
}
// 退出登录的接口
export const reqLayout = () => {
    return http.post<any,any>('/admin/acl/index/logout')
}
