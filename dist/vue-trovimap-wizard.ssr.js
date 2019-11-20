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
//
//
//
//
//


var script = {
    data: function data() {
        return {
            address: 'Passatge Escudellers, 7',
            loading: false,
            response: {}
        }
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
            this.$emit('addressSelected', parcel);
        }
    },
    computed: {
        errors: function errors() {
            if (!this.response.message) { return [] }

            return [ this.response.message ]
        },
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"address","label":"Dirección","id":"address","placeholder":"Calle Valencia 359, 08002, Barcelona","error-messages":_vm.errors},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.getParcelsByAddress($event)}},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('v-btn',{attrs:{"disabled":_vm.loading,"color":"primary","block":""},on:{"click":_vm.getParcelsByAddress}},[_vm._v("\n                    Buscar\n\n                    "),(_vm.loading)?_c('v-progress-circular',{attrs:{"indeterminate":"","color":"white"}}):_vm._e()],1)]},proxy:true}]),model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v;},expression:"address"}})],1)],1)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-4b4b85e6";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ParcelByAddress = normalizeComponent(
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
//
//
//
//
//
//
//

var script$1 = {
    props: {
        defaultCadastralReference: {
            type: String,
            default: function () { return ''; }
        }
    },
    data: function data() {
        return {
            loading: false,
            cadastral_reference: this.defaultCadastralReference,
            response: {
                message: null
            }
        }
    },
    methods: {
        getBuildingUnitByCadastralReference: async function getBuildingUnitByCadastralReference() {
            this.loading = true;
            try {
                var result = await this.$store.dispatch('trovimap/FETCH_BUILDING_UNITS_BY_CADASTRAL_REFERENCE', this.cadastral_reference);
                this.response.message = null;
                this.$emit('addressSelected', result);
            } catch (e) {
                this.response.message = e.data.message;
            } finally {
                this.loading = false;
            }
        },
    },
    computed: {
        errors: function errors() {
            if (!this.response.message) { return [] }

            return [ this.response.message ]
        },
    }
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"cadastral_reference","label":"Referencia Cadastral","id":"cadastral_reference","placeholder":"Calle Valencia 359, 08002, Barcelona","error-messages":_vm.errors},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.getBuildingUnitByCadastralReference($event)}},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('v-btn',{attrs:{"disabled":_vm.loading,"color":"primary","block":""},on:{"click":_vm.getBuildingUnitByCadastralReference}},[_vm._v("\n                    Buscar\n\n                    "),(_vm.loading)?_c('v-progress-circular',{attrs:{"indeterminate":"","color":"white"}}):_vm._e()],1)]},proxy:true}]),model:{value:(_vm.cadastral_reference),callback:function ($$v) {_vm.cadastral_reference=$$v;},expression:"cadastral_reference"}},[_vm._v(" "),(_vm.response && _vm.response.message)?_c('div',{staticClass:"v-messages theme--light error--text"},[_c('div',{staticClass:"v-messages__wrapper"},[_c('div',{staticClass:"v-messages__message"},[_vm._v(_vm._s(_vm.response.message))])])]):_vm._e()])],1)],1)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-c51498c2";
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var BuildingUnitByCadastralReference = normalizeComponent(
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

var script$2 = {
     props: {
        apartment: {
            type: Object,
            required: true
        },
        active: {
            required: true,
            validator: function (prop) { return typeof prop === 'string' || prop === null; }
        }
    },
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list-tile',{class:_vm.active === _vm.apartment.Id ? 'grey' : '',attrs:{"actions":""},on:{"click":function($event){return _vm.$emit('click')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"innerHTML":_vm._s(_vm.apartment.FormattedAddress)}}),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n            Piso: "+_vm._s(_vm.apartment.Floor)+" | Puerta "+_vm._s(_vm.apartment.Door)+" | construcción: "+_vm._s(_vm.apartment.YearBuilt)+" | m2: "+_vm._s(_vm.apartment.LivingArea)+"\n        ")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n            Referencia catastral: "),_c('b',[_vm._v(_vm._s(_vm.apartment.CadastralReference))])])],1)],1)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-10c51f7d";
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ApartmentListElement = normalizeComponent(
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
            active: null
        }
    },
    components: {
        ApartmentListElement: ApartmentListElement
    },
    props: {
        items: {
            type: Array,
            default: function () { return []; }
        }
    },
    methods: {
        click: function click(item) {
            this.active = item.Id;
            this.$emit('selected', item);
        }
    }
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list',{attrs:{"three-line":""}},_vm._l((_vm.items),function(item){return _c('apartment-list-element',{key:item.Id,attrs:{"apartment":item,"active":_vm.active},on:{"click":function($event){return _vm.click(item)}}})}),1)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-750ca74a";
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ApartmentList = normalizeComponent(
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
    props: {
        Id: {
            required: true,
            type: String
        }
    },
    data: function data() {
        return {
            loading: false,
        }
    },
    components: {
        ApartmentList: ApartmentList
    },
    computed: {
        apartments: function apartments() {
            return this.$store.getters['trovimap/apartmentsById'](this.Id)
        }
    },
    methods: {
        fetch: async function fetch() {
            this.loading = true;

            try {
                await this.$store.dispatch('trovimap/FETCH_BUILDING_UNITS_BY_PARCEL', this.Id);
            } catch (e) {
                throw e
            } finally {
                this.loading = false;
            }
        },
        apartmentSelected: function apartmentSelected(apartment) {
            this.$emit('apartmentSelected', apartment);
        }
    },
    watch: {
        Id: {
            handler: function handler() {
                this.fetch();
            },
            immediate: true
        }
    }
};/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[(_vm.loading)?_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}}):_c('apartment-list',{attrs:{"items":_vm.apartments},on:{"selected":_vm.apartmentSelected}})],1)],1)};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = "data-v-58589eb4";
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var BuildingUnit = normalizeComponent(
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
//
//
//
//
//


var defaultResponse = function () {
    return {
        fields: [],
        message: null
    }
};

var script$5 = {
    props: {
        apartmentId: {
            type: String,
            required: true
        },
        apartment: {
            type: Object,
            required: true
        },
        defaultBedrooms: {
            type: Number,
            default: function () { return 0; }
        },
        defaultBathrooms: {
            type: Number,
            default: function () { return 0; }
        },
        reference: {
            type: String,
            default: function () { return null; }
        },
        user: {
            type: Object,
            default: function () {
                return {
                    firstName: null,
                    email: null,
                    phone: null,
                }
            }
        }
    },
    data: function data() {
        return {
            payload: {
                ApartmentId: this.apartmentId,
                Bathrooms: this.defaultBathrooms,
                Bedrooms: this.defaultBedrooms,
                firstName: this.user.firstName,
                email: this.user.email,
                phone: this.user.phone,
                reference: this.reference,
            },
            loading: false,
            response: defaultResponse()
        }
    },
    methods: {
        errors: function errors(key) {
            if (!this.hasError(key)) { return [] }

            return this.response.fields[key]
        },
        hasError: function hasError(key) {
            if (!this.response) { return false }
            if (!this.response.fields) { return false }

			return this.response.fields[key] !== undefined
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
        fetchEvaluation: async function fetchEvaluation() {
            this.loading = true;
            try {
                var result = await this.$store.dispatch('trovimap/FETCH_EVALUATION_BY_APARTMENT_ID', {
                    payload: Object.assign({}, this.payload),
                    apartmentId: this.apartmentId,
                });

                this.$emit('evaluationCompleted', result);
                this.response = Object.assign({}, defaultResponse());
            } catch(response) {
                this.response = Object.assign({}, response.data);
            } finally {
                this.loading = false;
            }
        },
    },
    watch: {
        apartmentId: {
            handler: function handler() {
                this.fetchCharacteristics();
            },
            immediate: true
        },
    }
};/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-form',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"surface","label":"Superfície","id":"surface"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.fetchEvaluation($event)}},model:{value:(_vm.payload.LivingArea),callback:function ($$v) {_vm.$set(_vm.payload, "LivingArea", $$v);},expression:"payload.LivingArea"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"bathrooms","label":"Número de baños","id":"bathrooms"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.fetchEvaluation($event)}},model:{value:(_vm.payload.Bathrooms),callback:function ($$v) {_vm.$set(_vm.payload, "Bathrooms", $$v);},expression:"payload.Bathrooms"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"bedrooms","label":"Número de habitaciones","id":"bedrooms"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.fetchEvaluation($event)}},model:{value:(_vm.payload.Bedrooms),callback:function ($$v) {_vm.$set(_vm.payload, "Bedrooms", $$v);},expression:"payload.Bedrooms"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[(!_vm.user.firstName)?_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"firstName","label":"Nombre","id":"firstName","errors":_vm.hasError('firstName'),"error-messages":_vm.errors('firstName')},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.fetchEvaluation($event)}},model:{value:(_vm.payload.firstName),callback:function ($$v) {_vm.$set(_vm.payload, "firstName", $$v);},expression:"payload.firstName"}})],1):_vm._e(),_vm._v(" "),(!_vm.user.email)?_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"email","label":"Email","id":"email","errors":_vm.hasError('email'),"error-messages":_vm.errors('email')},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.fetchEvaluation($event)}},model:{value:(_vm.payload.email),callback:function ($$v) {_vm.$set(_vm.payload, "email", $$v);},expression:"payload.email"}})],1):_vm._e(),_vm._v(" "),(!_vm.user.phone)?_c('v-flex',{attrs:{"xs12":"","sm4":""}},[_c('v-text-field',{attrs:{"name":"phone","label":"Teléfono","id":"phone","errors":_vm.hasError('phone'),"error-messages":_vm.errors('phone')},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.fetchEvaluation($event)}},model:{value:(_vm.payload.phone),callback:function ($$v) {_vm.$set(_vm.payload, "phone", $$v);},expression:"payload.phone"}})],1):_vm._e()],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-btn',{attrs:{"color":"primary","block":"","disabled":_vm.loading},on:{"click":_vm.fetchEvaluation}},[_vm._v("\n                    Obtener valoración\n                    "),(_vm.loading)?_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}}):_vm._e()],1)],1)],1)],1)],1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = "data-v-5de1d750";
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var EvaluationForm = normalizeComponent(
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

var script$6 = {
    props: {
        parcel: {
            type: Object,
            required: true,
        },
        active: {
            required: true,
            validator: function (prop) { return typeof prop === 'string' || prop === null; }
        }
    },
    methods: {
        selectParcel: function selectParcel() {
            this.$store.dispatch('trovimap/FETCH_BUILDING_UNITS_BY_PARCEL', this.parcel.Id);
        }
    }
};/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list-tile',{class:_vm.active === _vm.parcel.Id ? 'grey' : '',on:{"click":function($event){return _vm.$emit('click')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"innerHTML":_vm._s(_vm.parcel.FormattedAddress ? _vm.parcel.FormattedAddress : _vm.parcel.StreetName)}}),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n            "+_vm._s(_vm.parcel.City)+", "+_vm._s(_vm.parcel.Province)+"\n        ")])],1)],1)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = "data-v-70980285";
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ParcelListElement = normalizeComponent(
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
    data: function data() {
        return {
            active: null
        }
    },
    components: {
        ParcelListElement: ParcelListElement
    },
    computed: {
        items: function items() {
            return this.$store.state.trovimap.parcels
        }
    },
    methods: {
        click: function click(item) {
            this.active = item.Id;
            this.$emit('selected', item);
        }
    }
};/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-list',{attrs:{"three-line":""}},_vm._l((_vm.items),function(item){return _c('parcel-list-element',{key:item.Id,attrs:{"parcel":item,"active":_vm.active},on:{"click":function($event){return _vm.click(item)}}})}),1)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  var __vue_inject_styles__$7 = undefined;
  /* scoped */
  var __vue_scope_id__$7 = undefined;
  /* module identifier */
  var __vue_module_identifier__$7 = "data-v-36890e62";
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var ParcelList = normalizeComponent(
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
        EvaluationForm: EvaluationForm,
        BuildingUnitByCadastralReference: BuildingUnitByCadastralReference,
        ParcelList: ParcelList
    },
    methods: {
        onAddressSelected: function onAddressSelected(address) {
            this.address = address;
        },
        onApartmentSelected: function onApartmentSelected(apartment) {
            this.apartment = apartment;
        },
        onCadastralAddressSelected: function onCadastralAddressSelected(data) {
            if (data.Apartments.length) {
                this.apartment = data.Apartments[0];
                this.stepperValue = 3;
            }
        },
        onEvaluationCompleted: function onEvaluationCompleted(evaluation) {
            this.$emit('evaluationCompleted', evaluation);
            this.stepperValue = 4;
        }
    }
};/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-stepper',{model:{value:(_vm.stepperValue),callback:function ($$v) {_vm.stepperValue=$$v;},expression:"stepperValue"}},[_c('v-stepper-header',[_c('v-stepper-step',{attrs:{"step":"1","complete":_vm.stepperValue > 1}},[_vm._v("Dirección del inmueble")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"2","complete":_vm.stepperValue > 2}},[_vm._v("Elija el apartamento")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"3","complete":_vm.stepperValue > 3}},[_vm._v("Datos extra")])],1),_vm._v(" "),_c('v-stepper-items',[_c('v-stepper-content',{attrs:{"step":"1"}},[_c('v-flex',{attrs:{"xs12":"","text-xs-center":""}},[_c('label',{staticClass:"title",attrs:{"for":""}},[_vm._v("Busca tu inmueble por la dirección o por referencia catastral")])]),_vm._v(" "),_c('parcel-by-address',{on:{"addressSelected":this.onAddressSelected}}),_vm._v(" "),_c('building-unit-by-cadastral-reference',{on:{"addressSelected":this.onCadastralAddressSelected}}),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('parcel-list',{on:{"selected":_vm.onAddressSelected}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs3":"","md2":""}},[_c('v-btn',{attrs:{"color":"primary","block":"","disabled":!_vm.address.Id},nativeOn:{"click":function($event){_vm.stepperValue = 2;}}},[_vm._v("\n                                Siguiente\n                            ")])],1)],1)],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"2"}},[(_vm.address.Id)?_c('building-unit',{attrs:{"Id":_vm.address.Id},on:{"apartmentSelected":this.onApartmentSelected}}):_vm._e(),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs3":"","md2":""}},[_c('v-btn',{attrs:{"color":"primary","block":"","disabled":!_vm.apartment.Id},nativeOn:{"click":function($event){_vm.stepperValue = 3;}}},[_vm._v("\n                                Siguiente\n                            ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":"","offset-xs6":"","md2":"","offset-md8":""}},[_c('v-btn',{attrs:{"flat":"","block":""},nativeOn:{"click":function($event){_vm.stepperValue = 1;}}},[_vm._v("Atrás")])],1)],1)],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"3"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[(_vm.apartment.Id)?_c('evaluation-form',{attrs:{"parcel":_vm.address,"apartment":_vm.apartment,"apartmentId":_vm.apartment.Id},on:{"evaluationCompleted":_vm.onEvaluationCompleted}}):_vm._e()],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs3":"","md2":"","offset-xs9":"","offset-md10":""}},[_c('v-btn',{attrs:{"block":"","flat":""},nativeOn:{"click":function($event){_vm.stepperValue = 2;}}},[_vm._v("Atrás")])],1)],1)],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"4"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","text-xs-center":""}},[_vm._t("success")],2)],1)],1)],1)],1)],1)],1)};
var __vue_staticRenderFns__$8 = [];

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = undefined;
  /* module identifier */
  var __vue_module_identifier__$8 = "data-v-bbb45198";
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
//
//
//
//
//
//
//
//

var script$9 = {
  props: {
      items: {
          type: Array,
          required: true
      }
  },
  computed: {
    values: function values() {
      return this.items.map(function (item) { return item.value; })
    },
    dateRange: function dateRange() {
      var start = new Date(this.items[0].date);
      var end = new Date(this.items[this.items.length - 1].date);

      return {
        start: ((start.getMonth() + 1) + "/" + (start.getFullYear())),
        end: ((end.getMonth() + 1) + "/" + (end.getFullYear())),
      }
    }
  }
};/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-sheet',{attrs:{"color":"rgba(0, 0, 0, .50)"}},[_c('v-sparkline',{attrs:{"value":_vm.values,"color":"rgba(255, 255, 255, 7)","height":"100","padding":"20","smooth":""},scopedSlots:_vm._u([{key:"label",fn:function(item){return [_vm._v("\n            "+_vm._s(item.value)+" €\n          ")]}}])})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","text-xs-right":""}},[_vm._v("\n        Evolución del precio entre el "+_vm._s(_vm.dateRange.start)+" y "+_vm._s(_vm.dateRange.end)+"\n      ")])],1)};
var __vue_staticRenderFns__$9 = [];

  /* style */
  var __vue_inject_styles__$9 = undefined;
  /* scoped */
  var __vue_scope_id__$9 = undefined;
  /* module identifier */
  var __vue_module_identifier__$9 = "data-v-449a6f4a";
  /* functional template */
  var __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var PriceEvolution = normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
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
//
//
//
//
//
//

var script$a = {
    props: {
        comparable: {
            type: Object,
            required: true
        }
    }
};/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"height":"100%"}},[_c('v-img',{attrs:{"src":_vm.comparable.PhotoUrl_320x0,"height":"200px"}}),_vm._v(" "),_c('v-card-title',{attrs:{"primary-title":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('h3',{staticClass:"title mb-0"},[_vm._v(_vm._s(_vm.comparable.DisplayFullStreetAddress))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('h4',{staticClass:"body-2 mb-0"},[_vm._v(_vm._s(_vm.comparable.Price)+" €")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('h4',{staticClass:"body-1 mb-0 grey--text"},[_vm._v(" "+_vm._s(_vm.comparable.PriceM2)+" €/m2")])])],1)],1),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('span',[_vm._v(_vm._s(_vm.comparable.LivingArea)+" m2")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('span',[_vm._v(_vm._s(_vm.comparable.Bedrooms)+" habs")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('span',[_vm._v(_vm._s(_vm.comparable.Bathrooms)+" baños")])])],1)],1),_vm._v(" "),_c('v-card-actions',[_vm._v("\n        Fecha publicación: "+_vm._s(_vm._f("trovimap_date")(_vm.comparable.ListingDate))+"\n    ")])],1)};
var __vue_staticRenderFns__$a = [];

  /* style */
  var __vue_inject_styles__$a = undefined;
  /* scoped */
  var __vue_scope_id__$a = undefined;
  /* module identifier */
  var __vue_module_identifier__$a = "data-v-d5a97c00";
  /* functional template */
  var __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var Comparable = normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    false,
    undefined,
    undefined,
    undefined
  );//

var script$b = {
    props: {
        evaluation: {
            type: Object,
            required: true
        },
    },
    data: function data() {
      return {

      }  
    },
    components: {
        PriceEvolution: PriceEvolution,
        Comparable: Comparable
    },
    computed: {
        priceItems: function priceItems() {
            var this$1 = this;

            var countFilter = parseInt(this.evaluation.historicalStats.aggregations.length / 7, 10);
            
            return this.evaluation.historicalStats.aggregations
                .filter(function (agregation, index, arr) {
                    return (index % countFilter === 0 || index === arr.length - 1)
                })
                .map(function (agregation) {
                    return {
                        value: parseInt(agregation.pricem2.avg * this$1.evaluation.LivingArea, 10),
                        date: agregation.date
                    }
                })
        }
    }
};function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        { return function () { }; }
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: function () { return context._renderStyles(context._styles); }
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return function (id, style) { return addStyle(id, style, context); };
}
function addStyle(id, css, context) {
    var group =  css.media || 'default' ;
    var style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        var code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    var css = '';
    for (var key in styles) {
        var style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","wrap":""}},[(_vm.evaluation)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","py-3":""}},[_c('v-flex',{attrs:{"xs6":"","text-sm-left":""}},[_c('h4',{staticClass:"subheading mb-0"},[_vm._v("Precio minimo: "+_vm._s(_vm.evaluation.troviValue - _vm.evaluation.troviValue * 0.10)+" €")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-sm-right":""}},[_c('h4',{staticClass:"subheading mb-0 grey--text"},[_vm._v(" Precio máximo: "+_vm._s(_vm.evaluation.troviValue+ _vm.evaluation.troviValue * 0.10)+" €")])])],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":"","py-3":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('price-evolution',{attrs:{"items":_vm.priceItems}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":"","py-3":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('gmap-street-view-panorama',{staticClass:"pano",attrs:{"position":{
                          lat: _vm.evaluation.Location.lat,
                          lng: _vm.evaluation.Location.lon
                      },"zoom":7}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","grid-list-lg":""}},_vm._l((_vm.evaluation.comparables),function(comparable){return _c('v-flex',{key:comparable.Sysid,attrs:{"sm4":"","md3":""}},[_c('comparable',{attrs:{"comparable":comparable}})],1)}),1)],1)],1)],1):_vm._e()],1)};
var __vue_staticRenderFns__$b = [];

  /* style */
  var __vue_inject_styles__$b = function (inject) {
    if (!inject) { return }
    inject("data-v-038e27d6_0", { source: ".vue-street-view-pano-container{height:50vh}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$b = undefined;
  /* module identifier */
  var __vue_module_identifier__$b = "data-v-038e27d6";
  /* functional template */
  var __vue_is_functional_template__$b = false;
  /* style inject shadow dom */
  

  
  var EvaluationElement = normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    false,
    undefined,
    createInjectorSSR,
    undefined
  );var date = function (string) {
    var date = new Date(string);

    return ((date.getDay()) + "/" + (date.getMonth()) + "/" + (date.getFullYear()))
};var filters = /*#__PURE__*/Object.freeze({date: date});var FETCH_PARCELS_BY_ADDRESS = async function (context, address) {

    var commit = context.commit;
    try {
        var result = await axios.get(("http://localhost:8080/trovi/parcel?address=" + address));

        commit('SET_PARCELS', result.data);
    } catch (e) {
        throw e.response
    }
};

/**
 * 
 * @param {*} context 
 * @param {*} parcelId 
 */
var FETCH_BUILDING_UNITS_BY_PARCEL = async function (context, parcelId) {
    var commit = context.commit;
    var state = context.state;

    if (state.buildingUnits[parcelId]) { return }

    try {
        var result = await axios.get(("http://localhost:8080/trovi/parcel/" + parcelId));

        commit('SET_BUILDING_UNITS', result.data);
    } catch (e) {
        throw e.response
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
        throw e.response
    }

};

var FETCH_EVALUATION_BY_APARTMENT_ID = async function (context, data) {
    var commit = context.commit;
    var payload = data.payload;
    var apartmentId = data.apartmentId;


    try {

        var result = await axios.post(("http://localhost:8080/trovi/apartment/" + apartmentId), payload);

        commit ('SET_APARTMENT', Object.assign({}, result.data,
            {apartmentId: apartmentId}));

        return result.data
    } catch (e) {
        throw e.response
    }
};

var DOWNLOAD_EVALUATION_BY_ID = async function (context, evaluationId) {
    try {
        return await axios.get(("http://localhost:8080/trovi/evaluation/" + evaluationId), {
            responseType: 'arraybuffer'
        })
    } catch (e) {
        throw e.response
    }
};

var FETCH_BUILDING_UNITS_BY_CADASTRAL_REFERENCE = async function (context, reference) {

    var commit = context.commit;

    try {
        var result = await axios.get(("http://localhost:8080/trovi/parcel/cadastral/" + reference));

        commit('SET_BUILDING_UNITS', result.data);

        return result.data
    } catch (e) {
        throw e.response
    }
};

var actions = {
    FETCH_PARCELS_BY_ADDRESS: FETCH_PARCELS_BY_ADDRESS,
    FETCH_BUILDING_UNITS_BY_PARCEL: FETCH_BUILDING_UNITS_BY_PARCEL,
    FETCH_EVALUATION_BY_APARTMENT_ID: FETCH_EVALUATION_BY_APARTMENT_ID,
    DOWNLOAD_EVALUATION_BY_ID: DOWNLOAD_EVALUATION_BY_ID,
    FETCH_CHARACTERISTICS_BY_APARTMENT_ID: FETCH_CHARACTERISTICS_BY_APARTMENT_ID,
    FETCH_BUILDING_UNITS_BY_CADASTRAL_REFERENCE: FETCH_BUILDING_UNITS_BY_CADASTRAL_REFERENCE
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
};var createModule = function () {
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

  Vue.component('TrovimapWizard', TrovimapWizard);
  Vue.component('ParcelByAddress', ParcelByAddress);
  Vue.component('ParcelList', ParcelList);
  Vue.component('ParcelListElement', ParcelListElement);
  Vue.component('ApartmentList', ApartmentList);
  Vue.component('ApartmentListElement', ApartmentListElement);
  Vue.component('BuildingUnit', BuildingUnit);
  Vue.component('BuildingUnitByCadastralReference', BuildingUnitByCadastralReference);
  Vue.component('EvaluationForm', EvaluationForm);
  Vue.component('EvaluationElement', EvaluationElement);
  Vue.component('PriceEvolution', PriceEvolution);

  Object.keys(filters).forEach(function (key) {
    Vue.filter(("trovimap_" + key), filters[key]);
  });
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