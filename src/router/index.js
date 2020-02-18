import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import ProductBacklog from '../views/ProductBacklog'
import SprintBacklog from '../views/SprintBacklog'
import BurndownChart from '../views/BurndownChart'
import Tasks from '../views/Tasks'
import People from '../views/People'
import PBtoSB from '../components/PBtoSB'
import SBtoSprint from '../components/SBtoSprint'
import Sprint from '../components/Sprint'

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
    path: '/sprintbacklog',
    name: 'sprintbacklog',
    component: SprintBacklog,
    children: [
    {
      path: '',
      name: 'default',
      redirect: 'pbtosb',
      component: PBtoSB
    },
    {
      path: 'pbtosb',
      name: 'pbtosb',
      component: PBtoSB
    },
    {
      path: 'sbtosprint',
      name: 'sbtosprint',
      component: SBtoSprint
    },
    {
      path: 'sprint',
      name: 'sprint',
      component: Sprint
    }]
  },
  {
    path: '/burndownchart',
    name: 'burndownchart',
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
