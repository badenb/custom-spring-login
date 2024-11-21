import { createApp } from 'vue'
import router from './router'
import axios from "axios";
import App from './App.vue'

axios.defaults.baseURL = "http://localhost:8080";

const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios
app.mount('#app')
