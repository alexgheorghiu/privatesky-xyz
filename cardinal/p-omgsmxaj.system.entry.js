System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-c5ed78fc.system.js","./p-44489c7e.system.js"],function(t){"use strict";var e,r,n,i,s,a,o;return{setters:[function(t){e=t.r;r=t.g;n=t.h},function(t){i=t.C},function(t){s=t.T},function(t){a=t.d;o=t.s}],execute:function(){var c=undefined&&undefined.__decorate||function(t,e,r,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(t,e,r,n);else for(var o=t.length-1;o>=0;o--)if(a=t[o])s=(i<3?a(s):i>3?a(e,r,s):a(e,r))||s;return i>3&&s&&Object.defineProperty(e,r,s),s};var p=t("psk_toc",function(){function t(t){e(this,t);this.activeChapter=null;this.chapterList=[]}t.prototype.connectedCallback=function(){this.pskPageElement=a(r(this),"psk-page")};t.prototype.tocReceived=function(t){if(t.detail){var e=t.detail,r=e.chapters,n=e.active;this.chapterList=this._sortChapters(r);this.activeChapter=n}};t.prototype._sortCurrentChapter=function(t,e){if(t.children.length===0){return t}var r=[];var n=function(n){var a=t.children.find(function(t){return t.guid===e[n]});if(a){e.splice(n--,1);r.push(i._sortCurrentChapter(a,e))}s=n};var i=this,s;for(var a=0;a<e.length;++a){n(a);a=s}return Object.assign({},t,{children:r})};t.prototype._sortChapters=function(t){var e=this.pskPageElement.querySelectorAll("psk-chapter");var r=[];e.forEach(function(t){if(!(t.hasAttribute("data-define-props")||t.hasAttribute("data-define-controller")||t.hasAttribute("data-define-events"))&&t.hasAttribute("guid")){r.push(t.getAttribute("guid"))}});var n=[];var i=function(e){var i=t.find(function(t){return t.guid===r[e]});if(i){r.splice(e--,1);n.push(s._sortCurrentChapter(i,r))}a=e};var s=this,a;for(var o=0;o<r.length;++o){i(o);o=a}return n};t.prototype._renderChapters=function(t,e,r){var i=this;return e.map(function(e,s){var a=r===undefined?s+1+".":""+r+(s+1)+".";return n("li",{class:e.guid===i.activeChapter&&"active",onClick:function(r){r.stopImmediatePropagation();r.preventDefault();o(e.title,t)}},a+" "+e.title,e.children.length===0?null:n("ul",null,i._renderChapters(t,e.children,a)))})};t.prototype.render=function(){return n("div",{class:"table-of-content"},n("psk-card",{title:this.title},n("ul",null,this._renderChapters(this.pskPageElement,this.chapterList))))};return t}());c([i(),s({description:"This property is the title of the psk-card that will be created.",isMandatory:false,propertyType:"string"})],p.prototype,"title",void 0)}}});