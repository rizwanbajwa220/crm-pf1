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
    component: () => import("@/components/common/NavBar.vue"),
    children: [
      // {
      //   path: "",
      //   component: () => import("pages/Admin/DashBoard.vue"),
      // },
      // {
      //   path: "/user",
      //   component: () => import("pages/Admin/UserPage.vue"),
      // },
      // {
      //   path: "/role",
      //   component: () => import("pages/Admin/RolePage.vue"),
      // },
      // {
      //   path: "/permission",
      //   component: () => import("pages/Admin/PermissionPage.vue"),
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
