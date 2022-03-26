import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '../views/AccountView.vue'
import PaymentView from '../views/PaymentView.vue'

const routes = [
  {
    path: '/',
    name: 'Account',
    component: AccountView
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
