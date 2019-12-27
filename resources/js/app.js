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
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 

Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(VueSweetalert2);

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