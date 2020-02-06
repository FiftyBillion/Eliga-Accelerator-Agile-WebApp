import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import ProductBacklog from '../views/ProductBacklog'
import SprintBacklog from '../views/SprintBacklog'
import BurndownChart from '../views/BurndownChart'
import Tasks from '../views/Tasks'
import People from '../views/People'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/productbacklog',
    name: 'productbacklog',
    component: ProductBacklog
  },
  {
    path: '/sprintBacklog',
    name: 'sprintBacklog',
    component: SprintBacklog
  },
  {
    path: '/burndownChart',
    name: 'burndownChart',
    component: BurndownChart
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/people',
    name: 'people',
    component: People
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
