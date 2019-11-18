System.register(["./p-0b2166d8.system.js","./p-f9b75e93.system.js"],(function(e){"use strict";var t,n,o,r;return{setters:[function(e){t=e.r;n=e.g;o=e.h},function(e){r=e.T}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)if(s=e[p])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var s=e("dropdown_renderer",function(){function e(e){t(this,e);this.isOpened=false;this.dropDownHasChildActive=false;this.somethingChanged=false}e.prototype.handleClick=function(e){var t=e.target;if(!n(this).contains(t)){this.isOpened=false}};e.prototype.routeChanged=function(){this.dropDownHasChildActive=window.location.href.includes(this.url)};e.prototype.toggleDropdown=function(e){var t=e.target;var n=false;while(t.parentElement){t=t.parentElement;if(t.classList.contains("children")){n=true;break}}if(!n){e.stopImmediatePropagation()}this.isOpened=!this.isOpened};e.prototype.render=function(){var e=this;this.routeChanged();return o("div",{class:"dropdown "+(this.dropDownHasChildActive?"active":"")+" "+(this.isOpened?"isOpened":""),onClick:function(t){return e.toggleDropdown(t)}},o("slot",null))};return e}());i([r({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:false,propertyType:"boolean"})],s.prototype,"active",void 0);i([r({description:"This property sets the url for the component in menu in order to be routed.",isMandatory:true,propertyType:"any"})],s.prototype,"url",void 0);i([r({description:"This property tells the component if something changed with the MenuItem",isMandatory:false,propertyType:"boolean"})],s.prototype,"somethingChanged",void 0)}}}));