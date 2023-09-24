import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GameView from '@/views/GameView.vue'
import TransactionView from '@/views/TransactionView.vue'
import TopUpView from '@/views/TopUpView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: TransactionView
    },
    {
      path: '/top-up',
      name: 'top-up',
      component: TopUpView
    }
  ]
})

export default router
