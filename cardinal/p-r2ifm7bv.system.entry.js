System.register(["./p-0b2166d8.system.js","./p-f9b75e93.system.js","./p-3985fe0e.system.js","./p-e3e2a55c.system.js"],(function(e){"use strict";var t,n,i,o,r,s;return{setters:[function(e){t=e.r;n=e.h;i=e.g},function(e){o=e.T},function(e){r=e.C},function(e){s=e.P}],execute:function(){var c=undefined&&undefined.__decorate||function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)if(s=e[c])r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r;return o>3&&r&&Object.defineProperty(t,n,r),r};var p=e("psk_code",function(){function e(e){t(this,e);this.title="";this.language="";this.componentCode=""}e.prototype.componentWillLoad=function(){this.componentCode=this.host.innerText;this.host.innerHTML=""};e.prototype.componentDidLoad=function(){s.highlightAllUnder(this.host)};e.prototype.render=function(){var e=n("pre",null,n("code",{class:"language-"+this.language},this.componentCode));if(this.title.replace(/\s/g,"")===""){return n("div",null,e)}return n("psk-chapter",{title:this.title},e)};Object.defineProperty(e.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});return e}());c([r(),o({description:"This property is the title of the psk-chapter that will be created.",isMandatory:false,propertyType:"string"})],p.prototype,"title",void 0);c([o({description:"This property is the language, in which the code is written(so the css can identify it).",isMandatory:false,propertyType:"string"})],p.prototype,"language",void 0)}}}));