require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import {routes} from './routes';
import Vuex from 'vuex';
import App from './App.vue';
import VModal from 'vue-js-modal';
 
Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(Vuex);
   
const router = new VueRouter({
  routes,
  mode: 'history' 
})
  
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})