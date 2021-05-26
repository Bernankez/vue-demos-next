import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/home.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/calculator",
    component: Layout,
    children: [
      {
        path: "",
        name: "calculator",
        component: () => import("../views/calculator/index.vue"),
        meta: {
          title: "计算器",
        },
      },
    ],
  },
  {
    path: "/dateCalculator",
    component: Layout,
    children: [
      {
        path: "",
        name: "dateCalculator",
        component: () => import("../views/dateCalculator/index.vue"),
        meta: {
          title: "日期计算器",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(`path: ${to.path}\nname: ${to.name}`);
  next();
});

export default router;
