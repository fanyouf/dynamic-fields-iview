!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("iview"));else if("function"==typeof define&&define.amd)define(["iview"],t);else{var n=t("object"==typeof exports?require("iview"):e.iview);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}("undefined"!=typeof self?self:this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=6)}([function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=i(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=l[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(a(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(a(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:o}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,i=document.querySelector("style["+g+'~="'+e.id+'"]');if(i){if(p)return v;i.parentNode.removeChild(i)}if(b){var a=h++;i=f||(f=r()),t=o.bind(null,i,a,!1),n=o.bind(null,i,a,!0)}else i=r(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function o(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function s(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),m.ssrId&&e.setAttribute(g,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(10),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,v=function(){},m=null,g="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){p=n,m=r||{};var a=c(e,t);return i(a),function(t){for(var n=[],r=0;r<a.length;r++){var o=a[r],s=l[o.id];s.refs--,n.push(s)}t?(a=c(e,t),i(a)):a=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,i,r,a){var o,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var l;if(a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=i),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:s,options:c}}},function(e,t,n){"use strict";var i=n(11),r=(n.n(i),n(12)),a=n(16),o=n(20);t.a={props:{pStorageId:{type:String,default:""},pFieldsList:{type:Array,required:!0,default:function(){return[]},validator:function(e){try{if(Array.from(new Set(e.map(function(e){return e.name}))).length!==e.length)return console.error("name 必须唯一"),!1}catch(e){return!1}return!0}}},data:function(){return{value:{},nodeList:[],isQuery:!1}},components:{TreeNode:r.a,Arrow:a.a},computed:{cVisiableFieldKeys:function(){return this.nodeList.filter(function(e){return e.checked}).map(function(e){return e.name})},cHasMoreToShow:function(){return this.nodeList.length>this.cVisiableFieldKeys.length}},mounted:function(){var e=this;this.pFieldsList.forEach(function(t){e.value[t.name]=t.initValue||""}),this.nodeList=this.pFieldsList.map(function(e){return{name:e.name,title:e.label,checked:!!e.initChecked,initChecked:!!e.initChecked}}),this.visiableFieldKeys=this.nodeList.map(function(e){return e.key}),this.fieldsFilter=this.buildFieldsFilter(),this.initStatusWithStorage()},methods:{hQuery:function(){alert("query...."),this.$emit("query",{cond:this.value,_el:this}),this.isQuery=!0,console.info(this.value),this.saveFieldStatuToLocal()},initStatusWithStorage:function(){if(this.pStorageId){var e=o.a.get(this.pStorageId);e&&this.nodeList.forEach(function(t){var n=e.find(function(e){return e.name===t.name});n&&(t.checked=n.checked)})}},saveFieldStatuToLocal:function(){if(this.pStorageId){var e=this.nodeList.map(function(e){return{name:e.name,title:e.title,checked:e.checked,initChecked:e.initChecked}});o.a.set(this.pStorageId,e)}},handlerChange:function(e){console.info(e)},buildBtns:function(){var e=this.$createElement,t=this,n=[],r=this.$createElement(i.Button,{on:{click:t.hQuery},props:{type:"primary",size:"small",loading:t.isQuery}},"查询"),a=e(i.Button,{attrs:{type:"primary",size:"small"}},["重置"]);return n.push(r),n.push(a),n.push(this.fieldsFilter),n},buildArrow:function(){var e=this;return this.$createElement(a.a,{props:{pHasMore:e.cHasMoreToShow},on:{showAllChange:function(t){e.nodeList.forEach(function(e){e.checked=!!t||!!e.initChecked})}}})},buildFieldsFilter:function(){var e=this;return this.$createElement(r.a,{props:{nodeList:e.nodeList},on:{fieldListVisableChange:function(t){e.nodeList.forEach(function(e){e.checked=t.includes(e.name)})}}})},buildText:function(e){var t=this.$createElement,n=this;e.onChange=function(t){n.value[e.name]=t.target.value.trim(),console.info(n.value)};var r=t("label",[e.label]);this.value[e.name];return t("div",{class:"queryAreaItem"},[r,this.$createElement(i.Input,{class:"txt",on:{"on-change":e.onChange},props:{placeholder:e.placeholder||"Enter something...",value:e.initValue}})])},buildDateRange:function(e){var t=this.$createElement,n=this;e.onChange=function(t){n.value[e.name]=t,console.info(n.value)};var r=t("label",[e.label]);this.value[e.name];return t("div",{class:"queryAreaItem"},[r,this.$createElement(i.DatePicker,{props:{type:"daterange",placement:"bottom-end",value:e.initValue},class:"datePicker",on:{"on-change":e.onChange}})])},buildDate:function(e){var t=this.$createElement,n=this;e.onChange=function(t){n.value[e.name]=t,console.info(n.value)};var r=t("label",[e.label]);this.value[e.name];return t("div",{class:"queryAreaItem"},[r,this.$createElement(i.DatePicker,{props:{type:"date",placement:"bottom-end",value:e.initValue},class:"datePicker",on:{"on-change":e.onChange}})])},buildSelect:function(e){var t=this.$createElement,n=this;e.onChange=function(t){n.value[e.name]=t,n.$emit(e.name+"Change",n.value)};var r=t("label",[e.label]),a=(this.value[e.name],[]);a.push(),e.data.forEach(function(e){var n=t("i-option",{attrs:{value:e.value}},[e.label]);a.push(n)});var o=!e.clearable,s=!e.multiple,u=!e.filterable,c=this.$createElement(i.Select,{props:{value:e.initValue,clearable:o,multiple:s,filterable:u},class:"select",on:{"on-change":e.onChange}},a);return t("div",{class:"queryAreaItem"},[r,c])},buildCheckbox:function(e){var t=this.$createElement,n=this;e.onChange=function(t){n.value[e.name]=t,n.$emit(e.name+"Change",n.value)};var r=t("label",[e.label]);this.value[e.name];return t("div",{class:"queryAreaItem"},[r,this.$createElement(i.Checkbox,{class:"checkbox",on:{"on-change":e.onChange},props:{value:e.initValue}})])}},render:function(e){var t=this,n=arguments[0];console.info("render...............");var i=this,r=[];return this.pFieldsList.filter(function(e){return i.cVisiableFieldKeys.includes(e.name)}).forEach(function(e){switch(e.type){case"select":r.push(t.buildSelect(e));break;case"txt":r.push(t.buildText(e));break;case"checkbox":r.push(t.buildCheckbox(e));break;case"dateRange":r.push(t.buildDateRange(e));break;case"date":r.push(t.buildDate(e))}}),this.btnList=this.buildBtns(),this.arrow=this.buildArrow(),n("div",{class:"queryArea"},[this.arrow,n("div",{class:"queryAreaList"},[r]),n("div",{class:"queryAreabtns"},[this.btnList])])},watch:{value:{handler:function(e,t){console.info(this.value),this.$emit("input",this.value)},deep:!0,immediate:!0}}}},function(e,t,n){"use strict";t.a={name:"FieldList",data:function(){return{treeData:[]}},mounted:function(){},props:{nodeList:{require:!0,type:Array,validator:function(e){return!0}}},methods:{hCheckChange:function(e,t){console.info(e,t),this.$emit("fieldListVisableChange",e.map(function(e){return e.name}))}},watch:{nodeList:{handler:function(e){this.treeData=this.nodeList.map(function(e){return{name:e.name,title:e.title,checked:!(!1===e.checked)}})},immediate:!0}}}},function(e,t,n){"use strict";t.a={props:{pHasMore:{type:Boolean,default:!1}},data:function(){return{hasMore:this.pHasMore}},methods:{hClick:function(){this.$emit("showAllChange",this.hasMore),this.hasMore=!this.hasMore}},watch:{pHasMore:{handler:function(e){this.hasMore=this.pHasMore},immediate:!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),r={DynamicFieldsIview:i.a},a=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object.keys(r).forEach(function(t){e.component(t,r[t])})};"undefined"!=typeof window&&window.Vue&&a(window.Vue),t.default={install:a,DynamicFieldsIview:i.a}},function(e,t,n){"use strict";function i(e){n(8)}var r=n(3),a=n(2),o=i,s=a(r.a,null,!1,o,null,null);t.a=s.exports},function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(1)("859d0bfe",i,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".queryArea{padding:2em;outline:1px solid #ccc;position:relative}.queryArea .queryAreaList{display:flex;position:relative;flex-wrap:wrap}.queryArea .queryAreaList .queryAreaItem{padding:5px;display:flex;align-items:center;flex:0 0 25%}.queryArea .queryAreaList .queryAreaItem label{flex:0 0 70px}.queryArea .queryAreaList .queryAreaItem .select{flex:1 1 auto}.queryArea .queryAreabtns .ivu-btn{margin-right:1em}",""])},function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var a=t[r],o=a[0],s=a[1],u=a[2],c=a[3],l={id:e+":"+r,css:s,media:u,sourceMap:c};i[o]?i[o].parts.push(l):n.push(i[o]={id:o,parts:[l]})}return n}},function(t,n){t.exports=e},function(e,t,n){"use strict";function i(e){n(13)}var r=n(4),a=n(15),o=n(2),s=i,u=o(r.a,a.a,!1,s,null,null);t.a=u.exports},function(e,t,n){var i=n(14);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(1)("24a387c7",i,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".ivu-tree-title-selected,.ivu-tree-title-selected:hover{background-color:inherit}",""])},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Poptip",{attrs:{placement:"bottom-end",trigger:"click",title:"自定义字段"}},[n("Button",{attrs:{type:"primary",size:"small"}},[e._v("自定义字段")]),e._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("Tree",{attrs:{"show-checkbox":"",data:e.treeData},on:{"on-check-change":e.hCheckChange}})],1)],1)},r=[],a={render:i,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";function i(e){n(17)}var r=n(5),a=n(19),o=n(2),s=i,u=o(r.a,a.a,!1,s,"data-v-38b3a53f",null);t.a=u.exports},function(e,t,n){var i=n(18);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(1)("bef60744",i,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".fixed[data-v-38b3a53f]{position:absolute;bottom:0;left:50%;transform:translateX(-50%) translateY(50%);font-size:24px;background-color:#fff;cursor:pointer}",""])},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed",on:{click:e.hClick}},[e.hasMore?n("Icon",{attrs:{type:"ios-arrow-down",title:"展开"}}):n("Icon",{staticStyle:{position:"relative",top:"-5px"},attrs:{type:"ios-arrow-up",title:"收起"}})],1)},r=[],a={render:i,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";function i(e){return JSON.stringify(e)}function r(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}}var a={storage:window.localStorage,session:{storage:window.sessionStorage}},o={set:function(e,t){if(!this.disabled)return void 0===t?this.remove(e):(this.storage.setItem(e,i(t)),t)},get:function(e,t){if(this.disabled)return t;var n=r(this.storage.getItem(e));return void 0===n?t:n},has:function(e){return void 0!==this.get(e)},remove:function(e){this.disabled||this.storage.removeItem(e)},clear:function(){this.disabled||this.storage.clear()},getAll:function(){if(this.disabled)return null;var e={};return this.forEach(function(t,n){e[t]=n}),e},forEach:function(e){if(!this.disabled)for(var t=0;t<this.storage.length;t++){var n=this.storage.key(t);e(n,this.get(n))}}};Object.assign(a,o),Object.assign(a.session,o);try{var s="__storejs__";a.set(s,s),a.get(s)!==s&&(a.disabled=!0),a.remove(s)}catch(e){a.disabled=!0}t.a=a}])});
//# sourceMappingURL=index.js.map