// Import vue component
import component from './components/TrovimapWizard.vue';
import { createModule } from './store/index.js'

// install function executed by Vue.use()
function install(Vue, options = {}) {
  if (install.installed) return;

  if (!options.store) console.warn('Please provide a store!!')
  if (!options.axios) console.warn('Please provide a axios instance!!')
  install.installed = true;
  Vue.prototype.axios = options.axios
  options.store.registerModule('trovimap', createModule(axios))
  Vue.component('TrovimapWizard', component);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
component.install = install;

// Export component by default
export default component;

