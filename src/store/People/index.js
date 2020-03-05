import Axios from "axios";

export default {
  namespaced: true,
  state: {
    member: []
  },
  mutations: {
    ADD_MEMBER: (state, item) => {
      state.member.push(item);
    },
    REMOVE_MEMBER: (state, personID) => {
      var index = state.member.findIndex( p => p.id == personID );
      state.member.splice(index, 1);
    },
    SET_MEMBER: (state, member) => {
      state.member = member;
    }
  },
  actions: {
    addMEMBER: ({ commit }, item) => {
      Axios.post('http://54.188.22.63/api/user/', item)
      .then(Response => {
        commit("ADD_MEMBER", Response.data);
      })
    },
    removeMEMBER: ({ commit }, personID) => {
      Axios.delete(`http://54.188.22.63/api/user/${personID}/`)
      commit('REMOVE_MEMBER', personID)
    },
    getMEMBER: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/user/')
      .then(Response => {
        commit('SET_MEMBER', Response.data);
      })
    }
  }
};
