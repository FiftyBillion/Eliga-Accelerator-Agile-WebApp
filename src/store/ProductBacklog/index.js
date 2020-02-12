export default {
  namespaced: true,
  state: {
    PBitems: [
      { content: "Hello 1", priority: "High", hour: "10" },
      { content: "Hello 2", priority: "Mid", hour: "8" },
      { content: "Hello 3", priority: "Low", hour: "9" },
      { content: "Hello 4", priority: "High", hour: "5" }
    ]
  },
  mutations: {
    ADD_ITEM: (state, item) => {
      state.PBitems.push(item);
    },
    REMOVE_ITEM: (state, item) => {
      state.PBitems.splice(item, 1);
    }
  },
  actions: {
    addPB: ({ commit }, item) => {
      commit("ADD_ITEM", item);
    },
    removePB: ({ commit }, item) => {
      commit("REMOVE_ITEM", item);
    }
  }
};
