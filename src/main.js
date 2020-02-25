import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import Carousel3d from 'vue-carousel-3d';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faDice, faShoppingCart, faCreditCard, faEuroSign, faCrown, faUsers, faPoundSign } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faDice, faShoppingCart, faCreditCard, faEuroSign, faCrown, faUsers, faPoundSign);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

import ProductZoomer from 'vue-product-zoomer';
Vue.use(ProductZoomer);

Vue.use(BootstrapVue);
Vue.use(Carousel3d);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';

// Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
