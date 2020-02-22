import Axios from "axios";

export default {
  namespaced: true,
  state: {
    pb: []
  },
  mutations: {
    ADD_ITEM: (state, item) => {
      state.PBitems.push(item);
    },
    REMOVE_ITEM: (state, item) => {
      state.PBitems.splice(item, 1);
    },
    SET_PB: (state, pb) => {
      state.pb = pb;
    },
    ADD_PB: (state, pb) => {
      state.pb.push(pb);
    }
  },
  actions: {
    removePB: ({ commit }, item) => {
      commit("REMOVE_ITEM", item);
    },
    getPB: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/productbacklog/')
      .then(Response => {
        commit('SET_PB', Response.data);
      })
    },
    addPB: (pb) => {
      Axios.post('http://54.188.22.63/api/productbacklog/', pb)
    }
  }
};
