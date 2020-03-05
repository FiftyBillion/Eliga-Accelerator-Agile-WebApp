import Axios from "axios";
import Vue from "vue"

export default {
  namespaced: true,
  state: {
    task: [],
    taskInPB: [],
    unassignTask: []
  },
  mutations: {
    GET_TASK: (state, task) => {
      state.task = task;
    },
    GET_TASK_IN_PB: (state, task) => {
      state.taskInPB = task;
    },
    RESET_TASK_IN_PB: state => {
      state.taskInPB = [];
    },
    ADD_TASK: (state, task) => {
      state.taskInPB.push(task);
    },
    GET_UNASSIGN_TASK: (state, task) => {
      state.unassignTask = task;
    },
    ASSIGN_MEMBERID: (state, assigned) => {
      var index = state.unassignTask.findIndex(p => p.id == assigned.id);
      state.unassignTask.splice(index, 1);
    },
    SET_DATE_COMPLETED: (state, task) => {
      var index = state.task.findIndex(p => p.id == task.id);
      Vue.set(state.task, index, task)
    },
    REMOVE_TASK: (state, taskid) => {
      var index = state.taskInPB.findIndex(p => p.id == taskid);
      state.taskInPB.splice(index, 1);
    },
    REMOVE_TASK_REVIEW: (state, taskid) => {
      var index = state.task.findIndex(p => p.id == taskid);
      state.task.splice(index, 1);
    }
  },
  actions: {
    getTask: ({ commit }) => {
      Axios.get("http://54.188.22.63/api/task/").then(Response => {
        commit("GET_TASK", Response.data);
      });
    },
    getTaskInPB: ({ commit }, pb) => {
      Axios.get(`http://54.188.22.63/api/task/?productbacklogID=${pb.id}`).then(
        Response => {
          commit("GET_TASK_IN_PB", Response.data);
        }
      );
    },
    resetTaskInPB: ({ commit }) => {
      commit("RESET_TASK_IN_PB");
    },
    addTask: ({ commit }, task) => {
      Axios.post("http://54.188.22.63/api/task/", task).then(Response => {
        commit("ADD_TASK", Response.data);
      });
    },
    getUnassignTask: ({ commit }) => {
      Axios.get("http://54.188.22.63/api/task/?assignTo=0").then(Response => {
        commit("GET_UNASSIGN_TASK", Response.data);
      });
    },
    assignMemberID: ({ commit }, { taskid, memberid, membername }) => {
      Axios.patch(`http://54.188.22.63/api/task/${taskid}/`, {
        assignTo: memberid,
        assignToName: membername
      }).then(Response => {
        commit("ASSIGN_MEMBERID", Response.data);
      });
    },
    setDateCompleted: ({ commit }, { taskid, dateCompleted }) => {
      Axios.patch(`http://54.188.22.63/api/task/${taskid}/`, {
        dateCompleted: dateCompleted,
        status: 'Completed'
      }).then(Response => {
        commit("SET_DATE_COMPLETED", Response.data);
      });
    },
    removeTask: ({ commit }, taskid) => {
      Axios.delete(`http://54.188.22.63/api/task/${taskid}/`)
      commit("REMOVE_TASK", taskid)
    },
    removeTaskReview: ({ commit }, taskid) => {
      Axios.delete(`http://54.188.22.63/api/task/${taskid}/`)
      commit("REMOVE_TASK_REVIEW", taskid)
    }
  }
};
