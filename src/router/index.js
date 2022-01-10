import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue')
  },
  {
    path: '/forgot-password',
    name: 'Forgot',
    component: () => import('@/views/auth/Forgot.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
