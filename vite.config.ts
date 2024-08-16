import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
       "@": path.resolve(__dirname,"src")
    },
  },
   //scss全局变量一个配置
   css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
      },
    },
  },
})
