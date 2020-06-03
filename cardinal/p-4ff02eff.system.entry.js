System.register(["./p-c99df712.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js","./p-fad6c953.system.js","./p-ca8d632f.system.js","./p-07247c70.system.js"],(function(e){"use strict";var t,i,a,s,o;return{setters:[function(e){t=e.r;i=e.h},function(){},function(){},function(e){a=e.T},function(e){s=e.C},function(e){o=e.B}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,i,a){var s=arguments.length,o=s<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,a);else for(var p=e.length-1;p>=0;p--)if(n=e[p])o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o;return s>3&&o&&Object.defineProperty(t,i,o),o};var p=e("psk_input",function(){function e(e){var i=this;t(this,e);this.__keyUpHandler=function(e){e.stopImmediatePropagation();var t=e.target.value;i.modelHandler.updateModel("value",t)};this.type="text";this.label=null;this.value=null;this.name=null;this.placeholder=null;this.required=false;this.readOnly=false;this.invalidValue=null;this.dataDateFormat=null;this.specificProps={}}e.prototype.render=function(){var e=this.invalidValue===null?"":this.invalidValue?"is-invalid":"is-valid";var t=this.name?this.name:this.label&&this.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return i("div",{class:"form-group"},this.label&&i("psk-label",{for:t,label:this.label}),i("input",Object.assign({type:this.type,value:this.value,"data-date":this.dataDate,name:t,"data-date-format":this.dataDateFormat,class:"form-control "+e+" "+(this.dateClass?this.dateClass:null),placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,onKeyUp:this.__keyUpHandler.bind(this)},this.specificProps)))};return e}());n([s(),o()],p.prototype,"modelHandler",void 0);n([a({description:["Specifies the type psk-input to display.",'The full list of type and explanations can be found at: <a href="https://www.w3schools.com/html/html_form_input_types.asp">HTML Input Types</a>'],isMandatory:false,propertyType:"string",defaultValue:"text",specialNote:'If no value is provided, "text" is assumed'})],p.prototype,"type",void 0);n([a({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],p.prototype,"label",void 0);n([a({description:["Specifies the value of an psk-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],p.prototype,"value",void 0);n([a({description:["Specifies the name of a psk-input component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],p.prototype,"name",void 0);n([a({description:["Specifies a short hint that describes the expected value of an psk-input component"],isMandatory:false,propertyType:"string"})],p.prototype,"placeholder",void 0);n([a({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean"})],p.prototype,"required",void 0);n([a({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean"})],p.prototype,"readOnly",void 0);n([a({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],p.prototype,"invalidValue",void 0);n([a({isMandatory:false,description:"",propertyType:"string"})],p.prototype,"dataDateFormat",void 0)}}}));