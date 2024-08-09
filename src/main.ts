import { createApp } from 'vue'
import './styles/index.scss'
// 导入pinia
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router'
import pinia from './store'
import App from './App.vue'
import './permission'
const app = createApp(App)
app.use(pinia).use(router).use(ElementPlus)


app.mount('#app')
