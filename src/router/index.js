import { createRouter, createWebHistory } from "vue-router";

const isAuthenticated = () => {
  //checking if token exist in local storage
  return localStorage.getItem("token") !== null;
};

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
      {
        path: "/signup",
        component: () => import("../views/SignUp.vue"),
        name: "signup",
      },
    ],
  },
  {
    path: "/admin-dashboard",
    component: () => import("../components/common/NavBar.vue"),
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        alert("You need to be logged in to access the admin dashboard.");
        next({ path: "/" });
      }
    },
    children: [
      {
        path: "/user-management",
        component: () => import("../pages/User management/UserManagement.vue"),
      },
      {
        path: "/task",
        component: () => import("@/pages/TaskManagementPage.vue"),
      },
      {
        path: "/department",
        component: () => import("@/pages/Department.vue"),
      },
      {
        path: "/chat",
        component: () => import("@/components/ChatBox.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
