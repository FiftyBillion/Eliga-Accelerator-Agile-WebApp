import Axios from "axios"

export default {
    namespaced: true,
    state: {
        projects: [
            { title: 'Design a new website', person: 'Ki Tae Park', due: '2020 03 17', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Code up the homepage', person: 'Kevin Wu', due: '2020 03 17', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Code up the homepage', person: 'Rasapon Pinyapap', due: '2020 03 17', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Create a database', person: 'Daniel Cheng', due: '2020 03 17', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          ]
    },
    mutations: {
        ADD_PROJECT: (state, project) => {
            state.projects.push(project)
        }
    },
    actions: {
        addProject: ({ commit }, project) => {
            commit('ADD_PROJECT', project)
        }
    }
}