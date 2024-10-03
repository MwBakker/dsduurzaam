import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // De root-URL
      redirect: '/home', // Redirect naar "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/producten/warmtepomp',
      name: 'heat-pump',
      component: () => import('../views/product/Heat-pump.vue')
    },
    {
      path: '/producten/airconditioning',
      name: 'airco',
      component: () => import('../views/product/Airco.vue')
    },
    {
      path: '/producten/vloerverwarming',
      name: 'floor-heating',
      component: () => import('../views/product/Floor-heating.vue')
    },
    {
      path: '/producten/zonnepanelen',
      name: 'solar',
      component: () => import('../views/product/Solar.vue')
    },
    {
      path: '/producten/laadpalen',
      name: 'charge-points',
      component: () => import('../views/product/Charge-points.vue')
    },
    {
      path: '/over-ons',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/werken-bij',
      name: 'jobs',
      component: () => import('../views/Jobs.vue')
    },
    {
      path: '/subsidie',
      name: 'subsidy',
      component: () => import('../views/Subsidy.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/Service.vue')
    },
    {
      path: '/cookies',
      name: 'manage-cookies',
      component: () => import('../views/ManageCookies.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Altijd scroll naar boven bij navigeren naar een nieuwe pagina
    return { top: 0 };
  }
});

export default router;
