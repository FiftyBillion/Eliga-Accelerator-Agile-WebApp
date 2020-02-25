import Axios from "axios";

export default {
  namespaced: true,
  state: {
    pb: []
  },
  mutations: {
    REMOVE_PB: (state, pb) => {
      var index = state.pb.findIndex( p => p.id == pb.id );
      state.pb.splice(index, 1);
    },
    SET_PB: (state, pb) => {
      state.pb = pb;
    },
    ADD_PB: (state, pb) => {
      state.pb.push(pb);
    }
  },
  actions: {
    removePB: ({ commit }, pb) => {
      commit("REMOVE_PB", pb);
      Axios.delete(`http://54.188.22.63/api/productbacklog/${pb.id}/`)
    },
    getPB: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/productbacklog/')
      .then(Response => {
        commit('SET_PB', Response.data);
      })
    },
    addPB: ({ commit }, pb ) => {
      Axios.post('http://54.188.22.63/api/productbacklog/', pb)
      .then(Response => {
        commit("ADD_PB", Response.data)
      })
    }
  }
};
