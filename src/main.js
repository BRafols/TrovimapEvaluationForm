// import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import Vue from "vue";
import App from "./App.vue";
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import { createStore } from './store/index.js'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(Vuetify, {
    iconfont: 'mdi'
});
Vue.use(Vuex)
Vue.prototype.axios = axios
const store = createStore(axios);

console.log('store', store)

new Vue({
	render: h => h(App),
	store
}).$mount("#app");