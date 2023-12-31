import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'raiz',
      component: HomeView
    },   
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    //router to about view 
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      component: AboutView

    }

  ]
})

export default router
