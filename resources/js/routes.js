import home from './components/home.vue';
import user from './components/user.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: home
      },
      {
          path: '/user',
          name: 'user',
          component: user
        }
]