import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import setup from '../views/setup.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
    redirect:"/setup",
  },
  {
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page/:id',
    name: 'Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route computed
    // which is lazy-loaded when the route is visited. 1_setup
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue')
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import(/* webpackChunkName: "about" */ '../views/1_setup.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import(/* webpackChunkName: "about" */ '../views/2_computed.vue')
  },
  {
    path: '/hook',
    name: 'hook',
    component: () => import(/* webpackChunkName: "about" */ '../views/3_hook.vue')
  },
  {
    path: '/toRefs',
    name: 'toRefs',
    component: () => import(/* webpackChunkName: "about" */ '../views/4_toRefs.vue')
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import(/* webpackChunkName: "about" */ '../views/5_todoList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
