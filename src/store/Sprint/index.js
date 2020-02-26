import Axios from "axios";

export default {
  namespaced: true,
  state: {
    sprint: []
  },
  mutations: {
    GET_SPRINT: (state, sprint) => {
      state.sprint = sprint
    }
  },
  actions: {
    getSprint: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/sprint/')
      .then(Response => {
        commit('GET_SPRINT', Response.data)
      })
    }
  }
};
