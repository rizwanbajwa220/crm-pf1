// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Login.vue"),
      },
    ],
  },
  {
    path: "/admin-dashboard",
    component: () => import("../components/common/NavBar.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/User management/UserManagement.vue"),
      },
      {
        path: "/task-managment",
        component: () => import("@/pages/TaskManagementPage.vue"),
      },
      {
        path: "/department-managment",
        component: () => import("@/pages/Department.vue"),
      },
      // {
      //   path: "/team",
      //   component: () => import(""),
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
