<template>
  <div class="card" v-if="task">
    <h2>{{task.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p>{{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{task.description}}</p>
    <div>
      <button class="btn" @click="statusBtn('pending')">Взять в работу</button>
      <button class="btn primary" @click="statusBtn('done')">Завершить</button>
      <button class="btn danger" @click="statusBtn('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{id}}</strong> нет.
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

    const statusBtn = (status) => {
      store.dispatch("changeStatus", status);
    }

    return {
      task,
      id,
      statusBtn
    }
  }
}
</script>
