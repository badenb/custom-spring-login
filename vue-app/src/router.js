import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/pages/LoginPage.vue'
import Yay from "@/components/pages/YayPage.vue";

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/yay',
        component: Yay
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
