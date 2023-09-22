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

        path: "", // This will match "/admin-dashboard" by default

        component: () => import("../pages/User management/UserManagement.vue"),

      },

      {

        path: "/task-management", // This will match "/admin-dashboard/task-management"

        component: () => import("@/pages/TaskManagementPage.vue"),

      },

      {

        path: "/department-management", // You can define other nested routes as needed

        component: () => import("@/pages/Department.vue"),

      },

      // ...

    ],

  },

];



const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),

  routes,

});



export default router;