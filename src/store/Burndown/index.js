import Axios from "axios"

export default {
    namespaced: true,
    state: {
        startEnd: [],
        totalTask: '',
        data: {},
        chart: {},
        lineChart: []
    },
    mutations: {
        SET_START_END: (state, startEnd) => {
            state.startEnd = startEnd
        },
        SET_DATA: (state, {dates, taskNumb}) => {
            for(var i = 0; i < dates.length; i++) {
                Object.assign(state.data, {[dates[i]]: taskNumb[i]})
            }
            Object.assign(state.chart, {name: "Actual Tasks", data: state.data})
            state.lineChart=[state.chart]
        },
        SET_TOTAL: (state, totalTask) => {
            state.totalTask = totalTask
        }
    },
    actions: {
        setStartEnd: ({ commit }, startEnd) => {
            commit("SET_START_END", startEnd)
        },
        setData: ({ commit }) => {
            var dates = []
            var taskNumb = []
            var totalTask
            Axios.get('http://54.188.22.63/api/task/')
            .then(Response => {
                commit('SET_TOTAL', Response.data.length)
                totalTask = Response.data.length
                for(var i = 0; i < Response.data.length; i++) {
                    if(Response.data[i].dateCompleted != null) {
                        dates.push(Response.data[i].dateCompleted)
                    }
                }
                dates.sort()
                for(var j = 0; j < dates.length; j++) {
                    Axios.get(`http://54.188.22.63/api/task/?dateCompleted=${dates[j]}`)
                    .then(Response => {
                        taskNumb.push(totalTask - Response.data.length)
                        totalTask -= Response.data.length
                        commit('SET_DATA', {dates, taskNumb})
                    })
                }
            })
        }
    }
}