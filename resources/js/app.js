require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue';
import VModal from 'vue-js-modal';
import StoreData from './store';
import Vuex from 'vuex';
import {initialize} from './helpers/general';
 
Vue.use(VModal);
Vue.use(VueRouter);

const store = new Vuex.Store(StoreData);
   
const router = new VueRouter({
  routes,
  mode: 'history' 
})
  
initialize(store, router);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')