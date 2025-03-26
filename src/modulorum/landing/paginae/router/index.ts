import { createRouter, createWebHashHistory } from 'vue-router';
import DomusPagina from '../DomusPagina.vue';

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DomusPagina,
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modulorum/landing/paginae/PeculiaritatesPagina.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/modulorum/landing/paginae/PretiumPagina.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modulorum/landing/paginae/ContactusPagina.vue'),
    },
  ],
});

export default router;
