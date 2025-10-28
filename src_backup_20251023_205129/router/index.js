import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Photography from '../views/Photography.vue'
import Travel from '../views/Travel.vue'
import Cooking from '../views/Cooking.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/photography', name: 'Photography', component: Photography },
  { path: '/travel', name: 'Travel', component: Travel },
  { path: '/cooking', name: 'Cooking', component: Cooking }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
