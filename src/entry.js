// Import vue component
import TrovimapWizard from './components/TrovimapWizard.vue';
import ParcelByAddress from './components/Address/ParcelByAddress.vue';
import BuildingUnitByCadastralReference from './components/Address/BuildingUnitByCadastralReference.vue';
import ParcelList from './components/Address/list/ParcelList.vue';
import ParcelListElement from './components/Address/list/ParcelListElement.vue';
import ApartmentList from './components/Apartment/ApartmentList.vue';
import ApartmentListElement from './components/Apartment/ApartmentListElement.vue';
import BuildingUnit from './components/BuildingUnit/BuildingUnit.vue';
import EvaluationElement from './components/Evaluation/EvaluationElement.vue';
import EvaluationForm from './components/Evaluation/EvaluationForm.vue';
import PriceEvolution from './components/Evaluation/History/PriceEvolution.vue';
import * as filters from './filters/filters'

import { createModule } from './store/index.js'

const Trovimap = {
  install(Vue, args = {}) {
    console.log('install.init')
    if (this.installed) {
      console.log('already installed')
    }

    if (!args.store) console.warn('Please provide a store!!')
  if (!args.axios) console.warn('Please provide a axios instance!!')
  Vue.prototype.axios = args.axios

  console.log('vue-trovimap-wizard.install')
  args.store.registerModule('trovimap', createModule(args.axios))

  Vue.component('TrovimapWizard', TrovimapWizard);
  Vue.component('ParcelByAddress', ParcelByAddress)
  Vue.component('ParcelList', ParcelList)
  Vue.component('ParcelListElement', ParcelListElement)
  Vue.component('ApartmentList', ApartmentList)
  Vue.component('ApartmentListElement', ApartmentListElement)
  Vue.component('BuildingUnit', BuildingUnit)
  Vue.component('BuildingUnitByCadastralReference', BuildingUnitByCadastralReference)
  Vue.component('EvaluationForm', EvaluationForm)
  Vue.component('EvaluationElement', EvaluationElement)
  Vue.component('PriceEvolution', PriceEvolution)

  Object.keys(filters).forEach(key => {
    Vue.filter(`trovimap_${key}`, filters[key])
  })

  console.log('vue-trovimap-wizard.install.end', Object.keys(args.store.state))

  this.installed = true
  }
}

export default Trovimap

// install function executed by Vue.use()
function install2(Vue, args = {}) {
  console.log('installing...', install)
  if (install.installed) {
    console.log('installed, returning')
    return
  };

  if (!args.store) console.warn('Please provide a store!!')
  if (!args.axios) console.warn('Please provide a axios instance!!')
  Vue.prototype.axios = args.axios

  console.log('vue-trovimap-wizard.install')
  args.store.registerModule('trovimap', createModule(args.axios))

  Vue.component('TrovimapWizard', TrovimapWizard);
  Vue.component('ParcelByAddress', ParcelByAddress)
  Vue.component('ParcelList', ParcelList)
  Vue.component('ParcelListElement', ParcelListElement)
  Vue.component('ApartmentList', ApartmentList)
  Vue.component('ApartmentListElement', ApartmentListElement)
  Vue.component('BuildingUnit', BuildingUnit)
  Vue.component('BuildingUnitByCadastralReference', BuildingUnitByCadastralReference)
  Vue.component('EvaluationForm', EvaluationForm)
  Vue.component('EvaluationElement', EvaluationElement)
  Vue.component('PriceEvolution', PriceEvolution)

  Object.keys(filters).forEach(key => {
    Vue.filter(`trovimap_${key}`, filters[key])
  })

  console.log('vue-trovimap-wizard.install.end', Object.keys(args.store.state))

  install.installed = true;
}

// Create module definition for Vue.use()
const plugin = {
  install2,
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
// TrovimapWizard.install = install;

// Export component by default
//export default plugin;

export {
  TrovimapWizard,
  ParcelByAddress
}

