import Axios from "axios";

export default {
  namespaced: true,
  state: {
    pb: [],
    unassignPB: [],
    PBinSprint: []
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
    },
    GET_UNASSIGN_PB: (state, unassignPB) => {
      state.unassignPB = unassignPB
    },
    ASSIGN_SID: (state, assigned) => {
      var index = state.unassignPB.findIndex( p => p.id == assigned.id);
      state.unassignPB.splice(index, 1);
    },
    GET_PB_IN_SPRINT: (state, pb) => {
      state.PBinSprint = pb
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
    },
    getUnassignPB: ({ commit }) => {
      Axios.get('http://54.188.22.63/api/productbacklog/?sprintID=0')
      .then(Response => {
        commit("GET_UNASSIGN_PB", Response.data)
      })
    },
    assignSID: ({ commit }, {pbid, sprintid}) => {
      Axios.patch(`http://54.188.22.63/api/productbacklog/${pbid}/`, {sprintID: sprintid})
      .then(Response => {
        console.log(Response.data, sprintid)
        commit("ASSIGN_SID", Response.data)
      })
    },
    getPBInSprint: ({ commit }, sprint) => {
      Axios.get(`http://54.188.22.63/api/productbacklog/?sprintID=${sprint.id}`)
      .then(Response => {
        commit('GET_PB_IN_SPRINT',Response.data)
      })
    }
  }
};
