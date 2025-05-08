<template>
  <span
      class="badge"
      :class="{
        primary: props.type === 'active' || props.type === 'done',
        danger: props.type === 'cancelled',
        warning: props.type === 'pending',
      }"
  >{{statusName[props.type]}}</span>
</template>
<script setup>
  const statusName = {
    active: 'Активен',
    cancelled: 'Отменён',
    done: 'Завершён',
    pending: 'Выполняется'
  }
  const props = defineProps(['type'])
</script>