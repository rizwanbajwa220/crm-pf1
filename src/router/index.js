// Composables
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
    ],
  },
  {
    path: '/signup',
    component: ()=>import("../views/SignUp.vue"),
    name: 'signup'
  },
  {
    path: "/admin-dashboard",
    component: () => import("../components/common/NavBar.vue"),
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      if (isAuthenticated()) {
        // User is authenticated, allow access to the admin-dashboard
        next();
      } else {
        // User is not authenticated, redirect to the login page
        alert("You need to be logged in to access the admin dashboard.");
        next({ path: "/" });
      }
    },
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
