export default {
    namespaced: true,
    state: {
        startEnd: []
    },
    mutations: {
        SET_START_END: (state, startEnd) => {
            state.startEnd = startEnd
        }
    },
    actions: {
        setStartEnd: ({ commit }, startEnd) => {
            commit("SET_START_END", startEnd)
        }
    }
}