import Axios from "axios";

export default {
  namespaced: true,
  state: {
    team: [
        { name: 'Kevin Wu', role: 'Web Developer', avatar: '/IronMan.png' },
        { name: 'Daniel Cheng', role: 'Web Developer', avatar:'/SpongeBob.png' },
        { name: 'Ki Tae Park', role: 'Web Developer', avatar:'/Conan.png' },
        { name: 'Rasapon Pinyapap', role: 'Web Developer', avatar:'Naruto.png' },
      ],
    member: []
  },
  mutations: {
    ADD_MEMBER: (state, item) => {
      state.member.push(item);
    },
    REMOVE_MEMBER: (state, item) => {
      state.team.splice(item, 1);
    },
    SET_MEMBER: (state, member) => {
      state.member = member;
    }
  },
  actions: {
    addMEMBER: ({ commit }, item) => {
      Axios.post('http://54.188.22.63/api/user/', item)
      commit("ADD_MEMBER", item);
    },
    removeMEMBER: ({ commit }, item) => {
      commit("REMOVE_MEMBER", item);
    },
    getMEMBER: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/user/')
      .then(Response => {
        commit('SET_MEMBER', Response.data);
      })
    }
  }
};
