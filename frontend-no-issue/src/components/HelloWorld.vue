<template>
  <div class="hello">
    <h1>{{ state.msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<script setup>
import {onMounted, reactive} from "vue";

const state = reactive({
  msg: ''
})

onMounted(() => {
  fetch("api/hello")
      .then((response) => response.text())
      .then((data) => {
        state.msg = data;
      })
})
</script>

<style scoped>

</style>
