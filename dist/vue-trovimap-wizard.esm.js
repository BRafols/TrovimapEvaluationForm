var e=function(e,n,t,o,i,r,s,a,d,l){"boolean"!=typeof s&&(d=a,a=s,s=!1);var c,f="function"==typeof t?t.options:t;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),o&&(f._scopeId=o),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},f._ssrRegister=c):n&&(c=s?function(){n.call(this,l(this.$root.$options.shadowRoot))}:function(e){n.call(this,a(e))}),c)if(f.functional){var u=f.render;f.render=function(e,n){return c.call(n),u(e,n)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,c):[c]}return t}({render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n    hello "+this._s(this.name)+"\n")])},staticRenderFns:[]},void 0,{data:function(){return{name:"borja"}}},void 0,!1,void 0,void 0,void 0);function n(t){n.installed||(n.installed=!0,t.component("TrovimapWizard",e))}var t={install:n},o=null;"undefined"!=typeof window?o=window.Vue:"undefined"!=typeof global&&(o=global.Vue),o&&o.use(t),e.install=n;export default e;
