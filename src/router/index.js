import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/home.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;