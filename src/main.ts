import { createApp } from 'vue'
// 导入pinia
import ElementPlus from 'element-plus'
import router from './router'
import pinia from './store'
import App from './App.vue'
import './permission'
import './styles/index.scss'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
app.use(pinia).use(router)


app.mount('#app')
