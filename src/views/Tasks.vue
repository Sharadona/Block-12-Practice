<template>
    <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{activeCountTasks}}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{new Date(task.date).toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <router-link :to="`task/${task.id}`">
        <button class="btn primary">Посмотреть</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus.vue";
import {useStore} from "vuex";
import {computed} from 'vue';

export default {
  components: {AppStatus},
  setup() {
    const store = useStore()
    const tasks = computed(() => store.state.tasks)
    store.dispatch("getTasks");
    const activeCountTasks = computed(() => store.getters.activeCountTasks);
    return {
      tasks,
      activeCountTasks
    }
  }
}
</script>