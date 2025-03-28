import { createRouter, createWebHashHistory } from 'vue-router';
import DomusPagina from '../DomusPagina.vue';

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modulorum/landing/layouts/LandingLayout.vue'),
      children: [
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
    },

    {
      path: '/auth',
      component: () => import('@/modulorum/auth/layouts/AuthLayout.vue'),
      redirect: { name: 'login' },
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modulorum/auth/paginae/LoginPagina.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modulorum/auth/paginae/RegisterPagina.vue'),
        },
      ],
    },
  ],
});

export default router;
