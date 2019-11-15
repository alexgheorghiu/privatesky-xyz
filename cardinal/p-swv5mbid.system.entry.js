System.register(["./p-0b2166d8.system.js","./p-bf078d24.system.js","./p-3985fe0e.system.js","./p-54d811c0.system.js"],(function(e){"use strict";var t,i,n,r,o,a;return{setters:[function(e){t=e.r;i=e.c;n=e.h},function(e){r=e.T},function(e){o=e.C},function(e){a=e.T}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,i,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)if(a=e[s])o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o;return r>3&&o&&Object.defineProperty(t,i,o),o};var l=e("psk_link",function(){function e(e){t(this,e);this.error=false;this.destinationUrl="#";this.validateUrl=i(this,"validateUrl",7)}e.prototype.render=function(){var e=this;return n("button",{type:"button",title:this.error?"Temporary unavailable":"",class:"btn btn-link "+(this.error?"invalid-url":""),onClick:function(t){if(e.error){t.preventDefault()}else{window.location.href=e.destinationUrl}}},n("slot",null))};e.prototype.componentDidLoad=function(){var e=this;if(!this.page){return}this.validateUrl.emit({sourceUrl:this.page,callback:function(t,i){if(!t){e.destinationUrl=""+window.location.origin+i}else{e.error=true}}})};return e}());s([o(),r({description:"This property gives the component the destination URL after clicking the displayed link. This property is first validated by valdateUrl event.",isMandatory:true,propertyType:"string"})],l.prototype,"page",void 0);s([a({description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Temporary unavailable".']})],l.prototype,"validateUrl",void 0)}}}));