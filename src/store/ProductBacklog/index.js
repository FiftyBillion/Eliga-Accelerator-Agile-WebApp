import Axios from "axios";

export default {
  namespaced: true,
  state: {
    PBitems: [
      { content: "I am able to log in with my credentials so that I could manage my work.", priority: "High", hour: "10" },
      { content: "As a user, I can leave messages on a specific job so that people who are involved can communicate (e.g.; comment on a task).", priority: "Mid", hour: "8" },
      { content: "As a user, I can view the status of the project I am in so that I can cooperate with the team.", priority: "Low", hour: "9" },
      { content: "As a user, I can manage members' work and what project they belong to.", priority: "High", hour: "5" }
    ],
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
    }
  },
  actions: {
    addPB: ({ commit }, item) => {
      commit("ADD_ITEM", item);
    },
    removePB: ({ commit }, item) => {
      commit("REMOVE_ITEM", item);
    },
    getPB: ({ commit }) => {
      Axios.get('http://192.168.1.12:8000/api/productbacklog/')
      .then(Response => {
        commit('SET_PB', Response.data);
      })
    }
  }
};
