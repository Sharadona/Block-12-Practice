<template>
  <div class="card">
    <h2>{{task.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p>{{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{task.description}}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from "../components/AppStatus.vue";
import {useStore} from "vuex";
import {computed} from "vue";
import {useRoute} from "vue-router";

export default {
  components: {AppStatus},
  setup() {
    const store = useStore()
    const route = useRoute()

    const id = route.params.id;
    const task = computed(() => store.state.task)
    store.dispatch("getTask", id);

    return {
      task
    }
  }
}
</script>
