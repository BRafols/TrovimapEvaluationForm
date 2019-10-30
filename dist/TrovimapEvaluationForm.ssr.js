'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vueRuntimeHelpers=require('vue-runtime-helpers');var script = {
    name: 'TrovimapEvaluationForm', // vue component name
    data: function data() {
        return {
            counter: 5,
            initCounter: 5,
        };
    },
};/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"TrovimapEvaluationForm"},[_vm._ssrNode("<p>The counter is set to <b>"+_vm._ssrEscape(_vm._s(_vm.counter))+"</b>.</p> <button>Click +1</button> <button>Click -1</button> <button>Reset</button>")])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-5d13911a_0", { source: ".TrovimapEvaluationForm[data-v-5d13911a]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.TrovimapEvaluationForm p[data-v-5d13911a]{margin:0 0 1em}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-5d13911a";
  /* module identifier */
  var __vue_module_identifier__ = "data-v-5d13911a";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject shadow dom */
  

  
  var component = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    vueRuntimeHelpers.createInjectorSSR,
    undefined
  );// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('TrovimapEvaluationForm', component);
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
component.install = install;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=component;