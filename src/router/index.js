import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heat-pump',
      name: 'heat-pump',
      component: () => import('../views/sub/Heat-pump.vue')
    },
    {
      path: '/airconditioning',
      name: 'airco',
      component: () => import('../views/sub/Airco.vue')
    },
    {
      path: '/vloerverwarming',
      name: 'floor-heating',
      component: () => import('../views/sub/Floor-heating.vue')
    },
    {
      path: '/zonnepanelen',
      name: 'solar',
      component: () => import('../views/sub/Solar.vue')
    },
    {
      path: '/laadpalen',
      name: 'charge-points',
      component: () => import('../views/sub/Charge-points.vue')
    },
    {
      path: '/isolatie',
      name: 'isolation',
      component: () => import('../views/sub/Isolation.vue')
    },
    {
      path: '/energielabel-en-advies',
      name: 'advice',
      component: () => import('../views/sub/Advice.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/sub/Service.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
