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
        },
        changeStatus(state, payload) {
            state.task.status = payload
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
            const tasks = JSON.parse(localStorage.getItem('tasks')) ?? []
            const newTasks = tasks.map(task => {
                if(task.id === context.state.task.id) {
                    task.status = payload
                } return task
            })
            localStorage.setItem('tasks', JSON.stringify(newTasks))
            context.commit('changeStatus', payload)
        }
    },
    getters: {
        activeCountTasks(state) {
            return state.tasks.filter((task) => task.status === 'active').length
        }
    }
});