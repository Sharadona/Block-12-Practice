import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            task: {},
            tasks: []
        }
    },
    mutations: {
        getTasks(state, payload) {
            state.tasks = payload
        }
    },
    actions: {
        createTask(context, payload) {

            context.commit("createTask", payload)
        },
        getTasks(context) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) ?? []
            context.commit('getTasks', tasks)
        },
        getTask(context,payload) {

        },
        changeStatus(context, payload) {

        }
    },
    getters: {
        activeCountTasks(state) {
            return state.tasks.filter((task) => task.status === 'active').length
        }
    }
});