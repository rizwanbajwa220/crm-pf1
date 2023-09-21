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
    meta: { role: "root" },
    component: () => import("@common/Navbar.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/DashBoard.vue"),
      },
      {
        path: "/user",
        component: () => import("pages/Admin/UserPage.vue"),
      },
      {
        path: "/role",
        component: () => import("pages/Admin/RolePage.vue"),
      },
      {
        path: "/permission",
        component: () => import("pages/Admin/PermissionPage.vue"),
      },
      {
        path: "/task-management",
        component: () => import("pages/TaskManagementPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
