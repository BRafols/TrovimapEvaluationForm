'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var os=require('os');require('vuex');var axios=_interopDefault(require('axios')),Vue=_interopDefault(require('vue'));//
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list-tile',{on:{"click":function($event){return _vm.$emit('click')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"innerHTML":_vm._s(_vm.parcel.Id)}}),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n            "+_vm._s(_vm.parcel.StreetName)+", "+_vm._s(_vm.parcel.StreetNumber)+", "+_vm._s(_vm.parcel.Province)+"\n        ")])],1)],1)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-5453224f";
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
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list',{attrs:{"three-line":""}},_vm._l((_vm.items),function(item){return _c('parcel-list-element',{key:item.Id,attrs:{"parcel":item},on:{"click":function($event){return _vm.$emit('selected', item)}}})}),1)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-06e0146e";
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
            address: 'Calle Gas, 31, 08800',
            loading: false,
            response: {}
        }
    },
    components: {
        ParcelList: ParcelList
    },
    methods: {
        getParcelsByAddress: async function getParcelsByAddress() {

            this.loading = true;

            try {
                await this.$store.dispatch('trovimap/FETCH_PARCELS_BY_ADDRESS', this.address);
            } catch (e) {
                this.response = Object.assign({}, e.data);
            } finally {
                this.loading = false;
            }
        },
        parcelSelected: function parcelSelected(parcel) {
            console.log('parcelByAddress');
            this.$emit('addressSelected', parcel);
        }
    }
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"address","label":"Address","id":"address","placeholder":"Calle Valencia 359, 08002, Barcelona"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.getParcelsByAddress($event)}},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v;},expression:"address"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"block":"","color":"primary","disabled":_vm.loading},on:{"click":_vm.getParcelsByAddress}},[_vm._v("\n            Buscar\n        ")])],1),_vm._v(" "),(_vm.loading)?_c('v-flex',{attrs:{"xs12":"","text-sm-center":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1):_c('v-flex',{attrs:{"xs12":""}},[_c('parcel-list',{on:{"selected":_vm.parcelSelected}})],1)],1)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-112cb2f4";
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
//

var script$3 = {
     props: {
        apartment: {
            type: Object,
            required: true
        }
    },
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list-tile',{attrs:{"actions":""},on:{"click":function($event){return _vm.$emit('click')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"innerHTML":_vm._s(_vm.apartment.FormattedAddress)}}),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n            Piso: "+_vm._s(_vm.apartment.Floor)+" | Puerta "+_vm._s(_vm.apartment.Door)+" | Fecha construcción: "+_vm._s(_vm.apartment.YearBuilt)+" | m2: "+_vm._s(_vm.apartment.LivingArea)+"\n        ")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n            Referencia catastral: "),_c('b',[_vm._v(_vm._s(_vm.apartment.CadastralReference))])])],1)],1)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-588f5086";
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ApartmentListElement = normalizeComponent(
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
  );//
var script$4 = {
    components: {
        ApartmentListElement: ApartmentListElement
    },
    props: {
        items: {
            type: Array,
            default: function () { return []; }
        }
    }
};/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list',{attrs:{"three-line":""}},_vm._l((_vm.items),function(item){return _c('apartment-list-element',{key:item.Id,attrs:{"apartment":item},on:{"click":function($event){return _vm.$emit('selected', item)}}})}),1)};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = "data-v-4cfc224e";
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ApartmentList = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );//

var script$5 = {
    props: {
        Id: {
            required: true,
            type: String
        }
    },
    components: {
        ApartmentList: ApartmentList
    },
    mounted: function mounted() {
        this.$store.dispatch('trovimap/FETCH_BUILDING_UNITS_BY_PARCEL', this.Id);
    },
    computed: {
        apartments: function apartments() {
            return this.$store.getters['trovimap/apartmentsById'](this.Id)
        }
    },
    methods: {
        apartmentSelected: function apartmentSelected(apartment) {
            this.$emit('apartmentSelected', apartment);
        }
    }
};/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n        "+_vm._s(_vm.Id)+"\n    ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('apartment-list',{attrs:{"items":_vm.apartments},on:{"selected":_vm.apartmentSelected}})],1)],1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = "data-v-9a17dc5e";
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var BuildingUnit = normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );//
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
//
//
//

var script$6 = {
  props: {
      items: {
          type: Array,
          required: true
      }
  },
  data: function () { return ({
    value: [
      423,
      446,
      675,
      510,
      590,
      610,
      760
    ]
  }); }
};/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-sheet',{attrs:{"color":"rgba(0, 0, 0, .12)"}},[_c('v-sparkline',{attrs:{"value":_vm.items,"color":"rgba(255, 255, 255, .7)","height":"100","padding":"24","smooth":""},scopedSlots:_vm._u([{key:"label",fn:function(item){return [_vm._v("\n          "+_vm._s(item.value)+"\n        ")]}}])})],1)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = "data-v-699cbdfd";
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var PriceEvolution = normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );//

var script$7 = {
    props: {
        apartmentId: {
            type: String,
            required: true
        },
        apartment: {
            type: Object,
            required: true
        },
        parcel: {
            type: Object,
            required: true
        }
    },
    data: function data() {
        return {
            payload: {
                ApartmentId: this.apartmentId,
                Bathrooms: 0,
                Bedrooms: 0,
            },
        }
    },
    mounted: function mounted() {
        this.fetchCharacteristics();
    },
    components: {
        PriceEvolution: PriceEvolution
    },
    computed: {
        evaluation: function evaluation() {
            return this.$store.state.trovimap.evaluations[this.apartmentId]
        },
        priceItems: function priceItems() {
            return this.evaluation.historicalStats.aggregations.map(function (agregation) { return Math.round( agregation.pricem2.avg * 100 + Number.EPSILON ) / 100; }).slice(0, 8)
        }
    },
    methods: {
        fetchEvaluation: function fetchEvaluation() {
            this.$store.dispatch('trovimap/FETCH_EVALUATION_BY_APARTMENT_ID', {
                payload: this.payload,
                apartmentId: this.apartmentId
            });
        },
        fetchCharacteristics: async function fetchCharacteristics() {

            this.loadingCharacteristics = true;

            try {
                var characteristics = await this.$store.dispatch('trovimap/FETCH_CHARACTERISTICS_BY_APARTMENT_ID', this.apartmentId);
                this.payload = Object.assign({}, this.payload,
                    {ParcelId: characteristics.ParcelId,
                        CadastralReference: characteristics.CadastralReference,
                        Location: {
                            lat: characteristics.Location.lat,
                            lon: characteristics.Location.lon
                        },
                        LivingArea: characteristics.LivingArea});
            } catch (e) {
                throw e
            } finally {
                this.loadingCharacteristics = false;
            }
        },
        download: async function download() {
            try {
                var response = await this.$store.dispatch('trovimap/DOWNLOAD_EVALUATION_BY_ID', this.evaluation.id);

                console.log('response', response);

                this.forceFileDownload(response);
            } catch (e) {
                throw e
            }
        },
        forceFileDownload: function forceFileDownload(response){
            
            var blob = new Blob([response.data], {
                type: response.headers.context-os.type
            });
            console.log('blob', blob);
            console.log('blob', response.data);
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "download.pdf";
            link.click();
        },
    },
    watch: {
        apartmentId: function apartmentId() {
            this.fetchCharacteristics();
        }
    }
};/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-form',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"surface","label":"Superfície","id":"surface"},model:{value:(_vm.payload.LivingArea),callback:function ($$v) {_vm.$set(_vm.payload, "LivingArea", $$v);},expression:"payload.LivingArea"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"bathrooms","label":"Número de baños","id":"bathrooms"},model:{value:(_vm.payload.Bathrooms),callback:function ($$v) {_vm.$set(_vm.payload, "Bathrooms", $$v);},expression:"payload.Bathrooms"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"bedrooms","label":"Número de habitaciones","id":"bedrooms"},model:{value:(_vm.payload.Bedrooms),callback:function ($$v) {_vm.$set(_vm.payload, "Bedrooms", $$v);},expression:"payload.Bedrooms"}})],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary","block":""},on:{"click":_vm.fetchEvaluation}},[_vm._v("Obtener valoración")])],1)],1)],1),_vm._v(" "),(_vm.evaluation)?_c('v-flex',{attrs:{"xs12":""}},[_c('price-evolution',{attrs:{"items":_vm.priceItems}})],1):_vm._e()],1)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  var __vue_inject_styles__$7 = undefined;
  /* scoped */
  var __vue_scope_id__$7 = undefined;
  /* module identifier */
  var __vue_module_identifier__$7 = "data-v-7c58b7a2";
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var EvaluationElement = normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );//

var script$8 = {
    data: function data() {
        return {
            name: 'borja',
            stepperValue: 1,
            address: {},
            apartment: {}
        }
    },
    components: {
        ParcelByAddress: ParcelByAddress,
        BuildingUnit: BuildingUnit,
        EvaluationElement: EvaluationElement
    },
    methods: {
        onAddressSelected: function onAddressSelected(address) {
            this.address = address;
        },
        onApartmentSelected: function onApartmentSelected(apartment) {
            this.apartment = apartment;
        }
    }
};/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-stepper',{model:{value:(_vm.stepperValue),callback:function ($$v) {_vm.stepperValue=$$v;},expression:"stepperValue"}},[_c('v-stepper-header',[_c('v-stepper-step',{attrs:{"step":"1","complete":_vm.stepperValue > 1}},[_vm._v("Name of step 1")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"2","complete":_vm.stepperValue > 2}},[_vm._v("Name of step 2")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"3","complete":_vm.stepperValue > 3}},[_vm._v("Name of step 3")])],1),_vm._v(" "),_c('v-stepper-items',[_c('v-stepper-content',{attrs:{"step":"1"}},[_c('parcel-by-address',{on:{"addressSelected":this.onAddressSelected}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary","disabled":!_vm.address.Id},nativeOn:{"click":function($event){_vm.stepperValue = 2;}}},[_vm._v("\n                        Continue\n                    ")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""}},[_vm._v("Cancel")])],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"2"}},[(_vm.address.Id)?_c('building-unit',{attrs:{"Id":_vm.address.Id},on:{"apartmentSelected":this.onApartmentSelected}}):_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary","disabled":!_vm.apartment.Id},nativeOn:{"click":function($event){_vm.stepperValue = 3;}}},[_vm._v("\n                        Continue\n                    ")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""},nativeOn:{"click":function($event){_vm.stepperValue = 1;}}},[_vm._v("Cancel")])],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"3"}},[(_vm.apartment.Id)?_c('evaluation-element',{attrs:{"parcel":_vm.address,"apartment":_vm.apartment,"apartmentId":_vm.apartment.Id}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n        Address: "+_vm._s(_vm.address)+"\n    ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n        apartment: "+_vm._s(_vm.apartment)+"\n    ")])],1)};
var __vue_staticRenderFns__$8 = [];

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = undefined;
  /* module identifier */
  var __vue_module_identifier__$8 = "data-v-d9c89d28";
  /* functional template */
  var __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var TrovimapWizard = normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
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

/**
 * 
 * @param {*} context 
 * @param {*} parcelId 
 * TODO:: Fetch conditionally
 */
var FETCH_BUILDING_UNITS_BY_PARCEL = async function (context, parcelId) {
    var commit = context.commit;

    try {
        var result = await axios.get(("http://localhost:8080/trovi/parcel/" + parcelId));

        commit('SET_BUILDING_UNITS', result.data);
    } catch (e) {
        throw e
    }
};

var FETCH_CHARACTERISTICS_BY_APARTMENT_ID = async function (context, apartmentId) {

    try {
        var result = await axios.get(("http://localhost:8080/trovi/apartment/" + apartmentId + "/characteristics"));

        var data = {
            ApartmentId: result.data.ApartmentId,
            ParcelId: result.data.ParcelId,
            CadastralReference: result.data.CadastralReference,
            Location: {
              lat: result.data.Location.lat,
              lon: result.data.Location.lon
            },
            LivingArea: result.data.LivingArea
        };

        return data
    } catch (e) {
        throw e
    }

};

var FETCH_EVALUATION_BY_APARTMENT_ID = async function (context, data) {
    var commit = context.commit;
    var payload = data.payload;
    var apartmentId = data.apartmentId;


    try {

        var result = await axios.post(("http://localhost:8080/trovi/apartment/" + apartmentId), payload);

        console.log('resukt', result);
        commit ('SET_APARTMENT', Object.assign({}, result.data,
            {apartmentId: apartmentId}));
    } catch (e) {
        throw e
    }
};

var DOWNLOAD_EVALUATION_BY_ID = async function (context, evaluationId) {
    try {
        return await axios.get(("http://localhost:8080/trovi/evaluation/" + evaluationId), {
            responseType: 'arraybuffer'
        })
    } catch (e) {
        throw e
    }
};

var actions = {
    FETCH_PARCELS_BY_ADDRESS: FETCH_PARCELS_BY_ADDRESS,
    FETCH_BUILDING_UNITS_BY_PARCEL: FETCH_BUILDING_UNITS_BY_PARCEL,
    FETCH_EVALUATION_BY_APARTMENT_ID: FETCH_EVALUATION_BY_APARTMENT_ID,
    DOWNLOAD_EVALUATION_BY_ID: DOWNLOAD_EVALUATION_BY_ID,
    FETCH_CHARACTERISTICS_BY_APARTMENT_ID: FETCH_CHARACTERISTICS_BY_APARTMENT_ID
};var SET_PARCELS = function (state, data) {
    Vue.set(state, 'parcels', data);
};

var SET_BUILDING_UNITS = function (state, data) {
    Vue.set(state.buildingUnits, data.Id, data.Apartments);
};

var SET_APARTMENT = function (state, data) {
    var apartmentId = data.apartmentId;
    Vue.set(state.evaluations, apartmentId, data);
};

var mutations = {
    SET_PARCELS: SET_PARCELS,
    SET_BUILDING_UNITS: SET_BUILDING_UNITS,
    SET_APARTMENT: SET_APARTMENT
};console.log(mutations);

var createModule = function () {
    console.log('createModule');
    return {
        namespaced: true,
        state: {
            parcels: [],
            buildingUnits: {},
            evaluations: {}
        },
        actions: Object.assign({}, actions),
        mutations: Object.assign({}, mutations),
        getters: {
            apartmentsById: function (state) { return function (buildingUnitId) {
                var data = state.buildingUnits[buildingUnitId];

                if (data) {
                    return data.sort(function (a, b) {
                        if (a.Floor === b.Floor) {
                            return a.Door < b.Door ? -1 : 1
                        }
                        return a.Floor < b.Floor ? -1 : 1
                    })
                }

                return data
            }; }
        }
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

  console.log('Vue.component', Vue.component);
  Vue.component('TrovimapWizard', TrovimapWizard);
  Vue.component('ParcelByAddress', ParcelByAddress);
  Vue.component('ParcelList', ParcelList);
  Vue.component('ParcelListElement', ParcelListElement);
  Vue.component('ApartmentList', ApartmentList);
  Vue.component('ApartmentListElement', ApartmentListElement);
  Vue.component('BuildingUnit', BuildingUnit);
  Vue.component('EvaluationElement', EvaluationElement);
  Vue.component('PriceEvolution', PriceEvolution);
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
TrovimapWizard.install = install;exports.ParcelByAddress=ParcelByAddress;exports.TrovimapWizard=TrovimapWizard;exports.default=TrovimapWizard;