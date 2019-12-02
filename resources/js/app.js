require('./bootstrap');
   
window.Vue = require('vue');
import VueRouter from 'vue-router'
  
Vue.use(VueRouter)
   
const routes = [
  { path: '/', component: require('./components/ExampleComponent.vue').default },
  { path: '/user', component: require('./components/User.vue').default }
]
  
const router = new VueRouter({
  routes 
})
  
const app = new Vue({
  router
}).$mount('#app')