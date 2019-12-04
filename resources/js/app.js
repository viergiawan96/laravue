require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue';
import VModal from 'vue-js-modal';
 
Vue.use(VModal);
Vue.use(VueRouter);

   
const router = new VueRouter({
  routes,
  mode: 'history' 
})
  
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')