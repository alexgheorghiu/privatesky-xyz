System.register(["./p-0b2166d8.system.js","./p-a2447dc6.system.js","./p-3985fe0e.system.js"],(function(e){"use strict";var t,n,r,i;return{setters:[function(e){t=e.r;n=e.h},function(e){r=e.T},function(e){i=e.C}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(o=e[a])s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s;return i>3&&s&&Object.defineProperty(t,n,s),s};var o=e("psk_page_not_found",function(){function e(e){t(this,e);this.urlDestination=null;this.pageRenderer="psk-page-not-found-renderer"}e.prototype.render=function(){if(this.urlDestination!==null){return n("stencil-router-redirect",{url:this.urlDestination})}else{var e=window.location.pathname;var t=e.indexOf(this.basePath)!=-1;if(t){return n("stencil-router-redirect",{url:this.basePath})}else{return n(this.pageRenderer,null)}}};return e}());s([i(),r({description:"This property is the base path of the website. \n\t\tIf this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path. \n\t\tIt is not mandatory to be the root of the application, it can be the root of a section inside the website.",specialNote:"If this parameter is missing, urlDestination parameter is checked.",isMandatory:false,propertyType:"string"})],o.prototype,"basePath",void 0);s([r({description:"This property gives a custom redirect URL destination in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, pageRenderer parameter is checked.",isMandatory:false,propertyType:"string"})],o.prototype,"urlDestination",void 0);s([r({description:"This property allows the component to display a custom Page \n\t\tnot found content in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, psk-page-not-found-renderer is assumed.",isMandatory:false,propertyType:"string",defaultValue:"psk-page-not-found-renderer"})],o.prototype,"pageRenderer",void 0)}}}));