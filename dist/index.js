!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("iview"));else if("function"==typeof define&&define.amd)define(["iview"],t);else{var n=t("object"==typeof exports?require("iview"):e.iview);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var r=n(9);n.n(r);console.dir(r.Select),console.dir(r.Option),t.a={props:{pFieldsList:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{value:{}}},mounted:function(){var e=this;this.pFieldsList.forEach(function(t){e.value[t.name]=t.initValue||""})},methods:{handlerChange:function(e){console.info(e)},buildText:function(e){var t=this.$createElement,n=this;e.onChange=function(t){n.value[e.name]=t.target.value.trim(),console.info(n.value)};var o=t("label",[e.label]);this.value[e.name];return t("div",{class:"queryAreaItem"},[o,this.$createElement(r.Input,{class:"txt",on:{"on-change":e.onChange},props:{placeholder:e.placeholder||"Enter something...",value:e.initValue}})])},buildSelect:function(e){var t=this.$createElement,n=this;e.onChange=function(t){n.value[e.name]=t,console.info(n.value)};var o=t("label",[e.label]),i=(this.value[e.name],[]);i.push(),e.data.forEach(function(e){var n=t("i-option",{attrs:{value:e.value}},[e.label]);i.push(n)});var a=this.$createElement(r.Select,{props:{value:e.initValue},class:"select",on:{"on-change":e.onChange}},i);return t("div",{class:"queryAreaItem"},[o,a])},buildCheckbox:function(e){var t=this.$createElement,n=this;e.onChange=function(t){n.value[e.name]=t,console.info(n.value),n.$emit(e.name+"Change",n.value)};var o=t("label",[e.label]);this.value[e.name];return t("div",{class:"queryAreaItem"},[o,this.$createElement(r.Checkbox,{class:"checkbox",on:{"on-change":e.onChange},props:{value:e.initValue}})])}},render:function(e){var t=this,n=arguments[0],r=[];return this.pFieldsList.forEach(function(e){switch(e.type){case"select":r.push(t.buildSelect(e));break;case"txt":r.push(t.buildText(e));break;case"checkbox":r.push(t.buildCheckbox(e))}}),n("div",{class:"queryArea"},[r])},watch:{value:{handler:function(e,t){console.info(this.value),this.$emit("input",this.value)},deep:!0,immediate:!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o={DynamicFieldsIview:r.a},i=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object.keys(o).forEach(function(t){e.component(t,o[t])})};"undefined"!=typeof window&&window.Vue&&i(window.Vue),t.default={install:i,DynamicFieldsIview:r.a}},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),i=n(8),a=r,s=i(o.a,null,!1,a,null,null);t.a=s.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("2c4ed9e9",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".queryArea{display:flex;flex-wrap:wrap;outline:1px solid #ccc}.queryArea .queryAreaItem{padding:5px;display:flex;align-items:center;flex:0 0 25%}.queryArea .queryAreaItem label{flex:0 0 70px}.queryArea .queryAreaItem .select{flex:1 1 auto}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+y+'~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(g){var i=p++;r=d||(d=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(y,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},m=null,y="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,m=o||{};var i=l(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=c[a.id];s.refs--,n.push(s)}t?(i=l(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],l=i[3],c={id:e+":"+o,css:s,media:u,sourceMap:l};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,i ){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(e,t){return c.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:s,options:l}}},function(t,n){t.exports=e}])});
//# sourceMappingURL=index.js.map