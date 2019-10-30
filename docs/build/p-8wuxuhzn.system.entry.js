System.register(["./p-008f8465.system.js","./p-572ad178.system.js","./p-5831566e.system.js","./p-01cb3cc6.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.r;n=e.h},function(){},function(){},function(e){r=e.T}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(o=e[a])s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s;return i>3&&s&&Object.defineProperty(t,n,s),s};var s=e("psk_page_not_found",function(){function e(e){t(this,e);this.urlDestination=null;this.pageRenderer="psk-page-not-found-renderer"}e.prototype.render=function(){if(this.urlDestination!==null){return n("stencil-router-redirect",{url:this.urlDestination})}else{var e=window.location.pathname;var t=e.indexOf(this.basePath)!=-1;if(t){return n("stencil-router-redirect",{url:this.basePath})}else{return n(this.pageRenderer,null)}}};Object.defineProperty(e,"style",{get:function(){return":host>*{width:100%;height:100%}h1{color:red;padding:1em}a{text-decoration:none;font-style:italic;font-weight:700}"},enumerable:true,configurable:true});return e}());i([r({description:"This property is the base path of the website. \n\t\tIf this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path. \n\t\tIt is not mandatory to be the root of the application, it can be the root of a section inside the website.",specialNote:"If this parameter is missing, urlDestination parameter is checked.",isMandatory:false,propertyType:"string"})],s.prototype,"basePath",void 0);i([r({description:"This property gives a custom redirect URL destination in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, pageRenderer parameter is checked.",isMandatory:false,propertyType:"string"})],s.prototype,"urlDestination",void 0);i([r({description:"This property allows the component to display a custom Page \n\t\tnot found content in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, psk-page-not-found-renderer is assumed.",isMandatory:false,propertyType:"string",defaultValue:"psk-page-not-found-renderer"})],s.prototype,"pageRenderer",void 0)}}}));