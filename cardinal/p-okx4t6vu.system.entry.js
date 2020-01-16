System.register(["./p-226ad382.system.js","./p-d35de16f.system.js","./p-905eb270.system.js"],function(e){"use strict";var t,o,n,r;return{setters:[function(e){t=e.r;o=e.g},function(e){n=e.T},function(e){r=e.B}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)if(l=e[a])i=(r<3?l(i):r>3?l(t,o,i):l(t,o))||i;return r>3&&i&&Object.defineProperty(t,o,i),i};var l=e("psk_for_each",function(){function e(e){t(this,e);this.dataViewModel=null}e.prototype.render=function(){this.__renderFormTemplateContent.call(this)};e.prototype.__renderFormTemplateContent=function(){var e=this.__getTemplateContent.call(this);if(e===null){console.error("[psk-for-each] Template content for the component is not defined");return null}if(!this["parentChain"]||!this["rootModel"]||e.content.querySelectorAll("[view-model]").length===0){return null}var t=this["parentChain"];var o=this["rootModel"];var n=o.getChainValue(t);if(n.length===0){console.error("[psk-for-each] Template model defined as -="+t+"=- is not present in the rootModel");return null}this.__host.attachShadow({mode:"open"});for(var r=0;r<n.length;++r){var i=t+"."+r+".";this.__appendTemplateItem.call(this,i,e.content.cloneNode(true))}e.remove()};e.prototype.__getTemplateContent=function(){var e=this.__host.querySelector("template");return e?e:null};e.prototype.__appendTemplateItem=function(e,t){var o=this;var n=t.querySelectorAll("[view-model]");n.forEach(function(t){var o=""+e+t.getAttribute("view-model");t.setAttribute("view-model",o);t.setAttribute("get-model","get-model")});Array.from(t.childNodes).forEach(function(e){o.__host.shadowRoot.appendChild(e)})};Object.defineProperty(e.prototype,"__host",{get:function(){return o(this)},enumerable:true,configurable:true});return e}());i([r()],l.prototype,"__host",void 0);i([n({description:["This property is the name of the model which will be used to generate the form. The model should be a JavaScript array.",'All the information about how to write a model, hot to use the two-way binding and how to use the model with this component cand be found in the documentation found at: <psk-link page="forms/using-forms">Using forms</psk-link>'],isMandatory:false,propertyType:"string",specialNote:["If this property is not provided, nothing written inside the component's template will be displayed."]})],l.prototype,"dataViewModel",void 0)}}});