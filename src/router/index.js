import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/calculator',
    component: Layout,
    children: [
      {
        path: '',
        name: 'calculator',
        component: () => import('../views/calculator/index.vue'),
        meta: {
          title: '计算器'
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