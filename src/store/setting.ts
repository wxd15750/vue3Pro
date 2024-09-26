import {defineStore}  from 'pinia'

let useSettingStore = defineStore('settingstore',{
    state:()=>{
        return {
            fload:false,
            // fullScreen:false
        }
    },
    actions:{},
    getters:{}
})
export default useSettingStore
