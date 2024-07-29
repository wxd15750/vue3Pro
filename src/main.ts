import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
// 导入pinia
import pinia from './store'
import 'element-plus/dist/index.css'
import router from './router'
import ElementPlus from 'element-plus'
const app = createApp(App)
app.use(pinia).use(router).use(ElementPlus)


app.mount('#app')
