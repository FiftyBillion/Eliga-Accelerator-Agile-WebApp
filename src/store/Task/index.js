import Axios from "axios";


export default {
  namespaced: true,
  state: {
    task: [],
    taskInPB: []
  },
  mutations: {
    GET_TASK: (state, task) => {
        state.task = task
    },
    GET_TASK_IN_PB: (state, task) => {
        state.taskInPB = task
    },
    RESET_TASK_IN_PB: (state) => {
        state.taskInPB = []
    },
    ADD_TASK: (state, task) => {
        state.taskInPB.push(task)
    }
  },
  actions: {
    getTask: ({ commit }) => {
        Axios.get('http://54.188.22.63/api/task/')
        .then(Response => {
            commit('GET_TASK', Response.data)
        })
    },
    getTaskInPB: ({ commit }, pb) => {
        Axios.get(`http://54.188.22.63/api/task/?productbacklogID=${pb.id}`)
        .then(Response => {
            commit('GET_TASK_IN_PB', Response.data)
        })
    },
    resetTaskInPB: ({ commit }) => {
        commit('RESET_TASK_IN_PB')
    },
    addTask: ({ commit }, task) => {
        Axios.post('http://54.188.22.63/api/task/', task)
        .then(Response => {
            commit('ADD_TASK', Response.data)
        })
    }
  }
};
