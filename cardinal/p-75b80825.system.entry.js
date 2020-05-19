System.register(["./p-e1460616.system.js","./p-90e1ba03.system.js","./p-17d20a18.system.js","./p-8c492e03.system.js","./p-ad7cbfb5.system.js"],(function(t){"use strict";var e,o,r,n,i;return{setters:[function(t){e=t.r;o=t.h;r=t.g},function(){},function(){},function(t){n=t.T},function(t){i=t.B}],execute:function(){var a=undefined&&undefined.__decorate||function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)if(a=t[s])i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i;return n>3&&i&&Object.defineProperty(e,o,i),i};var s=t("psk_for_each",function(){function t(t){e(this,t);this.modelChanged=false;this.ignoredNodeNames=["link","style","slot","#text","#comment","text","comment"];this.templateNodes=[];this.dataViewModel=null}t.prototype.componentWillLoad=function(){var t=this;var e=Array.from(this.__host.childNodes);var o=e.filter((function(e){return t.ignoredNodeNames.indexOf(e.nodeName.toLowerCase())===-1}));var r=o.filter((function(t){return!t.hasAttribute("slot")}));var n=o.find((function(t){return t.hasAttribute("slot")&&t.getAttribute("slot")==="no-data"}));if(n){n.removeAttribute("slot");this.emptyNode=n.cloneNode(true)}this.__host.innerHTML="";if(r){r.forEach((function(e){t.templateNodes.push(e.cloneNode(true))}))}else{console.error("No template found!")}};t.prototype.componentDidLoad=function(){var t=this;if(this["rootModel"]){this["rootModel"].onChange(this["parentChain"],(function(){t.modelChanged=!t.modelChanged}))}};t.prototype.render=function(){var t=this;if(!this["rootModel"]||!this["parentChain"]){return null}if(!this.templateNodes){return null}var e=this["rootModel"].getChainValue(this["parentChain"]);if(!e){e=[]}var r=[];var n=function(e){var n=i["parentChain"]?i["parentChain"]+"."+e+".":e+".";i.templateNodes.forEach((function(e){var i=e.cloneNode(true);var a=t.prepareItem(n,i);var s=a.tagName.toLowerCase();var u={};a.getAttributeNames().forEach((function(t){u[t]=a.getAttribute(t)}));var l=o(s,Object.assign({innerHTML:a.innerHTML},u));r.push(l)}))};var i=this;for(var a=0;a<e.length;a++){n(a)}if(r.length===0&&this.emptyNode){return o("div",{innerHTML:this.emptyNode.outerHTML})}return r};t.prototype.__processNode=function(t,e){var o=this;var r=Array.from(t.attributes).filter((function(t){return t.name.startsWith("view-model-")}));r.forEach((function(o){var r=e?""+e+o.value:o.value;t.setAttribute(o.name,r)}));var n=Array.from(t.attributes).filter((function(t){return t.value.startsWith("@")}));n.forEach((function(o){var r=o.value.split("@")[1];var n=e?""+e+r:r;t.setAttribute(o.name,"@"+n)}));Array.from(t.children).forEach((function(t){o.__processNode.call(o,t,e)}))};t.prototype.prepareItem=function(t,e){var o=e.querySelectorAll("[view-model]");this.__processNode.call(this,e,t);o.forEach((function(e){var o=""+t+e.getAttribute("view-model");e.setAttribute("view-model",o)}));return e};Object.defineProperty(t.prototype,"__host",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());a([i()],s.prototype,"__host",void 0);a([n({description:["This property is the name of the model which will be used to generate the form. The model should be a JavaScript array.",'All the information about how to write a model, hot to use the two-way binding and how to use the model with this component cand be found in the documentation found at: <psk-link page="forms/using-forms">Using forms</psk-link>'],isMandatory:true,propertyType:"string",specialNote:["If this property is not provided, nothing written inside the component's template will be displayed."]})],s.prototype,"dataViewModel",void 0)}}}));