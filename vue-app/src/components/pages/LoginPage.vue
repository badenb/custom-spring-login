<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="state.username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="state.password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

const router = useRouter();

const state = reactive({
  username: '',
  password: ''
});

async function login() {
  await axios.post('/api/login', {
    username: state.username,
    password: state.password
  })
      .then(response => {
        console.log('RESPONSE: ', response)
        router.push('/yay')
      })
      .catch(error => {
        console.error('ERROR: ', error)
      });
}
</script>