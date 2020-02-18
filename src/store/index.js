import Vue from 'vue'
import Vuex from 'vuex'
import ProductBacklog from './ProductBacklog'
import SprintBacklog from './SprintBacklog'
import Sprint from './Sprint'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ProductBacklog,
    SprintBacklog,
    Sprint
  }
})
