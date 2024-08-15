const TokenKey = 'TOKEN_KEY'

/**
 * @description 获取Token
 * @returns Token
 */
export const getToken = ()=>{
    return localStorage.getItem(TokenKey)
}
/**
 * @description 存储token
 * @param token token
 * @returns 
 */
export const setToken = (token:string) => {
    return localStorage.setItem(TokenKey,token)
}
/**
 * @description 删除本地存储的一个匹配项
 * @returns null
 */
export const removeToken = () => {
    return localStorage.removeItem(TokenKey)
}
