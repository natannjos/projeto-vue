import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import './assets/css/bootstrap.min.css'
import router from "./router/index";
import VueRouter from 'vue-router';

import { store } from './store/store';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')