import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    sb: [],
    SBinSprint: [],
    currentSprintName: '',
    currentSprintID: 0,
    active_sprint: ''
  },
  mutations: {
    GET_SB: (state, sb) => {
      state.sb = sb
    },
    GET_SB_IN_SPRINT: (state, sb) => {
      state.SBinSprint = sb
    },
    SET_CURRENTSPRINTNAME: (state, currentSprint) => {
      state.currentSprintName = currentSprint.name
      state.currentSprintID = currentSprint.id
    },
    SET_ACTIVE_SPRINT: (state, active_sprint) => {
      state.active_sprint = active_sprint
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
    },
    setCurrentSprintName: ({ commit }, sprint) => {
      commit('SET_CURRENTSPRINTNAME', sprint)
    },
    setActiveSprint: ({ commit }, activeSprint) => {
      commit('SET_ACTIVE_SPRINT', activeSprint)
    }
  }
};
