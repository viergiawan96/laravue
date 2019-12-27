import home from './components/home.vue';
import about from './components/about.vue';
import cart from './components/cart.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
            requiresAuth : true
          }
    },
    {
        path : '/cart',
        name : 'cart',
        component : cart
    }
]