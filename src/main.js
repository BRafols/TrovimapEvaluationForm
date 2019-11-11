// import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import Vue from "vue";
import App from "./App.vue";
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import { createStore } from './store/index.js'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import * as filters from './filters/filters'


Object.keys(filters).forEach(key => {
	Vue.filter(`trovimap_${key}`, filters[key])
})

Vue.config.productionTip = false;
Vue.use(Vuetify, {
    iconfont: 'mdi'
});
Vue.use(Vuex)
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyAh5wZK9LX5G4AwjjYzUOiwirtMCbNIeWI',
		libraries: 'places', // This is required if you use the Autocomplete plugin
		// OR: libraries: 'places,drawing'
		// OR: libraries: 'places,drawing,visualization'
		// (as you require)

		//// If you want to set the version, you can do so:
		// v: '3.26',
		region: 'ES',
		language: 'es'
	},
   
	//// If you intend to programmatically custom event listener code
	//// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
	//// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
	//// you might need to turn this on.
	// autobindAllEvents: false,
   
	//// If you want to manually install components, e.g.
	//// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
	//// Vue.component('GmapMarker', GmapMarker)
	//// then disable the following:
	// installComponents: true,
  })
Vue.prototype.axios = axios
const store = createStore(axios);

new Vue({
	render: h => h(App),
	store
}).$mount("#app");