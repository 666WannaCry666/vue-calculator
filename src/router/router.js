import { createRouter, createWebHistory } from 'vue-router';
import CalculatorPage from '@/pages/CalculatorPage.vue';

const routes = [
    {
        path: '/',
        component: CalculatorPage,
        beforeEnter: (to, from, next) => {
            next('/calculator')
        }
    },
    {
        path: '/calculator',
        component: CalculatorPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
