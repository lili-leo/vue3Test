import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import setup from '../views/setup.vue'
import Welcome from "../views/Welcome.vue";
const routes: Array<RouteRecordRaw> = [
  { path: '/',name:"Welcome", component: Welcome },
  { path: '/home',name:"APS高级计划系统",  component: ()=>import('../views/Home.vue') },
  { path: '/setting',name:"基础配置",  component: ()=>import('../views/Setting.vue') },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
