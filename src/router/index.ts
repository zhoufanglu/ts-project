import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
const nodePage = () => import('@/views/nodePage/nodePage.vue')
const data1 = () => import('@/views/nodePage/dataTest/data1.vue')
const data2 = () => import('@/views/nodePage/dataTest/data2.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nodePage',
    name: 'nodePage',
    component: nodePage,
    children: [
      {
        path: '/nodePage/data1',
        name: 'data1',
        component: data1,
      },
      {
        path: '/nodePage/data2',
        name: 'data2',
        component: data2,
      },
    ]
},
]

const router = new VueRouter({
  routes
})

export default router
