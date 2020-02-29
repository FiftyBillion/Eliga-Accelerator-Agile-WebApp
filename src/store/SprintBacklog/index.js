import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    sb: [],
    SBinSprint: []
  },
  mutations: {
    GET_SB: (state, sb) => {
      state.sb = sb
    },
    GET_SB_IN_SPRINT: (state, sb) => {
      state.SBinSprint = sb
    }
  },
  actions: {
    getSB: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/sprintbacklog/')
      .then(Response => {
        commit('GET_SB', Response.data)
      })
    },
    getSBInSprint: ({ commit }, sprint) => {
      Axios.get(`http://54.188.22.63/api/sprintbacklog/?sprintID=${sprint.id}`)
      .then(Response => {
        commit('GET_SB_IN_SPRINT', Response.data)
      })
    }
  }
};
