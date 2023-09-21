// Composables
import { createRouter, createWebHistory } from "vue-router";
import UpdateModal from "@/components/updateRoles/UpdateModal.vue";
import RolesTable from "@/components/RoleManagement/RolesTable.vue";
import UserManagement from "@/pages/User management/UserManagement";
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'


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
      {
        path: "/user-management",
        name: "user-management",
        component: UserManagement,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
