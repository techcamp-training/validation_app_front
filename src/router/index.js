import { createRouter, createWebHistory } from 'vue-router';
import UserForm from '@/components/UserForm.vue';
import Home from '@/components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'UserForm',
    component: UserForm
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;