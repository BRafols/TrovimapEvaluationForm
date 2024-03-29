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

export function install(Vue, args = {}) {
    console.log('install')
    if (install.installed) return
    install.installed = true

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
}