import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    sb: []
  },
  mutations: {
    GET_SB: (state, sb) => {
      state.sb = sb
    }
  },
  actions: {
    getSB: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/sprintbacklog/')
      .then(Response => {
        commit('GET_SB', Response.data)
      })
    }
  }
};
