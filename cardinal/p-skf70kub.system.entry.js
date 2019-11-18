System.register(["./p-0b2166d8.system.js","./p-19b00136.system.js","./p-3985fe0e.system.js","./p-dcdd93dc.system.js"],(function(e){"use strict";var t,r,i,o,n,p,s,c,a,d,l;return{setters:[function(e){t=e.r;r=e.h;i=e.c;o=e.g},function(e){n=e.T;p=e.f;s=e.s;c=e.e;a=e.g},function(e){d=e.C},function(e){l=e.T}],execute:function(){var h=undefined&&undefined.__decorate||function(e,t,r,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)if(p=e[s])n=(o<3?p(n):o>3?p(t,r,n):p(t,r))||n;return o>3&&n&&Object.defineProperty(t,r,n),n};var f=e("psk_card",function(){function e(e){t(this,e);this.title="";this.id=""}e.prototype.render=function(){var e=this.id.trim().replace(/(\s+|:+|\/+)/g,"-").toLowerCase();var t=null;if(this.title){t=r("div",{class:"card-header"},r("h5",null,this.title,e.length>0?r("psk-copy-clipboard",{id:e},"#"):null))}return r("div",{class:"card psk-card",id:e},t,r("div",{class:"card-body"},r("slot",null)))};return e}());h([d(),n({description:"This property is the title of our own version of the html card.",isMandatory:false,propertyType:"string"})],f.prototype,"title",void 0);h([n({description:"This property is the id which will be used in order to create the unique element id and for the psk-copy-clipboard component.",isMandatory:false,propertyType:"string"})],f.prototype,"id",void 0);var u=undefined&&undefined.__decorate||function(e,t,r,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)if(p=e[s])n=(o<3?p(n):o>3?p(t,r,n):p(t,r))||n;return o>3&&n&&Object.defineProperty(t,r,n),n};var y=e("psk_chapter",function(){function e(e){t(this,e);this.title="";this.reportedToc=false;var r=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=Math.random()*16|0,r=e=="x"?t:t&3|8;return r.toString(16)}))};this.guid=r();this.chapterInfo={title:this.title,guid:this.guid,children:[]};this.sendChapter=i(this,"psk-send-chapter",5)}e.prototype.componentDidLoad=function(){if(!this.reportedToc){this.sendChapter.emit(this.chapterInfo)}};e.prototype.receivedChapter=function(e){if(e.path&&e.path[0]&&o(this)!==e.path[0]){e.stopImmediatePropagation();if(this.chapterInfo.children.length>0){var t=false;this.chapterInfo.children.forEach((function(r){if(r.guid===e.detail.guid){r.children=e.detail.children;t=true}}));if(!t){this.chapterInfo.children.push(e.detail)}}else{this.chapterInfo.children.push(e.detail)}this.sendChapter.emit(this.chapterInfo);this.reportedToc=true}};e.prototype.render=function(){return r("psk-card",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},r("slot",null))};return e}());u([d(),n({description:"This property is the title, that will be used in order to create a psk-card ",isMandatory:false,propertyType:"string"})],y.prototype,"title",void 0);u([n({description:"This property is the guid that will be created as a unique 32 characters code passed as a id for the chapter",isMandatory:false,propertyType:"string"})],y.prototype,"guid",void 0);u([l({eventName:"psk-send-chapter",description:"This event is emitted the moment a psk-chapter with a title is created.\n\t\t\t\t\t It will create a tree of children which will pe rendered for the UI."})],y.prototype,"sendChapter",void 0);var g=undefined&&undefined.__decorate||function(e,t,r,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)if(p=e[s])n=(o<3?p(n):o>3?p(t,r,n):p(t,r))||n;return o>3&&n&&Object.defineProperty(t,r,n),n};var v=e("psk_copy_clipboard",function(){function e(e){t(this,e);this.id="";this.chapterToken="";this.getHistoryType=i(this,"getHistoryType",7)}e.prototype.componentWillLoad=function(){var e=this;this.getHistoryType.emit((function(t,r){if(t){console.log(t);return}switch(r){case"browser":case"hash":e.chapterToken="?chapter=";break;case"query":e.chapterToken="&chapter=";break}}))};e.prototype._copyToClipboardHandler=function(e){try{var t=window.location.href;if(window.location.href.indexOf(this.chapterToken)!==-1){t=window.location.href.split(this.chapterToken)[0]}console.log("raf:"+t+this.chapterToken+e);navigator.clipboard.writeText(""+t+this.chapterToken+e);var r=this.element.querySelector(".tooltip");r.innerHTML=p;r.setAttribute("class","tooltip copied");s(e,c(this.element,"psk-page"))}catch(i){console.error(i)}};e.prototype._resetTooltip=function(){var e=this.element.querySelector(".tooltip");e.innerHTML=a;e.setAttribute("class","tooltip")};e.prototype._isCopySupported=function(){var e=!!document.queryCommandSupported;["copy","cut"].forEach((function(t){e=e&&!!document.queryCommandSupported(t)}));return e};e.prototype.render=function(){var e=this;var t=this.id.trim().replace(/( |:|\/|\.)/g,"-").toLowerCase();if(t.length===0||!this._isCopySupported()){return}return r("div",{id:"tooltip",onClick:function(r){r.stopImmediatePropagation();e._copyToClipboardHandler(t)},onMouseOut:function(){e._resetTooltip()}},r("a",{class:"mark",href:"#"+t,onClick:function(e){e.preventDefault()}},r("slot",null)),r("span",{class:"tooltip"},a))};Object.defineProperty(e.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});return e}());g([d(),l({eventName:"getHistoryType",controllerInteraction:{required:true},description:"This event gets the history type "})],v.prototype,"getHistoryType",void 0);g([n({description:"This property is the id of the textzone that will be copied to the clipboard.",isMandatory:false,propertyType:"string"})],v.prototype,"id",void 0)}}}));