import { createApp } from 'vue'
// 导入pinia
import ElementPlus from 'element-plus'
import router from './router'
import pinia from './store'
import App from './App.vue'
import './permission'
import './styles/index.scss'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(pinia).use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
