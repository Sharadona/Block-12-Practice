import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            task: {},
            tasks: []
        }
    },
    mutations: {
        createTask(state, payload) {
            state.tasks = payload
        },
        getTasks(state, payload) {
            state.tasks = payload
        },
        getTask(state, payload) {
            state.task = payload
        }
    },
    actions: {
        createTask(context, payload) {
            const tasks = [...context.state.tasks, payload]
            localStorage.setItem('tasks', JSON.stringify(tasks))
            context.commit("createTask", tasks)
        },
        getTasks(context) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) ?? []
            context.commit('getTasks', tasks)
        },
        getTask(context, payload) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) ?? []
            const task = tasks.find(task => task.id === payload)
            context.commit('getTask', task)
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