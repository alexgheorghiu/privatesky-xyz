var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)n[i]=s[o];return n};System.register(["./p-0b2166d8.system.js","./p-a2447dc6.system.js","./p-3985fe0e.system.js"],(function(t){"use strict";var e,r,n,i,s,o,a;return{setters:[function(t){e=t.r;r=t.g;n=t.h},function(t){i=t.e;s=t.s;o=t.T},function(t){a=t.C}],execute:function(){var c=undefined&&undefined.__decorate||function(t,e,r,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)if(o=t[a])s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s;return i>3&&s&&Object.defineProperty(e,r,s),s};var p=t("psk_toc",function(){function t(t){e(this,t);this.chapterList=[]}t.prototype.connectedCallback=function(){this.pskPageElement=i(r(this),"psk-page")};t.prototype.tocReceived=function(t){if(t.detail){this.chapterList=this._sortChapters(__spreadArrays(t.detail))}};t.prototype._sortCurrentChapter=function(t,e){if(t.children.length===0){return t}var r=[];var n=function(n){var o=t.children.find((function(t){return t.guid===e[n]}));if(o){e.splice(n--,1);r.push(i._sortCurrentChapter(o,e))}s=n};var i=this,s;for(var o=0;o<e.length;++o){n(o);o=s}return Object.assign(Object.assign({},t),{children:r})};t.prototype._sortChapters=function(t){var e=this.pskPageElement.querySelectorAll("psk-chapter");var r=[];e.forEach((function(t){if(t.hasAttribute("guid")){r.push(t.getAttribute("guid"))}}));var n=[];var i=function(e){var i=t.find((function(t){return t.guid===r[e]}));if(i){r.splice(e--,1);n.push(s._sortCurrentChapter(i,r))}o=e};var s=this,o;for(var a=0;a<r.length;++a){i(a);a=o}return n};t.prototype._renderChapters=function(t,e,r){var i=this;return e.map((function(e,o){var a=r===undefined?o+1+".":""+r+(o+1)+".";return n("li",{onClick:function(r){r.stopImmediatePropagation();r.preventDefault();s(e.title,t)}},n("span",null,a+" "+e.title),e.children.length===0?null:n("ul",null,i._renderChapters(t,e.children,a)))}))};t.prototype.render=function(){return n("div",{class:"table-of-content"},n("psk-card",{title:this.title},n("ul",null,this._renderChapters(this.pskPageElement,this.chapterList))))};return t}());c([a(),o({description:"This property is the title of the psk-card that will be created",isMandatory:false,propertyType:"string"})],p.prototype,"title",void 0)}}}));