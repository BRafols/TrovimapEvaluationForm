import { install } from './install'


const VueTrovimapWizard = () => {
  console.log('VueTrovimapWizard', install)
  return {
    install,
    installed: false
  }
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(VueTrovimapWizard());
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
// TrovimapWizard.install = install;

// Export component by default
//export default plugin;
export default VueTrovimapWizard

