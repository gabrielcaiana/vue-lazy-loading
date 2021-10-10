import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'front-end',
    },
  },
  {
    path: '/front-end',
    name: 'front-end',
    component: () => import('@/views/Front-end'),
  },
  {
    path: '/back-end',
    name: 'back-end',
    component: () => import('@/views/Back-end'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
});

export default router;
