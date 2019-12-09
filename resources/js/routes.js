import home from './components/home.vue';
import about from './components/about.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {
          requiresAuth : true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: about
    }
]