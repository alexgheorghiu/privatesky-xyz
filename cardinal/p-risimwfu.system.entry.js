System.register(["./p-51da6f80.system.js","./p-832e74cb.system.js","./p-919006a6.system.js","./p-77f35bd6.system.js"],(function(e){"use strict";var t,r,n,s;return{setters:[function(e){t=e.r;r=e.h},function(){},function(e){n=e.T},function(e){s=e.C}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,r,n){var s=arguments.length,o=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)if(i=e[c])o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o;return s>3&&o&&Object.defineProperty(t,r,o),o};var i=e("psk_user_profile_renderer",function(){function e(e){t(this,e)}e.prototype.render=function(){return r("div",{class:"profile"},r("div",{class:"card-body text-center"},r("p",null,r("img",{src:this.userInfo.avatar,alt:"card image"})),r("h5",{class:"card-title"},this.userInfo.username),r("p",{class:"card-text"},this.userInfo.email)))};return e}());o([s(),n({description:"This property is the user information that needs to be rendered for the user.",isMandatory:false,propertyType:"any"})],i.prototype,"userInfo",void 0)}}}));