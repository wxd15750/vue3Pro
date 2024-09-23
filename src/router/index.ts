import { createRouter,createWebHashHistory } from "vue-router";
import {constStaticRoute} from './router.ts'
const router = createRouter({
    history: createWebHashHistory(),
    routes:constStaticRoute,
  })

export default router
