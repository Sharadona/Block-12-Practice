import {createRouter, createWebHistory} from 'vue-router';
import Tasks from "../views/Tasks.vue";
import New from "../views/New.vue";
import Task from "../views/Task.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Tasks},
        {path: '/new', component: New},
        {path: '/task/:id', component: Task},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
})