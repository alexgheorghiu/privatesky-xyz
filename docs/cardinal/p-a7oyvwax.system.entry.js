System.register(["./p-0b2166d8.system.js","./p-8918d7a0.system.js","./p-b61fafe4.system.js","./p-64de2c1c.system.js","./p-28589d6f.system.js","./p-7b21f968.system.js"],(function(e){"use strict";var t,o,s,n,i,l;return{setters:[function(e){t=e.r;o=e.c;s=e.h},function(){},function(){},function(e){n=e.T},function(e){i=e.C},function(e){l=e.T}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,o,s){var n=arguments.length,i=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)if(l=e[a])i=(n<3?l(i):n>3?l(t,o,i):l(t,o))||i;return n>3&&i&&Object.defineProperty(t,o,i),i};var r=e("psk_modal",function(){function e(e){t(this,e);this.opened=false;this.closeModal=o(this,"closeModal",7)}e.prototype.render=function(){var e=this;return s("div",null,s("div",{id:"backdrop",onClick:function(){e.closeModal.emit()}}),s("div",{id:"modal"},s("div",{class:"modal-content"},s("div",{class:"modal-header"},s("slot",{name:"title"}),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},s("span",{"aria-hidden":"true",onClick:function(){e.closeModal.emit()}},"×"))),s("div",{class:"modal-body"},s("slot",null)),s("div",{class:"modal-footer"},s("slot",{name:"confirm_action"}),s("button",{class:"btn btn-primary",onClick:function(){e.closeModal.emit()}},"Close")))))};return e}());a([i(),n({description:"This is the property that gives the state of the modal if it is opened or closed. The posible values are true or false.",isMandatory:false,propertyType:"boolean",defaultValue:"false"})],r.prototype,"opened",void 0);a([l({eventName:"closeModal",description:"When this event is triggered the Application Controller should listen to this so the modal can be closed within the controller."})],r.prototype,"closeModal",void 0)}}}));