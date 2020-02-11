System.register(["./p-226ad382.system.js","./p-a89ec7dd.system.js","./p-76ae633a.system.js","./p-7db317d0.system.js"],function(e){"use strict";var t,o,r,n,i;return{setters:[function(e){t=e.r;o=e.h;r=e.g},function(e){n=e.T},function(){},function(e){i=e.C}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i;return n>3&&i&&Object.defineProperty(t,o,i),i};var a=e("psk_form",function(){function e(e){t(this,e);this.controllerName="FormController";this.formActions="submit";this.action=null;this.method="get"}e.prototype.render=function(){return o("psk-container",{controllerName:this.controllerName,parentHost:this._host},o("div",{class:"container"},o("form",null,o("slot",null),this._createFormActions(this.formActions))))};e.prototype._createFormActions=function(e){if(e.trim().length===0){return null}var t=[];t=e.split(",").map(function(e){return o("psk-button",{"event-name":e,label:e})});return o("psk-container",{id:"actions"},t)};Object.defineProperty(e.prototype,"_host",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());s([i()],a.prototype,"render",null);s([n({description:["This attributes is setting the controller of the form. The default value for this attribute is FormController, a default controller for handling form submitions created inside Cardinal.Js.",'Information about creating a controller can be found inside the documentation: <psk-link page="Cardinal/controllers">Controllers Documentation</psk-link>',"All the "],isMandatory:false,propertyType:"string",defaultValue:"FormController",specialNote:"If the controller name is not provided, then the default FormController is assumed."})],a.prototype,"controllerName",void 0);s([n({description:['By defining this attribute, the user is able to control the behaviour of the form, so by definition, this attribute holds the possible actions inside the form, the defined actions should be sepparated by comma(",").',"Also, as a recommendation, the values should be provided using lowercases, and if there are more words inside an action, to be written using dash symbol(-)","Example of form actions: submit, reset-form, validate-form, cancel",'Using all these actions, the component will generate a <psk-link page="web-components/psk-button">psk-button</psk-link>.'],isMandatory:false,propertyType:"string values sepparated by comma (,)",defaultValue:"submit",specialNote:"If this attribute has no value, then the submit form action is assumed as default value."})],a.prototype,"formActions",void 0);s([n({description:["\tSpecifies where to send the form-data when a form is submitted","Most of the time, this is the URL to a server which is mainly responsible to handle the form-data."],isMandatory:false,propertyType:"string",defaultValue:"null",specialNote:"If this attribute has no value, then the current page will be handled. If a controller is given to the form, rather than FormController, then nothing will happen."})],a.prototype,"action",void 0);s([n({description:["This property specifies the HTTP method to use when sending form-data.","The possible values are <strong>get</strong> and <strong>post</strong>. If no value is provided, the GET is assumed."],isMandatory:false,propertyType:"string (get / post)",defaultValue:"get"})],a.prototype,"method",void 0)}}});