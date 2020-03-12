System.register(["./p-51da6f80.system.js","./p-832e74cb.system.js","./p-919006a6.system.js","./p-77f35bd6.system.js","./p-219a5e2b.system.js"],(function(e){"use strict";var t,n,i,o,s,a;return{setters:[function(e){t=e.r;n=e.h;i=e.g},function(){},function(e){o=e.T},function(e){s=e.C},function(e){a=e.P}],execute:function(){var r=undefined&&undefined.__decorate||function(e,t,n,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)if(a=e[r])s=(o<3?a(s):o>3?a(t,n,s):a(t,n))||s;return o>3&&s&&Object.defineProperty(t,n,s),s};var l=[document,window];var p=e("psk_button",function(){function e(e){t(this,e);this.buttonClass="btn btn-primary";this.disabled=false}e.prototype.render=function(){var e=this;return n("button",{onClick:function(t){if(e.eventName){t.preventDefault();t.stopImmediatePropagation();var n=new a(e.eventName,e.eventData,{bubbles:true,composed:true,cancelable:true});var i=e.htmlElement;if(e.eventDispatcher){if(l.indexOf(window[e.eventDispatcher])!==-1){i=window[e.eventDispatcher]}}i.dispatchEvent(n)}},class:this.buttonClass,disabled:this.disabled},this.label&&this.label,n("slot",null))};Object.defineProperty(e.prototype,"htmlElement",{get:function(){return i(this)},enumerable:true,configurable:true});return e}());r([s()],p.prototype,"htmlElement",void 0);r([o({description:["This is the label that will be displayed for the button. If it is not set, the label will not be displayed.","Also, the component has a slot which can be used to set the label for the component."],isMandatory:false,propertyType:"string"})],p.prototype,"label",void 0);r([o({description:["This attribute is used to provide a set of CSS classes, defined inside psk-button.css, that will be used as design for this component."],isMandatory:false,propertyType:"string",defaultValue:"btn btn-primary"})],p.prototype,"buttonClass",void 0);r([o({description:["By defining this attribute, the component will be able to trigger an event. The name of the event is the value of the attribute."],isMandatory:false,propertyType:"string"})],p.prototype,"eventName",void 0);r([o({description:["This attribute is used to pass some information along with an event.","This attribute is taken into consideration only if the eventName has a value. If not, it is ignored."],isMandatory:false,propertyType:"any"})],p.prototype,"eventData",void 0);r([o({description:["By defining this attribute, you tell the component if it is disabled or not.",'Possible values: "true", "false".'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],p.prototype,"disabled",void 0);r([o({description:['This attribute is telling the component where to trigger the event. Accepted values: "document, "window".',"If the value is not set or it is not one of the accepted values, the eventDispatcher will be the component itself."],isMandatory:false,propertyType:"string"})],p.prototype,"eventDispatcher",void 0)}}}));