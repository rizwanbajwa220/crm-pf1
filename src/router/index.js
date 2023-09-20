// Composables
import { createRouter, createWebHistory } from 'vue-router'
import UpdateModal from '@/components/updateRoles/UpdateModal.vue'
import RolesTable from '@/components/RoleManagement/RolesTable.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/update-roles',
        name: 'update-roles',
        component: UpdateModal,
      },
      {
        path: '/add-roles',
        name: 'add-roles',
        component: RolesTable,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
