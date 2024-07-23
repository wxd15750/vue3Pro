import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
// 导入pinia
import pinia from './store'
import router from './router'
const app = createApp(App)
app.use(pinia).use(router)


app.mount('#app')
