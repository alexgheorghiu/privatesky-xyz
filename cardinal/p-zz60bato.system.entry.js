System.register(["./p-0b2166d8.system.js","./p-19b00136.system.js"],(function(e){"use strict";var t,r,n;return{setters:[function(e){t=e.r;r=e.h},function(e){n=e.T}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,r,n){var i=arguments.length,o=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)if(s=e[c])o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o;return i>3&&o&&Object.defineProperty(t,r,o),o};var o=e("psk_description",function(){function e(e){t(this,e);this.title=""}e.prototype.render=function(){var e=r("div",{class:"psk-description"},r("slot",null));if(this.title.replace(/\s/g,"")===""){return r("psk-card",null,e)}return r("psk-chapter",{title:this.title},e)};return e}());i([n({description:"The title of the component's description that will be used in order to create a psk-chapter.",isMandatory:false,propertyType:"string"})],o.prototype,"title",void 0)}}}));