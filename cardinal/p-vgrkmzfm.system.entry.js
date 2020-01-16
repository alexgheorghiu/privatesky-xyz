var __extends=this&&this.__extends||function(){var t=function(e,n){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(e.hasOwnProperty(n))t[n]=e[n]};return t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();System.register(["./p-226ad382.system.js","./p-d35de16f.system.js","./p-7db317d0.system.js","./p-528bf9ac.system.js"],function(t){"use strict";var e,n,r,o,i,l;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){o=t.T},function(t){i=t.C},function(t){l=t.C}],execute:function(){var s="PskButtonClickEvent";var a=function(t){__extends(e,t);function e(e,n,r){var o=t.call(this,e,r)||this;o.getEventType=function(){return s};o.data=n;return o}return e}(CustomEvent);var c=undefined&&undefined.__decorate||function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)if(l=t[s])i=(o<3?l(i):o>3?l(e,n,i):l(e,n))||i;return o>3&&i&&Object.defineProperty(e,n,i),i};var u=[document,window];var p=t("psk_button",function(){function t(t){e(this,t);this.label=null;this.buttonClass="btn btn-primary";this.eventName=null;this.eventData=null;this.disabled=false}t.prototype.render=function(){var t=this;return n("button",{onClick:function(e){if(t.eventName){e.preventDefault();e.stopImmediatePropagation();var n=new a(t.eventName,t.eventData,{bubbles:true,composed:true,cancelable:true});var r=t.htmlElement;if(t.eventDispatcher){if(u.indexOf(window[t.eventDispatcher])!==-1){r=window[t.eventDispatcher]}}r.dispatchEvent(n)}},class:this.buttonClass,disabled:this.disabled},this.label&&this.label,n("slot",null))};Object.defineProperty(t.prototype,"htmlElement",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());c([i()],p.prototype,"label",void 0);var f=undefined&&undefined.__decorate||function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)if(l=t[s])i=(o<3?l(i):o>3?l(e,n,i):l(e,n))||i;return o>3&&i&&Object.defineProperty(e,n,i),i};var h=t("psk_container",function(){function t(t){var n=this;e(this,t);this.parentHost=null;var r=this.controllerName?this.controllerName:"Controller";l.getController(r).then(function(t){if(n.parentHost){n.controller=new t(n.parentHost);return}n.controller=new t(n._host)})}t.prototype.render=function(){return[n("slot",null),this.htmlFilePath&&n("psk-page-loader",{pageUrl:this.htmlFilePath}),this.controller&&this.controllerScript&&this.controller.executeScript(this.controller,this.controllerScript)]};t.prototype.componentWillLoad=function(){if(this.parentHost){this.__getInnerController.call(this,this.parentHost)}else{this.__getInnerController.call(this,this._host)}};t.prototype.__getInnerController=function(t){var e=t.querySelector("script");if(e!==null){this.controllerScript=e.innerHTML;e.innerHTML=""}};Object.defineProperty(t.prototype,"_host",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());f([o({isMandatory:false,description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",defaultValue:"null"})],h.prototype,"controllerName",void 0);f([o({description:["This property is the page url (html) that will be passed to the psk-page-loader component","This component will sent a get request to that url in order to get the content of that url."],isMandatory:false,propertyType:"string",defaultValue:"null"})],h.prototype,"htmlFilePath",void 0)}}});