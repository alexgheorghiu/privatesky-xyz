System.register(["./p-0b2166d8.system.js","./p-bf078d24.system.js","./p-3985fe0e.system.js"],(function(e){"use strict";var t,i,s,r;return{setters:[function(e){t=e.r;i=e.h},function(e){s=e.T},function(e){r=e.C}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,i,s){var r=arguments.length,n=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)if(o=e[a])n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n;return r>3&&n&&Object.defineProperty(t,i,n),n};var o="https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/pages/";var a=e("psk_img",function(){function e(e){t(this,e);if(typeof globalConfig!=="undefined"&&typeof globalConfig.pagesBasePath==="string"){this.basePath=globalConfig.pagesBasePath}else{this.basePath=o}}e.prototype.render=function(){return i("div",{class:"image_container"},i("div",{class:"image_wrapper"},i("img",{src:this.basePath+this.src,class:"img-fluid",alt:this.title})),this.title?i("div",{class:"image_description"},this.title):null)};return e}());n([r(),s({description:"This property is the source of the image(<name>.<extension>).",isMandatory:false,propertyType:"string"})],a.prototype,"src",void 0);n([s({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:false,propertyType:"string"})],a.prototype,"title",void 0)}}}));