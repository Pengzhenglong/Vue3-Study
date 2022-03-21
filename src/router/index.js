
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Rate from '../pages/rate.vue'
import animation from '../components/animation.vue'
import transition from '../components/transition.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rate',
    name: 'Rate',
    component: Rate
  },
  {
    path: '/animation',
    name: 'animation',
    component: animation
  },
  {
    path: '/transition',
    name: 'transition',
    component: transition
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
