require('./bootstrap');
   
window.Vue = require('vue');
import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent.vue'
import user from './components/user.vue' 

Vue.use(VueRouter)
   

const routes = [
    {
      path: '/',
      name: 'ExampleComponent',
      component: ExampleComponent
    },
    {
        path: '/user',
        name: 'user',
        component: user
      }
]

const router = new VueRouter({
  routes 
})
  
const app = new Vue({
  router
}).$mount('#app')