'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}require('vuex');var axios=_interopDefault(require('axios')),Vue=_interopDefault(require('vue'));//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
    props: {
        parcel: {
            type: Object,
            required: true,
        }
    },
    methods: {
        selectParcel: function selectParcel() {
            this.$store.dispatch('trovimap/FETCH_BUILDING_UNITS_BY_PARCEL', this.parcel.Id);
        }
    }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list-tile',{on:{"click":_vm.selectParcel}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"innerHTML":_vm._s(_vm.parcel.Id)}}),_vm._v(" "),_c('v-list-tile-sub-title',{domProps:{"innerHTML":_vm._s(_vm.parcel.City)}}),_vm._v(" "),_c('v-list-tile-sub-title',{domProps:{"innerHTML":_vm._s(_vm.parcel.Province)}}),_vm._v(" "),_c('v-list-tile-sub-title',{domProps:{"innerHTML":_vm._s(_vm.parcel.StreetName)}}),_vm._v(" "),_c('v-list-tile-sub-title',{domProps:{"innerHTML":_vm._s(_vm.parcel.StreetNumber)}}),_vm._v(" "),_c('v-list-tile-sub-title',{domProps:{"innerHTML":_vm._s(_vm.parcel.StreetType)}})],1)],1)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-a88b8992";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ParcelListElement = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );//
var script$1 = {
    components: {
        ParcelListElement: ParcelListElement
    },
    computed: {
        items: function items() {
            return this.$store.state.trovimap.parcels
        }
    }
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list',{attrs:{"three-line":""}},_vm._l((_vm.items),function(item){return _c('parcel-list-element',{key:item.Id,attrs:{"parcel":item}})}),1)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-61943006";
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ParcelList = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );//

var script$2 = {
    data: function data() {
        return {
            address: 'Passatge Escudellers 7, 08002, Barcelona'
        }
    },
    components: {
        ParcelList: ParcelList
    },
    methods: {
        getParcelsByAddress: async function getParcelsByAddress() {

            this.$store.dispatch('trovimap/FETCH_PARCELS_BY_ADDRESS', this.address);

            console.log('this', this);
        }
    }
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"address","label":"Address","id":"address"},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v;},expression:"address"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"block":"","color":"primary"},on:{"click":_vm.getParcelsByAddress}},[_vm._v("Buscar")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('parcel-list')],1)],1)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-ff4b7e24";
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ParcelByAddress = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );//

var script$3 = {
    data: function data() {
        return {
            name: 'borja',
            stepperValue: 1
        }
    },
    components: {
        ParcelByAddress: ParcelByAddress
    },
    methods: {
        complete: function complete() {
            console.log('complete');
        }
    }
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',[_vm._v("\n            hello "+_vm._s(_vm.name)+"\n        ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('parcel-by-address')],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-stepper',{model:{value:(_vm.stepperValue),callback:function ($$v) {_vm.stepperValue=$$v;},expression:"stepperValue"}},[_c('v-stepper-header',[_c('v-stepper-step',{attrs:{"step":"1","complete":_vm.stepperValue > 1}},[_vm._v("Name of step 1")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"2","complete":_vm.stepperValue > 2}},[_vm._v("Name of step 2")])],1),_vm._v(" "),_c('v-stepper-items',[_c('v-stepper-content',{attrs:{"step":"1"}},[_c('parcel-by-address',{on:{"complete":_vm.complete}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},nativeOn:{"click":function($event){_vm.stepperValue = 2;}}},[_vm._v("Continue")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""}},[_vm._v("Cancel")])],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"2"}},[_c('v-card',{staticClass:"mb-5",attrs:{"color":"grey lighten-1","height":"200px"}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},nativeOn:{"click":function($event){_vm.stepperValue = 3;}}},[_vm._v("Continue")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""}},[_vm._v("Cancel")])],1)],1)],1)],1)],1)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-4c164f30";
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var component = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );var FETCH_PARCELS_BY_ADDRESS = async function (context, address) {

    var commit = context.commit;

    console.log('context', context);
    try {
        var result = await axios.get(("http://localhost:8080/trovi/parcel?address=" + address));

        commit('SET_PARCELS', result.data);
        console.log('tex', address);
    } catch (e) {
        throw e
    }
};

var FETCH_BUILDING_UNITS_BY_PARCEL = async function (context, parcelId) {
    var commit = context.commit;

    try {
        var result = await axios.get(("http://localhost:8080/trovi/parcel/" + parcelId));

        commit('SET_BUILDING_UNITS', result.data);
    } catch (e) {
        throw e
    }
};

var actions = {
    FETCH_PARCELS_BY_ADDRESS: FETCH_PARCELS_BY_ADDRESS,
    FETCH_BUILDING_UNITS_BY_PARCEL: FETCH_BUILDING_UNITS_BY_PARCEL
};var SET_PARCELS = function (state, data) {
    Vue.set(state, 'parcels', data);
};

var SET_BUILDING_UNITS = function (state, data) {
    Vue.set(state.buildingUnits, data.Id, data.Apartments);
};

var mutations = {
    SET_PARCELS: SET_PARCELS,
    SET_BUILDING_UNITS: SET_BUILDING_UNITS
};console.log(mutations);

var createModule = function () {
    console.log('createModule');
    return {
        namespaced: true,
        state: {
            parcels: [
                {
                    City: "BARCELONA",
                    CityId: 900,
                    DistrictId: 8,
                    Id: "SXBNaEJyVnc2aTM4cDRtMGVMR3hjcHRpK3N0VGFTOXhUNEZaRkt5azk3dWFJT1NRMVFIbHpxbnNPcktQY21QOG82ZkZobFZjTGFBdzkxejdYTi9WeEprNjg3UFdQd1JlOEVOVHpJbTducGFqSi9mSzRWOVc3V1FlSXc1dHBicUV0WHFPNnNUVmptOXBOWFBkVEMrNU1XVEtFakthbGJyV01ub2xUSzBYZWN3PQ==",
                    Location: {
                        lat: 41.37892301375468, 
                        lon: 2.176777468274225
                    },
                    Province: "BARCELONA",
                    StreetName: "PASAJE ESCUDELLERS 7, 08002, BARCELONA, BARCELONA",
                    StreetNumber: "7",
                    StreetType: "PASAJE",
                }
            ],
            buildingUnits: {}
        },
        actions: Object.assign({}, actions),
        mutations: Object.assign({}, mutations)
    }
};// Import vue component

// install function executed by Vue.use()
function install(Vue, options) {
  if ( options === void 0 ) options = {};

  if (install.installed) { return; }

  if (!options.store) { console.warn('Please provide a store!!'); }
  if (!options.axios) { console.warn('Please provide a axios instance!!'); }
  install.installed = true;
  Vue.prototype.axios = options.axios;
  options.store.registerModule('trovimap', createModule());
  Vue.component('TrovimapWizard', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
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
component.install = install;exports.default=component;