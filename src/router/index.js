import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductBacklog from '../views/ProductBacklog'
import SprintBacklog from '../views/SprintBacklog'
import SprintPlanning from '../views/SprintPlanning'
import BurndownChart from '../views/BurndownChart'
import Tasks from '../views/Tasks'
import People from '../views/People'
import LogIn from '../views/LogIn'
import index from '../store/index'
import Auth0Callback from '../views/Auth0Callback'
import PBtoSprint from '../components/PBtoSprint'
import SprintReview from '../components/SprintReview'
import TasktoPeople from '../components/TasktoPeople'
import TaskReview from '../components/TaskReview'
//import { Store } from 'vuex'
Vue.use(VueRouter)

const routes = [
  {
    path: '/productbacklog',
    name: 'productbacklog',
    component: ProductBacklog,
    meta: { requiresAuth: true}
  },
  {
    path: '/sprintbacklog',
    name: 'sprintbacklog',
    component: SprintBacklog,
    meta: { requiresAuth: true},
  },
  {
    path: '/sprintplanning',
    name: 'sprintplanning',
    component: SprintPlanning,
    meta: { requiresAuth: true},
    children: [
    {
      path: '',
      redirect: 'pbtos'
    },
    {
      path: 'pbtos',
      name: 'pbtos',
      component: PBtoSprint
    },
    {
      path: 'sprintreview',
      name: 'sprintreview',
      component: SprintReview
    }]
  },
  {
    path: '/burndownchart',
    name: 'burndownchart',
    component: BurndownChart,
    meta: { requiresAuth: true}
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks,
    meta: { requiresAuth: true},
    children: [
      {
        path: '',
        redirect: 'tasktopeople'
      },
      {
        path: 'tasktopeople',
        name: 'tasktopeople',
        component: TasktoPeople
      },
      {
        path: 'taskreview',
        name: 'taskreview',
        component: TaskReview
      }
    ]
  },
  {
    path: '/people',
    name: 'people',
    component: People,
    meta: { requiresAuth: true}   
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/auth0callback',
    name: 'auth0callback',
    component: Auth0Callback,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to,from,next) =>{
  // Allow finishing callback url for logging in
  if (to.matched.some(record=>record.path == "/auth0callback")){
    index.dispatch('auth0HandleAuthentication');
    next(false);
  }

 // check if user is logged in (start assuming the user is not logged in = false)
 let routerAuthCheck = false; 
// Verify all the proper access variables are present for proper authorization
  if( localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at') ){
  // Check whether the current time is past the Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  // set localAuthTokenCheck true if unexpired / false if expired
    routerAuthCheck = new Date().getTime() < expiresAt;  
}
  // Set Global UI understanding of authentication
  index.commit('setUserIsAuthenticated', routerAuthCheck);
  
  if (to.matched.some(record => record.meta.requiresAuth)){
    // Check if user is Authenticated
    if (routerAuthCheck){
    // User is Authenticated
    // TODO: commit to Store that the user is authenticated
      next();
    }
    else{
      // User is not Authenticated
      router.replace('/LogIn');

    }
  }
  // Allow page to load
  else{
    next();
  }
} 
  
);

export default router
