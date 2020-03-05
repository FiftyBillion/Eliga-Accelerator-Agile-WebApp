import Axios from "axios";

export default {
  namespaced: true,
  state: {
    sprint: []
  },
  mutations: {
    GET_SPRINT: (state, sprint) => {
      state.sprint = sprint
    },
    ADD_SPRINT: (state, sprint) => {
      state.sprint.push(sprint)
    },
    REMOVE_SPRINT: (state, sprint) => {
      var index = state.sprint.findIndex( p => p.id == sprint.id );
      state.sprint.splice(index, 1);
    }
  },
  actions: {
    getSprint: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/sprintbacklog/')
      .then(Response => {
        commit('GET_SPRINT', Response.data)
      })
    },
    addSprint: ({ commit }, sprint) => {
      Axios.post('http://54.188.22.63/api/sprintbacklog/', sprint)
      .then(Response => {
        commit('ADD_SPRINT', Response.data)
      })
    },
    removeSprint: ({ commit }, sprint) => {
      commit('REMOVE_SPRINT', sprint)
      Axios.delete(`http://54.188.22.63/api/sprintbacklog/${sprint.id}/`)
      Axios.get(`http://54.188.22.63/api/task/?sprintbacklogID=${sprint.id}`)
      .then(Response => {
        for(var i = 0; i < Response.data.length; i++) {
          Axios.patch(`http://54.188.22.63/api/task/${Response.data[i].id}/`, {sprintbacklogID: 0})
        }
      })
    }
  }
};
